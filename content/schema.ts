/**
 * Esquema de todo o conteúdo do app.
 *
 * Convenções de texto (valem para qualquer campo de texto em japonês ou português):
 * - Furigana: {漢字|かんじ}  → renderizado como <ruby>. Ex.: {日本語|にほんご}
 *   Use um bloco por palavra/kanji com leitura; okurigana fica fora: {食|た}べる
 * - Negrito: **texto**
 * - Parágrafos: separe com uma linha em branco ("\n\n"). Quebra simples: "\n".
 * - Lacuna das questões: （　　）  (parênteses japoneses com dois espaços ideográficos)
 */

export type Level = "N5" | "N4" | "N3" | "N2" | "N1";

export interface Source {
  label: string;
  url?: string;
  note?: string;
}

export interface Example {
  ja: string;
  pt: string;
}

/** Regra gramatical. É mostrada junto da explicação de toda questão que a cita. */
export interface GrammarPoint {
  id: string;
  level: Level;
  /** Forma japonesa como aparece em listas, ex.: "～ように（目的）" */
  title: string;
  /** Resumo curto do significado em português */
  meaning: string;
  /** Como conectar/conjugar. Uma linha por regra. */
  formation: string[];
  /** Explicação da regra (pode ter vários parágrafos) */
  rule: string;
  /** Restrições, armadilhas e nuances que costumam cair na prova */
  notes?: string[];
  /** Comparação com pontos parecidos */
  contrasts?: { with: string; text: string }[];
  examples: Example[];
  /** Observação sobre o nível (listas não oficiais divergem) */
  levelNote?: string;
  sources: Source[];
}

/** Registro das checagens feitas em cada questão. */
export interface Review {
  status: "revisada" | "rascunho";
  /** O que foi checado e em quais fontes. */
  checks: string[];
}

export interface Explanation {
  /** A pista na frase que decide a resposta */
  clue: string;
  /** Por que a alternativa correta está certa */
  correct: string;
  /** Uma explicação por alternativa, na mesma ordem das opções (問題1 e 問題3) */
  options?: string[];
  /** Passo a passo de montagem (問題2) */
  steps?: string[];
  /** O que levar para questões parecidas */
  takeaway: string;
}

interface QuestionBase {
  id: string;
  level: Level;
  /** ids de GrammarPoint */
  grammarPoints: string[];
  /** Tradução da frase completa, já com a resposta certa */
  translation: string;
  explanation: Explanation;
  review: Review;
}

export type Four = readonly [string, string, string, string];
export type AnswerIndex = 0 | 1 | 2 | 3;

/** もんだい1 — 文の文法1（文法形式の判断）: escolher a forma que entra em （　　） */
export interface Mondai1Question extends QuestionBase {
  type: "mondai1";
  /** Situação, ex.: "（会社で）" */
  context?: string;
  /** Frase com a lacuna （　　）. Diálogos: uma fala por linha. */
  prompt: string;
  options: Four;
  answer: AnswerIndex;
}

/** もんだい2 — 文の文法2（文の組み立て）: ordenar 4 pedaços e marcar o que vai no ★ */
export interface Mondai2Question extends QuestionBase {
  type: "mondai2";
  context?: string;
  /** Texto antes das 4 lacunas (pode ter várias linhas; as lacunas ficam no fim da última) */
  before: string;
  /** Texto depois das 4 lacunas */
  after: string;
  pieces: Four;
  /** Ordem correta, em índices de `pieces` */
  order: readonly [number, number, number, number];
  /** Posição do ★ (1 a 4) */
  star: 1 | 2 | 3 | 4;
  /**
   * Outras ordens gramaticais possíveis que foram consideradas na revisão.
   * Todas precisam colocar o MESMO pedaço no ★ (o validador confere).
   */
  otherValidOrders?: readonly (readonly [number, number, number, number])[];
}

/** Uma lacuna de もんだい3 */
export interface Mondai3Blank {
  /** Número da lacuna como aparece no texto: [[1]], [[2]]... */
  number: number;
  grammarPoints: string[];
  options: Four;
  answer: AnswerIndex;
  explanation: Explanation;
}

/** もんだい3 — 文章の文法: texto com lacunas numeradas */
export interface Mondai3Passage {
  id: string;
  type: "mondai3";
  level: Level;
  /** Ex.: "下の 文章は、留学生の 作文です。" */
  intro: string;
  title: string;
  author: string;
  /** Parágrafos do texto. Lacunas marcadas como [[1]], [[2]]... */
  paragraphs: string[];
  /** Tradução do texto completo */
  translation: string;
  blanks: Mondai3Blank[];
  review: Review;
}

export type Question = Mondai1Question | Mondai2Question;

/** Um módulo de estudo (ex.: Gramática do N4). Novos módulos entram no registro em content/index.ts */
export interface GrammarModule {
  id: string;
  exam: "JLPT";
  level: Level;
  title: string;
  description: string;
  /** Formato oficial atual da seção, usado no modo "simulado" */
  examFormat: { mondai1: number; mondai2: number; mondai3Passages: number };
  points: GrammarPoint[];
  mondai1: Mondai1Question[];
  mondai2: Mondai2Question[];
  mondai3: Mondai3Passage[];
}
