# Processo de revisão do conteúdo

A prioridade do projeto é a **qualidade da informação**. Toda questão passa pelas etapas abaixo antes de ficar com
status `revisada`. O registro de cada questão fica no campo `review` dela (aparece no código; o app mostra o id).

## Etapas

1. **Autoria no formato oficial.** A questão é escrita no estilo dos cadernos oficiais de exemplo do N4 (ver
   `docs/pesquisa.md`). Original, nunca copiada.
2. **Teste de cada alternativa (autoria).** Para cada alternativa errada: “um japonês nativo aceitaria esta frase
   aqui?”. Se a resposta for “sim” ou “talvez”, a alternativa é trocada ou a frase é reescrita. Alternativas
   descartadas por serem aceitáveis ficam anotadas no `review` da questão.
3. **Regra em duas fontes.** A regra que decide a questão é conferida em pelo menos duas fontes (uma delas em japonês,
   escrita por professores), listadas no ponto gramatical.
4. **Validação estrutural automática** (`npm run validate`): ids, 4 alternativas distintas, uma lacuna, explicação para
   cada alternativa, furigana bem formado e em todos os kanji das frases, もんだい2 com ordens alternativas que
   precisam pôr a **mesma** peça no ★, lacunas de もんだい3 batendo com o texto.
5. **Checagem automática de furigana** (`npm run check-readings`): um analisador morfológico (kuromoji/IPADIC) lê cada
   frase e cada leitura é comparada com o furigana escrito. Divergências são revisadas à mão, uma por uma, no
   contexto (`scripts/readings-reviewed.json`).
6. **Resolução às cegas** (`npm run blind-review -- <pasta>`): folha com alternativas embaralhadas, sem gabarito e sem
   explicações. Tudo é resolvido do zero, procurando ativamente uma segunda alternativa defensável.
7. **Releitura de naturalidade** de todas as frases já com a resposta.

## Registro — rodada 1 (14/11/2026, revisão feita pelo Claude)

| Etapa | Resultado |
|---|---|
| Autoria (2) | Alternativas excluídas já na autoria por serem aceitáveis: ば em 011, てみる em 015, まま em 028, も em 030, うちに em 033, もらいたい em 039, でしょう em 041, けれど em 045, ずに/ながら em 046, forma de dicionário (行くと思う) em 026. Uma questão inteira (ばよかった) descartada: 「もっと勉強すればいいです」 também podia ser aceito. |
| Validação (4) | 1 explicação curta demais (050) corrigida; 1 regra sem questão (ばよかった) removida. |
| Furigana (5) | 1.857 trechos conferidos. **1 erro real** corrigido: 「なかなか来ない」 estava com き; o certo é **こ**ない. As outras 97 ocorrências apontadas eram leituras corretas que o analisador erra fora de contexto (ex.: 受身形 = うけみ**けい**, 行って ≠ おこなって, 間 = あいだ, números) — conferidas uma a uma. |
| Às cegas (6) | 71/71 conferem com o gabarito, mas **3 ambiguidades reais** encontradas e corrigidas: **m1-002** (「弟に野菜を食べさせられます」 contava outra história coerente → frase reescrita com a fala da mãe); **m3-002 #4** (「降るところです」 é correto lendo ところ como “lugar” → alternativa trocada); **m3-001 #2** (「教えられました」 podia ser lido como potencial → trocado por 習いました). |
| Naturalidade (7) | 50 frases de もんだい1 relidas com a resposta: sem problemas. |

## Registro — rodada 2 (14/11/2026, revisores independentes)

Cinco agentes separados, que não escreveram o conteúdo e começaram do zero: quatro resolveram as questões às cegas
(folhas sem gabarito, alternativas embaralhadas) e só depois conferiram gabarito e explicações; um quinto revisou as 57
regras e testou as 125 URLs de fonte. Cada apontamento foi verificado antes de virar correção.

