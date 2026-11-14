/**
 * Gera uma folha de prova "às cegas" para revisão: alternativas embaralhadas, sem gabarito e sem
 * explicações. Quem revisa resolve tudo do zero e depois compara com o gabarito.
 * Uso: npm run blind-review -- <pasta-de-saida>
 *   → prova.txt (para resolver) e gabarito.json (para conferir depois)
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { MODULES } from "../content/index.ts";

const outDir = process.argv[2] ?? "blind-review-out";
mkdirSync(outDir, { recursive: true });
const plain = (s: string) => s.replace(/\{([^{}|]+)\|[^{}]+\}/g, "$1").replace(/\*\*/g, "");

// Embaralhamento determinístico (semente fixa) para a folha ser reproduzível.
let seed = 20261114;
const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2 ** 31) / 2 ** 31);
const perm4 = () => {
  const a = [0, 1, 2, 3];
  for (let i = 3; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const lines: string[] = [];
const key: Record<string, number> = {};

for (const mod of MODULES) {
  lines.push(`##### ${mod.id} — もんだい1`);
  for (const q of mod.mondai1) {
    const p = perm4();
    lines.push(`\n[${q.id}] ${q.context ? plain(q.context) + " " : ""}${plain(q.prompt)}`);
    p.forEach((orig, i) => lines.push(`  ${i + 1}. ${plain(q.options[orig])}`));
    key[q.id] = p.indexOf(q.answer) + 1;
  }
  lines.push(`\n##### もんだい2 (escolha a peça que vai no ★)`);
  for (const q of mod.mondai2) {
    const p = perm4();
    const slots = [1, 2, 3, 4].map((s) => (s === q.star ? "__★__" : "_____")).join(" ");
    lines.push(`\n[${q.id}] ${plain(q.before)} ${slots} ${plain(q.after)}`);
    p.forEach((orig, i) => lines.push(`  ${i + 1}. ${plain(q.pieces[orig])}`));
    key[q.id] = p.indexOf(q.order[q.star - 1]) + 1;
  }
  lines.push(`\n##### もんだい3`);
  for (const ps of mod.mondai3) {
    lines.push(`\n[${ps.id}] ${plain(ps.intro)}\n  「${plain(ps.title)}」 ${ps.author}`);
    ps.paragraphs.forEach((t) => lines.push(`  ${plain(t)}`));
    for (const b of ps.blanks) {
      const p = perm4();
      lines.push(`  (${b.number})`);
      p.forEach((orig, i) => lines.push(`    ${i + 1}. ${plain(b.options[orig])}`));
      key[`${ps.id}#${b.number}`] = p.indexOf(b.answer) + 1;
    }
  }
}

writeFileSync(path.join(outDir, "prova.txt"), lines.join("\n"), "utf8");
writeFileSync(path.join(outDir, "gabarito.json"), JSON.stringify(key, null, 2), "utf8");
console.log(`Folha às cegas gerada em ${outDir}/ (${Object.keys(key).length} itens).`);
