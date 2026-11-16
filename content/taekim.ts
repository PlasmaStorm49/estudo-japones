import type { Source } from "./schema.ts";

/**
 * Tae Kim — "A Guide to Japanese Grammar: A Japanese approach to learning Japanese grammar"
 * (PDF indicado pelo professor; licença Creative Commons BY-NC-SA). Versão online: guidetojapanese.org.
 *
 * As páginas são as do PDF (497 páginas). Só estão listados os pontos que o livro de fato trata;
 * cada seção foi conferida contra a regra do app (sem divergências encontradas — ver docs/pesquisa.md).
 */
const URL = "https://guidetojapanese.org/learn/grammar";

export function tk(section: string, pages: string, note?: string): Source {
  return {
    label: `Tae Kim — A Guide to Japanese Grammar (livro indicado pelo professor), «${section}», p. ${pages} do PDF`,
    url: URL,
    ...(note ? { note } : {}),
  };
}

/** id do ponto gramatical → seções do Tae Kim que o tratam. */
export const TAE_KIM: Record<string, Source[]> = {
  // ── N4 · lote 1 ──
  ukemi: [tk("Causative and Passive Verbs — Passive Verbs", "304–307")],
  shieki: [tk("Causative and Passive Verbs — Causative Verbs", "299–303")],
  "shieki-ukemi": [tk("Causative and Passive Verbs — Causative-Passive Forms", "308–310")],
  "you-ni-naru": [tk("Using する and なる with the に particle — Using なる and する with verbs", "185–186")],
  "koto-ni-suru": [tk("Using する and なる with the に particle — Using なる and する with verbs", "185–186")],
  "koto-ni-naru": [tk("Using する and なる with the に particle — Using なる and する with verbs", "185–186")],
  "you-ni-suru": [tk("Using する and なる with the に particle — Using なる and する with verbs", "185–186")],
  "noni-gyakusetsu": [tk("Compound Sentences — Using のに to mean “despite”", "152")],
  temo: [tk("Expressing “must” or “have to” — Saying something is ok to do or not do (ても)", "206–207", "trata de ても dentro de てもいい")],
  ba: [tk("Conditionals — General conditionals using ば", "192–193")],
  tara: [tk("Conditionals — Past conditional using たら(ば)", "194–196")],
  "to-joken": [tk("Conditionals — Expressing natural consequence using と", "188–189")],
  nara: [tk("Conditionals — Contextual conditionals using なら(ば)", "190–191")],
  "te-shimau": [tk("Things that happen unintentionally (てしまう／ちゃう)", "323–328")],
  "te-oku": [tk("Other uses of the te-form — Using ておく as preparation for the future", "169")],
  "te-aru": [tk("Other uses of the te-form — Using てある for resultant states", "167–168")],
  "jidoushi-tadoushi": [tk("Transitive and Intransitive Verbs", "86–88")],
  "te-morau": [tk("Giving and Receiving — When to use もらう", "246–248")],
  "te-kureru": [tk("Giving and Receiving — When to use くれる", "243–245")],
  "te-itadakemasen-ka": [tk("Giving and Receiving — Asking favors with くれる or もらえる", "248–249")],
  "te-hoshii": [tk("Desire and Suggestions — 欲しい (〜てほしい)", "211")],
  "te-miru": [tk("Trying or attempting something — To try something out", "236–237")],
  "sou-da-denbun": [tk("Similarity and hearsay — Expressing hearsay using そうだ", "367–368")],
  "sou-da-youtai": [tk("Similarity and hearsay — Guessing at an outcome using そう", "363–366")],
  "you-na-you-ni": [tk("Similarity and hearsay — Expressing similarity with よう", "359–360")],
  "hazu-da": [tk("Things that should be a certain way — はず", "424–426")],
  "hazu-ga-nai": [tk("Things that should be a certain way — はず (はずがない)", "426")],
  kamoshirenai: [tk("Expressing various levels of certainty — かもしれない", "335–336")],
  "ikou-to-omou": [tk("Desire and Suggestions — volitional form", "212–216"), tk("Acting on relative clauses — The interpreted quote (と思う)", "220–221")],
  "ta-bakari": [tk("Time-specific actions — Expressing what just happened with ばかり", "401–402")],
  mama: [tk("Leaving something the way it is — Using まま", "412–413")],
  nagara: [tk("Time-specific actions — Using ながら for two concurrent actions", "405–406")],
  "te-bakari": [tk("Expressing amounts — The opposite of だけ with ばかり", "347–348")],
  "shika-nai": [tk("Expressing amounts — Nothing else using しか", "344–345")],
  sugiru: [tk("Expressing amounts — すぎる", "349–351")],
  "yasui-nikui": [tk("Saying something is easy or difficult to do (やすい／にくい)", "382–385")],
  "ka-dou-ka": [tk("The Question Marker — か used in relative clauses (かどうか)", "137–138")],
  "gimonshi-ka": [tk("The Question Marker — か used in relative clauses / question words", "137–139")],
  sonkeigo: [tk("Honorific and Humble Forms", "311–322")],
  kenjougo: [tk("Honorific and Humble Forms — Humble Form", "311–322")],
  "sasete-kudasai": [tk("Causative and Passive Verbs — Causative Verbs (させてくれる)", "299–301")],
  tagaru: [tk("Desire and Suggestions — たい (só para a 1ª pessoa)", "209–210"), tk("Showing signs of something — がる", "443–445")],
  "tara-dou": [tk("Desire and Suggestions — Making suggestions using ば or たら", "217")],
  "nakute-mo-ii": [tk("Expressing “must” or “have to”", "199–206")],
  shi: [tk("Compound Sentences — Expressing multiple reasons using し", "155–156")],
  naide: [tk("More negative verbs — Doing something without doing something else (ないで／ず)", "387–389")],
  kanoukei: [tk("Potential Form", "173–180")],
  "koto-ga-dekiru": [tk("Potential Form (exemplos com ことができる)", "174–179")],
  // ── N4 · lote 2 ──
  rashii: [tk("Similarity and hearsay — Expressing hearsay or behavior using らしい", "369–370")],
  mitai: [tk("Similarity and hearsay — Using みたい", "361–362")],
  "koto-ga-aru": [tk("Special expressions with generic nouns — Using こと to say whether something has happened", "330–331")],
  "to-iu": [tk("Defining and Describing — Using いう to define", "224–227")],
  "te-kuru-iku": [tk("Other uses of the te-form — Using motion verbs (行く、来る) with the te-form", "170–171")],
  "te-ageru": [tk("Giving and Receiving — When to use あげる / Using やる", "241–242")],
  nasai: [tk("Making requests — Using なさい", "255–256")],
  "na-kinshi": [tk("Making requests — Negative Command (dicionário + な)", "259")],
  "mo-ryou": [tk("Expressing amounts — Adding も to express excessive amounts", "352")],
  "dake-de": [tk("Expressing amounts — Indicating that's all there is using だけ", "341–342")],
  "hodo-nai": [tk("Expressing amounts — Using ほど to express the extent of something", "353–355")],
  kana: [tk("Review and more sentence-ending particles (かな／かしら)", "288–291")],
  "ku-suru": [tk("Using する and なる with the に particle — nouns, na-adjectives and i-adjectives", "182–184", "trata de 〜にする／〜くなる; 〜くする segue a mesma lógica")],
  sa: [tk("Expressing amounts — Using さ with adjectives", "356")],
  gozaimasu: [tk("Honorific and Humble Forms — Set expressions (ござる)", "312–316")],
};
