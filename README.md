# Estudo de Japonês

Web app pessoal para estudar japonês. Primeiro módulo: **simulado de gramática do JLPT N4**, no formato oficial
da prova, com explicação detalhada de cada questão (a regra, a pista na frase, por que a certa está certa e por que
cada alternativa errada está errada).

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
npm run blind-review -- pasta-de-saida
```

que gera uma prova às cegas (sem gabarito) para revisão. O processo de revisão está em [docs/revisao.md](docs/revisao.md)
e a pesquisa (formato oficial, fontes, divergências entre listas) em [docs/pesquisa.md](docs/pesquisa.md).

## Estrutura

```
content/                 todo o conteúdo (TypeScript tipado, um arquivo por tipo de questão)
  schema.ts              formato de regras e questões
  index.ts               registro de módulos (adicione novos módulos aqui)
  jlpt/n4/grammar/       N4 · gramática: points.ts (regras), mondai1-*.ts, mondai2.ts, mondai3.ts
src/                     o app (React + Vite)
scripts/                 validação, checagem de furigana, prova às cegas
docs/                    pesquisa e registro de revisão
```

Para adicionar conteúdo (novas questões, outro nível, outro módulo), veja [content/README.md](content/README.md).

## No app

- **Simulado no formato da prova**: 13 de もんだい1 + 4 de もんだい2 + 1 texto de もんだい3 (formato oficial desde dez/2020).
- **Treino**: todas, só as não vistas, só as que errei, por tipo de questão ou por ponto gramatical.
- **Regras**: todas as regras gramaticais cobertas, com fontes.
- **⚑ Marcar para revisão**: anote o que parecer errado; a página “Marcadas” gera um bloco para copiar e me mandar.
- Furigana pode ser ligado/desligado. Atalhos: 1–4 para responder, Enter para avançar.

O progresso fica salvo só neste navegador.
