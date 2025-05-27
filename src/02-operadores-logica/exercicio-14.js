/**
 * Exercício 14: Encontrar o Menor Número
 *
 * @param {number} n1 - Primeiro número
 * @param {number} n2 - Segundo número
 * @param {number} n3 - Terceiro número
 * @returns {string} Possíveis retornos:
 * - "O menor número é X" (onde X é o menor número)
 * - "Por favor, forneça números válidos" (quando não forem números)
 * * @examples
 * encontrarMenor(10, 20, 30) // "O menor número é 10"
 * encontrarMenor(5, 3, 8) // "O menor número é 3"
 * encontrarMenor("texto", 2, 3) // "Por favor, forneça números válidos"
 */
export function encontrarMenor(n1, n2, n3) {
  // Implementar aqui
  if (
    typeof n1 !== "number" ||
    typeof n2 !== "number" ||
    typeof n3 !== "number"
  ) {
    return "Por favor, forneça números válidos";
  }

  let r = n1;

  if (n2 < r) {
    r = n2;
  }
  if (n3 < r) {
    r = n3;
  }

  return `O menor número é ${r}`;
}

console.log(("encontrarMenor(n1, n2, n3)", encontrarMenor(1, 2, 3)));
