import type { Mondai3Passage } from "../../../schema.ts";
import { review3 as review } from "./review.ts";

/** もんだい3 — 文章の文法（lote 3, 16/11/2026） */
export const mondai3C: Mondai3Passage[] = [
  {
    id: "n4-g-m3-004",
    type: "mondai3",
    level: "N4",
    intro: "{下|した}の {文章|ぶんしょう}は、{留学生|りゅうがくせい}の {作文|さくぶん}です。",
    title: "{日本|にほん}の {冬|ふゆ}",
    author: "ルーカス・オリベイラ",
    paragraphs: [
      "{私|わたし}は ブラジルの サンパウロから {来|き}ました。{私|わたし}は {寒|さむ}[[1]]なので、{日本|にほん}に {来|く}る {前|まえ}は {冬|ふゆ}が とても {心配|しんぱい}でした。",
      "{去年|きょねん}の {12月|じゅうにがつ}、{初|はじ}めて {雪|ゆき}を {見|み}ました。{朝|あさ}、{窓|まど}を {開|あ}けたら、{外|そと}が {真|ま}っ{白|しろ}に なって [[2]]。とても きれいで、{寒|さむ}さを {忘|わす}れて しまいました。",
      "{今|いま}、{私|わたし}が {日本|にほん}の {冬|ふゆ}で いちばん {好|す}きな [[3]] こたつです。こたつに {入|はい}って、みかんを {食|た}べながら {友|とも}だちと {話|はな}すのは、とても {楽|たの}しいです。ブラジルの {家族|かぞく}にも ぜひ {見|み}せたい [[4]]。",
    ],
    translation: `**O inverno no Japão** — Lucas Oliveira

Eu vim de São Paulo, no Brasil. Como sou **friorento**, antes de vir ao Japão eu estava muito preocupado com o inverno.

Em dezembro do ano passado, vi neve pela primeira vez. De manhã, quando abri a janela, lá fora **estava** tudo branco. Era tão bonito que até esqueci o frio.

Agora, **o que eu mais gosto** no inverno japonês **é** o kotatsu. Ficar no kotatsu comendo mexerica e conversando com os amigos é muito divertido. **Gostaria** muito de mostrar isso também para a minha família no Brasil.`,
    blanks: [
      {
        number: 1,
        grammarPoints: ["gari"],
        options: ["がり", "がって", "そう", "すぎ"],
        answer: 0,
        explanation: {
          clue: "Depois da lacuna vem なので, e o autor fala de um **traço dele** que explica a preocupação com o inverno.",
          correct: "{寒|さむ}がり = pessoa friorenta (substantivo). {寒|さむ}がりなので = como sou friorento.",
          options: [
            "Traço da pessoa → がり.",
            "がって é forma て de がる; não se liga a なので.",
            "{寒|さむ}そう = “parece com frio” (aparência vista de fora). Ninguém descreve o próprio jeito de ser como aparência: {私|わたし}は {寒|さむ}そうなので não faz sentido aqui.",
            "{寒|さむ}すぎ = “frio demais” (sobre o clima); {私|わたし}は {寒|さむ}すぎなので não descreve a pessoa.",
          ],
          takeaway: "{寒|さむ}がり, {暑|あつ}がり, こわがり: “que sente ~ com facilidade”. Funciona como substantivo (〜がりだ／〜がりなので).",
        },
      },
      {
        number: 2,
        grammarPoints: ["te-ita"],
        options: ["いました", "おきました", "みました", "あげました"],
        answer: 0,
        explanation: {
          clue: "「{窓|まど}を {開|あ}けたら」 = quando abri a janela, **encontrei** uma situação: lá fora já estava branco.",
          correct: "〜て いました = estado no passado: {真|ま}っ{白|しろ}に なって いました (estava todo branco).",
          options: [
            "Estado encontrado no passado → 〜て いました.",
            "〜て おく é preparação intencional; a neve não “deixou pronto” nada.",
            "〜て みる = experimentar; não faz sentido com なる (ficar branco).",
            "〜て あげる = fazer um favor; não há favor.",
          ],
          takeaway: "〜たら + 〜て いた: ao fazer A, descobri que B **estava** assim. ({起|お}きたら、{雪|ゆき}が {降|ふ}って いた.)",
        },
      },
      {
        number: 3,
        grammarPoints: ["nowa-da"],
        options: ["のは", "のを", "ので", "のに"],
        answer: 0,
        explanation: {
          clue: "A frase termina com 「こたつです」 e antes há いちばん {好|す}きな: estrutura “o que eu mais gosto é ~”.",
          correct: "〜のは 〜です: {好|す}きなのは こたつです (o que eu mais gosto é o kotatsu).",
          options: [
            "Destaque → のは.",
            "のを faria da oração um objeto, mas não há verbo depois; a frase termina em です.",
            "ので daria motivo (“como gosto, é kotatsu”) — não faz sentido.",
            "のに é “apesar de”; não há contraste.",
          ],
          takeaway: "Nのは (com adjetivo な: 〜なのは) + resposta + です. Na parte com の, o sujeito vai com が ou の, não com は.",
        },
      },
      {
        number: 4,
        grammarPoints: ["to-omou"],
        options: ["と {思|おも}います", "と {言|い}われて います", "そうです", "らしいです"],
        answer: 0,
        explanation: {
          clue: "ぜひ {見|み}せたい: é o **desejo do próprio autor**, no fim do texto.",
          correct: "〜たいと {思|おも}います = acho que quero ~ (desejo de quem fala, dito com suavidade).",
          options: [
            "Pensamento/desejo de quem fala → と {思|おも}います.",
            "と {言|い}われて います = “dizem que (eu) quero mostrar” — opinião geral, não o desejo do autor.",
            "{見|み}せたい そうです = “ouvi dizer que (alguém) quer mostrar” — boato sobre outra pessoa, não o que o autor sente.",
            "{見|み}せたい らしいです = “parece que (alguém) quer mostrar” — também fala de outra pessoa.",
          ],
          takeaway: "Desejo próprio: 〜たいです／〜たいと {思|おも}います. Boato e opinião geral (そうだ, と{言|い}われて いる) e suposição (らしい) trazem informação **de fora**, não o desejo de quem escreve.",
        },
      },
    ],
    review: review("revisada", "「見せたいと思っています」 ficou fora das alternativas: também seria correto."),
  },
];