| Parte | Às cegas | Achados confirmados e corrigidos |
|---|---|---|
| もんだい1 001–017 | 17/17 | **003**: 「されました」 era defensável como passiva de incômodo → 2ª frase reescrita. **012**: 「おしても」 tinha leitura aditiva → trocada por 「おす ために」; explicação de のに corrigida. Ajustes de texto em 004, 005, 006, 009, 010, 011, 014, 016, 018. |
| もんだい1 018–034 | 17/17 | **031**: 「簡単にすぎて」 existe na escrita formal (〜に過ぎる) → trocada por 「簡単くすぎて」. **027/028**: explicações diziam que ているばかり e ためなのに são agramaticais (não são) → corrigidas. Nota de ばかり = “cerca de” (030). |
| もんだい1 035–050 | 16/16 | **040**: 「帰って」 era defensável (professor doente dispensando alunos) → novo contexto (funcionário e chefe). **045**: 「のに」 era contestável (おいしいのに安い) → trocada por 「と」. **044**: três distratores sinônimos → duas misturas agramaticais. **041**: motivo errado na explicação de 買ってほしいです. Ajustes em 036 e 048. |
| もんだい2 e もんだい3 | 21/21 | **m3-001 #4**: 今度 também é “desta vez”, o que tornava 「作ってみました」 aceitável → 「これからは」. Explicação de きっと, tradução, lista de predicados de のに e pistas absolutas demais em m2-002/004/012. Nenhuma ordem alternativa de もんだい2 punha outra peça no ★. |
| Regras (57) | — | 0 erros de conjugação, leitura ou tradução. 8 imprecisões corrigidas (causativa com を, ようになる com 太る, を de lugar com verbo intransitivo, 間に, だけ com negativa, restrição de お〜する, ばよかった, …) e 13 regras completadas (ex.: それで × だから, かわいそう, ら抜き, 尊敬 com れる/られる). 3 exemplos muito parecidos com os das fontes trocados por frases originais. |

Total: 71/71 acertos às cegas; **7 questões com segunda resposta defensável ou distrator fraco** corrigidas, além de
explicações. Depois das correções: `npm run check` sem erros; furigana 1.967 trechos, todas as divergências conferidas.

## Registro — lote 2 (15/11/2026)

Novo conteúdo: 29 regras (`points-2.ts`), 30 questões de もんだい1 (051–080), 6 de もんだい2 (014–019) e 1 texto de
もんだい3 (003), cobrindo pontos do N4 que ainda faltavam (らしい, みたい, に見える, がする, ことがある, ことができる,
の × こと, という, てくる／ていく, 〜出す, てあげる, てよかった, なさい, な, おきに, 数量＋も, だけで, 必要, 場合,
かな, くする, さ, ございます, は〜が〜は, から／で作る, で de causa, advérbios, ほど〜ない).

Lições da rodada anterior aplicadas já na autoria: nenhuma alternativa com leitura dupla conhecida (ところ “lugar”,
ても aditivo, のに positivo, 今度 “desta vez”), nenhum trio de distratores sinônimos. Cada exclusão está anotada no
`review` da questão.

| Etapa | Resultado |
|---|---|
| Pesquisa | 182 páginas de professores (Langoal e 日本語教師ネット) lidas como texto; Fundação Japão (日本語教育通信) para の × こと. Divergências de nível anotadas (場合 = N3 no Langoal; おきに, ことがある, という, ほど〜ない = N3 no Bunpro). |
| Furigana | 2.996 trechos. **3 erros meus** corrigidos: {泳|おおよ}ぐ (digitação), {八|や}つ → **やっ**つ, 1{人|ひとり} → {1人|ひとり}. Demais divergências conferidas no contexto. |
| Revisores às cegas | 37/37 acertos. **Corrigidos:** **073** (暖か também é adjetivo な → 暖かに seria correto; trocado por 涼しい); **m2-019** (「さくら」という先生に… era outra ordem válida; peças trocadas); explicações com fato errado em **062** (くれる também vale para o grupo do falante) e **080** (sentido de しか〜ない invertido); várias afirmações absolutas demais (060, 069, 070, 054, 051, 056, 061, 065…). |
| Revisor das regras | 0 erros de conjugação/furigana; 1 fonte trocada (できる ≠ ことができる); imprecisões corrigidas (の só com percepção **direta** — 聞く “ficar sabendo” pede こと; partícula de quem recebe em てあげる; なかなか + afirmativo = “bastante”; restrições de 場合; uso de exemplo de みたい). Exemplos parecidos demais com as fontes trocados. Fontes secundárias passaram do índice do Bunpro para as páginas específicas. |

