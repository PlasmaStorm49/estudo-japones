import type { Mondai3Passage } from "../../../schema.ts";
import { reviewN5 as review } from "./review.ts";

/** もんだい3 — 文章の文法（N5, 16/11/2026） */
export const mondai3N5: Mondai3Passage[] = [
  {
    id: "n5-g-m3-001",
    type: "mondai3",
    level: "N5",
    intro: "{下|した}の {文章|ぶんしょう}は、{留学生|りゅうがくせい}の {作文|さくぶん}です。",
    title: "{休|やす}みの {日|ひ}",
    author: "マリア・シルバ",
    paragraphs: [
      "{私|わたし}は {日曜日|にちようび}に よく {駅|えき}の {近|ちか}くの {公園|こうえん}へ {行|い}きます。{公園|こうえん}は {広|ひろ}くて、{静|しず}かです。{私|わたし}は いつも {公園|こうえん} [[1]] {本|ほん}を {読|よ}んだり、さんぽしたり します。",
      "{先週|せんしゅう}の {日曜日|にちようび}も {公園|こうえん}へ {行|い}きたかったです。[[2]]、{雨|あめ}でしたから、うちに いました。うちで {音楽|おんがく}を {聞|き}き [[3]]、{本|ほん}を {読|よ}みました。",
      "{来週|らいしゅう}の {日曜日|にちようび}は、{友|とも}だちと いっしょに {公園|こうえん}で お{弁当|べんとう}を [[4]]。",
    ],
    translation: `**Dia de folga** — Maria Silva

Aos domingos, muitas vezes vou a um parque perto da estação. O parque é amplo e tranquilo. Sempre leio livros, passeio e coisas assim **no** parque.

No domingo passado eu também queria ir ao parque. **Mas** estava chovendo, então fiquei em casa. Em casa, li um livro **ouvindo** música.

No próximo domingo, **pretendo** comer marmita no parque com uma amiga.`,
    blanks: [
      {
        number: 1,
        grammarPoints: ["n5-de"],
        options: ["で", "に", "を", "へ"],
        answer: 0,
        explanation: {
          clue: "Depois da lacuna vêm **ações**: {本|ほん}を {読|よ}んだり、さんぽしたり します. O parque é onde elas acontecem.",
          correct: "Lugar onde a ação acontece → で: {公園|こうえん}で {本|ほん}を {読|よ}む.",
          options: [
            "Lugar da ação → で.",
            "に é para existência (ある／いる) ou destino; com {読|よ}む, não.",
            "A frase já tem objeto ({本|ほん}を); {公園|こうえん}を {本|ほん}を não funciona.",
            "へ indica direção de um movimento; {読|よ}む não é movimento.",
          ],
          takeaway: "Ir ao parque: {公園|こうえん}へ／に {行|い}く. Fazer algo no parque: {公園|こうえん}で〜. O texto usa os dois.",
        },
      },
      {
        number: 2,
        grammarPoints: ["n5-setsuzokushi"],
        options: ["でも", "だから", "それから", "そして"],
        answer: 0,
        explanation: {
          clue: "Antes: ela **queria** ir ao parque ({行|い}きたかったです). Depois: choveu e ela **ficou em casa**. O desejo não se realizou.",
          correct: "でも = mas: introduz o que aconteceu ao contrário do esperado.",
          options: [
            "Contraste (queria ir, mas não foi) → でも.",
            "だから = por isso. “Queria ir; por isso, como chovia, fiquei em casa” não tem lógica — e a frase já tem o motivo com から.",
            "それから = depois disso (sequência). Não há sequência de ações aqui, e sim um contraste.",
            "そして = e (soma). Ligaria duas coisas na mesma direção; aqui elas se opõem.",
          ],
          takeaway: "〜たかったです。でも、〜 = queria ~, mas ~. Antes de escolher a conjunção, pergunte: as frases se opõem, se somam ou uma causa a outra?",
        },
      },
      {
        number: 3,
        grammarPoints: ["n5-nagara"],
        options: ["ながら", "たり", "て", "から"],
        answer: 0,
        explanation: {
          clue: "Antes da lacuna está o **radical** {聞|き}き; ouvir música e ler acontecem ao mesmo tempo.",
          correct: "Radical + ながら = enquanto (duas ações ao mesmo tempo): {聞|き}きながら.",
          options: [
            "Radical + ながら.",
            "たり se liga à forma た ({聞|き}いたり), não ao radical.",
            "A forma て de {聞|き}く é {聞|き}いて; {聞|き}きて não existe.",
            "から (depois de / porque) se liga à forma て ou à forma simples, não ao radical.",
          ],
          takeaway: "Radical: {聞|き}き + ながら / ます / たい / に {行|い}く. Forma た: {聞|き}いた + り. Forma て: {聞|き}いて.",
        },
      },
      {
        number: 4,
        grammarPoints: ["n5-tsumori"],
        options: ["{食|た}べる つもりです", "{食|た}べました", "{食|た}べて いました", "{食|た}べた ことが あります"],
        answer: 0,
        explanation: {
          clue: "{来週|らいしゅう}の {日曜日|にちようび} = **futuro**.",
          correct: "Plano para o futuro → 〜る つもりです.",
          options: [
            "Futuro (intenção) → つもりです.",
            "Passado; não combina com {来週|らいしゅう}.",
            "〜て いました também é passado.",
            "〜た ことが あります fala de experiência passada; não combina com {来週|らいしゅう}.",
          ],
          takeaway: "Palavra de tempo é a primeira pista: {来週|らいしゅう}／あした → forma não passada (つもり, たい, ます).",
        },
      },
    ],
    review: review("revisada"),
  },
  {
    id: "n5-g-m3-002",
    type: "mondai3",
    level: "N5",
    intro: "{下|した}の {文章|ぶんしょう}は、{留学生|りゅうがくせい}の {作文|さくぶん}です。",
    title: "{日本語|にほんご}の {勉強|べんきょう}",
    author: "パウロ・コスタ",
    paragraphs: [
      "{私|わたし}は {去年|きょねん}の {四月|しがつ}に {日本|にほん}へ {来|き}ました。{日本|にほん}へ {来|く}る [[1]]、{国|くに}で {少|すこ}し {日本語|にほんご}を {勉強|べんきょう}しました。",
      "{今|いま}は {毎日|まいにち} {学校|がっこう}で {勉強|べんきょう}して います。{先生|せんせい}は とても やさしいです。わからない ことが ある とき、{先生|せんせい} [[2]] {聞|き}きます。",
      "{先週|せんしゅう}、{初|はじ}めて {日本語|にほんご}で {電話|でんわ}を かけました。{電話|でんわ}の {日本語|にほんご}は {速|はや}かったです [[3]]、{全部|ぜんぶ} わかりました。うれしかったです。これから もっと {上手|じょうず}に [[4]]。",
    ],
    translation: `**Estudando japonês** — Paulo Costa

Vim ao Japão em abril do ano passado. **Antes de** vir ao Japão, estudei um pouco de japonês no meu país.

Agora estudo todos os dias na escola. O professor é muito gentil. Quando há algo que não entendo, pergunto **ao** professor.

Na semana passada, pela primeira vez fiz uma ligação em japonês. O japonês ao telefone era rápido, **mas** entendi tudo. Fiquei feliz. Daqui para frente, **quero falar** melhor.`,
    blanks: [
      {
        number: 1,
        grammarPoints: ["n5-jikan-junjo"],
        options: ["{前|まえ}に", "{後|あと}で", "ながら", "たり"],
        answer: 0,
        explanation: {
          clue: "Antes da lacuna, a forma de **dicionário** {来|く}る. E a ordem dos fatos: ele estudou no país **antes** de vir.",
          correct: "Dicionário + {前|まえ}に = antes de: {日本|にほん}へ {来|く}る {前|まえ}に.",
          options: [
            "Dicionário + {前|まえ}に (e o sentido confere: estudou antes de vir).",
            "{後|あと}で pede a forma た ({来|き}た {後|あと}で). Além disso, estudar “no meu país” depois de vir ao Japão não faz sentido.",
            "ながら pede o radical ({来|き}ながら) e indica ações simultâneas.",
            "たり pede a forma た ({来|き}たり) e vem em par com する.",
          ],
          takeaway: "Mesmo com a frase no passado, {前|まえ}に pede dicionário: {来|く}る {前|まえ}に {勉強|べんきょう}しました.",
        },
      },
      {
        number: 2,
        grammarPoints: ["n5-ni"],
        options: ["に", "を", "で", "へ"],
        answer: 0,
        explanation: {
          clue: "{聞|き}く aqui é **perguntar**, e o professor é a pessoa a quem se pergunta.",
          correct: "A pessoa para quem a ação se dirige leva に: {先生|せんせい}に {聞|き}く (perguntar ao professor), {友|とも}だちに {会|あ}う, {母|はは}に {電話|でんわ}する.",
          options: [
            "Pessoa a quem se pergunta → に.",
            "{先生|せんせい}を {聞|き}く faria do professor a coisa ouvida/perguntada — sem sentido.",
            "で marca lugar de ação ou meio; o professor não é nenhum dos dois.",
            "へ indica direção de movimento; com {聞|き}く (perguntar), a pessoa leva に.",
          ],
          takeaway: "Pessoa-alvo da ação → に: 〜に {聞|き}く, 〜に {会|あ}う, 〜に あげる, 〜に {電話|でんわ}を かける.",
        },
      },
      {
        number: 3,
        grammarPoints: ["n5-riyuu-gyakusetsu"],
        options: ["が", "から", "ので", "と"],
        answer: 0,
        explanation: {
          clue: "“Era rápido” × “entendi tudo”: o resultado é o **contrário** do esperado.",
          correct: "Contraste → が (= けど): {速|はや}かったですが、{全部|ぜんぶ} わかりました.",
          options: [
            "Contraste → が.",
            "から daria motivo: “entendi tudo **porque** era rápido” — sem lógica.",
            "ので também daria motivo — mesmo problema.",
            "と não se liga a 〜かったです para unir orações.",
          ],
          takeaway: "Se a segunda parte surpreende, use が／けど; se é consequência, から／ので.",
        },
      },
      {
        number: 4,
        grammarPoints: ["n5-tai-hoshii"],
        options: ["{話|はな}したいです", "{話|はな}しました", "{話|はな}した ことが あります", "{話|はな}して いました"],
        answer: 0,
        explanation: {
          clue: "これから (daqui para frente) → **futuro**; o texto termina com um desejo.",
          correct: "Radical + たいです = quero ~: もっと {上手|じょうず}に {話|はな}したいです.",
          options: [
            "Desejo para o futuro → 〜たいです.",
            "Passado; não combina com これから.",
            "Experiência passada; não combina com これから.",
            "Passado contínuo; não combina com これから.",
          ],
          takeaway: "これから／{来年|らいねん}／いつか → desejo (〜たい) ou intenção (〜つもり). {上手|じょうず}に = adjetivo な + に modificando o verbo.",
        },
      },
    ],
    review: review("revisada"),
  },
];
