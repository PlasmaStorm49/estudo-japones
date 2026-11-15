import type { Review } from "../../../schema.ts";

/**
 * Checagens comuns a toda questão deste banco. O processo completo e o registro de cada rodada
 * estão em docs/revisao.md. Uma questão nova entra como "rascunho" e só vira "revisada" depois
 * de passar por todas as etapas.
 */
export const BASE_CHECKS = [
  "Autoria: formato e estilo baseados nos cadernos oficiais de exemplo do N4 (2012 e 2018); questão original, não copiada.",
  "Autoria: cada alternativa errada testada contra a frase (“um nativo aceitaria isto aqui?”). Se sim ou talvez, a questão foi reescrita.",
  "Regra conferida em pelo menos duas fontes (ver o ponto gramatical).",
];

/** Rodada 1 de revisão (14/11/2026), feita pelo Claude (IA). Ver docs/revisao.md. */
export const ROUND_1 = [
  "Rodada 1 (IA): validação estrutural automática sem erros.",
  "Rodada 1 (IA): furigana conferido por analisador morfológico (kuromoji) e divergências revisadas à mão.",
  "Rodada 1 (IA): resolvida às cegas (alternativas embaralhadas, sem gabarito), buscando uma 2ª alternativa defensável.",
  "Rodada 1 (IA): frase relida com a resposta para checar naturalidade.",
  "Rodada 2 (IA, revisor independente que não escreveu a questão): resolvida às cegas e explicação conferida; apontamentos verificados antes de corrigir.",
  "Pendente: revisão por professor ou falante nativo.",
];

export function review(status: Review["status"], ...specific: string[]): Review {
  return { status, checks: [...BASE_CHECKS, ...(status === "revisada" ? ROUND_1 : []), ...specific] };
}

/** Lote 2 (15/11/2026): mesmo processo, com a revisão independente às cegas feita por agentes separados. */
export const LOTE_2 = [
  "Lote 2 (IA): validação estrutural automática sem erros.",
  "Lote 2 (IA): furigana conferido por analisador morfológico (kuromoji) e divergências revisadas à mão.",
  "Lote 2 (IA, revisor independente que não escreveu a questão): resolvida às cegas, alternativa por alternativa, e explicação conferida; apontamentos verificados antes de corrigir.",
  "Pendente: revisão por professor ou falante nativo.",
];

export function review2(status: Review["status"], ...specific: string[]): Review {
  return { status, checks: [...BASE_CHECKS, ...(status === "revisada" ? LOTE_2 : []), ...specific] };
}
