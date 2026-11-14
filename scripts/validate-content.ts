/**
 * Validação estrutural de todo o conteúdo.  Uso: npm run validate
 * Falha (exit 1) em qualquer erro; avisos não bloqueiam.
 */
import { MODULES } from "../content/index.ts";
import type { Explanation, GrammarModule } from "../content/schema.ts";

const errors: string[] = [];
const warnings: string[] = [];
const err = (where: string, msg: string) => errors.push(`✗ ${where}: ${msg}`);
const warn = (where: string, msg: string) => warnings.push(`! ${where}: ${msg}`);

const KANJI = /[一-鿿々]/;
const KANA_READING = /^[ぁ-ゖーー]+$/; // hiragana + ー

/** Confere a marcação {漢字|かな}: chaves balanceadas, leitura só em hiragana, base com kanji, nenhum kanji sem furigana. */
function checkMarkup(where: string, text: string, requireFurigana: boolean) {
  const opens = (text.match(/\{/g) ?? []).length;
  const closes = (text.match(/\}/g) ?? []).length;
  if (opens !== closes) err(where, `chaves desbalanceadas em: ${text}`);
  for (const m of text.matchAll(/\{([^{}]*)\}/g)) {
    const inner = m[1];
    const parts = inner.split("|");
    if (parts.length !== 2) {
      err(where, `ruby malformado {${inner}}`);
      continue;
    }
    const [base, reading] = parts;
    if (!KANJI.test(base)) warn(where, `ruby sem kanji na base: {${inner}}`);
    if (!KANA_READING.test(reading)) err(where, `leitura deve ser só hiragana: {${inner}}`);
  }
  if (requireFurigana) {
    const outside = text.replace(/\{[^{}]*\}/g, "");
    const loose = [...outside].filter((c) => KANJI.test(c));
    if (loose.length) err(where, `kanji sem furigana: ${[...new Set(loose)].join("")} — em: ${text}`);
  }
}

function checkExplanation(where: string, e: Explanation, needsOptions: boolean, needsSteps: boolean) {
  for (const [k, v] of Object.entries({ clue: e.clue, correct: e.correct, takeaway: e.takeaway })) {
    if (!v || v.trim().length < 15) err(where, `explicação “${k}” vazia ou curta demais`);
    else checkMarkup(`${where}.${k}`, v, false);
  }
  if (needsOptions) {
    if (!e.options || e.options.length !== 4) err(where, "explicação precisa de 4 itens em `options` (um por alternativa)");
    else e.options.forEach((o, i) => (o.trim().length < 8 ? err(where, `explicação da alternativa ${i + 1} curta demais`) : checkMarkup(`${where}.options[${i}]`, o, false)));
  }
  if (needsSteps && (!e.steps || e.steps.length < 2)) err(where, "もんだい2 precisa de `steps` (passo a passo)");
}

function isPerm(arr: readonly number[]) {
  return arr.length === 4 && [...arr].sort().join() === "0,1,2,3";
}

