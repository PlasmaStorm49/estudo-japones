import type { GrammarPoint } from "../../../schema.ts";
import { BUNPRO_LIST, JLPT_OFFICIAL_2012, JLPT_OFFICIAL_2018, JLPTSENSEI_LIST, JT4Y_LIST, js, lg, nk } from "../../../sources.ts";

/**
 * Regras gramaticais do N4 usadas pelas questões.
 * Cada regra foi conferida em pelo menos duas fontes (listadas em `sources`).
 */
export const points: GrammarPoint[] = [
  // ───────────────────────── Voz: passiva, causativa ─────────────────────────
  {
    id: "ukemi",
    level: "N4",
    title: "{受身形|うけみけい}（～れる／～られる）",
    meaning: "voz passiva: “ser ~ado”, inclusive “sofrer” a ação de alguém",
    formation: [
      "Grupo 1: troque o -u final pela sílaba em -a + れる: {書|か}く→{書|か}かれる, ふむ→ふまれる, {言|い}う→{言|い}われる (う vira わ).",
      "Grupo 2: tire る e coloque られる: {食|た}べる→{食|た}べられる, {見|み}る→{見|み}られる.",
      "Irregulares: する→される, {来|く}る→{来|こ}られる.",
      "Quem pratica a ação vem com に: {先生|せんせい}に ほめられる. (Com criações — livros, prédios — usa-se によって.)",
    ],
    rule: `Na passiva, o sujeito da frase é quem **recebe** a ação, e quem a pratica é marcado com に: {先生|せんせい}が {私|わたし}を ほめました → {私|わたし}は {先生|せんせい}に ほめられました.

O japonês tem também a passiva “do dono”: o sujeito é a pessoa cuja **parte do corpo ou objeto** foi atingido, e esse objeto continua com を: {私|わたし}は {犬|いぬ}に {手|て}を かまれました (o cachorro mordeu a minha mão). É o padrão [vítima]は [quem fez]に [parte/objeto]を Vられる.

E existe a passiva “de incômodo”, inclusive com verbo intransitivo: {雨|あめ}に {降|ふ}られました (peguei chuva, me dei mal com a chuva).`,
    notes: [
      "Padrão para reconhecer na prova: に + pessoa que fez + を + parte do corpo/objeto + Vられる → passiva.",
      "Em português dizemos “pisaram no meu pé”; em japonês o natural é “eu tive o pé pisado”: {足|あし}を ふまれました.",
      "No grupo 2, {食|た}べられる pode ser passiva (“ser comido”), potencial (“conseguir comer”) ou até respeito ({先生|せんせい}が {食|た}べられる). O contexto (e um agente com に) decide.",
    ],
    contrasts: [
      { with: "{使役|しえき}（させる）", text: "na causativa o sujeito **faz/deixa** alguém fazer; na passiva o sujeito **sofre/recebe** a ação." },
      { with: "{使役受身|しえきうけみ}（させられる）", text: "o sujeito é **obrigado** a fazer algo por outra pessoa." },
    ],
    examples: [
      { ja: "{電車|でんしゃ}で となりの {人|ひと}に {足|あし}を ふまれました。", pt: "No trem, a pessoa ao lado pisou no meu pé." },
      { ja: "{私|わたし}は {母|はは}に しかられました。", pt: "Levei bronca da minha mãe." },
      { ja: "{雨|あめ}に {降|ふ}られて、{服|ふく}が ぬれて しまいました。", pt: "Peguei chuva e a roupa ficou molhada." },
    ],
    sources: [
      js("受身形-ukemi-japanese-passive-form", "受身形 (passive)"),
      lg("passive-1", "受身"),
      lg("passive-3", "持ち主の受身（私は犬に手を噛まれました）"),
      lg("passive-4", "非情の受身"),
      JLPT_OFFICIAL_2018,
    ],
  },
  {
    id: "shieki",
    level: "N4",
    title: "{使役形|しえきけい}（～せる／～させる）",
    meaning: "causativa: fazer (obrigar) ou deixar alguém fazer",
    formation: [
      "Grupo 1: -u → sílaba em -a + せる: {行|い}く→{行|い}かせる, {飲|の}む→{飲|の}ませる, {言|い}う→{言|い}わせる.",
      "Grupo 2: る → させる: {食|た}べる→{食|た}べさせる.",
      "Irregulares: する→させる, {来|く}る→{来|こ}させる.",
    ],
    rule: `O sujeito é quem **manda** ou **permite**. Quem executa a ação é marcado com に quando o verbo já tem objeto com を: {母|はは}は {子|こ}どもに {野菜|やさい}を {食|た}べさせます (a mãe faz a criança comer verdura).

Com verbo intransitivo (sem objeto), quem executa vai normalmente com を: {先生|せんせい}は {学生|がくせい}を {走|はし}らせた (com に, o sentido tende a “deixar”). Com verbos de sentimento ({心配|しんぱい}する, {喜|よろこ}ぶ, {泣|な}く, びっくりする…) é sempre を: {両親|りょうしん}を {心配|しんぱい}させる (deixar os pais preocupados).

Se é “obrigar” ou “deixar” depende do contexto: {子|こ}どもに {好|す}きな {本|ほん}を {読|よ}ませる = deixar a criança ler o livro de que gosta.`,
    notes: [
      "Não pode haver dois を na mesma oração: se já existe objeto com を, quem faz a ação vai com に.",
      "Não se usa a causativa para fazer um superior agir (× {先生|せんせい}に {説明|せつめい}させる); para isso, 〜て いただく.",
      "させてください／させていただけませんか = “deixe-me fazer” (ponto próprio).",
    ],
    contrasts: [
      { with: "{受身|うけみ}（れる・られる）", text: "na passiva o sujeito recebe a ação; na causativa o sujeito provoca a ação de outro." },
      { with: "{使役受身|しえきうけみ}（させられる）", text: "o sujeito é quem é obrigado." },
    ],
    examples: [
      { ja: "{先生|せんせい}は {学生|がくせい}に {作文|さくぶん}を {書|か}かせました。", pt: "O professor fez os alunos escreverem uma redação." },
      { ja: "{小|ちい}さい とき、よく {両親|りょうしん}を {心配|しんぱい}させました。", pt: "Quando pequeno, eu deixava muito meus pais preocupados." },
    ],
    sources: [js("させる-saseru-causative-form-meaning", "させる (causative)"), lg("saseru-force", "使役（強制）"), lg("saseru-permission", "使役（許可）"), JLPT_OFFICIAL_2018],
  },
  {
    id: "shieki-ukemi",
    level: "N4",
    title: "{使役受身|しえきうけみ}（～させられる）",
    meaning: "causativa-passiva: ser obrigado (por alguém) a fazer",
    formation: [
      "Grupo 1: sílaba em -a + せられる, ou a forma curta -a + される (mais comum): {飲|の}む→{飲|の}ませられる／{飲|の}まされる, {待|ま}つ→{待|ま}たされる. Verbos em す só têm a forma longa: {話|はな}す→{話|はな}させられる.",
      "Grupo 2: る → させられる: {食|た}べる→{食|た}べさせられる.",
      "Irregulares: する→させられる, {来|く}る→{来|こ}させられる.",
    ],
    rule: `Junta causativa + passiva: o sujeito é **forçado** por alguém a fazer algo que não queria. Quem obriga vai com に: {私|わたし}は {母|はは}に ピアノの {練習|れんしゅう}を させられました (minha mãe me obrigava a praticar piano).

A nuance é quase sempre de contrariedade, por isso aparece com pistas como いやでした, {本当|ほんとう}は {行|い}きたくなかった.`,
    notes: ["Estrutura: [quem foi obrigado]は [quem obrigou]に [ação]を V(さ)せられる."],
    contrasts: [
      { with: "させる", text: "o sujeito obriga outra pessoa." },
      { with: "される (passiva de する)", text: "o sujeito sofre uma ação que outro fez; ninguém o obriga a fazer nada." },
    ],
    examples: [
      { ja: "{子|こ}どもの ころ、{母|はは}に {毎日|まいにち} {野菜|やさい}を {食|た}べさせられました。", pt: "Quando criança, minha mãe me obrigava a comer verdura todo dia." },
      { ja: "{駅|えき}で {友|とも}だちに 1{時間|じかん}も {待|ま}たされました。", pt: "Na estação, meu amigo me fez esperar uma hora inteira." },
    ],
    sources: [js("させられる-saserareru-meaning-causative-passive-form", "させられる (causative-passive)"), BUNPRO_LIST],
  },

  // ───────────────────────── Mudança, decisão, finalidade ─────────────────────────
  {
    id: "you-ni-naru",
    level: "N4",
    title: "～ようになる",
    meaning: "passar a (conseguir / fazer): mudança gradual de capacidade ou hábito",
    formation: [
      "Verbo (forma de dicionário) + ように なる: {話|はな}せるように なる, {食|た}べるように なる.",
      "Muito comum com a forma potencial: {読|よ}める・{泳|およ}げる・わかる + ように なる.",
      "Para “deixar de”: Verbo (ない) → なくなる: {食|た}べなくなる.",
    ],
    rule: `Expressa uma **mudança** que aconteceu com o tempo: antes não era assim, agora é. {日本語|にほんご}の ニュースが わかるように なりました = passei a entender o noticiário em japonês (antes não entendia).

É o jeito natural de falar de progresso: やっと, だんだん, {少|すこ}しずつ, {前|まえ}は…が {今|いま}は são pistas típicas.`,
    notes: [
      "Verbos que já expressam mudança ({太|ふと}る, やせる, {増|ふ}える) não precisam de ようになる para dizer que a mudança aconteceu: {運動不足|うんどうぶそく}で {太|ふと}りました (× {太|ふと}るように なりました — exemplo de erro do 日本語教師ネット). Com eles, ようになる só indica uma **tendência nova**: {最近|さいきん}、{食|た}べると すぐ {太|ふと}るように なった.",
    ],
    contrasts: [
      { with: "ことに なる", text: "algo foi **decidido** (por outros ou pelas circunstâncias)." },
      { with: "ように する", text: "**esforço** consciente para fazer/não fazer algo." },
    ],
    examples: [
      { ja: "{日本|にほん}に {来|き}て、なっとうが {食|た}べられるように なりました。", pt: "Depois que vim ao Japão, passei a conseguir comer natto." },
      { ja: "{子|こ}どもが {生|う}まれてから、たばこを すわなく なりました。", pt: "Depois que meu filho nasceu, parei de fumar." },
    ],
    sources: [js("ようになる-you-ni-naru-meaning", "ようになる"), nk("2018/06/23/jlptn4-grammar-youninaru-nakunaru", "〜ようになる・〜なくなる"), JLPT_OFFICIAL_2018],
  },
  {
    id: "koto-ni-suru",
    level: "N4",
    title: "～ことにする",
    meaning: "decidir (por vontade própria)",
    formation: [
      "Verbo (dicionário ou ない) + ことに する: {行|い}く ことに する, {行|い}かない ことに する.",
      "Passado: ことに した = decidi. ことに して いる = tenho como regra pessoal.",
    ],
    rule: `Quem fala (ou o sujeito) toma a decisão **por vontade própria**: {来年|らいねん} {留学|りゅうがく}する ことに しました = decidi estudar no exterior no ano que vem.

ことに して いる indica um costume que a própria pessoa decidiu manter: {毎朝|まいあさ} {走|はし}る ことに して います.`,
    notes: ["O 日本語教師ネット resume: decidiu você → ことにする; foi decidido independentemente da sua vontade → ことになる."],
    contrasts: [{ with: "ことに なる", text: "decisão apresentada como vinda de fora (empresa, escola, circunstâncias)." }],
    examples: [
      { ja: "よく {考|かんが}えて、{会社|かいしゃ}を やめる ことに しました。", pt: "Pensei bem e decidi sair da empresa." },
      { ja: "{健康|けんこう}の ために、{毎朝|まいあさ} {歩|ある}く ことに して います。", pt: "Pela saúde, tenho como regra caminhar toda manhã." },
    ],
    sources: [js("ことにする-koto-ni-suru-meaning", "ことにする"), nk("2019/04/29/jlptn4-grammar-kotonisuru", "〜ことにする")],
  },
  {
    id: "koto-ni-naru",
    level: "N4",
    title: "～ことになる",
    meaning: "ficou decidido que (por outros / pelas circunstâncias)",
    formation: [
      "Verbo (dicionário ou ない) + ことに なる: {働|はたら}く ことに なる.",
      "Passado: ことに なった／なりました. ことに なって いる = é a regra, está combinado.",
    ],
    rule: `Apresenta a decisão como algo que **foi decidido**, sem depender da vontade de quem fala — pela empresa, pela escola, pela família ou pelas circunstâncias: {来月|らいげつ}から {大阪|おおさか}の {支店|してん}で {働|はたら}く ことに なりました.

ことに なって いる descreve uma regra já estabelecida: この {部屋|へや}では {食|た}べ{物|もの}を {食|た}べない ことに なって います.`,
    notes: [
      "Nuance importante: japoneses também usam ことに なりました para anunciar uma decisão **própria** de forma modesta (ex.: {結婚|けっこん}する ことに なりました). Mas quando a frase deixa explícito **quem** decidiu, não há dúvida: decidi eu → ことにした; decidiram por mim → ことになった.",
    ],
    contrasts: [
      { with: "ことに する", text: "decisão por vontade própria." },
      { with: "ように なる", text: "mudança gradual (não é decisão)." },
    ],
    examples: [
      { ja: "{来年|らいねん}から {大阪|おおさか}で {働|はたら}く ことに なりました。", pt: "Ficou decidido que vou trabalhar em Osaka a partir do ano que vem." },
      { ja: "{田中|たなか}さんが {休|やす}みなので、{私|わたし}が {発表|はっぴょう}する ことに なった。", pt: "Como o Tanaka faltou, ficou decidido que eu vou apresentar." },
    ],
    sources: [js("ことになる-koto-ni-naru-meaning", "ことになる"), nk("2019/05/02/jlptn4-grammar-kotoninaru", "〜ことになる (inclui o uso modesto)")],
  },
  {
    id: "you-ni-mokuteki",
    level: "N4",
    title: "～ように（{目的|もくてき}）",
    meaning: "para que / de modo que (objetivo que não depende só da vontade)",
    formation: [
      "Verbo (dicionário) + ように — com verbos **não volitivos**: potencial ({読|よ}める, {話|はな}せる), わかる, {見|み}える, {聞|き}こえる, なる…",
      "Verbo (ない) + ように — com qualquer verbo: {忘|わす}れない ように, {遅|おく}れない ように.",
    ],
    rule: `Indica o **estado que se quer alcançar** quando esse estado não é uma ação que se decide fazer: capacidade, percepção, mudança. {後|うし}ろの {人|ひと}にも {聞|き}こえる ように、{大|おお}きい {声|こえ}で {話|はな}します = falo alto para que as pessoas do fundo também ouçam.

Também é ように quando o sujeito da primeira parte é **outra pessoa**: {学生|がくせい}が わかる ように、ゆっくり {話|はな}します.`,
    notes: [
      "Teste rápido: o verbo antes da lacuna é potencial, わかる, {見|み}える, {聞|き}こえる ou está na forma negativa? → ように.",
      "ように também forma ように なる (mudança), ように する (esforço) e ように {言|い}う (pedido indireto) — pontos próprios.",
    ],
    contrasts: [
      {
        with: "ために",
        text: "verbo **volitivo** (ação que se decide fazer) e o **mesmo sujeito** nas duas partes: {留学|りゅうがく}する ために お{金|かね}を ためます. Resumo: potencial / não volitivo / sujeito diferente → ように; ação intencional do próprio sujeito → ために.",
      },
    ],
    examples: [
      { ja: "{日本語|にほんご}が {上手|じょうず}に {話|はな}せる ように、{毎日|まいにち} {練習|れんしゅう}して います。", pt: "Treino todo dia para conseguir falar japonês bem." },
      { ja: "{風邪|かぜ}を ひかない ように、{暖|あたた}かい {服|ふく}を {着|き}ます。", pt: "Visto roupa quente para não pegar resfriado." },
    ],
    levelNote: "N4 no Bunpro. O jlptsensei não lista ように de finalidade (lista ように/ような de comparação, ようになる e ようにする).",
    sources: [nk("2018/09/25/jlptn4-grammar-yooni", "〜ように（目標・期待）: V は無意志動詞"), BUNPRO_LIST],
  },
  {
    id: "tame-ni",
    level: "N4",
    title: "～ために（{目的|もくてき}）",
    meaning: "para / a fim de (objetivo de uma ação intencional)",
    formation: [
      "Verbo volitivo (dicionário) + ために: {買|か}う ために, {留学|りゅうがく}する ために.",
      "Substantivo + の + ために: {健康|けんこう}の ために, {家族|かぞく}の ために.",
    ],
    rule: `Diz o **objetivo** de uma ação feita de propósito, com o **mesmo sujeito** nas duas partes: {新|あたら}しい パソコンを {買|か}う ために、アルバイトを して います.

Com substantivo, N + の ために = “para / em benefício de”: {子|こ}どもの ために {働|はたら}く.`,
    notes: [
      "O verbo antes de ために é volitivo (observação do 日本語教師ネット: 「〜ために」の前は意志動詞).",
      "ために também pode indicar **causa** ({雨|あめ}の ために {中止|ちゅうし}に なった), mas na prova N4 o foco costuma ser o objetivo.",
    ],
    contrasts: [{ with: "ように", text: "potencial / não volitivo / sujeito diferente." }],
    examples: [
      { ja: "{留学|りゅうがく}する ために、お{金|かね}を ためて います。", pt: "Estou juntando dinheiro para estudar no exterior." },
      { ja: "{健康|けんこう}の ために、{毎日|まいにち} {歩|ある}いて います。", pt: "Caminho todo dia pela saúde." },
    ],
    levelNote: "Ensinado no N4 (日本語教師ネット); o Bunpro classifica como N3. Aparece como alternativa na prova oficial de exemplo do N4.",
    sources: [nk("2019/03/05/jlptn4-grammar-tameni", "〜ために: 前は意志動詞"), BUNPRO_LIST, JLPT_OFFICIAL_2018],
  },
  {
    id: "you-ni-suru",
    level: "N4",
    title: "～ようにする",
    meaning: "procurar (fazer / não fazer), esforçar-se para",
    formation: ["Verbo (dicionário ou ない) + ように する; hábito mantido: ように して いる."],
    rule: `Esforço **consciente** para fazer (ou evitar) algo, muitas vezes virando hábito: {健康|けんこう}の ために、{毎日|まいにち} {野菜|やさい}を {食|た}べる ように して います.`,
    contrasts: [
      { with: "ように なる", text: "mudança que aconteceu (resultado), não esforço." },
      { with: "ことに する", text: "a decisão em si (“decidi”), não o esforço contínuo." },
    ],
    examples: [
      { ja: "{夜|よる}は コーヒーを {飲|の}まない ように して います。", pt: "Procuro não tomar café à noite." },
      { ja: "{明日|あした}からは {遅|おく}れない ように します。", pt: "A partir de amanhã vou me esforçar para não me atrasar." },
    ],
    sources: [js("ようにする-you-ni-suru-ようにしている-meaning", "ようにする"), nk("2020/01/09/jlptn4-grammar-younisuru", "〜ようにする")],
  },
  {
    id: "you-ni-iu",
    level: "N4",
    title: "～ように{言|い}う",
    meaning: "dizer/pedir para (alguém) fazer — ordem ou pedido relatado",
    formation: ["Verbo (dicionário ou ない) + ように + {言|い}う／{頼|たの}む／{注意|ちゅうい}する: {来|く}る ように {言|い}う, {遅|おく}れない ように {言|い}う."],
    rule: `Relata uma ordem, pedido ou conselho de forma **indireta**: {医者|いしゃ}は {私|わたし}に {毎日|まいにち} {歩|ある}く ように {言|い}いました (o médico me disse para caminhar todo dia). Na passiva: {医者|いしゃ}に たばこを すわない ように {言|い}われました.`,
    notes: ["É a versão indireta de 「{歩|ある}いて ください」 ou 「すわないで ください」."],
    examples: [
      { ja: "{先生|せんせい}は {学生|がくせい}に {静|しず}かに する ように {言|い}いました。", pt: "O professor disse aos alunos para ficarem quietos." },
      { ja: "{母|はは}に {早|はや}く {帰|かえ}る ように {言|い}われました。", pt: "Minha mãe me disse para voltar cedo." },
    ],
    levelNote: "N4 no Bunpro (ようにいう). Ensinado em livros de N4 junto com ように (objetivo).",
    sources: [BUNPRO_LIST, nk("2018/09/25/jlptn4-grammar-yooni", "〜ように（目標・期待） — ponto relacionado")],
  },

  // ───────────────────────── Concessão e condicionais ─────────────────────────
  {
    id: "noni-gyakusetsu",
    level: "N4",
    title: "～のに（{逆接|ぎゃくせつ}）",
    meaning: "apesar de / mas (resultado contrário ao esperado, com frustração ou surpresa)",
    formation: [
      "Verbo / adjetivo い (forma simples) + のに: {飲|の}んだ のに, {高|たか}い のに.",
      "Adjetivo な / substantivo + な + のに: {静|しず}かな のに, {日曜日|にちようび}な のに.",
    ],
    rule: `Liga dois **fatos reais** em que o segundo contraria o que se esperava, geralmente com insatisfação, surpresa ou pena: {薬|くすり}を {飲|の}んだ のに、まだ {熱|ねつ}が {下|さ}がりません = tomei o remédio e mesmo assim a febre não baixa.`,
    notes: [
      "Depois de のに **não** pode vir pedido, ordem, vontade ou desejo (Langoal: 「文末に話し手の意志や希望、依頼、命令は使われない」). × …のに、{来|き}て ください.",
      "Adjetivo な e substantivo pedem な: {休|やす}みな のに (e não “{休|やす}みだ のに”).",
    ],
    contrasts: [
      { with: "ても", text: "“mesmo que” (hipótese ou regra geral), sem a carga de frustração." },
      { with: "けど／が", text: "contraste neutro; aceita pedido depois." },
      { with: "のに（{目的|もくてき}）", text: "“para” ({切|き}る のに {使|つか}う) — outro ponto." },
    ],
    examples: [
      { ja: "{毎日|まいにち} {練習|れんしゅう}した のに、{試合|しあい}に {負|ま}けました。", pt: "Treinei todo dia e mesmo assim perdi o jogo." },
      { ja: "{日曜日|にちようび}な のに、{会社|かいしゃ}に {行|い}かなければ なりません。", pt: "Apesar de ser domingo, tenho que ir à empresa." },
    ],
    sources: [js("のに-noni-meaning-even-though", "のに (even though)"), lg("noni-even-though", "〜のに（予想外）"), nk("2020/01/01/jlptn4-grammar-noni", "〜のに")],
  },
  {
    id: "noni-mokuteki",
    level: "N4",
    title: "～のに（{用途|ようと}・{目的|もくてき}）",
    meaning: "para (fazer algo) — com 使う, 便利だ, 必要だ, いい, かかる",
    formation: ["Verbo (dicionário) + のに + {使|つか}う／{便利|べんり}だ／{必要|ひつよう}だ／いい／(tempo, dinheiro) かかる."],
    rule: `Indica a finalidade, mas **só** com um grupo pequeno de predicados: uso ({使|つか}う), utilidade ({便利|べんり}だ, いい, {役|やく}に {立|た}つ), necessidade ({必要|ひつよう}だ) e custo/tempo (かかる): この {辞書|じしょ}は {漢字|かんじ}の {意味|いみ}を {調|しら}べる のに {便利|べんり}です.`,
    notes: ["Na prova oficial de exemplo do N4 apareceu com かかる (quanto tempo levou para fazer algo)."],
    contrasts: [{ with: "ために", text: "aceita qualquer ação depois; のに (finalidade) só os predicados acima." }],
    examples: [
      { ja: "この はさみは {花|はな}を {切|き}る のに {使|つか}います。", pt: "Esta tesoura é usada para cortar flores." },
      { ja: "{家|いえ}を {建|た}てる のに 3000{万円|まんえん} かかりました。", pt: "Construir a casa custou 30 milhões de ienes." },
    ],
    levelNote: "jlptsensei lista no N4; o Bunpro classifica como N3. Aparece como resposta na prova oficial de exemplo do N4.",
    sources: [js("のに-noni-meaning-to-do", "のに (in order to)"), lg("noni-use", "〜のに（用途）"), JLPT_OFFICIAL_2018],
  },
  {
    id: "temo",
    level: "N4",
    title: "～ても／～でも",
    meaning: "mesmo que / mesmo se; com interrogativo: não importa (quantas vezes, quanto…)",
    formation: [
      "Verbo (て) + も: {降|ふ}っても, {読|よ}んでも.",
      "Adjetivo い: 〜くても ({高|たか}くても). いい → よくても.",
      "Adjetivo な / substantivo + でも: {静|しず}かでも, {雨|あめ}でも.",
    ],
    rule: `O resultado acontece **independentemente** da condição: {雨|あめ}が {降|ふ}っても、{試合|しあい}は あります.

Com palavra interrogativa ({何回|なんかい}, いくら, どんなに, だれが, どこへ…) + ても = “não importa quantas vezes / quanto / quem…”: {何回|なんかい} {電話|でんわ}を かけても、{出|で}ません.`,
    notes: [
      "Com interrogativo + ても a frase **não** é pergunta. Compare: {何回|なんかい} {読|よ}んでも わかりません (afirmação) × {何回|なんかい} {読|よ}んだら わかりますか (pergunta: “quantas vezes preciso ler?”).",
    ],
    contrasts: [
      { with: "たら／ば", text: "“se”; ても é “mesmo se”." },
      { with: "のに", text: "fato consumado + frustração." },
    ],
    examples: [
      { ja: "{高|たか}くても、この かばんが {買|か}いたいです。", pt: "Mesmo que seja cara, quero comprar esta bolsa." },
      { ja: "いくら {考|かんが}えても、わかりません。", pt: "Por mais que eu pense, não entendo." },
    ],
    sources: [js("ても-temo-meaning", "ても"), lg("temo", "〜ても"), nk("2020/01/08/jlptn4-grammar-temo", "〜ても")],
  },
  {
    id: "ba",
    level: "N4",
    title: "～ば（{条件形|じょうけんけい}）",
    meaning: "se (condição para um resultado)",
    formation: [
      "Verbos: -u → -e + ば: {行|い}く→{行|い}けば, {飲|の}む→{飲|の}めば, {食|た}べる→{食|た}べれば, する→すれば, {来|く}る→{来|く}れば.",
      "Adjetivo い: い → ければ: {安|やす}い→{安|やす}ければ. **Exceção: いい → よければ** (いい vem de よい).",
      "Negativo: ない → なければ: {行|い}かなければ.",
      "Adjetivo な / substantivo: なら(ば) ou, mais formal, であれば: {静|しず}かなら／{静|しず}かであれば, {学生|がくせい}なら／{学生|がくせい}であれば (Tae Kim, p. 193).",
    ],
    rule: `“Se X, então Y”: a condição necessária para um resultado. {毎日|まいにち} {練習|れんしゅう}すれば、{上手|じょうず}に なります.

Quando a condição é um **estado** (adjetivo, ある, いる, potencial), a segunda parte pode ser vontade ou pedido: {天気|てんき}が よければ、{富士山|ふじさん}に {行|い}きます; {都合|つごう}が よければ、{明日|あした} {来|き}て ください (exemplos do Langoal).`,
    notes: [
      "Quando a condição é uma **ação** ({着|つ}く, {行|い}く…), ば normalmente não aceita pedido/vontade na segunda parte; aí o natural é たら: {駅|えき}に {着|つ}いたら、{電話|でんわ}して ください.",
      "ばよかった = arrependimento: もっと {勉強|べんきょう}すれば よかった (devia ter estudado mais).",
    ],
    contrasts: [
      { with: "たら", text: "o condicional mais livre; aceita pedido/vontade sempre." },
      { with: "と", text: "consequência automática; nunca pedido/vontade." },
      { with: "なら", text: "retoma o que o outro disse; a 2ª parte pode vir antes da 1ª." },
    ],
    examples: [
      { ja: "{安|やす}ければ、{買|か}います。", pt: "Se for barato, eu compro." },
      { ja: "{天気|てんき}が よければ、{山|やま}に {登|のぼ}りたいです。", pt: "Se o tempo estiver bom, quero subir a montanha." },
    ],
    sources: [
      js("ば-ba-conditional-form-meaning", "ば"),
      lg("conditional-form-verb", "条件形（動詞）"),
      lg("conditional-form-i-adj", "条件形（い形容詞）: 天気がよければ…"),
      nk("2020/07/06/jlptn4-grammar-ba", "〜ば"),
    ],
  },
  {
    id: "tara",
    level: "N4",
    title: "～たら",
    meaning: "se / quando (depois que)",
    formation: [
      "Verbo (た) + ら: {着|つ}いたら, {降|ふ}ったら. Negativo: なかったら.",
      "Adjetivo い: 〜かったら ({安|やす}かったら; いい→よかったら).",
      "Adjetivo な / substantivo: だったら ({雨|あめ}だったら).",
    ],
    rule: `Dois usos: (1) **hipótese** (“se”), muitas vezes com もし; (2) **certeza** (“quando / depois que”): a segunda parte acontece depois de a primeira se completar. {駅|えき}に {着|つ}いたら、{電話|でんわ}して ください = quando chegar à estação, me ligue.

É o condicional mais livre: aceita pedido, convite, vontade e ordem na segunda parte (Langoal: 「あったら海へ行きたい」 ✓, 「あると」 ✗).`,
    notes: [
      "A ordem é sempre: 1ª parte acontece → depois a 2ª. Se o conselho/ação da 2ª parte precisa vir **antes**, use なら.",
      "Com a 2ª parte no passado, たら conta uma descoberta: “quando fiz X, vi/aconteceu Y” — {窓|まど}の {外|そと}を {見|み}たら、{雪|ゆき}が {降|ふ}って いました.",
    ],
    contrasts: [
      { with: "と", text: "não aceita pedido nem vontade depois." },
      { with: "なら", text: "permite que a 2ª parte venha antes." },
    ],
    examples: [
      { ja: "{家|いえ}に {着|つ}いたら、メールを ください。", pt: "Quando chegar em casa, me mande um e-mail." },
      { ja: "もし {宝|たから}くじが {当|あ}たったら、{家|いえ}を {買|か}いたいです。", pt: "Se eu ganhar na loteria, quero comprar uma casa." },
    ],
    sources: [js("たら-tara-meaning", "たら"), lg("tara", "〜たら（仮定条件・確定条件）")],
  },
  {
    id: "to-joken",
    level: "N4",
    title: "～と（{条件|じょうけん}）",
    meaning: "quando / sempre que (consequência natural ou automática)",
    formation: ["Verbo (dicionário ou ない) + と; adjetivo い + と; adjetivo な / substantivo + だ + と."],
    rule: `Sempre que X acontece, Y acontece **naturalmente**. Muito usado para máquinas, caminhos e fenômenos naturais: この ボタンを おすと、{水|みず}が {出|で}ます; まっすぐ {行|い}くと、{右|みぎ}に {駅|えき}が あります; {春|はる}に なると、{桜|さくら}が {咲|さ}きます.`,
    notes: [
      "A segunda parte **não** pode ser vontade, desejo, convite, pedido ou ordem (Langoal; 日本語教師ネット: 「後件に意志を表す文や依頼表現などは使えない」). × {駅|えき}に {着|つ}くと、{電話|でんわ}して ください.",
      "Não serve para hipóteses imaginárias com vontade/pergunta depois: × もし 100{万円|まんえん} あると、{何|なに}が したいですか (o certo é あったら).",
      "“Não aceita vontade” não quer dizer “não aceita verbo volitivo”: para **hábitos**, a 2ª parte pode ser uma ação volitiva — {毎朝|まいあさ} {起|お}きると、{水|みず}を {飲|の}みます. E com passado, と conta uma descoberta: ドアを {開|あ}けると、{猫|ねこ}が いました.",
    ],
    contrasts: [
      { with: "たら", text: "aceita pedido/vontade." },
      { with: "ば", text: "condição necessária; com estados aceita pedido." },
    ],
    examples: [
      { ja: "{右|みぎ}に {曲|ま}がると、{銀行|ぎんこう}が あります。", pt: "Virando à direita, tem um banco." },
      { ja: "{冬|ふゆ}に なると、{寒|さむ}く なります。", pt: "Quando chega o inverno, esfria." },
    ],
    sources: [js("と-to-meaning-whenever", "と"), lg("to", "〜と（後件の制限）"), nk("2019/09/03/jlptn4-grammar-to", "〜と（後件に意志・依頼は使えない）")],
  },
  {
    id: "nara",
    level: "N4",
    title: "～なら",
    meaning: "se (é o caso que) — retomando o que o outro disse para aconselhar",
    formation: ["Verbo / adjetivo い (forma simples) + なら: {行|い}く なら; adjetivo な / substantivo + なら: {京都|きょうと}なら."],
    rule: `Pega um assunto que **a outra pessoa trouxe** (ou uma situação dada) e dá conselho, opinião ou pedido sobre ele: A「{来週|らいしゅう} {京都|きょうと}へ {行|い}きます」 B「{京都|きょうと}へ {行|い}く なら、{新幹線|しんかんせん}が {便利|べんり}ですよ」.

Só なら permite que a ação da segunda parte aconteça **antes** do evento da primeira: você escolhe o transporte antes de ir a Kyoto.`,
    notes: [
      "Com たら a ordem é sempre 1ª → 2ª: {京都|きょうと}へ {行|い}ったら = “quando já estiver em Kyoto”. Por isso “{京都|きょうと}へ {行|い}ったら、{新幹線|しんかんせん}が {便利|べんり}です” não serve para aconselhar como ir.",
      "Substantivo + なら também destaca um tópico: {日本|にほん}の {料理|りょうり}なら、すしが {好|す}きです.",
    ],
    contrasts: [{ with: "たら／と／ば", text: "exigem que a 1ª parte aconteça antes da 2ª." }],
    examples: [
      { ja: "A「カメラを {買|か}いたいんですが…」 B「カメラを {買|か}う なら、あの {店|みせ}が {安|やす}いですよ。」", pt: "A: Quero comprar uma câmera… B: Se é para comprar câmera, aquela loja é barata." },
    ],
    sources: [js("なら-nara-meaning", "なら"), nk("2020/01/04/jlptn4-grammar-nara", "〜なら（相手が話題にしたことを取り上げて）"), lg("n-nara", "Nなら")],
  },

  // ───────────────────────── Formas com て ─────────────────────────
  {
    id: "te-shimau",
    level: "N4",
    title: "～てしまう／～ちゃう",
    meaning: "acabar fazendo (sem querer, com pena) / terminar completamente",
    formation: ["Verbo (て) + しまう. Coloquial: 〜ちゃう／〜じゃう ({忘|わす}れちゃった, {飲|の}んじゃった)."],
    rule: `Dois sentidos: (1) **algo indesejado ou acidental**, com arrependimento: {財布|さいふ}を なくして しまいました; (2) **concluir completamente**: {宿題|しゅくだい}を {全部|ぜんぶ} やって しまいました.`,
    notes: ["Pistas de arrependimento: {大切|たいせつ}な, うっかり, {困|こま}りました, すみません."],
    contrasts: [
      { with: "ておく", text: "preparação intencional." },
      { with: "てある", text: "estado resultante de uma ação intencional." },
    ],
    examples: [
      { ja: "{電車|でんしゃ}に かさを {忘|わす}れて しまいました。", pt: "Acabei esquecendo o guarda-chuva no trem." },
      { ja: "{買|か}った ケーキを {全部|ぜんぶ} {食|た}べて しまった。", pt: "Comi o bolo que comprei inteirinho." },
    ],
    sources: [js("てしまう-te-shimau-ちゃう-meaning", "てしまう"), lg("teashimaimasu-regret", "〜てしまいます（後悔）"), nk("2020/01/02/jlptn4-grammar-teshimau", "〜てしまう（完了・後悔）")],
  },
  {
    id: "te-oku",
    level: "N4",
    title: "～ておく",
    meaning: "fazer antes, como preparação / deixar como está",
    formation: ["Verbo (て) + おく. Coloquial: 〜とく ({買|か}っとく)."],
    rule: `(1) Fazer algo **com antecedência**, como preparação para um objetivo: {旅行|りょこう}の {前|まえ}に ホテルを {予約|よやく}して おきます. (2) **Deixar** algo no estado em que está: {窓|まど}を {開|あ}けて おいて ください.`,
    notes: ["Só verbos volitivos (日本語教師ネット).", "Pistas: 〜{前|まえ}に, {明日|あした}…ので, あとで {使|つか}う, そのまま."],
    contrasts: [{ with: "てある", text: "foca no estado que ficou (X が Vて ある); ておく foca em quem faz a preparação." }],
    examples: [
      { ja: "{会議|かいぎ}の {前|まえ}に {資料|しりょう}を コピーして おきます。", pt: "Vou tirar cópia dos documentos antes da reunião." },
      { ja: "{使|つか}った あとで、そのまま {置|お}いて おいて ください。", pt: "Depois de usar, deixe como está." },
    ],
    sources: [js("ておく-te-oku-meaning", "ておく"), lg("teokimasu-preparation", "〜ておきます（準備）"), nk("2018/09/19/jlptn4-grammar-teoku", "〜ておく")],
  },
  {
    id: "te-aru",
    level: "N4",
    title: "～てある",
    meaning: "estar ~ (resultado de uma ação feita de propósito por alguém)",
    formation: ["Verbo **transitivo** (て) + ある; o objeto vira sujeito com が: {窓|まど}を {開|あ}ける → {窓|まど}が {開|あ}けて ある."],
    rule: `Descreve o **estado que ficou** depois de alguém fazer algo **intencionalmente** (geralmente como preparação): {窓|まど}が {開|あ}けて あります = a janela está aberta (alguém a abriu de propósito).`,
    notes: [
      "Só verbo transitivo (他動詞). Com intransitivo usa-se ている: {窓|まど}が {開|あ}いて います.",
      "“{窓|まど}が {開|あ}けて います” está errado: {開|あ}ける é transitivo e pede を quando alguém está fazendo a ação ({窓|まど}を {開|あ}けて います = está abrindo a janela).",
    ],
    contrasts: [
      { with: "{自動詞|じどうし}＋ている", text: "{窓|まど}が {開|あ}いて いる — só descreve o estado, sem sugerir intenção." },
      { with: "ておく", text: "a ação de preparar, com quem faz como sujeito." },
    ],
    examples: [
      { ja: "{机|つくえ}の {上|うえ}に {花|はな}が {飾|かざ}って あります。", pt: "Há flores arrumadas sobre a mesa (alguém as colocou)." },
      { ja: "{名前|なまえ}は もう {書|か}いて あります。", pt: "O nome já está escrito." },
    ],
    sources: [lg("tearimasu", "〜てあります（目的を持って行った行為の結果）"), nk("2020/01/02/jlptn4-grammar-tearu", "〜てある（動詞は他動詞）")],
  },
  {
    id: "jidoushi-tadoushi",
    level: "N4",
    title: "{自動詞|じどうし}・{他動詞|たどうし}",
    meaning: "verbos intransitivos (が) × transitivos (を)",
    formation: [
      "Pares comuns (intransitivo／transitivo): {開|あ}く／{開|あ}ける, {閉|し}まる／{閉|し}める, つく／つける, {消|き}える／{消|け}す, {始|はじ}まる／{始|はじ}める, {止|と}まる／{止|と}める, {入|はい}る／{入|い}れる, {出|で}る／{出|だ}す, {落|お}ちる／{落|お}とす, こわれる／こわす.",
    ],
    rule: `**Transitivo**: alguém age sobre um objeto → を: {電気|でんき}を {消|け}す (apagar a luz). **Intransitivo**: a coisa muda “sozinha”, ou o foco é no que aconteceu → が: {電気|でんき}が {消|き}える (a luz apaga).`,
    notes: [
      "Pista: a partícula antes da lacuna. が + verbo de mudança → intransitivo; を (objeto) → transitivo.",
      "Exceção que cai em prova: o を de **lugar/percurso** vai com verbos de movimento intransitivos: {家|いえ}を {出|で}る (não {出|だ}す), {道|みち}を {歩|ある}く, {橋|はし}を {渡|わた}る, {角|かど}を {曲|ま}がる.",
      "{消|き}える e {消|け}す usam o mesmo kanji com leituras diferentes.",
      "Estado: intransitivo + ている ({電気|でんき}が {消|き}えて いる); estado intencional: transitivo + てある ({電気|でんき}が {消|け}して ある).",
    ],
    examples: [
      { ja: "{風|かぜ}で ドアが {閉|し}まりました。", pt: "A porta fechou com o vento." },
      { ja: "{寒|さむ}いので、ドアを {閉|し}めました。", pt: "Como estava frio, fechei a porta." },
    ],
    sources: [js("他動詞-自動詞-transitive-intransitive-verbs-meaning", "他動詞 & 自動詞"), lg("transitive-intransitive", "自動詞・他動詞"), lg("intransitive-verb-teimasu", "自動詞＋ています")],
  },
  {
    id: "te-morau",
    level: "N4",
    title: "～てもらう",
    meaning: "receber o favor de alguém fazer algo (eu “recebo”)",
    formation: ["[quem recebe]は [quem faz o favor]に Verbo (て) + もらう. Humilde: ていただく."],
    rule: `O sujeito é quem **recebe** o favor; quem faz o favor vem com に: {先生|せんせい}に {作文|さくぶん}を {直|なお}して もらいました = o professor corrigiu a minha redação (eu recebi esse favor).`,
    notes: ["Direção: o favor sai de quem está com に e chega ao sujeito.", "てもらえませんか／ていただけませんか = pedido educado."],
    contrasts: [
      { with: "てくれる", text: "o sujeito (が/は) é quem **faz** o favor, e quem recebe sou eu/meu grupo." },
      { with: "てあげる", text: "eu (ou alguém) faço o favor para outra pessoa — nunca para mim." },
    ],
    examples: [
      { ja: "{友|とも}だちに {引|ひ}っ{越|こ}しを {手伝|てつだ}って もらいました。", pt: "Um amigo me ajudou na mudança." },
      { ja: "{姉|あね}に {駅|えき}まで {送|おく}って もらいました。", pt: "Minha irmã me levou até a estação." },
    ],
    sources: [js("てもらう-te-morau-てもらいたい-te-moraitai-meaning", "てもらう"), JLPT_OFFICIAL_2012],
  },
  {
    id: "te-kureru",
    level: "N4",
    title: "～てくれる",
    meaning: "alguém faz algo por mim (ou pelo meu grupo)",
    formation: ["[quem faz o favor]が／は Verbo (て) + くれる. Respeitoso: てくださる."],
    rule: `O sujeito é quem **faz** o favor, e o beneficiado é o falante ou alguém do seu grupo: {知|し}らない {人|ひと}が {駅|えき}まで {連|つ}れて {行|い}って くれました.`,
    notes: [
      "くれる sempre aponta para o lado de quem fala. Nunca: {私|わたし}が {友|とも}だちに …て くれる.",
      "Se quem fez o favor está com に, o verbo certo é もらう; se está com が/は, é くれる (quando quem recebe sou eu ou meu grupo; se for outra pessoa, あげる).",
    ],
    contrasts: [
      { with: "てもらう", text: "sujeito = quem recebe." },
      { with: "てあげる", text: "favor que vai para outra pessoa." },
    ],
    examples: [
      { ja: "{母|はは}が お{弁当|べんとう}を {作|つく}って くれました。", pt: "Minha mãe fez marmita para mim." },
      { ja: "{田中|たなか}さんが {傘|かさ}を {貸|か}して くれました。", pt: "O Tanaka me emprestou o guarda-chuva." },
    ],
    sources: [js("てくれる-te-kureru-てくれた-te-kureta-meaning", "てくれる"), JLPT_OFFICIAL_2012],
  },
  {
    id: "te-itadakemasen-ka",
    level: "N4",
    title: "～ていただけませんか",
    meaning: "poderia, por favor, ~? (pedido muito educado)",
    formation: ["Verbo (て) + いただけませんか. Mais casual: てもらえませんか, てくれませんか, てくれない？"],
    rule: `Pedido **muito educado**, usado com desconhecidos, clientes e superiores: もう {少|すこ}し {大|おお}きい サイズを {見|み}せて いただけませんか. Literalmente: “eu não poderia receber (いただく, humilde) o favor de você ~?”.`,
    notes: ["させて いただけませんか = “poderia me deixar ~?” (pedido de permissão)."],
    contrasts: [{ with: "てあげる／てさしあげる", text: "fazer algo para outra pessoa; não servem para pedir." }],
    examples: [
      { ja: "すみません、{写真|しゃしん}を {撮|と}って いただけませんか。", pt: "Com licença, poderia tirar uma foto (minha/nossa)?" },
      { ja: "この {漢字|かんじ}の {読|よ}み{方|かた}を {教|おし}えて いただけませんか。", pt: "Poderia me ensinar a leitura deste kanji?" },
    ],
    sources: [js("ていただけませんか-te-itadakemasen-ka-meaning", "ていただけませんか"), nk("2020/01/02/jlptn4-grammar-teitadakemasenka", "〜ていただけませんか")],
  },
  {
    id: "te-hoshii",
    level: "N4",
    title: "～てほしい",
    meaning: "querer que outra pessoa faça",
    formation: [
      "[pessoa]に Verbo (て) + ほしい; negativo: Verbo (ない) + で ほしい.",
      "Com coisas e fenômenos (quem “age” não é pessoa), usa-se が: {早|はや}く {雨|あめ}が やんで ほしい.",
    ],
    rule: `Expressa o desejo de que **outra pessoa** faça algo: {子|こ}どもには {元気|げんき}に {育|そだ}って ほしいです = quero que meus filhos cresçam saudáveis.`,
    notes: ["ほしい é desejo de quem fala; para o desejo de terceiros usa-se ほしがって いる."],
    contrasts: [
      { with: "たい", text: "eu quero **fazer**." },
      { with: "てもらいたい", text: "sentido muito parecido com てほしい." },
    ],
    examples: [
      { ja: "{明日|あした}は {早|はや}く {来|き}て ほしいです。", pt: "Quero que você venha cedo amanhã." },
      { ja: "この ことは だれにも {言|い}わないで ほしい。", pt: "Não quero que você conte isso a ninguém." },
    ],
    sources: [js("て欲しい-てほしい-te-hoshii-meaning", "てほしい"), BUNPRO_LIST],
  },
  {
    id: "te-miru",
    level: "N4",
    title: "～てみる",
    meaning: "experimentar fazer (para ver como é)",
    formation: ["Verbo (て) + みる: {食|た}べて みる, {行|い}って みたい."],
    rule: `Fazer algo **para experimentar** e ver o resultado: {一度|いちど} {着物|きもの}を {着|き}て みたいです.`,
    examples: [
      { ja: "この {料理|りょうり}、{作|つく}って みませんか。", pt: "Que tal experimentar fazer este prato?" },
      { ja: "{新|あたら}しい {店|みせ}に {行|い}って みました。", pt: "Fui experimentar a loja nova." },
    ],
    sources: [js("てみる-te-miru-てみたい-te-mitai-meaning", "てみる"), BUNPRO_LIST],
  },

  // ───────────────────────── Aparência, boato, comparação, expectativa ─────────────────────────
  {
    id: "sou-da-denbun",
    level: "N4",
    title: "～そうだ（{伝聞|でんぶん}）",
    meaning: "dizem que / ouvi dizer que (informação de terceiros)",
    formation: [
      "Forma simples **completa** + そうだ: {降|ふ}る そうだ, {降|ふ}った そうだ, {高|たか}い そうだ, {静|しず}かだ そうだ, {学生|がくせい}だ そうだ.",
    ],
    rule: `Repassa uma informação **ouvida ou lida**. A fonte vem com 〜に よると／〜に よれば／〜の {話|はなし}では: {天気予報|てんきよほう}に よると、{明日|あした}は {雨|あめ}が {降|ふ}る そうです (Langoal: 「情報の出どころは『～によると』『～によれば』『～では』などで表す」).`,
    notes: [
      "Compare a ligação: {降|ふ}る そうだ (dizem que vai chover) × {降|ふ}り そうだ (parece que vai chover).",
      "Não tem forma そうな／そうに: não modifica substantivo.",
      "O tempo verbal fica **antes** de そう: {降|ふ}った そうです (dizem que choveu).",
    ],
    contrasts: [
      { with: "そうだ（{様態|ようたい}）", text: "impressão própria pela aparência; liga-se ao radical." },
      { with: "らしい／ようだ", text: "dedução a partir de indícios (らしい também pode repassar algo ouvido, com menos certeza que そうだ)." },
    ],
    examples: [
      { ja: "ニュースに よると、{駅|えき}の {前|まえ}に {新|あたら}しい {店|みせ}が できる そうです。", pt: "Segundo o noticiário, vai abrir uma loja nova em frente à estação." },
      { ja: "{田中|たなか}さんの {話|はなし}では、あの {先生|せんせい}は とても {厳|きび}しい そうです。", pt: "Pelo que o Tanaka disse, aquele professor é muito rigoroso." },
    ],
    sources: [js("そうだ-sou-da-i-heard-that", "そうだ (I heard that)"), lg("soudesu-hearsay", "〜そうです（伝聞）"), nk("2019/02/24/jlptn4-grammar-soudesu", "〜そうです（伝聞）")],
  },
  {
    id: "sou-da-youtai",
    level: "N4",
    title: "～そうだ（{様態|ようたい}）・～そうな・～そうに",
    meaning: "parece / tem cara de (pelo que eu vejo) — com verbos: está para",
    formation: [
      "Verbo (radical da forma ます) + そう: {降|ふ}りそう, {落|お}ちそう.",
      "Adjetivo い sem い + そう: おいしそう, {高|たか}そう. Exceções: いい→よさそう, ない→なさそう.",
      "Qualquer negativo troca o い final por さ: {来|こ}ない → {来|こ}なさそう, じゃない → じゃなさそう (Tae Kim, p. 365).",
      "Adjetivo な + そう: {元気|げんき}そう, {静|しず}かそう.",
      "Conjuga como adjetivo な: antes de substantivo **そうな** (おいしそうな ケーキ); antes de verbo/adjetivo **そうに** ({楽|たの}しそうに {話|はな}す).",
    ],
    rule: `É a sua **impressão**, baseada no que você vê ou sente agora: おいしそうな ケーキ (bolo com cara de gostoso); {雨|あめ}が {降|ふ}りそうです (parece que vai chover / está para chover).`,
    notes: [
      "Adjetivos que já descrevem a aparência (きれい, かわいい, {赤|あか}い) não usam そう: você já está vendo (Langoal e 日本語教師ネット). Armadilha: かわいそう existe, mas significa “coitado / dá pena”, não “parece fofo”.",
      "Não se liga a substantivo (× {学生|がくせい}そうだ). Para isso: らしい／みたい／のようだ.",
    ],
    contrasts: [{ with: "そうだ（{伝聞|でんぶん}）", text: "forma completa ({降|ふ}る そうだ), informação de terceiros e sem forma そうな." }],
    examples: [
      { ja: "{子|こ}どもたちが {楽|たの}しそうに {遊|あそ}んで います。", pt: "As crianças estão brincando, com cara de quem está se divertindo." },
      { ja: "{荷物|にもつ}が {落|お}ちそうですよ。", pt: "A bagagem está para cair!" },
    ],
    sources: [
      js("そうに-そうな-sou-ni-sou-na-meaning", "そうに・そうな"),
      lg("soudesu-look-like", "〜そうです（様態）"),
      nk("2019/08/08/jlptn4-grammar-soudesu-2", "〜そうです（様態: かわいい・きれいには使えない）"),
    ],
  },
  {
    id: "you-na-you-ni",
    level: "N4",
    title: "～のような／～のように（{比喩|ひゆ}・{例示|れいじ}）",
    meaning: "como / igual a (comparação ou exemplo)",
    formation: [
      "Substantivo + の + ような + substantivo: {日本人|にほんじん}の ような {発音|はつおん}.",
      "Substantivo + の + ように + verbo/adjetivo: {日本人|にほんじん}の ように {話|はな}す.",
      "Coloquial: substantivo + みたいな／みたいに (sem の).",
    ],
    rule: `Compara ou dá exemplo: “como ~”. **ような** modifica substantivo; **ように** modifica verbo ou adjetivo: あの {人|ひと}は {日本人|にほんじん}の ように {日本語|にほんご}が {上手|じょうず}です.`,
    notes: [
      "Com substantivo, ような/ように exigem の (× {日本人|にほんじん}ように). Com みたい, sem の ({日本人|にほんじん}みたいに).",
      "É a mesma lógica dos adjetivos な: 〜な antes de substantivo, 〜に antes de verbo/adjetivo.",
      "No fim da frase, ようだ também expressa **dedução**: ここには {誰|だれ}も いない ようだ (parece que não há ninguém). Mas para “parece gostoso” (aparência), use おいしそう: “おいしい ようだ” soaria como “aparentemente é gostoso”, o que pode até soar rude (Tae Kim, p. 359–360).",
    ],
    examples: [
      { ja: "{雪|ゆき}の ように {白|しろ}い。", pt: "Branco como a neve." },
      { ja: "{東京|とうきょう}の ような {大|おお}きい {町|まち}に {住|す}みたいです。", pt: "Quero morar numa cidade grande como Tóquio." },
    ],
    sources: [js("ように-ような-you-ni-na-meaning", "ように・ような"), nk("2020/07/21/jlptn4-grammar-youna", "〜ような（例示）"), BUNPRO_LIST],
  },
  {
    id: "hazu-da",
    level: "N4",
    title: "～はずだ",
    meaning: "deve (com certeza) ~ — expectativa com base em um motivo",
    formation: ["Verbo / adjetivo い (forma simples) + はずだ; adjetivo な + な + はずだ; substantivo + の + はずだ."],
    rule: `Conclusão **lógica**, a partir de um dado: {10年|じゅうねん} {中国|ちゅうごく}に {住|す}んで いたので、{中国語|ちゅうごくご}が {話|はな}せる はずです = como morou dez anos na China, com certeza fala chinês.`,
    notes: [
      "Costuma vir com o motivo explícito (〜から／〜ので).",
      "はずだった = era para ser ~ (mas não foi) (日本語教師ネット).",
      "Também explica algo que se acaba de entender (“não é à toa que ~”): エアコンが {壊|こわ}れて いる。{暑|あつ}い はずだ.",
    ],
    contrasts: [
      { with: "はずが ない", text: "é impossível que ~." },
      { with: "つもり／{予定|よてい}", text: "intenção/plano de quem fala, não dedução." },
    ],
    examples: [
      { ja: "{荷物|にもつ}は {昨日|きのう} {送|おく}ったので、{明日|あした} {着|つ}く はずです。", pt: "Mandei a encomenda ontem, então deve chegar amanhã." },
      { ja: "{日曜日|にちようび}だから、{銀行|ぎんこう}は {休|やす}みの はずだ。", pt: "Como é domingo, o banco deve estar fechado." },
    ],
    sources: [js("はずだ-hazu-da-meaning", "はずだ"), lg("hazuda", "〜はずです"), nk("2018/10/01/jlptn4-grammar-hazuda", "〜はずだ")],
  },
  {
    id: "hazu-ga-nai",
    level: "N4",
    title: "～はずがない",
    meaning: "não tem como ~ / é impossível que ~",
    formation: ["Mesma ligação de はずだ + が ない: {来|く}る はずが ない, {静|しず}かな はずが ない."],
    rule: `Nega com força, a partir de um motivo: {山田|やまだ}さんは {今|いま} アメリカに いますから、{今日|きょう}の パーティーに {来|く}る はずが ありません.`,
    notes: ["{来|こ}ない はずだ (“não deve vir”) é expectativa; はずが ない (“não tem como vir”) é mais forte."],
    contrasts: [{ with: "ことが ない", text: "“nunca aconteceu / não costuma acontecer” — fala de experiência ou frequência, não de uma situação específica." }],
    examples: [{ ja: "あんなに {練習|れんしゅう}したんだから、{負|ま}ける はずが ない。", pt: "Treinamos tanto, não tem como perder." }],
    sources: [js("はずがない-hazu-ga-nai-meaning", "はずがない"), BUNPRO_LIST],
  },
  {
    id: "kamoshirenai",
    level: "N4",
    title: "～かもしれない",
    meaning: "talvez / pode ser que (possibilidade, sem certeza)",
    formation: [
      "Verbo / adjetivo い (forma simples) + かもしれない: {降|ふ}る かもしれない, {高|たか}い かもしれない.",
      "Adjetivo な / substantivo **sem だ** + かもしれない: {雨|あめ}かもしれない, {静|しず}かかもしれない.",
      "Polido: かもしれません.",
    ],
    rule: `Indica uma **possibilidade** — o falante não tem certeza (pode acontecer ou não): {午後|ごご}は {雨|あめ}が {降|ふ}る かもしれません = à tarde pode ser que chova.`,
    contrasts: [
      { with: "はずだ", text: "certeza baseada em um motivo." },
      { with: "でしょう", text: "“provavelmente”: mais confiante que かもしれない." },
    ],
    examples: [
      { ja: "{道|みち}が {混|こ}んで いるので、{少|すこ}し {遅|おく}れる かもしれません。", pt: "Como a rua está congestionada, pode ser que eu me atrase um pouco." },
      { ja: "あの {人|ひと}は {先生|せんせい}かもしれない。", pt: "Aquela pessoa talvez seja professor." },
    ],
    sources: [js("かもしれない-kamo-shirenai-meaning", "かもしれない"), lg("kamosiremasen", "〜かもしれません")],
  },
  {
    id: "ikou-to-omou",
    level: "N4",
    title: "{意向形|いこうけい}＋と{思|おも}う",
    meaning: "estou pensando em ~ (intenção de quem fala)",
    formation: [
      "Forma volitiva — Grupo 1: -u → -ou ({行|い}く→{行|い}こう, {飲|の}む→{飲|の}もう). Grupo 2: る→よう ({食|た}べよう). する→しよう, {来|く}る→{来|こ}よう.",
      "+ と{思|おも}う／と{思|おも}って いる.",
    ],
    rule: `Expressa a **intenção** de quem fala: {夏休|なつやす}みに {北海道|ほっかいどう}へ {行|い}こうと {思|おも}って います = estou pensando em ir a Hokkaido nas férias de verão.`,
    notes: [
      "Dentro de と{思|おも}う vai a forma **simples**: × {行|い}きましょうと {思|おも}います.",
      "と{思|おも}って いる: intenção que já existe há algum tempo; pode ser de outra pessoa.",
    ],
    contrasts: [
      { with: "つもりだ", text: "intenção mais firme." },
      { with: "{予定|よてい}だ", text: "plano/agenda já marcada." },
    ],
    examples: [{ ja: "{来年|らいねん}、{日本語能力試験|にほんごのうりょくしけん}を {受|う}けようと {思|おも}って います。", pt: "Estou pensando em fazer o JLPT no ano que vem." }],
    sources: [js("ようと思う-you-to-omou-meaning", "ようと思う"), lg("youtoomotteimasu", "〜(よ)うと思っています"), nk("2019/12/31/jlptn4-grammar-youtoomou", "〜ようと思う")],
  },

  // ───────────────────────── Tempo e aspecto ─────────────────────────
  {
    id: "tokoro",
    level: "N4",
    title: "～ところだ（るところ・ているところ・たところ）",
    meaning: "em que ponto da ação: prestes a / no meio de / acabou de",
    formation: [
      "Verbo (dicionário) + ところだ: prestes a.",
      "Verbo (ている) + ところだ: bem no meio de.",
      "Verbo (た) + ところだ: acabou de (agorinha).",
    ],
    rule: `Diz **em que momento** de uma ação se está: {今|いま} {出|で}かける ところです (estou de saída); {今|いま} {食|た}べて いる ところです (estou comendo agora mesmo); {今|いま} {帰|かえ}って きた ところです (acabei de voltar).`,
    notes: ["たところ vale só para “agorinha”: não combina com {先月|せんげつ}, {去年|きょねん}… (aí se usa たばかり)."],
    contrasts: [{ with: "たばかり", text: "“acabei de” pela sensação de quem fala; aceita {先月|せんげつ}, {去年|きょねん}." }],
    examples: [
      { ja: "A「{宿題|しゅくだい}は？」 B「{今|いま} やって いる ところだよ。」", pt: "A: E a lição? B: Estou fazendo agora mesmo." },
      { ja: "{今|いま} {駅|えき}に {着|つ}いた ところです。", pt: "Acabei de chegar à estação." },
    ],
    sources: [js("ているところ-teiru-tokoro-meaning", "ているところ"), lg("tokoroda", "〜ところだ"), nk("2020/01/03/jlptn4-grammar-tokoroda", "〜ところだ")],
  },
  {
    id: "ta-bakari",
    level: "N4",
    title: "～たばかり",
    meaning: "acabei de ~ (pela sensação de quem fala)",
    formation: ["Verbo (た) + ばかり: {来|き}た ばかり. Antes de substantivo: たばかりの N. Com contraste: たばかりなのに."],
    rule: `“Faz pouco tempo que ~”, segundo a **percepção** de quem fala: mesmo que tenha passado uma semana ou um mês, se parece pouco, usa-se たばかり: {先月|せんげつ} {会社|かいしゃ}に {入|はい}った ばかりです (exemplo do Langoal).`,
    notes: ["Muitas vezes vem seguido de contraste ou reclamação: {買|か}った ばかりなのに、もう こわれた."],
    contrasts: [{ with: "たところ", text: "momento imediatamente depois (objetivo); não aceita {先週|せんしゅう}, {先月|せんげつ}…" }],
    examples: [
      { ja: "{先週|せんしゅう} {日本|にほん}に {来|き}た ばかりなので、まだ {道|みち}が わかりません。", pt: "Cheguei ao Japão semana passada, então ainda não conheço os caminhos." },
      { ja: "{買|か}った ばかりの くつが よごれて しまった。", pt: "O sapato que eu tinha acabado de comprar sujou." },
    ],
    sources: [js("たばかり-ta-bakari-meaning", "たばかり"), lg("tabakari", "〜たばかり（先月会社に入ったばかり）"), nk("2018/04/12/jlptn4-grammar-tabakari", "〜たばかり")],
  },
  {
    id: "aida-aidani",
    level: "N4",
    title: "～{間|あいだ}／～{間|あいだ}に",
    meaning: "間 = durante todo o período; 間に = em algum momento dentro do período",
    formation: ["Verbo (ている／simples) + 間（に）; adjetivo い + 間（に）; adjetivo な + な + 間（に）; substantivo + の + 間（に）."],
    rule: `**間**: a outra ação/estado dura o período **inteiro**: {母|はは}が {出|で}かけて いる {間|あいだ}、ずっと テレビを {見|み}て いました.

**間に**: uma ação acontece e **termina** dentro do período, sem ocupá-lo inteiro (pode ser instantânea ou levar algum tempo): {母|はは}が {出|で}かけて いる {間|あいだ}に、{友|とも}だちから {電話|でんわ}が ありました／{部屋|へや}を そうじしました.`,
    notes: [
      "Teste: cabe “o tempo todo” (ずっと)? → 間. É algo que acontece e termina dentro do período? → 間に.",
      "日本語教師ネット: depois de 間 vem ação/estado contínuo; depois de 間に não se usa expressão contínua.",
    ],
    examples: [
      { ja: "{寝|ね}て いる {間|あいだ}に {地震|じしん}が ありました。", pt: "Houve um terremoto enquanto eu dormia." },
      { ja: "{夏休|なつやす}みの {間|あいだ}、ずっと アルバイトを して いました。", pt: "Trabalhei meio período durante todas as férias de verão." },
    ],
    sources: [js("間に-aida-ni-meaning", "間に"), nk("2019/05/02/jlptn4-grammar-aida", "〜間（継続）"), nk("2019/04/18/jlptn4-grammar-aidani", "〜間に（継続性のある表現は使えない）"), JLPT_OFFICIAL_2018],
  },
  {
    id: "made-madeni",
    level: "N4",
    title: "～まで／～までに",
    meaning: "まで = até (continua até lá); までに = até (prazo, antes de)",
    formation: ["Substantivo de tempo / Verbo (dicionário) + まで／までに."],
    rule: `**まで**: a ação ou estado **continua** até aquele ponto: 5{時|じ}まで {働|はたら}きます (trabalho até as 5). **までに**: a ação acontece **antes** daquele ponto — é um **prazo**: 5{時|じ}までに {帰|かえ}ります (volto antes das 5).`,
    notes: ["Verbos pontuais (devolver, entregar, chegar, terminar) com prazo pedem までに: {金曜日|きんようび}までに {出|だ}して ください."],
    examples: [
      { ja: "{9時|くじ}までに {学校|がっこう}に {行|い}かなければ なりません。", pt: "Tenho que chegar à escola até as 9h." },
      { ja: "{9時|くじ}から {12時|じゅうにじ}まで {勉強|べんきょう}します。", pt: "Estudo das 9h às 12h." },
    ],
    sources: [js("までに-made-ni-meaning", "までに"), lg("made-and-madeni", "まで・までに（継続・期限）"), nk("2019/08/24/jlptn4-grammar-madeni", "〜までに"), JLPT_OFFICIAL_2012],
  },
  {
    id: "mama",
    level: "N4",
    title: "～まま",
    meaning: "do jeito que está/estava, sem mudar o estado",
    formation: ["Verbo (た) + まま: {開|あ}けた まま; Verbo (ない) + まま; substantivo + の + まま; adjetivo い + まま; adjetivo な + な + まま."],
    rule: `A segunda ação acontece **mantendo um estado** que normalmente mudaria: {窓|まど}を {開|あ}けた まま {寝|ね}て しまいました = dormi com a janela aberta (não fechei).`,
    notes: ["Liga-se à forma た (estado resultante), não a ている: × {開|あ}けて いる まま."],
    examples: [
      { ja: "くつを はいた まま {部屋|へや}に {入|はい}らないで ください。", pt: "Não entre no quarto de sapatos." },
      { ja: "{買|か}った まま {読|よ}んで いない {本|ほん}が たくさん あります。", pt: "Tenho muitos livros que comprei e nunca li." },
    ],
    sources: [js("まま-mama-meaning", "まま"), nk("2019/05/24/jlptn4-grammar-mama", "〜まま"), JLPT_OFFICIAL_2012],
  },
  {
    id: "nagara",
    level: "N4",
    title: "～ながら",
    meaning: "enquanto (duas ações ao mesmo tempo, mesma pessoa)",
    formation: ["Verbo (radical da forma ます) + ながら: {聞|き}きながら, {食|た}べながら."],
    rule: `Duas ações **simultâneas** feitas pela **mesma pessoa**; a ação principal é a do fim da frase: {音楽|おんがく}を {聞|き}きながら {勉強|べんきょう}します (o principal é estudar).`,
    notes: ["Liga-se ao radical da forma ます (× {聞|き}くながら).", "Sujeito único: não serve para “enquanto ele fazia X, eu fazia Y”."],
    examples: [{ ja: "{歩|ある}きながら スマホを {見|み}ないで ください。", pt: "Não fique olhando o celular enquanto anda." }],
    sources: [js("ながら-nagara-meaning", "ながら"), lg("nagara", "〜ながら")],
  },

  // ───────────────────────── Quantidade, restrição, grau ─────────────────────────
  {
    id: "te-bakari",
    level: "N4",
    title: "～てばかりいる／Nばかり",
    meaning: "só fica ~ / nada além de ~ (com crítica)",
    formation: ["Verbo (て) + ばかり + いる: {遊|あそ}んで ばかり いる.", "Substantivo + ばかり: お{菓子|かし}ばかり {食|た}べる."],
    rule: `“Não faz outra coisa a não ser ~”, geralmente com **crítica**: {弟|おとうと}は ゲームを して ばかり いて、{勉強|べんきょう}しません.`,
    notes: ["Na forma verbal, ばかり entra **entre** て e いる: して ばかり いる."],
    contrasts: [
      { with: "だけ", text: "“só” neutro (limite), sem crítica." },
      { with: "しか〜ない", text: "“só” com verbo negativo, ênfase em ser pouco." },
    ],
    examples: [{ ja: "{父|ちち}は {休|やす}みの {日|ひ}、{寝|ね}て ばかり います。", pt: "Meu pai, nos dias de folga, só fica dormindo." }],
    sources: [js("ばかり-bakari-meaning", "ばかり"), nk("2019/11/27/jlptn4-grammar-bakari", "〜ばかり（マイナスの意味）")],
  },
  {
    id: "shika-nai",
    level: "N4",
    title: "～しか～ない",
    meaning: "só ~ (e é pouco)",
    formation: ["Substantivo (+ partícula) + しか + verbo/adjetivo **negativo**: 500{円|えん}しか ありません."],
    rule: `“Só ~”, sentindo que é **pouco** ou menos do que se esperava. O verbo fica sempre na negativa, mas o sentido é restritivo: {財布|さいふ}に 500{円|えん}しか ありません = só tenho 500 ienes na carteira.`,
    notes: [
      "しか exige negativa. だけ aceita afirmativa e negativa (500{円|えん}だけ あります; {田中|たなか}さんだけ {来|こ}なかった = só o Tanaka não veio). No mesmo fato, 500{円|えん}しか ありません enfatiza que é pouco.",
      "しか substitui が/を, mas fica depois de に/で/から/まで: {日曜日|にちようび}にしか {休|やす}めません; ここからしか {見|み}えない (Tae Kim, p. 345: しか vem depois de から e まで).",
    ],
    examples: [{ ja: "{昨日|きのう}は 3{時間|じかん}しか {寝|ね}ませんでした。", pt: "Ontem só dormi três horas." }],
    sources: [nk("2019/08/15/jlptn4-grammar-shika", "〜しか（動詞は常に否定）"), JT4Y_LIST, BUNPRO_LIST],
  },
  {
    id: "sugiru",
    level: "N4",
    title: "～すぎる",
    meaning: "demais / excessivamente",
    formation: [
      "Verbo (radical da forma ます) + すぎる: {飲|の}みすぎる.",
      "Adjetivo い **sem い** + すぎる: {大|おお}きすぎる (いい→よすぎる).",
      "Adjetivo な **sem な** + すぎる: {簡単|かんたん}すぎる.",
      "Conjuga como verbo do grupo 2: すぎて, すぎた.",
    ],
    rule: `Excesso, geralmente com resultado ruim: この {問題|もんだい}は {簡単|かんたん}すぎて、{練習|れんしゅう}に なりません.`,
    notes: [
      "× {簡単|かんたん}なすぎる, × {大|おお}きいすぎる.",
      "Com negativo, o い de ない vira さ: {食|た}べなさすぎる (come pouco demais), {自信|じしん}が なさすぎる (Tae Kim, p. 350).",
    ],
    examples: [{ ja: "ゆうべ {食|た}べすぎて、おなかが {痛|いた}いです。", pt: "Comi demais ontem à noite e estou com dor de barriga." }],
    sources: [nk("2019/05/06/jlptn4-grammar-sugiru", "〜すぎる"), lg("sugimasu", "〜すぎます"), JLPT_OFFICIAL_2012],
  },
  {
    id: "yasui-nikui",
    level: "N4",
    title: "～やすい／～にくい",
    meaning: "fácil de ~ / difícil de ~",
    formation: ["Verbo (radical da forma ます) + やすい／にくい: {書|か}きやすい, {読|よ}みにくい. Conjugam como adjetivo い."],
    rule: `やすい = é fácil fazer (ou tende a acontecer): この ペンは {書|か}きやすい. にくい = é difícil fazer: この {字|じ}は {読|よ}みにくい.`,
    notes: ["やすい também indica tendência: {忘|わす}れやすい (esquece fácil), こわれやすい (quebra fácil)."],
    examples: [{ ja: "この くつは {軽|かる}くて、{歩|ある}きやすいです。", pt: "Este sapato é leve e fácil de andar." }],
    sources: [js("やすい-yasui-meaning", "やすい"), js("にくい-nikui-meaning", "にくい"), lg("yasui-nikui", "〜やすい・〜にくい"), nk("2019/05/02/jlptn4-grammar-yasui", "〜やすい")],
  },

  // ───────────────────────── Perguntas embutidas ─────────────────────────
  {
    id: "ka-dou-ka",
    level: "N4",
    title: "～かどうか",
    meaning: "se ~ ou não (pergunta de sim/não dentro da frase)",
    formation: ["Verbo / adjetivo い (forma simples) + かどうか; adjetivo な / substantivo **sem だ** + かどうか: {本当|ほんとう}かどうか."],
    rule: `Embute uma pergunta de **sim ou não**: パーティーに {行|い}く かどうか、まだ {決|き}めて いません = ainda não decidi se vou à festa (ou não).`,
    notes: ["Se a pergunta tem **palavra interrogativa** (なに, だれ, いつ, どこ, {何時|なんじ}, どうやって…), não se usa かどうか — usa-se só か."],
    contrasts: [{ with: "{疑問詞|ぎもんし}＋か", text: "pergunta aberta (com interrogativo)." }],
    examples: [{ ja: "おいしい かどうか、{食|た}べて みないと わかりません。", pt: "Só provando para saber se é gostoso ou não." }],
    sources: [js("かどうか-ka-dou-ka-meaning", "かどうか"), nk("2020/01/28/jlptn4-grammar-kadouka", "〜かどうか（疑問詞を使っていない疑問文）")],
  },
  {
    id: "gimonshi-ka",
    level: "N4",
    title: "{疑問詞|ぎもんし}＋か（{間接疑問|かんせつぎもん}）",
    meaning: "pergunta com interrogativo embutida na frase",
    formation: ["Interrogativo … + forma simples + か: {何時|なんじ}に {始|はじ}まる か; adjetivo な / substantivo sem だ: だれ か, どんな {人|ひと} か."],
    rule: `Embute uma pergunta **aberta** (com palavra interrogativa): {会議|かいぎ}が {何時|なんじ}に {始|はじ}まる か、{教|おし}えて ください.`,
    notes: ["× {何時|なんじ}に {始|はじ}まる かどうか. Regra: tem interrogativo → か; não tem → かどうか."],
    examples: [{ ja: "{誰|だれ}が パーティーに {来|く}る か、{知|し}って いますか。", pt: "Você sabe quem vem à festa?" }],
    sources: [nk("2020/01/28/jlptn4-grammar-ka", "〜か（間接疑問文）"), nk("2020/01/28/jlptn4-grammar-kadouka", "〜かどうか")],
  },

  // ───────────────────────── Keigo ─────────────────────────
  {
    id: "sonkeigo",
    level: "N4",
    title: "{尊敬語|そんけいご}（いらっしゃる・{召|め}し{上|あ}がる・お～になる）",
    meaning: "linguagem de respeito: eleva as ações do outro",
    formation: [
      "Verbos especiais: いる／{行|い}く／{来|く}る → いらっしゃる; {食|た}べる／{飲|の}む → {召|め}し{上|あ}がる; {言|い}う → おっしゃる; {見|み}る → ご{覧|らん}に なる; する → なさる; くれる → くださる.",
      "Regra geral: お + radical (ます) + に なる: お{帰|かえ}りに なる, お{待|ま}ちに なる. Com substantivo: ご + N + に なる (ご{利用|りよう}に なる). Verbos que têm forma especial não usam essa regra (× お{見|み}に なる → ご{覧|らん}に なる).",
      "Também existe o respeito com れる／られる (igual à passiva): {先生|せんせい}が {書|か}かれた {本|ほん}, {社長|しゃちょう}は {何時|なんじ}に {来|こ}られますか.",
      "Pedido: お + radical + ください: お{待|ま}ち ください.",
    ],
    rule: `Usado para as **ações de outra pessoa** a quem se deve respeito (cliente, chefe, professor): {社長|しゃちょう}は {何時|なんじ}に いらっしゃいますか; どうぞ {召|め}し{上|あ}がって ください.`,
    notes: ["Nunca para as próprias ações (× {私|わたし}は {召|め}し{上|あ}がります)."],
    contrasts: [{ with: "{謙譲語|けんじょうご}", text: "rebaixa as **suas** ações: いただく, {参|まい}る, おる, いたす, お〜する." }],
    examples: [
      { ja: "{部長|ぶちょう}は {今|いま} {会議室|かいぎしつ}に いらっしゃいます。", pt: "O diretor está na sala de reunião agora." },
      { ja: "お{客|きゃく}さまは {何|なに}を {召|め}し{上|あ}がりますか。", pt: "O que o(a) senhor(a) vai querer (comer ou beber)?" },
    ],
    sources: [js("いらっしゃる-irassharu-meaning", "いらっしゃる"), js("お～になる-o-ni-naru-meaning", "お～になる"), lg("special-respect", "特別な尊敬語"), lg("o-ninarimasu", "お〜になります")],
  },
  {
    id: "kenjougo",
    level: "N4",
    title: "{謙譲語|けんじょうご}（{参|まい}る・いたす・お～する）",
    meaning: "linguagem humilde: rebaixa as suas próprias ações",
    formation: [
      "Verbos especiais: {行|い}く／{来|く}る → {参|まい}る; いる → おる; する → いたす; {食|た}べる／{飲|の}む／もらう → いただく; {言|い}う → {申|もう}す; {見|み}る → {拝見|はいけん}する; あげる → さしあげる; {聞|き}く／{訪|たず}ねる → {伺|うかが}う; {会|あ}う → お{目|め}に かかる; {知|し}る → {存|ぞん}じる.",
      "Regra geral: お + radical (ます) + する／いたす: お{持|も}ちします, お{送|おく}りします; ご + substantivo + する: ご{案内|あんない}します.",
    ],
    rule: `Usado para as **suas próprias ações** (ou do seu grupo) diante de alguém a quem se deve respeito — você se rebaixa: {私|わたし}が {駅|えき}まで お{送|おく}りします; {明日|あした} 10{時|じ}に {参|まい}ります.`,
    notes: [
      "Erro típico: usar お〜に なる para si mesmo, ou お〜する para a ação do cliente.",
      "お〜する só se usa quando a ação é feita **para** a outra pessoa ou a envolve (お{持|も}ちします, お{送|おく}りします, ご{案内|あんない}します). Para ações que não envolvem ninguém, não serve (× お{起|お}きします); aí se usa o verbo especial ou a forma polida comum.",
    ],
    contrasts: [{ with: "{尊敬語|そんけいご}", text: "eleva as ações do outro." }],
    examples: [
      { ja: "{荷物|にもつ}を お{持|も}ちしましょうか。", pt: "Posso levar a sua bagagem?" },
      { ja: "{明日|あした}の {午後|ごご}、そちらに {参|まい}ります。", pt: "Amanhã à tarde vou até aí." },
    ],
    sources: [js("いたします-itashimasu-meaning", "いたします"), lg("o-shimasu", "お/ご〜します"), lg("special-humble", "特別な謙譲語")],
  },
  {
    id: "sasete-kudasai",
    level: "N4",
    title: "～させてください／～させていただけませんか",
    meaning: "deixe-me ~ / poderia me deixar ~? (pedir permissão)",
    formation: ["Causativa (て) + ください／いただけませんか: {帰|かえ}らせて ください, {休|やす}ませて いただけませんか."],
    rule: `Pede **permissão** para você mesmo fazer algo: {体|からだ}の {具合|ぐあい}が {悪|わる}いので、{早|はや}く {帰|かえ}らせて ください = como não estou bem, deixe-me ir embora cedo.`,
    notes: ["Quem faz a ação é **quem pede**. Se é para o outro fazer, usa-se só て ください."],
    examples: [
      { ja: "この {仕事|しごと}、ぜひ {私|わたし}に やらせて ください。", pt: "Por favor, deixe-me fazer este trabalho." },
      { ja: "もう {少|すこ}し {考|かんが}えさせて ください。", pt: "Deixe-me pensar um pouco mais." },
    ],
    sources: [js("させてください-sasete-kudasai-meaning", "させてください"), nk("2018/07/25/jlptn4-grammar-sasetekudasai", "〜させてください"), lg("saseteitadakemasenka", "〜させていただけませんか")],
  },

  // ───────────────────────── Desejo, conselho, obrigação ─────────────────────────
  {
    id: "tagaru",
    level: "N4",
    title: "～たがる／～がる",
    meaning: "desejo/sentimento de **outra pessoa** (descrito de fora)",
    formation: ["Verbo (radical) + たがる, normalmente たがって いる: {買|か}いたがって いる.", "Adjetivo de sentimento sem い/な + がる: ほしがる, こわがる, さびしがる."],
    rule: `Em japonês, só **eu** posso afirmar diretamente o que sinto ou quero (たい, ほしい, うれしい). Para outra pessoa, descreve-se o que se observa com たがる／がる: {娘|むすめ}は {新|あたら}しい ゲームを {買|か}いたがって います.`,
    notes: [
      "Outras saídas válidas para a 3ª pessoa: 〜たいと {言|い}って います, 〜たい そうです, 〜たい らしいです, 〜たいでしょう.",
      "O que não pode, na conversa comum, é a afirmação direta: × {娘|むすめ}は ゲームを {買|か}いたいです.",
      "Com たがる o objeto vai com を (× ゲームが {買|か}いたがって いる), e não se usa para superiores (× {先生|せんせい}は {帰|かえ}りたがって いる).",
    ],
    examples: [{ ja: "{子|こ}どもは {犬|いぬ}を ほしがって います。", pt: "A criança quer um cachorro." }],
    sources: [js("たがる-tagaru-meaning", "たがる"), js("がる-garu-がっている-gatteiru-meaning", "がる")],
  },
  {
    id: "tara-dou",
    level: "N4",
    title: "～たらどうですか",
    meaning: "que tal ~? (sugestão, conselho)",
    formation: ["Verbo (た) + ら + どうですか／どう？"],
    rule: `Quem **aconselha** usa: A「よく {眠|ねむ}れないんです」 B「{寝|ね}る {前|まえ}に {牛乳|ぎゅうにゅう}を {飲|の}んで みたら どうですか」. É mais direto que たほうが いい (日本語教師ネット).`,
    notes: [
      "Quem **pede** conselho usa たら いいですか: どう したら いいですか (o que devo fazer?).",
      "Com superiores, 〜たら どうですか pode soar impositivo; o educado é 〜たら いかがですか.",
    ],
    examples: [{ ja: "{疲|つか}れて いるなら、{少|すこ}し {休|やす}んだら どう？", pt: "Se está cansado, que tal descansar um pouco?" }],
    sources: [js("たらどう-tara-dou-meaning", "たらどう"), nk("2018/06/24/jlptn4-grammar-taradoodesuka", "〜たらどうですか")],
  },
  {
    id: "nakute-mo-ii",
    level: "N4",
    title: "～なくてもいい／～なければならない",
    meaning: "não precisa ~ / tem que ~",
    formation: [
      "Sem obrigação: Verbo (ない) → なくても いい: {起|お}きなくても いい.",
      "Obrigação: なければ ならない／なければ いけない／なくては いけない／ないと いけない (todas = “tem que”).",
    ],
    rule: `なくても いい tira a obrigação: {明日|あした}は {休|やす}みなので、{早|はや}く {起|お}きなくても いいです. As formas com なければ／なくては／ないと expressam **obrigação**.`,
    notes: ["As quatro formas de obrigação têm o mesmo sentido básico; ないと（いけない）é a mais coloquial."],
    examples: [{ ja: "{明日|あした}は {早|はや}く {起|お}きなければ なりません。", pt: "Amanhã tenho que acordar cedo." }],
    sources: [js("なければならない-nakereba-naranai-meaning", "なければならない"), JT4Y_LIST, BUNPRO_LIST],
  },

  // ───────────────────────── Conectores ─────────────────────────
  {
    id: "shi",
    level: "N4",
    title: "～し、～し",
    meaning: "e além disso (enumera razões ou qualidades)",
    formation: ["Forma simples + し; adjetivo な / substantivo + だ + し: {静|しず}かだし, {学生|がくせい}だし."],
    rule: `Enumera **razões** ou qualidades, com a ideia de “e ainda por cima”: この {店|みせ}は {料理|りょうり}も おいしい し、{値段|ねだん}も {安|やす}いので、よく {来|き}ます. Costuma vir com も: AもBし、CもD.`,
    notes: ["Mesmo com uma razão só, し sugere que há outras (日本語教師ネット)."],
    examples: [{ ja: "{今日|きょう}は {雨|あめ}だし、{寒|さむ}いし、{出|で}かけたくない。", pt: "Hoje está chovendo e ainda por cima frio; não quero sair." }],
    sources: [js("し-shi-meaning", "し"), nk("2019/08/09/jlptn4-grammar-shi-shi", "〜し〜し"), JLPT_OFFICIAL_2012],
  },
  {
    id: "naide",
    level: "N4",
    title: "～ないで（{付帯状況|ふたいじょうきょう}）",
    meaning: "sem fazer ~ (fazer Y sem ter feito X)",
    formation: [
      "Verbo (ない) + で: {食|た}べないで.",
      "Formal/escrito: troca ない por ず(に): {食|た}べずに; exceções: する → せず, {来|く}る → {来|こ}ず (Tae Kim, p. 388).",
    ],
    rule: `A segunda ação acontece **no estado de não ter feito** a primeira: {朝|あさ}ご{飯|はん}を {食|た}べないで {会社|かいしゃ}へ {行|い}きました = fui à empresa sem tomar café da manhã.`,
    notes: ["なくて indica **causa** e vem seguido de sentimento/estado ({会|あ}えなくて さびしい, {見|み}えなくて がっかりした) — Langoal: なくて + 「気持ちの言葉」. Não serve para “sem fazer”."],
    contrasts: [{ with: "なくて", text: "causa de um sentimento: {雨|あめ}が {止|や}まなくて {困|こま}りました." }],
    examples: [{ ja: "{砂糖|さとう}を {入|い}れないで コーヒーを {飲|の}みます。", pt: "Tomo café sem açúcar." }],
    sources: [lg("te-naide-with-without", "〜て／〜ないで（付帯状況）"), lg("nakute-reason", "〜なくて（理由・原因 + 気持ちの言葉）"), BUNPRO_LIST],
  },
  {
    id: "demo-reiji",
    level: "N4",
    title: "{名詞|めいし}＋でも（{例示|れいじ}）",
    meaning: "~ ou algo assim (sugestão suave)",
    formation: ["Substantivo + でも: お{茶|ちゃ}でも, {映画|えいが}でも."],
    rule: `Dá um **exemplo** ao sugerir algo, deixando em aberto: {少|すこ}し {休|やす}みましょう。お{茶|ちゃ}でも {飲|の}みませんか = vamos descansar um pouco; que tal um chá (ou algo assim)?`,
    notes: ["Interrogativo + でも = “qualquer”: だれでも, いつでも, なんでも."],
    examples: [{ ja: "{日曜日|にちようび}に {映画|えいが}でも {見|み}に {行|い}きませんか。", pt: "Que tal ir ver um filme (ou algo assim) no domingo?" }],
    sources: [js("でも-demo-meaning-something", "でも"), BUNPRO_LIST],
  },
  {
    id: "setsuzokushi",
    level: "N4",
    title: "{接続詞|せつぞくし}（でも・それに・だから・それで…）",
    meaning: "conjunções que ligam frases",
    formation: [
      "Contraste: でも, しかし, けれども, それでも (mesmo assim).",
      "Adição: それに, また.",
      "Consequência: だから, それで, そのため.",
      "Exemplo: たとえば. Mudança de assunto: ところで.",
    ],
    rule: `Em もんだい3 a pergunta costuma ser: **qual é a relação** entre a frase anterior e a seguinte? Contraste → でも／しかし; mais um ponto na mesma direção → それに; resultado → だから／それで.`,
    notes: [
      "それでも = “mesmo assim”: depois dele vem algo que contraria a expectativa criada antes.",
      "それで não aceita vontade, convite ou pedido depois (× それで、{行|い}きましょう); だから aceita (だから、{行|い}きましょう).",
    ],
    examples: [
      { ja: "この {店|みせ}は {安|やす}いです。それに、おいしいです。", pt: "Este restaurante é barato. Além disso, a comida é gostosa." },
      { ja: "{雨|あめ}が {降|ふ}って いました。それでも、{試合|しあい}は ありました。", pt: "Estava chovendo. Mesmo assim, teve jogo." },
    ],
    sources: [js("それに-sore-ni-meaning", "それに"), js("それでも-sore-demo-meaning", "それでも"), JLPT_OFFICIAL_2018],
  },
  {
    id: "nakanaka-nai",
    level: "N4",
    title: "なかなか～ない",
    meaning: "não ~ facilmente / custa a ~",
    formation: ["なかなか + verbo negativo: なかなか {来|こ}ない, なかなか できない."],
    rule: `Algo **demora** ou **custa** a acontecer, apesar da expectativa ou do esforço: バスが なかなか {来|き}ません.

Com afirmativa, なかなか muda de sentido: “bastante, até que bem” (なかなか おいしい).`,
    contrasts: [
      { with: "ぜひ", text: "“sem falta”, com desejo/pedido ({行|い}きたい, ください)." },
      { with: "きっと", text: "“com certeza” (suposição forte), geralmente com afirmativo." },
    ],
    examples: [{ ja: "{日本語|にほんご}が なかなか {上手|じょうず}に なりません。", pt: "Meu japonês custa a melhorar." }],
    sources: [js("なかなか～ない-nakanaka-nai-meaning", "なかなか～ない"), JLPT_OFFICIAL_2018],
  },
  {
    id: "kanoukei",
    level: "N4",
    title: "{可能形|かのうけい}（～える／～られる）",
    meaning: "forma potencial: conseguir / poder",
    formation: [
      "Grupo 1: -u → -e + る: {話|はな}す→{話|はな}せる, {作|つく}る→{作|つく}れる, {泳|およ}ぐ→{泳|およ}げる.",
      "Grupo 2: る → られる: {食|た}べる→{食|た}べられる.",
      "Irregulares: する→できる, {来|く}る→{来|こ}られる.",
    ],
    rule: `Indica capacidade ou possibilidade. O objeto costuma ir com **が**: {日本語|にほんご}が {話|はな}せます.`,
    notes: [
      "Verbos potenciais são não volitivos: combinam com ように (objetivo) e ように なる (mudança).",
      "ある e わかる não têm potencial (× わかれる): わかる já significa “conseguir entender”.",
      "{見|み}える e {聞|き}こえる (ver/ouvir sem esforço, “ser visível/audível”) são verbos à parte, não o potencial de {見|み}る／{聞|き}く — que é {見|み}られる／{聞|き}ける ({声|こえ}が {聞|き}けた = consegui ouvir a voz de propósito). {聞|き}こえる nunca é “conseguir perguntar” (Tae Kim, p. 178–179).",
      "{見|み}れる／{来|こ}れる (sem ら) são coloquiais; na prova, use {見|み}られる／{来|こ}られる.",
    ],
    examples: [{ ja: "{漢字|かんじ}が {少|すこ}し {読|よ}めるように なりました。", pt: "Passei a conseguir ler um pouco de kanji." }],
    sources: [js("られる-rareru-japanese-potential-form", "られる (potential)"), lg("potential-verb", "可能動詞"), JLPTSENSEI_LIST],
  },
];
