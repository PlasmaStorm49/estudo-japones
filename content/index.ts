import type { GrammarModule, GrammarPoint } from "./schema.ts";
import { TAE_KIM } from "./taekim.ts";
import { mondai1A } from "./jlpt/n4/grammar/mondai1-a.ts";
import { mondai1B } from "./jlpt/n4/grammar/mondai1-b.ts";
import { mondai1C } from "./jlpt/n4/grammar/mondai1-c.ts";
import { mondai1D } from "./jlpt/n4/grammar/mondai1-d.ts";
import { mondai2 } from "./jlpt/n4/grammar/mondai2.ts";
import { mondai2B } from "./jlpt/n4/grammar/mondai2-b.ts";
import { mondai2C } from "./jlpt/n4/grammar/mondai2-c.ts";
import { mondai3 } from "./jlpt/n4/grammar/mondai3.ts";
import { mondai3B } from "./jlpt/n4/grammar/mondai3-b.ts";
import { mondai3C } from "./jlpt/n4/grammar/mondai3-c.ts";
import { points } from "./jlpt/n4/grammar/points.ts";
import { points2 } from "./jlpt/n4/grammar/points-2.ts";
import { points3 } from "./jlpt/n4/grammar/points-3.ts";
import { mondai1N5A } from "./jlpt/n5/grammar/mondai1-a.ts";
import { mondai1N5B } from "./jlpt/n5/grammar/mondai1-b.ts";
import { mondai2N5 } from "./jlpt/n5/grammar/mondai2.ts";
import { mondai3N5 } from "./jlpt/n5/grammar/mondai3.ts";
import { pointsN5 } from "./jlpt/n5/grammar/points.ts";

/** Acrescenta às fontes de cada regra as seções do Tae Kim que tratam dela (ver content/taekim.ts). */
function withTaeKim(list: GrammarPoint[]): GrammarPoint[] {
  return list.map((p) => (TAE_KIM[p.id] ? { ...p, sources: [...p.sources, ...TAE_KIM[p.id]] } : p));
}

/**
 * Registro de módulos. Para adicionar conteúdo novo (ex.: N3, vocabulário), crie a pasta
 * correspondente em content/ e registre o módulo aqui. Ver content/README.md.
 */
export const MODULES: GrammarModule[] = [
  {
    id: "jlpt-n4-grammar",
    exam: "JLPT",
    level: "N4",
    title: "Gramática (simulado)",
    description:
      "Questões de gramática no formato da prova: escolha a forma certa (もんだい1), monte a frase e marque o ★ (もんだい2) e complete o texto (もんだい3).",
    // Formato oficial a partir de dez/2020: 13 + 4 + 4 (um texto com 4 lacunas). Fonte: jlpt.jp.
    examFormat: { mondai1: 13, mondai2: 4, mondai3Passages: 1 },
    points: withTaeKim([...points, ...points2, ...points3]),
    mondai1: [...mondai1A, ...mondai1B, ...mondai1C, ...mondai1D],
    mondai2: [...mondai2, ...mondai2B, ...mondai2C],
    mondai3: [...mondai3, ...mondai3B, ...mondai3C],
  },
  {
    id: "jlpt-n5-grammar",
    exam: "JLPT",
    level: "N5",
    title: "Gramática (simulado)",
    description:
      "Questões de gramática do N5 no formato da prova: escolha a forma certa (もんだい1), monte a frase e marque o ★ (もんだい2) e complete o texto (もんだい3).",
    // Formato oficial a partir de dez/2020: 9 + 4 + 4 (um texto com 4 lacunas). Fonte: jlpt.jp.
    examFormat: { mondai1: 9, mondai2: 4, mondai3Passages: 1 },
    points: withTaeKim(pointsN5),
    mondai1: [...mondai1N5A, ...mondai1N5B],
    mondai2: mondai2N5,
    mondai3: mondai3N5,
  },
];
