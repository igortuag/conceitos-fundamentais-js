/**
 * Exercício 10: Verificador de Par ou Ímpar
 *
 * @param {number} numero - Número a ser verificado
 * @returns {string} Possíveis retornos:
 * - "Par" (quando divisível por 2)
 * - "Ímpar" (quando não divisível por 2)
 * - "Por favor, forneça um número válido" (quando não for número)
 * * @examples
 * verificarParOuImpar(4) // "Par"
 * verificarParOuImpar(5) // "Ímpar"
 * verificarParOuImpar("texto") // "Por favor, forneça um número válido"
 */
export function verificarParOuImpar(numero) {
  // Implementar aqui
  if (typeof numero !== "number") {
    return "Por favor, forneça um número válido";
  }

  if (numero % 2 === 0) {
    return "Par";
  }

  return "Ímpar";
}

// console.log("verificarParOuImpar(numero)", verificarParOuImpar(2));
