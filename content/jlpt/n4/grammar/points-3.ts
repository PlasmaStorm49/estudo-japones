import type { GrammarPoint } from "../../../schema.ts";
import { bp, js, lg, nk } from "../../../sources.ts";
import { tk } from "../../../taekim.ts";

/**
 * Lote 3 (16/11/2026): pontos da lista N4 do JLPT Sensei que ainda não tinham regra própria.
 * Aqui o Tae Kim entra direto nas fontes de cada regra (não pelo mapa de content/taekim.ts).
 */
export const points3: GrammarPoint[] = [
  {
    id: "nowa-da",
    level: "N4",
    title: "～のは～だ",
    meaning: "o que ~ é ~ (põe em destaque a informação que vem depois)",
    formation: [
      "Verbo / adjetivo い (forma simples) + のは 〜だ: {難|むずか}しいのは, {住|す}んで いるのは.",
      "Adjetivo な / substantivo + な + のは: {好|す}きなのは, {大切|たいせつ}なのは, {問題|もんだい}なのは.",
      "Motivo: 〜のは 〜からだ (é porque ~).",
    ],
    rule: `Reorganiza a frase para pôr em **destaque** o que vem depois de のは: {私|わたし}は {京都|きょうと}に {住|す}んで います → {私|わたし}が {住|す}んで いるのは {京都|きょうと}です (o lugar onde moro é Kyoto — e não outro). Muito usado para dar o **motivo**: {試験|しけん}に {落|お}ちたのは、{勉強|べんきょう}しなかったからです.`,
    notes: [
      "Dentro da parte com の, o sujeito vai com が (ou の: {私|わたし}の {好|す}きなのは…), não com は: {私|わたし}**が** {住|す}んで いるのは….",
      "Para dar motivo no fim, use から: 〜のは 〜からです. ので não pode ser seguido de です (× 〜のは 〜ので です).",
    ],
    examples: [
      { ja: "この {町|まち}で いちばん {有名|ゆうめい}なのは {古|ふる}い お{寺|てら}です。", pt: "O mais famoso desta cidade é um templo antigo." },
      { ja: "{昨日|きのう} {学校|がっこう}を {休|やす}んだのは、{熱|ねつ}が あったからです。", pt: "O motivo de eu ter faltado ontem é que estava com febre." },
    ],
    sources: [
      js("のは〜だ-nowa-da-meaning", "のは〜だ"),
      nk("2018/04/10/jlptn4-grammar-nowa-desu", "〜のは〜だ（強調構文）"),
      tk("Noun-related Particles — The の particle (o の que transforma verbos e adjetivos em substantivo)", "98–101"),
    ],
  },
  {
    id: "janai-ka",
    level: "N4",
    title: "～じゃないか／～じゃないですか",
    meaning: "não é? / olha só! — confirmação ou descoberta (apesar da forma negativa, afirma)",
    formation: [
      "Substantivo / adjetivo な + じゃないか: {雨|あめ}じゃないか, きれいじゃないか.",
      "Verbo / adjetivo い (forma simples) + じゃないか: できるじゃないか, おいしいじゃないか.",
      "Educado: 〜じゃないですか. Formal ou escrito: 〜ではないか.",
    ],
    rule: `Apesar da negação, quem fala **acha que é verdade** e busca concordância ou mostra surpresa: あれ、{田中|たなか}さんじゃないか (ué, aquele não é o Tanaka? = é o Tanaka!). ほら、ちゃんと できるじゃないか = viu? você consegue, sim!`,
    notes: [
      "Não confunda com a negação comum: {学生|がくせい}じゃない = não é estudante; {学生|がくせい}じゃないか = (ué,) é estudante, não é? O contexto e a entonação decidem.",
      "Com a forma volitiva, vira convite enfático: やろうじゃないか (vamos fazer!).",
      "Com ん／の antes (〜んじゃないか／〜のではないか), costuma expressar **suposição**: {雨|あめ}が {降|ふ}るんじゃないか (acho que vai chover).",
      "Na fala casual existem também 〜じゃない？ (com entonação de pergunta) e じゃん (Tae Kim).",
    ],
    examples: [
      { ja: "あれ、この {財布|さいふ}、{田中|たなか}さんのじゃないか。", pt: "Ué, esta carteira não é do Tanaka? (= é do Tanaka!)" },
      { ja: "この ケーキ、おいしいじゃないですか。どこで {買|か}ったんですか。", pt: "Este bolo está ótimo, hein! Onde você comprou?" },
    ],
    sources: [
      js("じゃないか-janai-ka-meaning", "じゃないか"),
      js("ではないか-dewa-nai-ka-meaning", "ではないか"),
      bp("じゃないか", "じゃないか"),
      tk("Casual Patterns — Using じゃん instead of じゃない to confirm", "278–279"),
    ],
  },
  {
    id: "kai-dai",
    level: "N4",
    title: "～かい／～だい",
    meaning: "pergunta casual (fala masculina): かい = sim/não; だい = com palavra interrogativa",
    formation: [
      "Pergunta de sim ou não: forma simples + かい: {行|い}くかい, {大丈夫|だいじょうぶ}かい; muitas vezes 〜のかい.",
      "Com palavra interrogativa: 〜だい. Verbo e adjetivo い precisam de の／ん antes: どこへ {行|い}くんだい (× {行|い}くだい); com substantivo, direto: {何|なん}だい.",
    ],
    rule: `Terminações de **pergunta** casuais, típicas de fala masculina ou de adultos falando com crianças. **かい** para perguntas de **sim ou não**; **だい** para perguntas com **palavra interrogativa** (Tae Kim).`,
    notes: [
      "Com どこ／{何|なに}／だれ／いつ, use だい: どこへ {行|い}くんだい (× どこへ {行|い}くかい).",
      "São diretas e informais: não se usam com superiores (Bunpro).",
    ],
    examples: [
      { ja: "{元気|げんき}かい。", pt: "Tudo bem? (casual)" },
      { ja: "{君|きみ}は どこから {来|き}たんだい。", pt: "De onde você veio?" },
    ],
    sources: [js("かい-kai-meaning", "かい"), bp("かい", "かい"), tk("Review and more sentence-ending particles — かい and だい sentence-ending particles", "290")],
  },
  {
    id: "gari",
    level: "N4",
    title: "～がり（{屋|や}）",
    meaning: "pessoa que sente ~ com facilidade ({寒|さむ}がり = friorento)",
    formation: [
      "Adjetivo de sentimento ou sensação sem い + がり: {寒|さむ}い → {寒|さむ}がり, こわい → こわがり, はずかしい → はずかしがり, さびしい → さびしがり.",
      "Funciona como substantivo: {寒|さむ}がりだ, {寒|さむ}がりの {人|ひと}. Para falar do tipo de pessoa: 〜がり{屋|や}.",
    ],
    rule: `Descreve um **traço da pessoa**: ela sente aquilo com facilidade ou tem essa tendência. {父|ちち}は {暑|あつ}がりで、{冬|ふゆ}でも Tシャツで {過|す}ごします. Vem de がる (mostrar sinais de ~).`,
    notes: [
      "がる (verbo) descreve o que a pessoa mostra sentir agora: {寒|さむ}がって いる. がり (substantivo) é o jeito de ser: {寒|さむ}がりだ.",
      "Com たがる: {目立|めだ}ちたがり (quem gosta de aparecer).",
      "Diferente de がる, がり／がり{屋|や} serve também para falar de **si mesmo**: {私|わたし}は {寒|さむ}がり{屋|や}です (Tae Kim).",
    ],
    examples: [{ ja: "{妹|いもうと}は こわがりで、ホラー{映画|えいが}が {見|み}られません。", pt: "Minha irmã é medrosa e não consegue ver filme de terror." }],
    sources: [js("がり-gari-meaning", "がり"), bp("がる", "がる (origem de がり)"), tk("Showing signs of something — がる (〜がり屋)", "447")],
  },
  {
    id: "koro-goro",
    level: "N4",
    title: "～{頃|ころ}／～ごろ",
    meaning: "por volta de (horário) / na época em que",
    formation: [
      "Hora ou data + ごろ: {3時|さんじ}ごろ, {何時|なんじ}ごろ, {5月|ごがつ}ごろ.",
      "Época: substantivo + の + {頃|ころ} ({子|こ}どもの {頃|ころ}); adjetivo ou verbo + {頃|ころ} ({若|わか}い {頃|ころ}, {日本|にほん}に {来|き}た {頃|ころ}).",
    ],
    rule: `Com **horário ou data**, ごろ = aproximadamente: {8時|はちじ}ごろ {起|お}きます. Com **época**, {頃|ころ} = o período em que algo acontecia: {若|わか}い {頃|ころ}、よく {山|やま}に {登|のぼ}りました.`,
    notes: [
      "ごろ é só para **pontos** no tempo (× {1時間|いちじかん}ごろ). くらい／ぐらい serve para duração ({1時間|いちじかん}ぐらい) e também, na fala, para horário ({3時|さんじ}ぐらいに) (Bunpro).",
      "Com horário, aparecem 〜ごろ e 〜ごろに; na fala o に costuma cair.",
    ],
    examples: [
      { ja: "{毎朝|まいあさ} {8時|はちじ}ごろ {家|いえ}を {出|で}ます。", pt: "Saio de casa por volta das 8 todas as manhãs." },
      { ja: "{学生|がくせい}の {頃|ころ}、この {店|みせ}に よく {来|き}ました。", pt: "Na época de estudante, eu vinha muito a esta loja." },
    ],
    sources: [js("頃-ころ-ごろ-meaning", "頃（ころ／ごろ）"), bp("ごろ", "ごろ")],
  },
  {
    id: "to-iwarete-iru",
    level: "N4",
    title: "～と{言|い}われて いる／～と{聞|き}いた",
    meaning: "dizem que ~ (opinião geral) / ouvi dizer que ~",
    formation: [
      "Forma simples + と{言|い}われて いる: {体|からだ}に いいと {言|い}われて いる.",
      "Substantivo / adjetivo な: normalmente + だ + と: {安全|あんぜん}だと {言|い}われて いる.",
      "Forma simples + と{聞|き}いた／{聞|き}きました: {来月|らいげつ} {結婚|けっこん}すると {聞|き}きました.",
    ],
    rule: `**と{言|い}われて いる** (passiva de {言|い}う + ている) apresenta o que **as pessoas em geral** dizem ou acreditam: {日本|にほん}は {安全|あんぜん}な {国|くに}だと {言|い}われて います. Comum em textos e explicações. **と{聞|き}いた** cita o que **eu** ouvi de alguém.`,
    notes: [
      "Dentro de と vai a forma simples (não ます／です).",
      "Parecidos: 〜そうだ (ouvi dizer) e 〜らしい. と{言|い}われて いる destaca que é uma opinião **geral**, não de uma pessoa só.",
    ],
    examples: [
      { ja: "{朝|あさ}ご{飯|はん}を {食|た}べないと、{頭|あたま}が よく {働|はたら}かないと {言|い}われて います。", pt: "Dizem que, sem tomar café da manhã, a cabeça não funciona bem." },
      { ja: "{駅|えき}の {前|まえ}に {新|あたら}しい スーパーが できると {聞|き}きました。", pt: "Ouvi dizer que vai abrir um supermercado novo em frente à estação." },
    ],
    sources: [
      js("と言われている-to-iwarete-iru-meaning", "と言われている"),
      js("と聞いた-ときいた-to-kiita-meaning", "と聞いた"),
      bp("といわれている", "と言われている"),
      tk("Acting on relative clauses — The direct quote / The interpreted quote", "219–221"),
    ],
  },
  {
    id: "tte",
    level: "N4",
    title: "～って（＝という／と{言|い}って いた）",
    meaning: "coloquial: “chamado ~” (= という) e “disse que ~ / dizem que ~” (citação)",
    formation: [
      "Nome + って + substantivo (= という): 「さくら」って {店|みせ}, たこ{焼|や}きって いう {食|た}べ{物|もの}.",
      "Forma simples + って no fim (citação): {田中|たなか}さん、{来|こ}ないって.",
    ],
    rule: `Versão **falada** de と／という. (1) **Nome** de algo pouco conhecido: これは じゃんけんって いう ゲームだよ. (2) **Citação** no fim da frase, deixando o verbo subentendido: {明日|あした}は {雨|あめ}だって (dizem / disseram que amanhã chove).`,
    notes: [
      "Na escrita e na fala formal, use という／と {言|い}って いました.",
      "Na citação, substantivo e adjetivo な normalmente levam だ: {休|やす}みだって.",
      "Na fala, って também marca o **tópico** (= は): {日本|にほん}の {夏|なつ}って {暑|あつ}いね.",
    ],
    examples: [
      { ja: "{山田|やまだ}さんって {人|ひと}から {電話|でんわ}が あったよ。", pt: "Ligou uma pessoa chamada Yamada." },
      { ja: "{鈴木|すずき}さん、{会議|かいぎ}に {遅|おく}れるって。", pt: "O Suzuki disse que vai chegar atrasado à reunião." },
    ],
    sources: [
      js("って-tte-meaning", "って"),
      nk("2018/07/12/jlptn4-grammar-tte", "〜って（名前）"),
      tk("Acting on relative clauses — Using って as a casual version of と", "222–223"),
      tk("Defining and Describing — Using って for という", "231"),
    ],
  },
  {
    id: "toka",
    level: "N4",
    title: "～とか～とか",
    meaning: "~, ~ e coisas assim (exemplos, tom coloquial)",
    formation: [
      "Substantivo + とか + substantivo (+ とか): りんごとか バナナとか.",
      "Também com verbos e adjetivos (diferente de や): {寝|ね}るとか {休|やす}むとか.",
    ],
    rule: `Dá **exemplos**, como や, mas é mais **coloquial** e também lista **verbos** e frases: {夏休|なつやす}みは、{海|うみ}で {泳|およ}ぐとか、キャンプを するとか したいです.`,
    notes: [
      "や liga só substantivos; とか liga substantivos, adjetivos e verbos (Bunpro).",
      "とか pode vir depois do último item (りんごとか バナナとかを {買|か}った); や não (× りんごや バナナやを).",
    ],
    examples: [{ ja: "{日本|にほん}の {料理|りょうり}では、すしとか てんぷらとかが {好|す}きです。", pt: "Da comida japonesa, gosto de coisas como sushi e tempurá." }],
    sources: [js("とか～とか-toka-toka-meaning", "とか～とか"), bp("とか-とか", "とか〜とか"), tk("Noun-related Particles — The vague listing や and とか", "97")],
  },
  {
    id: "yotei-da",
    level: "N4",
    title: "～{予定|よてい}だ",
    meaning: "está programado / está marcado que ~ (agenda já decidida)",
    formation: [
      "Verbo (dicionário) + {予定|よてい}だ: {帰|かえ}る {予定|よてい}です.",
      "Substantivo + の + {予定|よてい}だ: {会議|かいぎ}の {予定|よてい}です.",
    ],
    rule: `Fala de uma **programação já decidida**, muitas vezes combinada com outras pessoas ou fora do controle de quem fala: {新|あたら}しい {駅|えき}は {来年|らいねん}の {春|はる}に できる {予定|よてい}です. Por isso serve também para trens, aviões e eventos.`,
    notes: [
      "Diferença (Langoal): 〜(よ)うと {思|おも}って います = estou pensando; 〜つもりです = já decidi; 〜{予定|よてい}です = está marcado (envolve outros).",
    ],
    contrasts: [
      { with: "つもりだ", text: "intenção de uma pessoa (quem fala ou outra)." },
      { with: "（よ）うと{思|おも}う", text: "ideia ainda em consideração." },
    ],
    examples: [{ ja: "{来週|らいしゅう}の {金曜日|きんようび}に {会議|かいぎ}が ある {予定|よてい}です。", pt: "Está marcada uma reunião para a próxima sexta." }],
    sources: [
      js("予定だ-yotei-da-meaning", "予定だ"),
      lg("yoteidesu", "〜予定です"),
      lg("tsumoridesu", "〜つもりです（comparação com 予定です）"),
      nk("2019/12/30/jlptn4-grammar-yoteida", "〜予定だ"),
    ],
  },
  {
    id: "zurai",
    level: "N4",
    title: "～づらい",
    meaning: "difícil (penoso) de ~ — por desconforto físico ou emocional de quem faz",
    formation: ["Verbo (radical da forma ます) + づらい: {読|よ}みづらい, {言|い}いづらい. Conjuga como adjetivo い."],
    rule: `Como にくい, significa “difícil de ~”, mas destaca que fazer aquilo é **penoso ou desconfortável** para quem faz (vem de {辛|つら}い, “doloroso”): {靴|くつ}が {小|ちい}さくて {歩|ある}きづらい; {先生|せんせい}には {言|い}いづらい.`,
    notes: [
      "にくい é mais neutro. Para coisas que não “sentem” nada (この ガラスは {割|わ}れにくい = difícil de quebrar), o padrão é にくい.",
      "Bunpro: づらい = peso físico ou emocional para quem faz; にくい = dificuldade por outros fatores.",
    ],
    examples: [{ ja: "この {字|じ}は {小|ちい}さくて {読|よ}みづらいです。", pt: "Esta letra é pequena e difícil de ler." }],
    sources: [js("づらい-zurai-meaning", "づらい"), bp("づらい", "づらい"), tk("Easy or difficult to do — Variations of にくい with がたい and づらい", "384–385")],
  },
  {
    id: "te-ita",
    level: "N4",
    title: "～て いた",
    meaning: "estava fazendo ~ (ação em andamento no passado) / estado no passado",
    formation: ["Forma て + いた／いました: {寝|ね}て いた, {勉強|べんきょう}して いました. Coloquial: 〜てた."],
    rule: `É o passado de 〜て いる. (1) Ação **em andamento** num momento do passado: {友|とも}だちが {来|き}た とき、{料理|りょうり}を {作|つく}って いました. (2) **Estado** no passado: {家|いえ}に {帰|かえ}ったら、{電気|でんき}が ついて いた. (3) **Hábito** do passado: {学生|がくせい}の とき、{毎朝|まいあさ} {走|はし}って いました.`,
    notes: [
      "〜た = ação concluída; 〜て いた = o que estava acontecendo (o “pano de fundo”). {音楽|おんがく}を {聞|き}いて いたので、{電話|でんわ}の {音|おと}が {聞|き}こえなかった.",
    ],
    examples: [{ ja: "{昨日|きのう}の {夜|よる} {9時|くじ}ごろ、{何|なに}を して いましたか。", pt: "O que você estava fazendo ontem por volta das 9 da noite?" }],
    sources: [
      js("ていた-te-ita-meaning", "ていた"),
      bp("ていた", "ていた"),
      tk("Other uses of the te-form — Using ている for enduring states", "160–166"),
    ],
  },
  {
    id: "tara-ii-desu-ka",
    level: "N4",
    title: "～たら いいですか",
    meaning: "o que devo fazer? / como devo ~? (pedir orientação)",
    formation: ["(Palavra interrogativa +) verbo (た) + ら + いいですか: どう したら いいですか, どこで {降|お}りたら いいですか; sem interrogativo, pergunta de sim ou não: この ボタンを {押|お}したら いいですか."],
    rule: `Quem **pede** conselho ou instrução usa 〜たら いいですか: {切符|きっぷ}を なくしたんですが、どう したら いいですか. Não confunda com 〜たら どうですか, que é de quem **dá** o conselho (日本語教師ネット).`,
    notes: [
      "Mesmo sentido com ば: どう すれば いいですか.",
      "Resposta típica: 〜たら いいですよ／〜て ください.",
    ],
    contrasts: [{ with: "～たら どうですか", text: "quem aconselha (“que tal ~?”)." }],
    examples: [{ ja: "{東京駅|とうきょうえき}へ {行|い}きたいんですが、どの {電車|でんしゃ}に {乗|の}ったら いいですか。", pt: "Quero ir à estação de Tóquio. Que trem devo pegar?" }],
    sources: [
      js("たらいいですか-tara-ii-desu-ka-meaning", "たらいいですか"),
      nk("2018/06/26/jlptn4-grammar-taraiidesuka", "Vたらいいですか"),
      tk("Desire and Suggestions — Making suggestions using ば or たら", "217"),
    ],
  },
  {
    id: "to-omou",
    level: "N4",
    title: "～と{思|おも}う",
    meaning: "acho que ~ (opinião ou suposição)",
    formation: [
      "Forma simples + と{思|おも}う: {明日|あした}は {晴|は}れると {思|おも}います; {高|たか}いと {思|おも}う.",
      "Substantivo / adjetivo な + だ + と{思|おも}う: {静|しず}かだと {思|おも}います.",
    ],
    rule: `Expressa **opinião** ou **suposição** de quem fala. Dentro de と vai sempre a forma **simples**: × {晴|は}れますと {思|おも}います. Com substantivo e adjetivo な, o normal é manter o だ: {静|しず}かだと {思|おも}います.`,
    notes: [
      "Opinião de **outra pessoa**: 〜と {思|おも}って いる ({田中|たなか}さんは {日本|にほん}が いちばんだと {思|おも}って います).",
      "Para “acho que não”, o mais comum é negar dentro da citação: {田中|たなか}さんは {来|こ}ないと {思|おも}います.",
    ],
    examples: [{ ja: "この {映画|えいが}は きっと おもしろいと {思|おも}います。", pt: "Acho que este filme vai ser interessante, com certeza." }],
    levelNote: "Langoal ensina no N5; o JLPT Sensei lista no N4.",
    sources: [js("と思う-to-omou-meaning", "と思う"), lg("toomou", "〜と思う（N5）"), tk("Acting on relative clauses — The interpreted quote (と思う)", "220–221")],
  },
];
