# Estudo de Japonês

Web app pessoal para estudar japonês. Módulos atuais: **simulados de gramática do JLPT N5 e N4**, no formato
oficial da prova, com explicação detalhada de cada questão (a regra, a pista na frase, por que a certa está certa e
por que cada alternativa errada está errada). As regras citam várias fontes, entre elas o livro do Tae Kim
(*A Guide to Japanese Grammar*), indicado pelo professor.

## Rodar

```bash
npm install
npm run dev
```

Abre em http://localhost:5180.

## Verificar o conteúdo

```bash
npm run check
```

Roda a checagem de tipos, a validação estrutural e a checagem de furigana. Também existe:

```bash
npm run blind-review -- pasta-de-saida [id-do-módulo] [--rascunho]
```

que gera uma prova às cegas (sem gabarito) para revisão. O processo de revisão está em [docs/revisao.md](docs/revisao.md)
e a pesquisa (formato oficial, fontes, divergências entre listas) em [docs/pesquisa.md](docs/pesquisa.md).

## Estrutura

```
content/                 todo o conteúdo (TypeScript tipado, um arquivo por tipo de questão)
  schema.ts              formato de regras e questões
  index.ts               registro de módulos (adicione novos módulos aqui)
  taekim.ts              citações do livro do Tae Kim (páginas do PDF)
  jlpt/n4/grammar/       N4 · gramática: points*.ts (regras), mondai1-*.ts, mondai2*.ts, mondai3*.ts
  jlpt/n5/grammar/       N5 · gramática: mesma organização
src/                     o app (React + Vite)
scripts/                 validação, checagem de furigana, prova às cegas
docs/                    pesquisa e registro de revisão
```

Para adicionar conteúdo (novas questões, outro nível, outro módulo), veja [content/README.md](content/README.md).

## No app

- **N5 / N4**: escolha o nível no topo da página (fica lembrado).
- **Simulado no formato da prova** (formato oficial desde dez/2020): N4 = 13 de もんだい1 + 4 de もんだい2 + 1 texto de
  もんだい3; N5 = 9 + 4 + 1 texto.
- **Treino**: todas, só as não vistas, só as que errei, por tipo de questão ou por ponto gramatical.
- **Regras**: todas as regras gramaticais do nível, com fontes.
- **Para estudar mais — Tae Kim**: na explicação de cada questão, as seções e páginas do livro sobre aquela regra.
- **⚑ Marcar para revisão**: anote o que parecer errado; a página “Marcadas” gera um bloco para copiar e me mandar.
- Furigana pode ser ligado/desligado. Atalhos: 1–4 para responder, Enter para avançar.

O progresso fica salvo só neste navegador.