## Registro — N5 (16/11/2026)

Novo módulo: 32 regras (`jlpt/n5/grammar/points.ts`), 52 questões de もんだい1, 9 de もんだい2 e 2 textos de もんだい3
(8 lacunas), no estilo do caderno oficial de exemplo do N5.

| Etapa | Resultado |
|---|---|
| Pesquisa | Lista N5 do JLPT Sensei, páginas N5 do Langoal, caderno oficial 2018 e seções “Basic/Essential Grammar” do Tae Kim. Rótulos de fonte conferidos página a página (ex.: a página “haga” do Langoal trata de うさぎは耳が長い, não de は × が em geral). |
| Autoria | Cada alternativa errada testada; alternativas que um nativo poderia aceitar ficaram de fora, com anotação no `review` (ex.: から com 降りる, より “a partir de”, とき com 〜たときがある). |
| Furigana | 17 divergências do analisador, todas leituras corretas (9時 = くじ, 日本 = にほん, {来|き}たり…). |
| Revisor às cegas | **69/69** acertos, nenhuma questão com segunda resposta. **Corrigidos:** fonte errada em ながら (não está na lista N5 do JLPT Sensei → `levelNote`); `levelNote` em なければならない e ので; explicação da alternativa に em m1-002 (に também marca chegada: ホームに降りる); exceção “ある de evento → で” (学校で試験がある); uso de でしょう para confirmação; 〜ませんか nem sempre é “junto”; afirmações absolutas (“interrogativo nunca com は”, “dia da semana pede に”); exemplos das regras que repetiam frases das questões foram trocados. |

## Registro — lote 3 do N4 (16/11/2026)

Novo conteúdo: 13 regras (`points-3.ts`: のは〜だ, じゃないか, かい／だい, がり, 頃／ごろ, と言われている／と聞いた, って,
とか〜とか, 予定だ, づらい, ていた, たらいいですか, と思う), 26 questões de もんだい1 (081–106), 5 de もんだい2 (020–024)
e 1 texto de もんだい3 (004). O Tae Kim entra direto nas fontes das regras novas (11 das 13).

| Etapa | Resultado |
|---|---|
| Furigana | 24 + 7 divergências do analisador, todas leituras corretas (窓が{開|あ}く, {一人|ひとり}, {20分|にじゅっぷん}…). |
| Revisor às cegas | **35/35** acertos, nenhuma questão com segunda resposta; conferiu na web os slugs do JLPT Sensei, as páginas do Bunpro, do Langoal e do 日本語教師ネット. **Corrigidos:** explicação falsa em **m1-099** (〜ておく não exige verbo transitivo; exige ação intencional); **m1-083** (ではありませんか existe — o que falta na alternativa é o か); seção errada do Tae Kim em かい／だい; ぐらい também serve para horário na fala (regra ごろ e m1-087); じゃないか com ん vira suposição (〜んじゃないか); はずだ “não é à toa que” (usado na m1-104) entrou na regra; がり serve para falar de si mesmo; って como tópico; つもり não é só de quem fala; afirmações absolutas suavizadas. **Exemplos das regras que repetiam as frases das questões foram todos trocados.** |

## Limites honestos

- As duas rodadas foram feitas por IA (Claude), com fontes externas; na 2ª, por agentes independentes de quem escreveu. Ela reduz muito o risco de erro, mas
  **não substitui** a revisão de um professor ou falante nativo. Recomenda-se marcar no app (“⚑ Marcar esta questão
  para revisão”) qualquer coisa que pareça estranha.
- Listas de gramática do N4 não são oficiais; alguns pontos podem ser classificados como N3 em outras fontes
  (anotado em `levelNote`).
