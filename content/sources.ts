import type { Source } from "./schema.ts";

/** Fontes consultadas na pesquisa. Ver docs/pesquisa.md para o registro completo. */

export const JLPT_OFFICIAL_2018: Source = {
  label: "JLPT oficial — caderno de exemplo N4 (gramática), Japan Foundation/JEES",
  url: "https://www.jlpt.jp/samples/sample2018/pdf/N4G.pdf",
};
export const JLPT_OFFICIAL_2012: Source = {
  label: "JLPT oficial — Official Practice Workbook N4 (gramática), Japan Foundation/JEES",
  url: "https://www.jlpt.jp/samples/sample2012/pdf/N4G.pdf",
};
export const JLPT_FORMAT_2020: Source = {
  label: "JLPT oficial — número de questões do N4 a partir de dez/2020",
  url: "https://jlpt.jp/e/topics/202009091599642827.html",
};
export const JLPTSENSEI_LIST: Source = {
  label: "JLPT Sensei — lista de gramática N4",
  url: "https://jlptsensei.com/jlpt-n4-grammar-list/",
};
export const JT4Y_LIST: Source = {
  label: "Japanesetest4you — lista de gramática N4",
  url: "https://japanesetest4you.com/jlpt-n4-grammar-list/",
};
export const BUNPRO_LIST: Source = {
  label: "Bunpro — biblioteca de gramática (classificação por nível)",
  url: "https://bunpro.jp/grammar_points",
};

/** Página de gramática do JLPT Sensei (slug como aparece na URL). */
export function js(slug: string, label: string): Source {
  return { label: `JLPT Sensei — ${label}`, url: `https://jlptsensei.com/learn-japanese-grammar/${slug}/` };
}

/** Página de explicação do Langoal (professores de japonês, texto em japonês). */
export function lg(slug: string, label: string): Source {
  return { label: `Langoal (em japonês) — ${label}`, url: `https://langoal.com/jlpt/explain-grammar-${slug}.html` };
}

/** Página de um ponto do Bunpro (o slug é o próprio ponto em japonês). */
export function bp(slug: string, label: string): Source {
  return { label: `Bunpro — ${label}`, url: `https://bunpro.jp/grammar_points/${slug}` };
}

/** Página do 日本語教師ネット (nihongokyoshi-net, texto em japonês). */
export function nk(path: string, label: string): Source {
  return { label: `日本語教師ネット (em japonês) — ${label}`, url: `https://nihongokyoshi-net.com/${path}/` };
}
