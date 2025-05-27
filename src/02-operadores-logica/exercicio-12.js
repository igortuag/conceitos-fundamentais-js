/**
 * Exercício 12: Calculadora de IMC
 * Regras:
 * - Abaixo do peso: IMC < 18.5
 * - Peso normal: IMC entre 18.5 e 24.9
 * - Acima do peso: IMC entre 25 e 29.9
 * - Obeso: IMC >= 30
 *
 * @param {number} peso - Peso em kg
 * @param {number} altura - Altura em metros
 * @returns {string} Possíveis retornos:
 * - "Abaixo do peso" (IMC < 18.5)
 * - "Peso normal" (18.5 <= IMC <= 24.9) =>18.5 <= IMC &&  IMC <= 24.9
 * - "Acima do peso" (25 <= IMC <= 29.9)
 * - "Obeso" (IMC >= 30)
 * - "Por favor, forneça valores válidos" (quando não forem números)
 * - "Peso e altura devem ser maiores que zero" (quando valores <= 0)
 * * @examples
 * 70, 1.75 => "Peso normal" (IMC = 22.86)
 * 80, 1.75 => "Acima do peso" (IMC = 26.12)
 * 90, 1.75 => "Obeso" (IMC = 29.39)
 * 50, 1.75 => "Abaixo do peso" (IMC = 16.33)
 */
export function calcularIMC(peso, altura) {
  // Implementar aqui
  if (peso < 0 || altura < 0) {
    return "Peso e altura devem ser maiores que zero";
  }
  if (typeof peso !== "number" || typeof altura !== "number") {
    return "Por favor, forneça valores válidos";
  }

  const calculoIMC = (peso / (altura * altura)).toFixed(2);

  if (calculoIMC < 18.5) {
    return "Abaixo do peso";
  }

  if (calculoIMC >= 18.5 && calculoIMC <= 24.9) {
    return "Peso normal";
  }

  if (25 <= calculoIMC && calculoIMC <= 29.9) {
    return "Acima do peso";
  }

  if (calculoIMC >= 30) {
    return "Obeso";
  }

  return calculoIMC;
}
// console.log("calcularIMC(peso, altura)>>>", calcularIMC(70, 1.7));
