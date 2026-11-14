# Como adicionar conteúdo

Todo o conteúdo é TypeScript tipado: o próprio editor e o `npm run typecheck` acusam campo faltando ou errado.
O formato está em [schema.ts](schema.ts).

## Convenções de texto

- Furigana: `{漢字|かんじ}` — um bloco por palavra; okurigana fora do bloco: `{食|た}べる`. **Todo kanji** das frases
  em japonês precisa de furigana (o validador confere).
- Espaço entre blocos da frase, como na prova (分かち書き): `{日本語|にほんご}の ニュースが わかる`.
- Lacuna de もんだい1: `（　　）` (parênteses japoneses com dois espaços ideográficos).
- Lacunas de もんだい3: `[[1]]`, `[[2]]`… no texto.
- Negrito nas explicações: `**texto**`.
- No arquivo, a resposta pode ficar sempre na alternativa 0: o app embaralha alternativas e explicações juntas.

## Nova questão de gramática do N4

1. Escolha o arquivo: `jlpt/n4/grammar/mondai1-*.ts`, `mondai2.ts` ou `mondai3.ts`.
2. Use um id novo e sequencial (ex.: `n4-g-m1-051`).
3. Associe pelo menos um ponto de `points.ts` (crie a regra se não existir, com duas fontes).
4. Explique **cada** alternativa. Na alternativa certa, explique o que a frase pede; nas erradas, por que não servem
   aqui (e, se for útil, onde elas serviriam).
5. Comece com `review("rascunho")`. Rode `npm run check` e o processo de [docs/revisao.md](../docs/revisao.md);
   só então troque para `review("revisada", ...)`.

## Novo nível ou novo módulo

1. Crie a pasta (ex.: `jlpt/n3/grammar/`) com os mesmos arquivos.
2. Registre o módulo em [index.ts](index.ts) com `examFormat` do nível (confira o formato atual em jlpt.jp).
3. Módulos de outros tipos (vocabulário, kanji, leitura) vão precisar de um tipo novo em `schema.ts` e de uma tela
   no app; a estrutura de pastas (`exame/nível/módulo`) já está pronta para isso.
