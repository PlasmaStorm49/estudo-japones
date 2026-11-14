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

## Limites honestos

- As duas rodadas foram feitas por IA (Claude), com fontes externas; na 2ª, por agentes independentes de quem escreveu. Ela reduz muito o risco de erro, mas
  **não substitui** a revisão de um professor ou falante nativo. Recomenda-se marcar no app (“⚑ Marcar esta questão
  para revisão”) qualquer coisa que pareça estranha.
- Listas de gramática do N4 não são oficiais; alguns pontos podem ser classificados como N3 em outras fontes
  (anotado em `levelNote`).
