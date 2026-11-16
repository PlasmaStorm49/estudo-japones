import type { Review } from "../../../schema.ts";

/**
 * Checagens comuns às questões do N5. O processo é o mesmo do N4 (ver docs/revisao.md).
 * Uma questão nova entra como "rascunho" e só vira "revisada" depois de passar por todas as etapas.
 */
export const BASE_CHECKS_N5 = [
  "Autoria: formato e estilo baseados nos cadernos oficiais de exemplo do N5 (2012 e 2018); questão original, não copiada.",
  "Autoria: cada alternativa errada testada contra a frase (“um nativo aceitaria isto aqui?”). Se sim ou talvez, a alternativa foi trocada.",
  "Regra conferida em pelo menos duas fontes (ver o ponto gramatical), incluindo o Tae Kim quando ele trata do assunto.",
];

/** Revisão do lote N5 (16/11/2026). */
export const LOTE_N5 = [
  "Lote N5 (IA): validação estrutural automática sem erros.",
  "Lote N5 (IA): furigana conferido por analisador morfológico (kuromoji) e divergências revisadas à mão.",
  "Lote N5 (IA, revisor independente que não escreveu a questão): resolvida às cegas, alternativa por alternativa, e explicação conferida; apontamentos verificados antes de corrigir.",
  "Pendente: revisão por professor ou falante nativo.",
];

export function reviewN5(status: Review["status"], ...specific: string[]): Review {
  return { status, checks: [...BASE_CHECKS_N5, ...(status === "revisada" ? LOTE_N5 : []), ...specific] };
}
