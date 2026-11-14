/**
 * Confere as leituras de furigana com um analisador morfológico (kuromoji + dicionário IPADIC).
 * Uso: npm run check-readings
 *
 * Para cada texto com {漢字|かな}, o texto sem marcação é analisado, e a leitura de cada trecho com
 * kanji é comparada com a leitura escrita no furigana. Divergências NÃO são necessariamente erros
 * (números, palavras com mais de uma leitura etc.): o relatório lista cada uma para revisão humana,
 * e as já conferidas ficam em scripts/readings-reviewed.json.
 */
import kuromoji from "kuromoji";
import { createRequire } from "node:module";
import { readFileSync, existsSync, writeFileSync } from "node:fs";
import path from "node:path";
import { MODULES } from "../content/index.ts";

const require = createRequire(import.meta.url);
const dicPath = path.join(path.dirname(require.resolve("kuromoji/package.json")), "dict");
const reviewedPath = path.join(import.meta.dirname, "readings-reviewed.json");
const reviewed: Record<string, string> = existsSync(reviewedPath) ? JSON.parse(readFileSync(reviewedPath, "utf8")) : {};

const KANJI = /[一-鿿々]/;
const toHira = (s: string) => s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));

interface Span { start: number; end: number; reading: string }

/** Remove a marcação e devolve o texto puro + os trechos com furigana (posições no texto puro). */
function parse(text: string): { plain: string; spans: Span[] } {
  let plain = "";
  const spans: Span[] = [];
  const re = /\{([^{}|]+)\|([^{}]+)\}|\*\*/g;
  let last = 0;
  for (const m of text.matchAll(re)) {
    plain += text.slice(last, m.index);
    if (m[1] !== undefined) {
      spans.push({ start: plain.length, end: plain.length + m[1].length, reading: m[2] });
      plain += m[1];
    }
    last = m.index! + m[0].length;
  }
  plain += text.slice(last);
  return { plain, spans };
}

function collectTexts(): { where: string; text: string }[] {
  const out: { where: string; text: string }[] = [];
  const add = (where: string, text: string | undefined) => text && text.includes("{") && out.push({ where, text });
  for (const mod of MODULES) {
    for (const p of mod.points) {
      add(`${p.id}.title`, p.title);
      p.formation.forEach((t, i) => add(`${p.id}.formation[${i}]`, t));
      add(`${p.id}.rule`, p.rule);
      (p.notes ?? []).forEach((t, i) => add(`${p.id}.notes[${i}]`, t));
      (p.contrasts ?? []).forEach((c, i) => (add(`${p.id}.contrasts[${i}].with`, c.with), add(`${p.id}.contrasts[${i}]`, c.text)));
      p.examples.forEach((e, i) => add(`${p.id}.examples[${i}]`, e.ja));
    }
    const addExp = (where: string, e: { clue: string; correct: string; takeaway: string; options?: string[]; steps?: string[] }) => {
      add(`${where}.clue`, e.clue);
      add(`${where}.correct`, e.correct);
      add(`${where}.takeaway`, e.takeaway);
      (e.options ?? []).forEach((t, i) => add(`${where}.exp.options[${i}]`, t));
      (e.steps ?? []).forEach((t, i) => add(`${where}.steps[${i}]`, t));
    };
    for (const q of mod.mondai1) {
      add(`${q.id}.context`, q.context);
      add(`${q.id}.prompt`, q.prompt);
      q.options.forEach((t, i) => add(`${q.id}.options[${i}]`, t));
      addExp(q.id, q.explanation);
    }
    for (const q of mod.mondai2) {
      add(`${q.id}.before`, q.before);
      add(`${q.id}.after`, q.after);
      q.pieces.forEach((t, i) => add(`${q.id}.pieces[${i}]`, t));
      addExp(q.id, q.explanation);
    }
    for (const p of mod.mondai3) {
      add(`${p.id}.intro`, p.intro);
      add(`${p.id}.title`, p.title);
      p.paragraphs.forEach((t, i) => add(`${p.id}.p[${i}]`, t));
      p.blanks.forEach((b) => {
        b.options.forEach((t, i) => add(`${p.id}#${b.number}.options[${i}]`, t));
        addExp(`${p.id}#${b.number}`, b.explanation);
      });
    }
  }
  return out;
}

