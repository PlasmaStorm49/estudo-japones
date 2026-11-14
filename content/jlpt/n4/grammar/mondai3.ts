import type { Mondai3Passage } from "../../../schema.ts";
import { review } from "./review.ts";

/** もんだい3 — 文章の文法: redações originais no formato das provas oficiais (4 lacunas, formato pós-2020). */
export const mondai3: Mondai3Passage[] = [
  {
    id: "n4-g-m3-001",
    type: "mondai3",
    level: "N4",
    intro: "{下|した}の {文章|ぶんしょう}は、{留学生|りゅうがくせい}の {作文|さくぶん}です。",
    title: "{日本|にほん}の {料理|りょうり}",
    author: "マリア・シルバ",
    paragraphs: [
      "{私|わたし}は {日本|にほん}に {来|く}る {前|まえ}、{日本|にほん}の {料理|りょうり}は すしと てんぷらしか {知|し}りませんでした。[[1]]、{日本|にほん}に {来|き}て、いろいろな {料理|りょうり}が ある ことを {知|し}りました。",
      "{先月|せんげつ}、{友|とも}だちの {家|いえ}に {行|い}った とき、{友|とも}だちの お{母|かあ}さんが {肉|にく}じゃがの {作|つく}り{方|かた}を [[2]]。とても かんたんで、おいしかったです。",
      "{家|いえ}に {帰|かえ}って、{自分|じぶん}で {作|つく}って みました。でも、[[3]] {上手|じょうず}に できませんでした。{味|あじ}が うすかったり、じゃがいもが かたかったり しました。",
      "{何回|なんかい}も {練習|れんしゅう}して、{今|いま}は おいしく {作|つく}れるように なりました。これからは ほかの {日本|にほん}の {料理|りょうり}も {作|つく}って [[4]]。",
    ],
    translation: `**A comida japonesa** — Maria Silva

Antes de vir ao Japão, eu só conhecia sushi e tempurá da comida japonesa. **Mas**, quando vim ao Japão, descobri que existem muitos pratos diferentes.

No mês passado, quando fui à casa de uma amiga, a mãe dela **me ensinou** a fazer nikujaga (cozido de carne e batata). Foi muito simples e estava gostoso.

Voltei para casa e tentei fazer sozinha. Mas **custei a** conseguir fazer direito: às vezes o tempero ficava fraco, às vezes a batata ficava dura.

Depois de praticar muitas vezes, agora consigo fazer gostoso. De agora em diante, **quero experimentar** fazer outros pratos japoneses também.`,
    blanks: [
      {
        number: 1,
        grammarPoints: ["setsuzokushi"],
        options: ["でも", "だから", "それに", "たとえば"],
        answer: 0,
        explanation: {
          clue: "Antes: “só conhecia sushi e tempurá”. Depois: “descobri que há muitos pratos”. As duas frases se **opõem**.",
          correct: "でも (mas) introduz o contraste entre o que ela pensava antes e o que descobriu depois.",
          options: [
            "Contraste.",
            "だから (por isso) exigiria que a 2ª frase fosse consequência da 1ª — “porque só conhecia sushi, descobri muitos pratos” não é uma relação de causa.",
            "それに (além disso) soma algo na mesma direção; aqui a direção muda.",
            "たとえば (por exemplo) introduziria um exemplo do que foi dito antes; a 2ª frase não é exemplo da 1ª.",
          ],
          takeaway: "Em もんだい3, para conjunções: leia a frase de antes e a de depois e pergunte qual é a relação — contraste (でも／しかし), soma (それに), consequência (だから／それで), exemplo (たとえば).",
        },
      },
      {
        number: 2,
        grammarPoints: ["te-kureru", "te-morau"],
        options: ["{教|おし}えて くれました", "{教|おし}えて もらいました", "{教|おし}えて あげました", "{習|なら}いました"],
        answer: 0,
        explanation: {
          clue: "Quem ensinou está com **が** (お{母|かあ}さんが), e quem aprendeu foi a autora — que depois vai para casa tentar fazer.",
          correct: "[quem faz]が Vて くれる: alguém faz algo por mim. A mãe da amiga ensinou (para mim).",
          options: [
            "Quem faz o favor com が; quem recebe sou eu.",
            "もらう tem como sujeito quem **recebe**; com お{母|かあ}さん**が**, a frase diria que a mãe recebeu o ensinamento. Para usar もらう: お{母|かあ}さん**に** {教|おし}えて もらいました.",
            "あげる nunca aponta para quem fala: diria que a mãe ensinou outra pessoa, e o texto mostra que quem aprendeu foi a autora.",
            "{習|なら}う = aprender (com alguém). Com お{母|かあ}さんが como sujeito, quem teria aprendido seria a mãe — o contrário da história. (Para dizer que eu aprendi: お{母|かあ}さん**に** {習|なら}いました.)",
          ],
          takeaway: "Favor que chega a mim: quem faz com が → くれる; com に → もらう. Leia a partícula antes de escolher.",
        },
      },
      {
        number: 3,
        grammarPoints: ["nakanaka-nai"],
        options: ["なかなか", "ぜひ", "きっと", "もうすぐ"],
        answer: 0,
        explanation: {
          clue: "Depois da lacuna vem uma negativa no passado: {上手|じょうず}に できませんでした (não consegui fazer bem). E a frase seguinte conta as tentativas que deram errado.",
          correct: "なかなか + negativa = “não ~ facilmente / custa a ~”: ela tentou e não conseguia acertar.",
          options: [
            "なかなか + negativa.",
            "ぜひ (sem falta) vai com desejo ou pedido (ぜひ {行|い}きたい, ぜひ {来|き}て ください), não com um fracasso no passado.",
            "きっと expressa uma suposição forte sobre algo ainda não confirmado (きっと〜でしょう／〜と {思|おも}う — pode ser afirmativa ou negativa: きっと {来|こ}ないでしょう). Não serve para narrar um fato que a própria autora viveu, como できませんでした.",
            "もうすぐ (daqui a pouco) fala do futuro próximo; não combina com できませんでした.",
          ],
          takeaway: "Advérbios que “pedem” uma forma: なかなか〜ない (custa a), ぜんぜん〜ない (nada), あまり〜ない (não muito), ぜひ〜たい／ください (sem falta), きっと〜でしょう／〜と {思|おも}う (com certeza, suposição).",
        },
      },
      {
        number: 4,
        grammarPoints: ["te-miru", "sou-da-youtai", "sou-da-denbun"],
        options: ["みたいです", "みました", "みそうです", "みるそうです"],
        answer: 0,
        explanation: {
          clue: "「これからは」 (daqui em diante) aponta para o **futuro**, e a frase fala de um plano da própria autora.",
          correct: "〜て みたい = quero experimentar fazer (てみる + たい). Desejo dela para o futuro.",
          options: [
            "Desejo de experimentar, no futuro.",
            "{作|つく}って みました é passado (“experimentei fazer”) — não combina com これからは (daqui em diante).",
            "{作|つく}って みそうです usa o そう de aparência sobre a própria ação futura (“parece que vou experimentar”), o que não é natural para falar do próprio plano.",
            "{作|つく}って みる そうです é boato (“dizem que vai experimentar”) — ninguém relata o próprio plano como boato.",
          ],
          takeaway:
            "Fim de texto com これからは／{来年|らいねん}は／{次|つぎ}は costuma pedir desejo ou intenção: 〜たいです, 〜て みたいです, 〜(よ)うと {思|おも}います. Cuidado: {今度|こんど} pode ser “da próxima vez” **ou** “desta vez” — por isso o texto usa これからは.",
        },
      },
    ],
    review: review(
      "revisada",
      "Corrigida na rodada 1: na lacuna 2, a alternativa 「教えられました」 podia ser lida como potencial (“a mãe conseguiu ensinar”); trocada por 「習いました」.",
      "Corrigida na rodada 2 (revisor independente): na lacuna 4, 「今度は」 também significa “desta vez”, o que tornava 「作ってみました」 aceitável; trocado por 「これからは」. Explicação de きっと e tradução do 3º parágrafo ajustadas.",
    ),
  },
  {
    id: "n4-g-m3-002",
    type: "mondai3",
    level: "N4",
    intro: "{下|した}の {文章|ぶんしょう}は、{留学生|りゅうがくせい}の {作文|さくぶん}です。",
    title: "はじめての {雪|ゆき}",
    author: "グエン・バン・ナム",
    paragraphs: [
      "{私|わたし}の {国|くに}は {一年中|いちねんじゅう} {暑|あつ}いので、{雪|ゆき}が {降|ふ}りません。{去年|きょねん}の {冬|ふゆ}、{日本|にほん}で はじめて {雪|ゆき}を {見|み}ました。",
      "ある {朝|あさ}、{起|お}きて {窓|まど}の {外|そと}を {見|み}たら、{町|まち}が まっ{白|しろ}に なって いました。{私|わたし}は うれしくて、すぐに {外|そと}に {出|で}ました。でも、{雪|ゆき}の {上|うえ}を {歩|ある}くのは はじめてだったので、{何回|なんかい}も ころんで [[1]]。",
      "それから、{毎日|まいにち} {少|すこ}しずつ {練習|れんしゅう}しました。{今|いま}は {雪|ゆき}の {上|うえ}でも ころばないで {歩|ある}ける [[2]]。",
      "{雪|ゆき}の {日|ひ}は {寒|さむ}いですが、{友|とも}だちと {雪|ゆき}で {遊|あそ}ぶのは とても {楽|たの}しいです。[[3]]、{雪|ゆき}の {町|まち}は とても きれいです。",
      "{北海道|ほっかいどう}に {住|す}んで いる {友|とも}だちの {話|はなし}では、{北海道|ほっかいどう}は {雪|ゆき}が もっと たくさん {降|ふ}る [[4]]。{今度|こんど}の {冬休|ふゆやす}みに {行|い}って みたいです。",
    ],
    translation: `**A primeira neve** — Nguyen Van Nam

No meu país faz calor o ano inteiro, então não neva. No inverno do ano passado, vi neve pela primeira vez, no Japão.

Certa manhã, acordei, olhei pela janela e a cidade estava toda branca. Fiquei feliz e saí logo. Mas era a primeira vez que eu andava sobre neve, então **acabei caindo** várias vezes.

Depois disso, treinei um pouco todo dia. Agora **já consigo** andar na neve sem cair.

Os dias de neve são frios, mas brincar na neve com os amigos é muito divertido. **Além disso**, a cidade coberta de neve é muito bonita.

Um amigo que mora em Hokkaido **disse que** lá neva muito mais. Nas próximas férias de inverno, quero ir lá conhecer.`,
    blanks: [
      {
        number: 1,
        grammarPoints: ["te-shimau", "te-oku", "te-aru"],
        options: ["しまいました", "おきました", "ありました", "あげました"],
        answer: 0,
        explanation: {
          clue: "「はじめてだったので」 (como era a primeira vez) + ころぶ (cair, levar um tombo): algo que aconteceu **sem querer**.",
          correct: "〜て しまう = algo acidental/indesejado. ころんで しまいました = acabei caindo.",
          options: [
            "Acidente.",
            "〜て おく é ação intencional de preparação: “caí de propósito, com antecedência” não faz sentido.",
            "〜て ある exige verbo **transitivo** (e descreve um estado deixado de propósito); ころぶ é intransitivo.",
            "〜て あげる = fazer um favor para alguém; cair não é favor.",
          ],
          takeaway: "Acontecimento sem querer, com pena ou constrangimento → 〜て しまう (coloquial: 〜ちゃう: ころんじゃった).",
        },
      },
      {
        number: 2,
        grammarPoints: ["you-ni-naru", "kanoukei", "koto-ni-naru"],
        options: ["ように なりました", "ことに なりました", "ところでした", "はずでした"],
        answer: 0,
        explanation: {
          clue: "「{毎日|まいにち} {少|すこ}しずつ {練習|れんしゅう}しました」 + 「{今|いま}は」 + verbo potencial ({歩|ある}ける): mudança de capacidade com o tempo.",
          correct: "Potencial + ように なる = passar a conseguir. Antes caía; agora consegue andar sem cair.",
          options: [
            "Mudança gradual de capacidade.",
            "ことに なりました = “ficou decidido que…” — conseguir andar não é algo que alguém decide.",
            "ところでした = “quase aconteceu (mas não)” — contradiz {今|いま}は (agora consegue).",
            "はずでした = “era para ser assim (mas não foi)” — também contradiz {今|いま}は.",
          ],
          takeaway: "Treino + {今|いま}は + potencial → ように なりました. Mesma família: {読|よ}めるように, {話|はな}せるように, {泳|およ}げるように.",
        },
      },
      {
        number: 3,
        grammarPoints: ["setsuzokushi"],
        options: ["それに", "でも", "それでも", "それなら"],
        answer: 0,
        explanation: {
          clue: "Antes: brincar na neve é divertido (ponto positivo). Depois: a cidade com neve é bonita (outro ponto positivo). É uma **soma**.",
          correct: "それに (além disso) acrescenta mais um ponto na mesma direção.",
          options: [
            "Soma de pontos positivos.",
            "でも (mas) introduz contraste; as duas frases dizem coisas boas sobre a neve.",
            "それでも (mesmo assim) introduz algo que vai contra o esperado depois da frase anterior; não há essa oposição.",
            "それなら (nesse caso) responde a uma condição ou ao que outra pessoa disse; aqui não há condição nenhuma.",
          ],
          takeaway: "Mais um argumento a favor → それに. Virada → でも／しかし. Contra a expectativa → それでも. Conclusão → だから／それで.",
        },
      },
      {
        number: 4,
        grammarPoints: ["sou-da-denbun", "tagaru"],
        options: ["そうです", "つもりです", "たがって います", "ことに します"],
        answer: 0,
        explanation: {
          clue: "「{友|とも}だちの {話|はなし}では」 (pelo que o amigo disse) aponta a **fonte** da informação.",
          correct: "Forma simples + そうです = boato. {降|ふ}る そうです = dizem que neva (muito mais).",
          options: [
            "Informação ouvida de outra pessoa.",
            "つもりです = intenção; a neve não tem intenção.",
            "{降|ふ}り たがって います = “(a neve) está querendo cair”: たがる é desejo de pessoas; e a forma seria {降|ふ}りたがる, não {降|ふ}る たがる.",
            "ことに します = “decido (fazer)”; neve não decide nada.",
          ],
          takeaway: "〜の {話|はなし}では／〜に よると + forma simples + そうです. Lembre que o boato usa a forma **completa** ({降|ふ}る), e a aparência usa o radical ({降|ふ}り そう).",
        },
      },
    ],
    review: review(
      "revisada",
      "Corrigida na rodada 1: na lacuna 4, a alternativa 「ところです」 era correta lendo ところ como “lugar” (北海道は雪が降るところです); trocada por 「たがって います」.",
    ),
  },
];
