import type { GrammarModule } from "./schema.ts";
import { mondai1A } from "./jlpt/n4/grammar/mondai1-a.ts";
import { mondai1B } from "./jlpt/n4/grammar/mondai1-b.ts";
import { mondai2 } from "./jlpt/n4/grammar/mondai2.ts";
import { mondai3 } from "./jlpt/n4/grammar/mondai3.ts";
import { points } from "./jlpt/n4/grammar/points.ts";

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
    points,
    mondai1: [...mondai1A, ...mondai1B],
    mondai2,
    mondai3,
  },
];
