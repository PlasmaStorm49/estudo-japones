import type { Mondai3Passage } from "../../../schema.ts";
import { review2 as review } from "./review.ts";

/** もんだい3 — 文章の文法（lote 2, 15/11/2026） */
export const mondai3B: Mondai3Passage[] = [
  {
    id: "n4-g-m3-003",
    type: "mondai3",
    level: "N4",
    intro: "{下|した}の {文章|ぶんしょう}は、{留学生|りゅうがくせい}の {作文|さくぶん}です。",
    title: "コンビニの アルバイト",
    author: "アナ・サントス",
    paragraphs: [
      "{私|わたし}は {先月|せんげつ}から {駅|えき}の {前|まえ}の コンビニで アルバイトを して います。{最初|さいしょ}は {敬語|けいご}が {難|むずか}しくて、お{客|きゃく}さんに {何|なに}か {聞|き}かれても、すぐに {答|こた}える [[1]]。",
      "でも、{店長|てんちょう}が {毎日|まいにち} {少|すこ}しずつ {教|おし}えて くれたので、だんだん {話|はな}せるように なって [[2]]。",
      "{今|いま}は {仕事|しごと}が とても {楽|たの}しいです。{時々|ときどき}、お{客|きゃく}さんに {国|くに}の {料理|りょうり}に ついて {聞|き}かれる [[3]]。そんな ときは、ブラジルの 「フェイジョアーダ」 [[4]] {料理|りょうり}を {紹介|しょうかい}します。",
    ],
    translation: `**O trabalho na loja de conveniência** — Ana Santos

Desde o mês passado trabalho meio período numa loja de conveniência em frente à estação. No começo, a linguagem de respeito (keigo) era difícil, e mesmo quando um cliente me perguntava alguma coisa, eu **não conseguia** responder na hora.

Mas o gerente me ensinou um pouco todos os dias, e aos poucos **fui conseguindo** falar.

Agora o trabalho é muito divertido. Às vezes, os clientes **também** me perguntam sobre a comida do meu país. Nessas horas, apresento um prato brasileiro **chamado** “feijoada”.`,
    blanks: [
      {
        number: 1,
        grammarPoints: ["koto-ga-dekiru", "you-ni-naru"],
        options: ["ことが できませんでした", "ように なりました", "ところでした", "そうでした"],
        answer: 0,
        explanation: {
          clue: "「{最初|さいしょ}は {敬語|けいご}が {難|むずか}しくて」 + 「{聞|き}かれても」 (mesmo quando perguntavam): no começo ela **não conseguia** responder.",
          correct: "Verbo + ことが できませんでした = não conseguia ~.",
          options: [
            "Incapacidade no passado.",
            "ように なりました = “passei a responder logo” — contradiz 「{最初|さいしょ}は {難|むずか}しくて」; a mudança só vem no parágrafo seguinte.",
            "ところでした = “estava a ponto de responder (mas não)” — não combina com 「〜ても」 (mesmo quando me perguntavam).",
            "Com a forma de dicionário ({答|こた}える), そう só pode ser o de boato — e esse não tem passado próprio (“{答|こた}える そうでした” não é usado); além disso, ninguém relata a própria experiência como boato. (O そう de aparência pediria o radical: {答|こた}えそうでした = parecia que ia responder.)",
          ],
          takeaway: "Não conseguir: 〜ことが できない／forma potencial negativa ({答|こた}えられなかった). A mudança depois (〜ように なった) costuma vir com でも, だんだん, {今|いま}は.",
        },
      },
      {
        number: 2,
        grammarPoints: ["te-kuru-iku", "you-ni-naru"],
        options: ["きました", "おきました", "みました", "あげました"],
        answer: 0,
        explanation: {
          clue: "「だんだん」 + {話|はな}せるように なって + lacuna: uma mudança que veio acontecendo **até agora** (o próximo parágrafo começa com {今|いま}は).",
          correct: "〜て くる = mudança do passado até o presente: {話|はな}せるように なって きました.",
          options: [
            "Mudança até agora.",
            "〜て おく é preparação intencional; なる não é algo que se faz de propósito.",
            "〜て みる é experimentar; também exige ação intencional.",
            "〜て あげる é fazer um favor para alguém; não se aplica a uma mudança de capacidade.",
          ],
          takeaway: "だんだん／{少|すこ}しずつ + mudança até agora → 〜て きた. A partir de agora → 〜て いく.",
        },
      },
      {
        number: 3,
        grammarPoints: ["koto-ga-aru", "ukemi"],
        options: ["ことも あります", "ところです", "ことに します", "ように します"],
        answer: 0,
        explanation: {
          clue: "「{時々|ときどき}」 (às vezes): algo que acontece de vez em quando.",
          correct: "Dicionário + ことも ある = às vezes (também) acontece ~. Aqui com a passiva: {聞|き}かれる ことも ある = às vezes também me perguntam.",
          options: [
            "Frequência ocasional.",
            "ところです marca o momento de uma ação (“estou prestes a ser perguntada”); não combina com {時々|ときどき}.",
            "ことに する = decidir; ela não decide ser perguntada.",
            "ように する = esforçar-se para; não se esforça para “ser perguntada” — a pergunta vem do cliente.",
          ],
          takeaway: "{時々|ときどき}／たまに + dicionário + ことが／ことも ある. A passiva ({聞|き}かれる) também entra nesse molde.",
        },
      },
      {
        number: 4,
        grammarPoints: ["to-iu"],
        options: ["という", "として", "について", "によって"],
        answer: 0,
        explanation: {
          clue: "Entre um **nome** (「フェイジョアーダ」), que o cliente japonês provavelmente não conhece, e o substantivo {料理|りょうり}.",
          correct: "Nome + という + substantivo = um prato chamado ~.",
          options: [
            "Nome + という + substantivo.",
            "として = “como, na função de”; não liga um nome a um substantivo.",
            "について = “sobre”, e antes de substantivo precisaria de の (についての).",
            "によって = “por, conforme”; não dá nome a nada.",
          ],
          takeaway: "Apresentar algo que o ouvinte não conhece: 「X」という N.",
        },
      },
    ],
    review: review("revisada", "Lacuna 2: alternativa いきました excluída de propósito (em narrativa, ていった também poderia ser aceito). Lacuna 4: のような e などの excluídas (seriam aceitáveis)."),
  },
];
