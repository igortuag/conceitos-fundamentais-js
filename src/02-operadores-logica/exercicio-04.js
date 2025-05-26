/**
 * Exercício 04: Calculadora de Preço de Passagem
 * Regras:
 * - Até 200km: R$ 0,50 por km
 * - Acima de 200km: R$ 0,45 por km
 * - Validar entrada (número positivo)
 * @param {number} distancia - Distância em km
 * @returns {string} Mensagem com o preço calculado
 */
export function calcularPrecoPassagem(distancia) {
  // verifique se a entrada é um número, se não for, retorne uma mensagem de erro
  // 'Por favor, forneça uma distância válida'

  if (typeof distancia !== "number") {
    return "Por favor, forneça uma distância válida";
  }

  // verifique se a distância é maior que zero, se não for, retorne uma mensagem de erro
  // "A distância deve ser maior que zero"
  if (distancia < 0) {
    return "A distância deve ser maior que zero";
  }

  // Verifique o valor da distância e calcule o preço de acordo com as regras
  if (distancia <= 200) {
    const total = distancia * 0.5;
    return `Preço da passagem: R$ ${total.toFixed(2)}`;
  }

  // retorne o preço formatado com duas casas decimais
  // Exemplo: "Preço da passagem: R$ 50.00", utilize o método toFixed(2) para formatar o valor
  const total = distancia * 0.45;
  return `Preço da passagem: R$ ${total.toFixed(2)}`;
}
