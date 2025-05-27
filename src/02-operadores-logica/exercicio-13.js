/**
 * Exercício 13: Encontrar o Maior Número
 *
 * @param {number} n1 - Primeiro número
 * @param {number} n2 - Segundo número
 * @param {number} n3 - Terceiro número
 * @returns {string} Possíveis retornos:
 * - "O maior número é X" (onde X é o maior número)
 * - "Por favor, forneça números válidos" (quando não forem números)
 * * @examples
 * encontrarMaior(10, 20, 30) // "O maior número é 30"
 * encontrarMaior(5, 3, 8) // "O maior número é 8"
 */
export function encontrarMaior(n1, n2, n3) {
  // Implementar aqui
  if (
    typeof n1 !== "number" ||
    typeof n2 !== "number" ||
    typeof n3 !== "number"
  ) {
    return "Por favor, forneça números válidos";
  }

  let maior = 0;

  if (n1 >= n2) {
    maior = n1;
  }
  if (n2 >= maior) {
    maior = n2;
  }
  if (n3 >= maior) {
    maior = n3;
  }
  return `O maior número é ${maior}`;
}