kuromoji.builder({ dicPath }).build((e: Error | null, tokenizer: any) => {
  if (e) throw e;
  const texts = collectTexts();
  const issues = new Map<string, { expected: string; analyzer: string; where: string[] }>();
  const pending: Record<string, string> = {};
  let checked = 0;

  for (const { where, text } of texts) {
    const { plain, spans } = parse(text);
    const tokens: { start: number; end: number; reading: string }[] = [];
    let pos = 0;
    for (const t of tokenizer.tokenize(plain)) {
      const s = t.surface_form as string;
      const reading = KANJI.test(s) && t.reading && t.reading !== "*" ? toHira(t.reading) : s;
      tokens.push({ start: pos, end: pos + s.length, reading });
      pos += s.length;
    }
    // Agrupa tokens em segmentos cujas bordas não cortam nenhum trecho com furigana.
    let i = 0;
    while (i < tokens.length) {
      let j = i;
      let segEnd = tokens[i].end;
      const touching = () => spans.filter((sp) => sp.start < segEnd && sp.end > tokens[i].start);
      let grow = true;
      while (grow) {
        grow = false;
        for (const sp of touching()) {
          while (sp.end > segEnd && j + 1 < tokens.length) {
            j++;
            segEnd = tokens[j].end;
            grow = true;
          }
        }
      }
      const segStart = tokens[i].start;
      const segSpans = spans.filter((sp) => sp.start >= segStart && sp.end <= segEnd);
      if (segSpans.length) {
        checked++;
        let expected = "";
        let k = segStart;
        for (const sp of segSpans) {
          expected += plain.slice(k, sp.start) + sp.reading;
          k = sp.end;
        }
        expected += plain.slice(k, segEnd);
        const analyzer = tokens.slice(i, j + 1).map((t) => t.reading).join("");
        const surface = plain.slice(segStart, segEnd);
        if (toHira(expected) !== toHira(analyzer)) {
          const key = `${surface}=${expected}`;
          // A revisão vale por local: o mesmo kanji pode ter outra leitura em outro texto.
          const localKey = `${where}|${key}|${plain.slice(Math.max(0, segStart - 4), segEnd + 4)}`;
          if (!reviewed[localKey]) {
            pending[localKey] = `${expected} (analisador: ${analyzer})`;
            const cur = issues.get(key) ?? { expected, analyzer, where: [] };
            cur.where.push(where);
            issues.set(key, cur);
          }
        }
      }
      i = j + 1;
    }
  }

  console.log(`Trechos com furigana conferidos: ${checked} (em ${texts.length} textos).`);
  if (!issues.size) {
    console.log("OK — todas as leituras batem com o analisador (ou já foram revisadas).");
    return;
  }
  console.log(`\n${issues.size} divergência(s) para revisão humana (texto | furigana | analisador | onde):`);
  for (const [key, v] of issues) {
    console.log(`- ${key.split("=")[0]} | ${v.expected} | ${v.analyzer} | ${v.where.slice(0, 3).join(", ")}${v.where.length > 3 ? ` (+${v.where.length - 3})` : ""}`);
  }
  // Só use --aceitar DEPOIS de conferir cada item da lista acima à mão.
  if (process.argv.includes("--aceitar")) {
    const merged = { ...reviewed, ...Object.fromEntries(Object.entries(pending).map(([k, v]) => [k, `conferido à mão: ${v}`])) };
    writeFileSync(reviewedPath, JSON.stringify(merged, null, 2) + "\n", "utf8");
    console.log(`\n${Object.keys(pending).length} ocorrência(s) gravadas como revisadas em ${reviewedPath}.`);
    return;
  }
  process.exitCode = 1;
});
