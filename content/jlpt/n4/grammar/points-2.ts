import type { GrammarPoint, Source } from "../../../schema.ts";
import { BUNPRO_LIST, JT4Y_LIST, bp, js, lg, nk } from "../../../sources.ts";

/** Lote 2 de regras do N4 (15/11/2026). Cada regra conferida em pelo menos duas fontes. */

const JF_KOTO: Source = {
  label: "Fundação Japão — 日本語教育通信 「こと」(1) (の × こと)",
  url: "https://www.jpf.go.jp/j/project/japanese/teach/tsushin/grammar/201112.html",
};

export const points2: GrammarPoint[] = [
  // ───────────────────────── Dedução e aparência ─────────────────────────
  {
    id: "rashii",
    level: "N4",
    title: "～らしい（{推量|すいりょう}）",
    meaning: "parece que / pelo que se diz (dedução a partir do que se viu ou ouviu)",
    formation: [
      "Verbo / adjetivo い (forma simples) + らしい: {降|ふ}った らしい, {高|たか}い らしい.",
      "Adjetivo な / substantivo **sem だ** + らしい: {静|しず}からしい, {大阪|おおさか}の {人|ひと}らしい.",
    ],
    rule: `O falante conclui algo **com base em informações** que viu ou ouviu, sem certeza total: {道|みち}が ぬれて いる。{夜|よる} {雨|あめ}が {降|ふ}った らしい. Também serve para repassar algo ouvido de forma vaga (“pelo que dizem”).

Liga-se **direto** ao substantivo: {学生|がくせい}らしい (e não “{学生|がくせい}の らしい” nem “{学生|がくせい}だ らしい”).`,
    notes: [
      "Compare a ligação com substantivo — é o que mais cai: {学生|がくせい}らしい, {学生|がくせい}みたい, {学生|がくせい}の よう, {学生|がくせい}の はず, {学生|がくせい}だ そう.",
      "Existe também o らしい de “típico de”: {男|おとこ}らしい (másculo), {子|こ}どもらしい (bem de criança). O contexto separa os dois.",
    ],
    contrasts: [
      { with: "ようだ／みたいだ", text: "dedução pelos próprios sentidos; みたい é a versão coloquial." },
      { with: "そうだ（{伝聞|でんぶん}）", text: "repassa informação ouvida, com fonte (〜に よると)." },
    ],
    examples: [
      { ja: "{電気|でんき}が {消|き}えて いる。{田中|たなか}さんは もう {帰|かえ}った らしい。", pt: "A luz está apagada. Parece que o Tanaka já foi embora." },
      { ja: "あの {店|みせ}は {週末|しゅうまつ} とても {混|こ}む らしいです。", pt: "Pelo que dizem, aquela loja fica muito cheia no fim de semana." },
    ],
    sources: [js("らしい-rashii-meaning", "らしい"), nk("2020/01/04/jlptn4-grammar-rashii2", "〜らしい（推量）"), BUNPRO_LIST],
  },
  {
    id: "mitai",
    level: "N4",
    title: "～みたいだ／～みたいな／～みたいに",
    meaning: "parece / como (versão coloquial de ようだ)",
    formation: [
      "Verbo / adjetivo い (forma simples) + みたいだ.",
      "Adjetivo な / substantivo **sem の e sem だ** + みたいだ: {夢|ゆめ}みたいだ, {静|しず}かみたいだ.",
      "Conjuga como adjetivo な: **みたいな** + substantivo; **みたいに** + verbo/adjetivo.",
    ],
    rule: `Tem os mesmos usos de ようだ, mas em tom de conversa: (1) **dedução** pelo que se percebe — {誰|だれ}か {来|き}た みたいだ; (2) **comparação** — {夢|ゆめ}みたいな {話|はなし} (uma história de sonho), {子|こ}どもみたいに {泣|な}く; (3) **exemplo** (“tipo”) — ラーメンみたいな {温|あたた}かい {料理|りょうり}が {食|た}べたい (uma comida quente, tipo lámen).`,
    notes: [
      "A diferença de forma com ようだ é o que a prova cobra: {夢|ゆめ}**の** ような × {夢|ゆめ}みたいな (sem の).",
      "Antes de substantivo, な; antes de verbo ou adjetivo, に.",
    ],
    contrasts: [{ with: "ようだ／ような／ように", text: "mesmo sentido, mais formal; com substantivo exige の." }],
    examples: [
      { ja: "{宝|たから}くじが {当|あ}たるなんて、{夢|ゆめ}みたいだ。", pt: "Ganhar na loteria… parece um sonho." },
      { ja: "{弟|おとうと}は {子|こ}どもみたいに {怒|おこ}った。", pt: "Meu irmão ficou bravo feito criança." },
    ],
    sources: [nk("2020/07/22/jlptn4-grammar-mitaida", "〜みたいだ（ようだよりカジュアル）"), nk("2020/07/22/jlptn4-grammar-mitaina", "〜みたいな"), js("みたいな-mitai-na-meaning", "みたいな")],
  },
  {
    id: "ni-mieru",
    level: "N4",
    title: "～に／～く {見|み}える",
    meaning: "parecer, dar a impressão de (pela aparência)",
    formation: [
      "Adjetivo い: 〜く + {見|み}える: {若|わか}く {見|み}える.",
      "Adjetivo な / substantivo: 〜に + {見|み}える: {元気|げんき}に {見|み}える, {学生|がくせい}に {見|み}える.",
    ],
    rule: `Descreve a **impressão visual** que alguém ou algo passa: {田中|たなか}さんは 40{歳|さい}ですが、{若|わか}く {見|み}えます (parece jovem). É a mesma ligação de なる: {若|わか}く なる, {学生|がくせい}に なる.`,
    notes: ["Não confunda {見|み}える (parecer / ser visível) com {見|み}る (olhar) e {見|み}せる (mostrar)."],
    contrasts: [{ with: "そうに {見|み}える", text: "{元気|げんき}そうに {見|み}える também existe (parece estar bem); a base é a mesma ideia de aparência." }],
    examples: [
      { ja: "この {部屋|へや}は {窓|まど}が {大|おお}きいので、{広|ひろ}く {見|み}えます。", pt: "Este quarto parece amplo porque as janelas são grandes." },
      { ja: "{兄|あに}は スーツを {着|き}ると、{先生|せんせい}に {見|み}えます。", pt: "Quando veste terno, meu irmão parece professor." },
    ],
    sources: [js("にみえる-に見える-ni-mieru-meaning", "に見える"), bp("にみえる", "にみえる")],
  },
  {
    id: "ga-suru",
    level: "N4",
    title: "～がする（{音|おと}・におい・{味|あじ}・{感|かん}じ）",
    meaning: "sentir (um som, cheiro, gosto, sensação)",
    formation: ["{音|おと}／{声|こえ}／におい／{味|あじ}／{感|かん}じ ＋ が ＋ する."],
    rule: `Para dizer que se **percebe** um som, um cheiro, um gosto ou uma sensação, o japonês usa する com が: {変|へん}な {音|おと}が します (ouço um barulho estranho), いい においが します (está cheirando bem).`,
    notes: [
      "A partícula é が (não を): × においを します.",
      "Com {音|おと} também se usa {聞|き}こえる ({音|おと}が {聞|き}こえる); {聞|き}く pede を ({音|おと}を {聞|き}く).",
    ],
    examples: [
      { ja: "この スープは しょうがの {味|あじ}が します。", pt: "Esta sopa tem gosto de gengibre." },
      { ja: "{誰|だれ}かに {見|み}られて いる {感|かん}じが する。", pt: "Tenho a sensação de que alguém está me olhando." },
    ],
    sources: [js("がする-ga-suru-meaning", "がする"), nk("2018/04/12/jlptn4-grammar-gasuru", "〜がする（音・声・味・匂い・感じ）")],
  },

  // ───────────────────────── こと e の ─────────────────────────
  {
    id: "koto-ga-aru",
    level: "N4",
    title: "～ことが ある（ときどき）",
    meaning: "às vezes ~ / há vezes em que ~",
    formation: ["Verbo (dicionário ou ない) + ことが ある: {遅|おく}れる ことが ある, {食|た}べない ことが ある."],
    rule: `Indica algo que **não é sempre**, mas acontece de vez em quando: {普段|ふだん}は {電車|でんしゃ}ですが、{雨|あめ}の {日|ひ}は タクシーで {行|い}く ことが あります. Com も (ことも ある), soa como “também acontece de ~”.`,
    notes: [
      "Forma de **dicionário** + ことが ある = às vezes (frequência). Forma **た** + ことが ある = já fiz alguma vez (experiência, N5): {行|い}った ことが ある.",
      "Pistas típicas: {普段|ふだん}は／いつもは〜が, {時々|ときどき}, たまに.",
    ],
    contrasts: [{ with: "たことが ある", text: "experiência (“já fiz”), não frequência." }],
    examples: [
      { ja: "{忙|いそが}しい ときは、{昼|ひる}ご{飯|はん}を {食|た}べない ことが あります。", pt: "Quando estou ocupado, às vezes não almoço." },
      { ja: "この {道|みち}は {夜|よる}に なると {暗|くら}いので、{迷|まよ}う ことも あります。", pt: "Esta rua fica escura à noite, então às vezes a gente até se perde." },
    ],
    levelNote: "日本語教師ネット e jlptsensei: N4; o Bunpro classifica ことがある (“às vezes”) como N3.",
    sources: [js("ことがある-koto-ga-aru-meaning", "ことがある"), nk("2019/05/09/jlptn4-grammar-kotogaaru", "〜ことがある（いつもではないが時々）")],
  },
  {
    id: "koto-ga-dekiru",
    level: "N4",
    title: "～ことが できる",
    meaning: "poder / conseguir ~ (capacidade ou possibilidade)",
    formation: ["Verbo (dicionário) + ことが できる: {泳|およ}ぐ ことが できる. Também: substantivo + が できる ({日本語|にほんご}が できる)."],
    rule: `Expressa capacidade ou possibilidade, como a forma potencial, num tom um pouco mais formal: {彼|かれ}は 2キロ {泳|およ}ぐ ことが できます ≈ {泳|およ}げます. Aqui só cabe **こと** (não の) — regra citada pela Fundação Japão.`,
    notes: ["× {泳|およ}ぐ のが できる (na norma, só こと). Em contraste, の é obrigatório com verbos de percepção (ver “の／こと”)."],
    contrasts: [{ with: "{可能形|かのうけい}", text: "{泳|およ}げる = {泳|およ}ぐ ことが できる; a forma potencial é mais comum na conversa." }],
    examples: [
      { ja: "この カードが あれば、{電車|でんしゃ}にも バスにも {乗|の}る ことが できます。", pt: "Com este cartão, dá para andar de trem e de ônibus." },
      { ja: "{祖母|そぼ}は {英語|えいご}を {話|はな}す ことが できません。", pt: "Minha avó não sabe falar inglês." },
    ],
    sources: [js("ことができる-koto-ga-dekiru-ことができますか-meaning", "ことができる"), lg("dekimasu", "〜ができます／〜ことができます"), JF_KOTO],
  },
  {
    id: "no-koto",
    level: "N4",
    title: "{名詞化|めいしか}の「の」と「こと」",
    meaning: "transformar uma oração em substantivo: quando usar の e quando usar こと",
    formation: ["Oração (forma simples; adjetivo な / substantivo com な) + の／こと: {歌|うた}って いる の, {泳|およ}ぐ こと."],
    rule: `As duas transformam uma oração em substantivo, e muitas vezes são intercambiáveis ({泳|およ}ぐ のが {好|す}き ≈ {泳|およ}ぐ ことが {好|す}き). Mas a prova cobra os casos em que **só uma** serve (Fundação Japão, 日本語教育通信):

**Só の**: com verbos de percepção **direta** — quando se vê ou se ouve a cena acontecendo ({見|み}る, {見|み}える, {聞|き}く, {聞|き}こえる, {感|かん}じる) — e com {待|ま}つ, {手伝|てつだ}う, {止|と}める: {子|こ}どもが {歌|うた}って いる のが {聞|き}こえる. Quando {聞|き}く significa “ficar sabendo”, usa-se こと: {田中|たなか}さんが {結婚|けっこん}した ことを {聞|き}きました.

**Só こと**: antes de です／だ ({趣味|しゅみ}は {写真|しゃしん}を {撮|と}る ことです), em 〜ことが できる, 〜ことに する／なる, 〜ことが ある.`,
    notes: ["Por quê: こと é o “fato” abstrato; o que se vê e se ouve é a cena concreta, por isso の."],
    examples: [
      { ja: "{誰|だれ}かが ドアを たたく のが {聞|き}こえました。", pt: "Ouvi alguém batendo na porta." },
      { ja: "{私|わたし}の {夢|ゆめ}は {日本|にほん}で {働|はたら}く ことです。", pt: "Meu sonho é trabalhar no Japão." },
    ],
    sources: [JF_KOTO, BUNPRO_LIST],
  },
  {
    id: "to-iu",
    level: "N4",
    title: "～という（{名前|なまえ}）",
    meaning: "chamado ~ / que se chama ~",
    formation: ["Nome + という + substantivo: 「さくら」という {歌|うた}. Coloquial: 〜って いう."],
    rule: `Apresenta o **nome** de algo ou alguém que o ouvinte provavelmente não conhece: {昨日|きのう}、「さくら」という {店|みせ}に {行|い}きました (uma loja chamada “Sakura”).`,
    notes: ["Usado para coisas que o ouvinte talvez não conheça (日本語教師ネット). Para algo famoso que todos conhecem, não precisa."],
    examples: [
      { ja: "{山田|やまだ}さんという {人|ひと}から {電話|でんわ}が ありました。", pt: "Teve uma ligação de uma pessoa chamada Yamada." },
      { ja: "これは「すきやき」という {料理|りょうり}です。", pt: "Este é um prato chamado sukiyaki." },
    ],
    levelNote: "日本語教師ネット e jlptsensei: N4; o Bunpro classifica という (“chamado”) como N3.",
    sources: [js("という-to-iu-meaning", "という"), nk("2020/01/02/jlptn4-grammar-toiu", "〜という（聞き手が知らない名前）")],
  },

  // ───────────────────────── てくる／ていく, verbos compostos ─────────────────────────
  {
    id: "te-kuru-iku",
    level: "N4",
    title: "～てくる／～ていく",
    meaning: "ir e voltar / mudança que vem até agora (てくる) ou que segue a partir de agora (ていく)",
    formation: ["Verbo (て) + くる／いく."],
    rule: `Dois usos principais no N4:

**1. Movimento**: 〜て くる = ir fazer algo e **voltar** (ちょっと コンビニに {行|い}って きます — volto já) ou vir **em direção a quem fala** ({持|も}って くる = trazer, {走|はし}って きた = veio correndo); 〜て いく = fazer algo e **ir embora** / levar ({傘|かさ}を {持|も}って いく).

**2. Mudança no tempo**: 〜て くる = mudança que vem do passado **até agora** ({最近|さいきん} {暖|あたた}かく なって きた) ou o **início** de um processo ({雨|あめ}が {降|ふ}って きた = começou a chover); 〜て いく = mudança que segue **daqui para a frente** (これから {寒|さむ}く なって いく). Imagem do 日本語教師ネット: 「〜てくる → agora → 〜ていく」.`,
    notes: [
      "Pistas: {最近|さいきん} (até agora) → てきた; これから (daqui para a frente) → ていく. だんだん combina com os dois. No passado narrativo, 〜て いった conta uma mudança que avançou a partir de um momento passado (その{後|あと} {寒|さむ}く なって いった).",
      "{行|い}って きます é a frase de quem sai de casa e vai voltar.",
    ],
    examples: [
      { ja: "{雨|あめ}が {降|ふ}って きました。", pt: "Começou a chover (a chuva veio chegando)." },
      { ja: "これからも {日本語|にほんご}の {勉強|べんきょう}を {続|つづ}けて いきます。", pt: "Daqui para a frente, vou continuar estudando japonês." },
    ],
    sources: [
      js("てくる-te-kuru-てきます-te-kimasu-meaning", "てくる"),
      js("ていく-te-iku-ていった-te-itta-meaning", "ていく"),
      nk("2018/09/18/jlptn4-grammar-tekuru", "〜てくる（用事を済ませて戻る）"),
      nk("2018/09/26/jlptn4-grammar-tekuru-change", "〜てくる（変化・移動）"),
      nk("2020/01/06/jlptn4-grammar-teiku", "〜ていく（変化・移動）"),
    ],
  },
  {
    id: "fukugou-doushi",
    level: "N4",
    title: "～{出|だ}す／～{始|はじ}める／～{終|お}わる／～{続|つづ}ける",
    meaning: "começar de repente / começar / terminar / continuar a ~",
    formation: ["Verbo (radical da forma ます) + {出|だ}す／{始|はじ}める／{終|お}わる／{続|つづ}ける: {泣|な}き{出|だ}す, {読|よ}み{始|はじ}める, {食|た}べ{終|お}わる, {歩|ある}き{続|つづ}ける."],
    rule: `Verbos que se juntam ao radical para indicar a **fase** da ação. {出|だ}す é o começo **súbito ou inesperado**, descrito de fora (com {急|きゅう}に, {突然|とつぜん}) — por isso não entra em frases de vontade, pedido ou convite: {急|きゅう}に {雨|あめ}が {降|ふ}り{出|だ}した; {犬|いぬ}が {急|きゅう}に {走|はし}り{出|だ}した. {始|はじ}める é o começo neutro, inclusive planejado: {来月|らいげつ}から ピアノを {習|なら}い{始|はじ}めます.`,
    notes: [
      "〜{出|だ}す não serve para começo planejado nem para pedidos/convites: × {一緒|いっしょ}に {読|よ}み{出|だ}しましょう → {読|よ}み{始|はじ}めましょう.",
      "{終|お}わる e {続|つづ}ける se ligam do mesmo jeito: この {本|ほん}は もう {読|よ}み{終|お}わった.",
    ],
    examples: [
      { ja: "{犬|いぬ}が {急|きゅう}に {走|はし}り{出|だ}しました。", pt: "O cachorro saiu correndo de repente." },
      { ja: "{3時間|さんじかん} {歩|ある}き{続|つづ}けて、{足|あし}が {痛|いた}く なった。", pt: "Andei três horas sem parar e meus pés começaram a doer." },
    ],
    sources: [
      js("出す-dasu-meaning", "出す"),
      nk("2019/05/01/jlptn4-grammar-dasu", "〜出す（突然・急に・いきなり）"),
      nk("2019/03/25/jlptn4-grammar-hajimeru", "〜始める"),
      nk("2018/07/10/jlptn4-grammar-tsudukeru", "〜続ける"),
    ],
  },

  // ───────────────────────── Dar e receber, sentimentos ─────────────────────────
  {
    id: "te-ageru",
    level: "N4",
    title: "～てあげる／～てやる",
    meaning: "fazer algo por outra pessoa (o favor sai de mim ou do meu lado)",
    formation: [
      "[quem faz]が + Verbo (て) + あげる. Quem recebe leva a partícula que o **próprio verbo** pede: {妹|いもうと}に {英語|えいご}を {教|おし}えて あげる; {友|とも}だちを {駅|えき}まで {送|おく}って あげる; {友|とも}だちの {引|ひ}っ{越|こ}しを {手伝|てつだ}って あげる.",
      "Para inferiores, animais e plantas: てやる. Para superiores: てさしあげる (mas é melhor evitar dizer isso na cara da pessoa).",
    ],
    rule: `O sujeito faz um favor **para outra pessoa**: {妹|いもうと}に {宿題|しゅくだい}を {教|おし}えて あげました. O favor nunca chega ao falante por あげる — para isso, くれる.`,
    notes: ["Dizer 〜て あげましょうか a um superior pode soar arrogante (“vou te fazer o favor”); prefira お〜しましょうか."],
    contrasts: [
      { with: "てくれる", text: "alguém faz algo **para mim**." },
      { with: "てもらう", text: "**eu** recebo o favor de alguém (に)." },
    ],
    examples: [
      { ja: "{友|とも}だちの {誕生日|たんじょうび}に ケーキを {作|つく}って あげました。", pt: "Fiz um bolo para o aniversário do meu amigo." },
      { ja: "{弟|おとうと}の {宿題|しゅくだい}を {見|み}て やった。", pt: "Dei uma olhada na lição de casa do meu irmão mais novo." },
    ],
    sources: [js("てあげる-te-ageru-てあげます-te-agemasu-meaning", "てあげる"), js("てやる-te-yaru-meaning", "てやる"), BUNPRO_LIST],
  },
  {
    id: "te-yokatta",
    level: "N4",
    title: "～てよかった",
    meaning: "que bom que ~ / ainda bem que ~",
    formation: ["Verbo / adjetivo (て) + よかった: {会|あ}えて よかった; negativo: 〜なくて よかった."],
    rule: `Expressa **alívio ou alegria** por algo que aconteceu: {試験|しけん}に {合格|ごうかく}できて よかったです (que bom que passei).`,
    notes: ["〜ばよかった é o contrário: arrependimento por algo que **não** aconteceu."],
    examples: [
      { ja: "{傘|かさ}を {持|も}って きて よかった。", pt: "Ainda bem que trouxe guarda-chuva." },
      { ja: "{大|おお}きな けがじゃ なくて よかったですね。", pt: "Que bom que não foi um ferimento grave." },
    ],
    sources: [js("てよかった-te-yokatta-meaning", "てよかった"), bp("てよかった", "てよかった")],
  },
  {
    id: "te-sumimasen",
    level: "N4",
    title: "～てすみません／～てくれて ありがとう",
    meaning: "desculpe por ~ / obrigado por ~",
    formation: ["Verbo (て) + すみません／ごめんなさい: {遅|おく}れて すみません.", "Verbo (て) + くれて ありがとう: {手伝|てつだ}って くれて ありがとう."],
    rule: `A forma て indica o **motivo** do pedido de desculpas ou do agradecimento: {遅|おく}れて すみません (desculpe pelo atraso). Para agradecer o que **o outro** fez, use てくれて: {来|き}て くれて ありがとう.`,
    notes: ["Negativo: {連絡|れんらく}しなくて すみません (desculpe por não avisar)."],
    examples: [
      { ja: "{返事|へんじ}が {遅|おそ}く なって すみません。", pt: "Desculpe pela demora em responder." },
      { ja: "{駅|えき}まで {送|おく}って くれて ありがとう。", pt: "Obrigado por me levar até a estação." },
    ],
    sources: [js("てすみません-te-sumimasen-meaning", "てすみません"), bp("てすみません", "てすみません")],
  },

  // ───────────────────────── Ordens e proibição ─────────────────────────
  {
    id: "nasai",
    level: "N4",
    title: "～なさい",
    meaning: "faça ~ (ordem de pais, professores, instruções de prova)",
    formation: ["Verbo (radical da forma ます) + なさい: {食|た}べなさい, {早|はや}く {寝|ね}なさい, しなさい."],
    rule: `Ordem de quem tem **autoridade** sobre o ouvinte (pais → filhos, professor → alunos) ou instrução escrita: {正|ただ}しい ものを {選|えら}びなさい.`,
    notes: [
      "Não se usa com superiores nem com desconhecidos.",
      "Só existe na afirmativa (× {食|た}べないなさい); para proibir, use 〜ないで ou a forma な (Tae Kim, p. 255).",
      "Não confunda com なさる (verbo de respeito: “fazer”).",
    ],
    examples: [
      { ja: "もう {9時|くじ}ですよ。{早|はや}く {寝|ね}なさい。", pt: "Já são nove horas. Vá dormir." },
      { ja: "{手|て}を {洗|あら}って から {食|た}べなさい。", pt: "Lave as mãos antes de comer." },
    ],
    sources: [js("なさい-nasai-meaning", "なさい"), nk("2020/01/02/jlptn4-grammar-nasai", "〜なさい（命令・指示）")],
  },
  {
    id: "na-kinshi",
    level: "N4",
    title: "～な（{禁止形|きんしけい}）",
    meaning: "não ~! (proibição forte)",
    formation: ["Verbo (forma de **dicionário**) + な: {入|はい}るな, {吸|す}うな, {見|み}るな."],
    rule: `Proibição **direta e forte**, usada em placas, por homens em situações tensas, ou para torcer/gritar: ここに {車|くるま}を {止|と}めるな (não estacione aqui!). Na conversa educada, usa-se 〜ないで ください.`,
    notes: ["A forma é a de dicionário, não a negativa: × {吸|す}わないな.", "Não confunda com o な do fim de frase que expressa sentimento ({暑|あつ}いな).", "O oposto (ordem forte) é o imperativo: {行|い}け, {食|た}べろ."],
    examples: [
      { ja: "{危|あぶ}ないから、さわるな！", pt: "É perigoso, não toque!" },
      { ja: "あきらめるな！", pt: "Não desista!" },
    ],
    sources: [js("な-na-meaning-order-dont-do", "な (proibição)"), lg("prohibition-form", "禁止形（辞書形＋な）")],
  },

  // ───────────────────────── Quantidade e frequência ─────────────────────────
  {
    id: "okini",
    level: "N4",
    title: "～おきに",
    meaning: "a cada ~ / em intervalos de ~",
    formation: ["Número + contador + おきに: 15{分|ふん}おきに, 1{日|にち}おきに, 2メートルおきに."],
    rule: `Indica **repetição em intervalos**: この バスは 15{分|ふん}おきに {来|き}ます (a cada 15 minutos).`,
    notes: [
      "Armadilha: com dias, semanas e anos, おき “pula” uma unidade: 1{日|にち}おき = **dia sim, dia não** (a cada dois dias). Já 1{日|にち}ごと／{毎日|まいにち} = todo dia.",
      "Com minutos e metros, 〜おき costuma equivaler a 〜ごと (a cada).",
    ],
    contrasts: [{ with: "ごとに", text: "“cada”, sem pular: 1{日|にち}ごとに = todo dia." }],
    examples: [
      { ja: "この {薬|くすり}は 6{時間|じかん}おきに {飲|の}んで ください。", pt: "Tome este remédio a cada seis horas." },
      { ja: "{母|はは}は 1{日|にち}おきに ジムに {行|い}って います。", pt: "Minha mãe vai à academia dia sim, dia não." },
    ],
    levelNote: "jlptsensei e japanesetest4you listam no N4; o Bunpro classifica como N3.",
    sources: [js("おきに-oki-ni-meaning", "おきに"), JT4Y_LIST, bp("おきに", "おきに (nível N3 no Bunpro)")],
  },
  {
    id: "mo-ryou",
    level: "N4",
    title: "{数量|すうりょう}＋も",
    meaning: "nada menos que ~ / ~ inteiros (ênfase em quantidade grande)",
    formation: ["Número + contador + も: 3{時間|じかん}も, 5{杯|はい}も, 2リットルも."],
    rule: `Destaca que a quantidade é **grande**, com surpresa: {水|みず}を 2リットルも {飲|の}みました (bebi dois litros inteiros!). No caderno oficial de exemplo do N4 aparece {八|やっ}つも {食|た}べました.`,
    notes: ["Com negativa, muda: 1{回|かい}も {行|い}った ことが ない = nunca fui nem uma vez.", "Para quantidade **pequena**: しか〜ない (só)."],
    contrasts: [{ with: "しか〜ない", text: "“só” (pouco), sempre com negativa." }],
    examples: [
      { ja: "{駅|えき}で 1{時間|じかん}も {待|ま}ちました。", pt: "Esperei uma hora inteira na estação." },
      { ja: "{彼|かれ}は {車|くるま}を 3{台|だい}も {持|も}って います。", pt: "Ele tem nada menos que três carros." },
    ],
    sources: [js("も-mo-meaning-as-many-as", "も (as many as)"), nk("2019/08/06/jlptn4-grammar-mo", "数量＋も（驚き）")],
  },
  {
    id: "dake-de",
    level: "N4",
    title: "～だけで",
    meaning: "só de ~ / só com ~ (basta isso para o resultado)",
    formation: ["Verbo (dicionário ou forma た) / substantivo + だけで: {聞|き}く だけで, {聞|き}いた だけで, {写真|しゃしん}だけで."],
    rule: `Diz que **apenas** aquela ação ou coisa já basta para o resultado: この アプリは {写真|しゃしん}を {撮|と}る だけで、カロリーが わかります.`,
    notes: ["Também expressa emoção: {考|かんが}える だけで {楽|たの}しい (só de pensar já fico feliz)."],
    examples: [
      { ja: "この {料理|りょうり}は {材料|ざいりょう}を {混|ま}ぜる だけで できます。", pt: "Este prato fica pronto só misturando os ingredientes." },
      { ja: "{声|こえ}を {聞|き}いた だけで、{誰|だれ}だか わかりました。", pt: "Só de ouvir a voz, soube quem era." },
    ],
    sources: [js("だけで-dake-de-meaning", "だけで"), bp("だけで", "だけで")],
  },
  {
    id: "hodo-nai",
    level: "N4",
    title: "～ほど～ない",
    meaning: "não tão ~ quanto ~",
    formation: ["A は B ほど + adjetivo/verbo negativo: {今年|ことし}の {夏|なつ}は {去年|きょねん}ほど {暑|あつ}く ない."],
    rule: `Compara dizendo que A **não chega** ao nível de B: {今年|ことし}の {夏|なつ}は {去年|きょねん}ほど {暑|あつ}く ないです (este verão não está tão quente quanto o do ano passado). A segunda parte é **sempre negativa**.`,
    notes: ["× {去年|きょねん}ほど {暑|あつ}いです. Para afirmativa comparativa: {去年|きょねん}より {暑|あつ}い."],
    contrasts: [{ with: "より", text: "“mais ~ do que” (afirmativo): {去年|きょねん}より {暑|あつ}い." }],
    examples: [
      { ja: "{日本語|にほんご}は {思|おも}った ほど {難|むずか}しく なかった。", pt: "O japonês não foi tão difícil quanto eu pensava." },
      { ja: "{私|わたし}は {兄|あに}ほど {背|せ}が {高|たか}く ありません。", pt: "Não sou tão alto quanto meu irmão." },
    ],
    sources: [nk("2019/04/18/jlptn4-grammar-hodo-nai", "〜ほど〜ない"), JT4Y_LIST],
    levelNote: "日本語教師ネット classifica como N4; o Bunpro lista como N3.",
  },

  // ───────────────────────── Necessidade, casos, dúvida ─────────────────────────
  {
    id: "hitsuyou",
    level: "N4",
    title: "～が {必要|ひつよう}だ／～{必要|ひつよう}が ある",
    meaning: "precisar de ~ / ser necessário ~",
    formation: ["Substantivo + が {必要|ひつよう}だ: パスポートが {必要|ひつよう}だ.", "Verbo (dicionário) + {必要|ひつよう}が ある: {予約|よやく}する {必要|ひつよう}が ある; negativo: {必要|ひつよう}は ない."],
    rule: `Com **substantivo**, X が {必要|ひつよう}です (precisa-se de X). Com **verbo**, V {必要|ひつよう}が あります (é preciso fazer V). Misturar as duas é erro: × パスポートが {必要|ひつよう}が あります.`,
    notes: ["{必要|ひつよう}が ない／{必要|ひつよう}は ない = não precisa (≈ なくても いい)."],
    examples: [
      { ja: "この {仕事|しごと}には {運転免許|うんてんめんきょ}が {必要|ひつよう}です。", pt: "Para este trabalho é preciso ter carteira de motorista." },
      { ja: "{明日|あした}は {早|はや}く {来|く}る {必要|ひつよう}は ありません。", pt: "Amanhã não precisa vir cedo." },
    ],
    sources: [js("が必要-ga-hitsuyou-meaning", "が必要"), js("必要がある-hitsuyou-ga-aru-meaning", "必要がある"), nk("2020/02/24/jlptn4-grammar-hitsuyougaaru", "〜必要がある")],
  },
  {
    id: "baai",
    level: "N4",
    title: "～{場合|ばあい}は",
    meaning: "em caso de ~ / se acontecer ~",
    formation: ["Verbo / adjetivo (forma simples) + {場合|ばあい}は; adjetivo な + な; substantivo + の: {火事|かじ}の {場合|ばあい}は."],
    rule: `Pega **uma situação possível** e diz o que fazer se ela acontecer — muito usado em avisos e instruções: {火事|かじ}の {場合|ばあい}は、エレベーターを {使|つか}わないで ください.`,
    notes: [
      "Parecido com とき, mas mais formal e usado para situações **possíveis** (que podem ou não acontecer), não para algo que acontece sempre.",
      "Não serve para um fato que já aconteceu (× 3{年前|ねんまえ}に {地震|じしん}が {起|お}きた {場合|ばあい}…) nem para algo impossível (× {私|わたし}が {鳥|とり}の {場合|ばあい}…) — restrições citadas pelo Langoal.",
    ],
    examples: [
      { ja: "{雪|ゆき}の {場合|ばあい}は、{遠足|えんそく}は {来週|らいしゅう}に なります。", pt: "Em caso de neve, o passeio fica para a semana que vem." },
      { ja: "{会議|かいぎ}に {出|で}られない {場合|ばあい}は、メールで {知|し}らせて ください。", pt: "Se não puder participar da reunião, avise por e-mail." },
    ],
    levelNote: "jlptsensei e japanesetest4you listam no N4; o Langoal classifica como N3.",
    sources: [js("場合は-baai-wa-meaning", "場合は"), JT4Y_LIST, lg("baai", "〜場合")],
  },
  {
    id: "kana",
    level: "N4",
    title: "～かな／～かしら",
    meaning: "será que ~? (pergunta a si mesmo)",
    formation: ["Forma simples + かな; adjetivo な / substantivo sem だ: {雨|あめ}かな. かしら: mesmo uso, tom feminino."],
    rule: `Dúvida dita **para si mesmo** (ou de forma suave, sem exigir resposta): {明日|あした}、{晴|は}れる かな (será que amanhã faz sol?).`,
    notes: ["〜て くれない かな = pedido indireto (“será que você não faria…”).", "Por ser monólogo, かな fica na forma simples, sem です."],
    examples: [
      { ja: "{田中|たなか}さん、まだ {来|こ}ない。{道|みち}に {迷|まよ}った かな。", pt: "O Tanaka ainda não chegou. Será que se perdeu?" },
      { ja: "この {服|ふく}、{私|わたし}に {似合|にあ}う かしら。", pt: "Será que esta roupa fica bem em mim?" },
    ],
    sources: [js("かな-kana-meaning", "かな"), js("かしら-ka-shira-meaning", "かしら"), bp("かな", "かな")],
  },

  // ───────────────────────── Adjetivos ─────────────────────────
  {
    id: "ku-suru",
    level: "N4",
    title: "～くする／～にする",
    meaning: "deixar ~ / tornar ~ (alguém muda o estado de algo)",
    formation: ["Adjetivo い: 〜く + する: {明|あか}るく する.", "Adjetivo な / substantivo: 〜に + する: {静|しず}かに する, {部屋|へや}を きれいに する."],
    rule: `**Alguém (ou algo)** muda o estado de algo — インターネットは {生活|せいかつ}を {便利|べんり}に しました: {電気|でんき}を つけて、{部屋|へや}を {明|あか}るく しました. É o par de 〜く／〜に なる, que é a mudança “sozinha”: {部屋|へや}が {明|あか}るく なった.`,
    notes: ["する (alguém faz) × なる (fica assim): mesmo raciocínio de transitivo × intransitivo."],
    contrasts: [{ with: "～くなる／～になる", text: "a coisa muda (sem foco em quem fez)." }],
    examples: [
      { ja: "{料理|りょうり}を もう {少|すこ}し {辛|から}く して ください。", pt: "Deixe a comida um pouco mais apimentada, por favor." },
      { ja: "{机|つくえ}の {上|うえ}を きれいに して から、{勉強|べんきょう}を {始|はじ}めます。", pt: "Vou arrumar a mesa antes de começar a estudar." },
    ],
    sources: [js("い-adjective-くする-ku-suru-meaning", "くする"), nk("2020/01/23/jlptn4-grammar-adjective-suru", "イAく／ナAに + する"), lg("shimasu-change", "〜く／〜にします")],
  },
  {
    id: "sa",
    level: "N4",
    title: "～さ（{名詞化|めいしか}）",
    meaning: "transformar adjetivo em substantivo de medida: “-ura”, “-idade”",
    formation: ["Adjetivo い sem い + さ: {重|おも}さ, {高|たか}さ, {長|なが}さ. Adjetivo な + さ: {便利|べんり}さ, {大切|たいせつ}さ. いい → よさ. (De {静|しず}か, a forma usual é {静|しず}けさ.)"],
    rule: `Cria o substantivo do **grau** daquela qualidade: {重|おも}い → {重|おも}さ (o peso), {高|たか}い → {高|たか}さ (a altura): この {箱|はこ}の {重|おも}さは 5キロです.`,
    notes: ["Algumas palavras também têm a forma em み ({重|おも}み, {甘|あま}み), com nuance diferente (sensação, não medida) — fora do foco do N4."],
    examples: [
      { ja: "{富士山|ふじさん}の {高|たか}さは {何|なん}メートルですか。", pt: "Qual é a altura do Monte Fuji?" },
      { ja: "{病気|びょうき}を して、{健康|けんこう}の {大切|たいせつ}さが わかりました。", pt: "Fiquei doente e entendi a importância da saúde." },
    ],
    sources: [js("さ-sa-meaning", "さ"), bp("さ", "さ")],
  },

  // ───────────────────────── Polidez, contraste, partículas ─────────────────────────
  {
    id: "gozaimasu",
    level: "N4",
    title: "ございます／でございます",
    meaning: "forma muito polida de ある (haver, estar) e de です (ser)",
    formation: ["ある → ございます: トイレは {2階|にかい}に ございます.", "です → でございます: こちらが {会議室|かいぎしつ}で ございます."],
    rule: `Usado por funcionários com clientes e em situações formais. ございます é o ある **de coisas** (há / fica); para **pessoas** usa-se おる (humilde) ou いらっしゃる (respeito).`,
    notes: ["Adjetivos também ganham forma especial em fórmulas: ありがとう ございます, おはよう ございます (sem foco no N4)."],
    contrasts: [{ with: "おります／いらっしゃいます", text: "para pessoas (いる): humilde × respeito." }],
    examples: [
      { ja: "{何|なに}か ご{質問|しつもん}は ございますか。", pt: "Há alguma pergunta?" },
      { ja: "{受付|うけつけ}は {1階|いっかい}で ございます。", pt: "A recepção fica no primeiro andar." },
    ],
    sources: [js("ございます-gozaimasu-meaning", "ございます"), js("でございます-de-gozaimasu-meaning", "でございます"), bp("ございます", "ございます")],
  },
  {
    id: "wa-ga-wa",
    level: "N4",
    title: "～は～が、～は～（{対比|たいひ}）",
    meaning: "contraste: “X sim, mas Y não”",
    formation: ["A は 〜が、B は 〜: {肉|にく}は {食|た}べますが、{魚|さかな}は {食|た}べません."],
    rule: `O は marca os **dois termos comparados**, e が (mas) liga as duas partes: {肉|にく}は {食|た}べますが、{魚|さかな}は {食|た}べません (日本語教師ネット: 「２つの物や事柄を対比して言う時に助詞『は』が使われる」).`,
    notes: ["Para somar razões na mesma direção, use し; para contraste, が／けど."],
    examples: [
      { ja: "{漢字|かんじ}は {読|よ}めますが、{書|か}く のは {苦手|にがて}です。", pt: "Kanji eu consigo ler, mas escrever é difícil para mim." },
      { ja: "{平日|へいじつ}は {忙|いそが}しいですが、{週末|しゅうまつ}は {暇|ひま}です。", pt: "Nos dias úteis fico ocupado, mas no fim de semana estou livre." },
    ],
    sources: [js("は〜が～は-wa-ga-wa-meaning-but-however", "は〜が〜は"), nk("2019/09/06/jlptn4-grammar-wa-ga-wa", "〜は〜が、〜は（対比）")],
  },
  {
    id: "kara-de-tsukuru",
    level: "N4",
    title: "～から／～で {作|つく}る（{原料|げんりょう}・{材料|ざいりょう}）",
    meaning: "feito de ~ (matéria-prima transformada × material ainda reconhecível)",
    formation: ["Matéria-prima + から + {作|つく}る／{作|つく}られる: ぶどうから {作|つく}る.", "Material + で + {作|つく}る: {木|き}で {作|つく}った {机|つくえ}."],
    rule: `**から**: a matéria-prima se transforma e **não dá mais para ver** no produto (ワインは ぶどうから {作|つく}られます). **で**: o material **continua visível** (この {机|つくえ}は {木|き}で できて います). Exemplo do Langoal: 「ワインはぶどうから作られています」.`,
    notes: ["A passiva 〜から／〜で {作|つく}られて いる é o jeito comum de falar de produtos."],
    examples: [
      { ja: "チーズは {牛乳|ぎゅうにゅう}から {作|つく}られます。", pt: "O queijo é feito de leite." },
      { ja: "この {人形|にんぎょう}は {紙|かみ}で {作|つく}られて います。", pt: "Esta boneca é feita de papel." },
    ],
    sources: [js("から作る-作られている-kara-tsukuru-meaning", "から作る"), lg("passive-5", "［原料］から／［材料］で〜（ら）れています")],
  },
  {
    id: "te-de-riyuu",
    level: "N4",
    title: "～て／～で（{理由|りゆう}・{原因|げんいん}）",
    meaning: "por causa de ~ (causa de um sentimento ou acontecimento)",
    formation: ["Substantivo + で: {台風|たいふう}で, {病気|びょうき}で.", "Verbo / adjetivo (て): {聞|き}いて, {高|たか}くて, {心配|しんぱい}で."],
    rule: `A forma て/で indica a **causa** de um sentimento ou de algo que aconteceu: {台風|たいふう}で {電車|でんしゃ}が {止|と}まりました; ニュースを {聞|き}いて びっくりしました.`,
    notes: [
      "Depois de 〜て／〜で de causa, não vêm pedido, convite ou vontade (日本語教師ネット: 後ろに意志を表す動詞は来ない): × {雨|あめ}で、{家|いえ}に いましょう → {雨|あめ}だから、{家|いえ}に いましょう.",
      "Muito comum com sentimentos: {会|あ}えて うれしい, {負|ま}けて くやしい.",
    ],
    contrasts: [{ with: "から／ので", text: "aceitam pedido e vontade depois." }],
    examples: [
      { ja: "{事故|じこ}で {道|みち}が {混|こ}んで います。", pt: "A rua está congestionada por causa de um acidente." },
      { ja: "{試験|しけん}に {落|お}ちて、とても {残念|ざんねん}です。", pt: "Reprovei no exame e estou muito chateado." },
    ],
    sources: [lg("noun-de-reason", "Nで（理由・原因）"), nk("2019/08/22/jlptn4-grammar-de", "〜て／〜で（理由）"), js("て-で-te-de-conjunctive-particle-meaning", "て／で")],
  },
  {
    id: "fukushi-koou",
    level: "N4",
    title: "{呼応|こおう}の{副詞|ふくし}（あまり・ぜんぜん・ぜひ・きっと…）",
    meaning: "advérbios que “pedem” uma forma específica no fim da frase",
    formation: [
      "あまり + negativa: あまり おいしく ない (não muito).",
      "ぜんぜん + negativa: ぜんぜん わからない (nada).",
      "なかなか + negativa: なかなか {来|こ}ない (custa a).",
      "ぜひ + desejo/pedido: ぜひ {来|き}て ください, ぜひ {行|い}きたい.",
      "きっと + suposição: きっと {来|く}る でしょう／と {思|おも}う.",
      "もし + condicional: もし {雨|あめ}だったら.",
    ],
    rule: `Em もんだい1 é comum a lacuna ser um advérbio. A pista está **no fim da frase**: negativa → あまり／ぜんぜん／なかなか; desejo ou pedido → ぜひ; suposição → きっと.`,
    notes: [
      "あまり com afirmativa existe, mas significa outra coisa (“tanto que…”, N3). Na prova N4, あまり pede negativa.",
      "なかなか com afirmativa = “bem, bastante” (elogio): この ケーキは なかなか おいしい. Com verbo negativo = “custa a”: バスが なかなか {来|こ}ない.",
    ],
    examples: [
      { ja: "{昨日|きのう}の {映画|えいが}は あまり おもしろく なかった。", pt: "O filme de ontem não foi muito interessante." },
      { ja: "{日本|にほん}に {来|き}たら、ぜひ {連絡|れんらく}して ください。", pt: "Quando vier ao Japão, não deixe de me avisar." },
    ],
    sources: [
      js("あまり～ない-amarinai-meaning", "あまり～ない"),
      js("全然～ない-zenzen-nai-meaning", "全然～ない"),
      js("ぜひ-zehi-meaning", "ぜひ"),
      nk("2019/07/28/jlptn4-grammar-nakanaka-nai", "なかなか〜ない"),
      BUNPRO_LIST,
    ],
  },
];
