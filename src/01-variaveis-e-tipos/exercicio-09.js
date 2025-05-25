/**
 * Exercício 09: Troca de Valores
 * Regras:
 * - Receber dois valores de qualquer tipo
 * - Trocar os valores entre as variáveis
 * - Retornar objeto com valores originais e trocados
 *
 * @param {any} a - Primeiro valor
 * @param {any} b - Segundo valor
 * @returns {Object} Objeto com valores antes e depois da troca
 */
export function trocarValores(a, b) {
  return {
    valorA: b,
    valorB: a,
  };
}