function validateModule(mod: GrammarModule) {
  const ids = new Set<string>();
  const addId = (id: string) => (ids.has(id) ? err(id, "id duplicado") : ids.add(id));
  const pointIds = new Set(mod.points.map((p) => p.id));
  const usedPoints = new Set<string>();
  const usePoints = (where: string, gps: string[]) => {
    if (!gps.length) err(where, "nenhum ponto gramatical associado");
    for (const g of gps) {
      if (!pointIds.has(g)) err(where, `ponto gramatical inexistente: ${g}`);
      usedPoints.add(g);
    }
  };

  // Regras
  for (const p of mod.points) {
    if (ids.has(`point:${p.id}`)) err(p.id, "ponto duplicado");
    ids.add(`point:${p.id}`);
    if (!p.formation.length) err(p.id, "sem formação");
    if (p.examples.length < 1) err(p.id, "sem exemplos");
    if (p.sources.length < 2) warn(p.id, "menos de duas fontes");
    checkMarkup(`${p.id}.title`, p.title, true);
    p.examples.forEach((e, i) => checkMarkup(`${p.id}.examples[${i}]`, e.ja, true));
    [...p.formation, p.rule, ...(p.notes ?? []), ...(p.contrasts ?? []).map((c) => `${c.with} ${c.text}`)].forEach((t) => checkMarkup(p.id, t, false));
  }

  // もんだい1
  for (const q of mod.mondai1) {
    addId(q.id);
    usePoints(q.id, q.grammarPoints);
    const blanks = (q.prompt.match(/（　　）/g) ?? []).length;
    if (blanks !== 1) err(q.id, `o enunciado precisa ter exatamente uma lacuna （　　）, tem ${blanks}`);
    checkMarkup(`${q.id}.prompt`, q.prompt, true);
    if (q.context) checkMarkup(`${q.id}.context`, q.context, true);
    if (new Set(q.options).size !== 4) err(q.id, "alternativas repetidas");
    q.options.forEach((o, i) => checkMarkup(`${q.id}.options[${i}]`, o, true));
    if (![0, 1, 2, 3].includes(q.answer)) err(q.id, "answer fora de 0–3");
    checkExplanation(q.id, q.explanation, true, false);
    if (!q.translation) err(q.id, "sem tradução");
  }

  // もんだい2
  for (const q of mod.mondai2) {
    addId(q.id);
    usePoints(q.id, q.grammarPoints);
    if (new Set(q.pieces).size !== 4) err(q.id, "peças repetidas");
    if (!isPerm(q.order)) err(q.id, "order não é uma permutação de 0–3");
    if (![1, 2, 3, 4].includes(q.star)) err(q.id, "star fora de 1–4");
    const starPiece = q.order[q.star - 1];
    for (const alt of q.otherValidOrders ?? []) {
      if (!isPerm(alt)) err(q.id, `otherValidOrders inválida: ${alt.join()}`);
      else if (alt[q.star - 1] !== starPiece)
        err(q.id, `ordem alternativa ${alt.join()} põe outra peça no ★ (${q.pieces[alt[q.star - 1]]} em vez de ${q.pieces[starPiece]}) — a questão teria duas respostas`);
    }
    [q.before, q.after, ...q.pieces].forEach((t) => checkMarkup(q.id, t, true));
    checkExplanation(q.id, q.explanation, false, true);
    if (!q.translation) err(q.id, "sem tradução");
  }

  // もんだい3
  for (const p of mod.mondai3) {
    addId(p.id);
    const inText = p.paragraphs.flatMap((t) => [...t.matchAll(/\[\[(\d+)\]\]/g)].map((m) => Number(m[1])));
    const declared = p.blanks.map((b) => b.number);
    if (inText.join() !== declared.join()) err(p.id, `lacunas no texto (${inText.join()}) ≠ lacunas declaradas (${declared.join()})`);
    [p.intro, p.title, ...p.paragraphs].forEach((t) => checkMarkup(p.id, t, true));
    for (const b of p.blanks) {
      const where = `${p.id}#${b.number}`;
      addId(where);
      usePoints(where, b.grammarPoints);
      if (new Set(b.options).size !== 4) err(where, "alternativas repetidas");
      b.options.forEach((o) => checkMarkup(where, o, true));
      checkExplanation(where, b.explanation, true, false);
    }
    if (!p.translation) err(p.id, "sem tradução");
  }

  for (const id of pointIds) if (!usedPoints.has(id)) warn(id, "ponto gramatical não usado por nenhuma questão");

  const f = mod.examFormat;
  if (mod.mondai1.length < f.mondai1) err(mod.id, `poucas questões de もんだい1 para um simulado (${mod.mondai1.length} < ${f.mondai1})`);
  if (mod.mondai2.length < f.mondai2) err(mod.id, `poucas questões de もんだい2 para um simulado (${mod.mondai2.length} < ${f.mondai2})`);
  if (mod.mondai3.length < f.mondai3Passages) err(mod.id, "poucos textos de もんだい3 para um simulado");

  const drafts = [...mod.mondai1, ...mod.mondai2, ...mod.mondai3].filter((q) => q.review.status !== "revisada").length;
  console.log(
    `${mod.id}: ${mod.points.length} regras, ${mod.mondai1.length} もんだい1, ${mod.mondai2.length} もんだい2, ${mod.mondai3.length} textos de もんだい3` +
      ` (${mod.mondai3.reduce((n, p) => n + p.blanks.length, 0)} lacunas). Ainda em rascunho: ${drafts}.`,
  );
}

for (const m of MODULES) validateModule(m);
for (const w of warnings) console.log(w);
for (const e of errors) console.log(e);
console.log(errors.length ? `\n${errors.length} erro(s).` : `\nOK — nenhum erro (${warnings.length} aviso(s)).`);
process.exit(errors.length ? 1 : 0);
