import type {
  Explanation,
  GrammarModule,
  Mondai1Question,
  Mondai2Question,
  Mondai3Blank,
  Mondai3Passage,
} from "../../content/schema.ts";

/** Um item respondível do simulado, independentemente do tipo de questão. */
export type SessionItem =
  | { kind: "mondai1"; id: string; q: Mondai1Question }
  | { kind: "mondai2"; id: string; q: Mondai2Question }
  | { kind: "mondai3"; id: string; passage: Mondai3Passage; blank: Mondai3Blank };

export function itemOptions(item: SessionItem): readonly string[] {
  switch (item.kind) {
    case "mondai1":
      return item.q.options;
    case "mondai2":
      return item.q.pieces;
    case "mondai3":
      return item.blank.options;
  }
}

export function itemAnswer(item: SessionItem): number {
  switch (item.kind) {
    case "mondai1":
      return item.q.answer;
    case "mondai2":
      return item.q.order[item.q.star - 1];
    case "mondai3":
      return item.blank.answer;
  }
}

export function itemExplanation(item: SessionItem): Explanation {
  return item.kind === "mondai3" ? item.blank.explanation : item.q.explanation;
}

export function itemGrammarPoints(item: SessionItem): string[] {
  return item.kind === "mondai3" ? item.blank.grammarPoints : item.q.grammarPoints;
}

export function allItems(mod: GrammarModule): SessionItem[] {
  return [
    ...mod.mondai1.map((q) => ({ kind: "mondai1" as const, id: q.id, q })),
    ...mod.mondai2.map((q) => ({ kind: "mondai2" as const, id: q.id, q })),
    ...mod.mondai3.flatMap((passage) =>
      passage.blanks.map((blank) => ({
        kind: "mondai3" as const,
        id: `${passage.id}#${blank.number}`,
        passage,
        blank,
      })),
    ),
  ];
}

/**
 * No conteúdo, a resposta pode estar sempre na mesma posição (facilita a autoria).
 * Aqui as alternativas (e as explicações de cada uma) são embaralhadas juntas a cada sessão.
 */
function permute<T>(arr: readonly T[], perm: number[]): T[] {
  return perm.map((i) => arr[i]);
}

export function shuffleOptions(item: SessionItem): SessionItem {
  const perm = shuffle([0, 1, 2, 3]);
  const at = (orig: number) => perm.indexOf(orig);
  const exp = (e: Explanation): Explanation => (e.options ? { ...e, options: permute(e.options, perm) } : e);
  switch (item.kind) {
    case "mondai1": {
      const q = item.q;
      const options = permute(q.options, perm) as unknown as Mondai1Question["options"];
      return { ...item, q: { ...q, options, answer: at(q.answer) as Mondai1Question["answer"], explanation: exp(q.explanation) } };
    }
    case "mondai2": {
      const q = item.q;
      const pieces = permute(q.pieces, perm) as unknown as Mondai2Question["pieces"];
      const order = q.order.map(at) as unknown as Mondai2Question["order"];
      return { ...item, q: { ...q, pieces, order } };
    }
    case "mondai3": {
      const b = item.blank;
      const options = permute(b.options, perm) as unknown as Mondai3Blank["options"];
      return { ...item, blank: { ...b, options, answer: at(b.answer) as Mondai3Blank["answer"], explanation: exp(b.explanation) } };
    }
  }
}

export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Simulado no formato oficial: もんだい1, depois もんだい2, depois um texto de もんだい3. */
export function buildExam(mod: GrammarModule): SessionItem[] {
  const f = mod.examFormat;
  const m1 = shuffle(mod.mondai1).slice(0, f.mondai1);
  const m2 = shuffle(mod.mondai2).slice(0, f.mondai2);
  const m3 = shuffle(mod.mondai3).slice(0, f.mondai3Passages);
  const items: SessionItem[] = [
    ...m1.map((q) => ({ kind: "mondai1" as const, id: q.id, q })),
    ...m2.map((q) => ({ kind: "mondai2" as const, id: q.id, q })),
    ...m3.flatMap((passage) =>
      passage.blanks.map((blank) => ({
        kind: "mondai3" as const,
        id: `${passage.id}#${blank.number}`,
        passage,
        blank,
      })),
    ),
  ];
  return items.map(shuffleOptions);
}

/** Treino: embaralha mantendo as lacunas de um mesmo texto juntas e em ordem. */
export function buildPractice(items: SessionItem[]): SessionItem[] {
  const groups = new Map<string, SessionItem[]>();
  for (const it of items) {
    const key = it.kind === "mondai3" ? it.passage.id : it.id;
    groups.set(key, [...(groups.get(key) ?? []), it]);
  }
  return shuffle([...groups.values()]).flat().map(shuffleOptions);
}

export const TYPE_LABEL: Record<SessionItem["kind"], string> = {
  mondai1: "もんだい1 · Forma gramatical",
  mondai2: "もんだい2 · Montar a frase (★)",
  mondai3: "もんだい3 · Gramática do texto",
};
