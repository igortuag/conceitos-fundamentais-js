/**
 * Exercício 09: Rotina de Academia
 * Regras:
 * - segunda ou sexta: triceps e costa
 * - terça: descanso
 * - quarta e sabado: biceps, peito e ombro
 * - quinta e domingo: perna
 *
 * @param {string} dia - Dia da semana (segunda, terça, quarta, quinta, sexta, sabado, domingo)
 * @returns {string} Possíveis retornos:
 * - "triceps e costa" (para segunda e sexta)
 * - "descanso" (para terça)
 * - "biceps, peito e ombro" (para quarta e sábado)
 * - "perna" (para quinta e domingo)
 * - "Dia inválido" (para entrada diferente dos dias da semana)
 */
export function determinarTreino(dia) {
  // Implementar aqui
  if (dia === "segunda" || dia === "sexta") {
    return "triceps e costa";
  }

  if (dia === "terça") {
    return "descanso";
  }

  if (dia === "quarta" || dia === "sabado") {
    return "biceps, peito e ombro";
  }

  if (dia === "quinta" || dia === "domingo") {
    return "perna";
  }

  return "Dia inválido";
}
