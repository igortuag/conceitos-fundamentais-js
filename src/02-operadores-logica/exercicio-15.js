/**
 * Exercício 15: Verificador de Idade para Dirigir
 *
 * @param {number} idade - Idade da pessoa
 * @returns {string} Possíveis retornos:
 * - "Pode dirigir" (idade >= 18)
 * - "Não pode dirigir" (idade < 18)
 * - "Por favor, forneça uma idade válida" (quando não for número ou < 0)
 * * @examples
 * podeDigirir(20) // "Pode dirigir"
 * podeDigirir(16) // "Não pode dirigir"
 * podeDigirir("texto") // "Por favor, forneça uma idade válida"
 */
export function podeDigirir(idade) {
  // Implementar aqui
  if (typeof idade !== "number") {
    return "Por favor, forneça uma idade válida";
  }
  if (idade < 0) {
    return "Por favor, forneça uma idade válida";
  }

  if (idade < 18) {
    return "Não pode dirigir";
  }

  return "Pode dirigir";
}
