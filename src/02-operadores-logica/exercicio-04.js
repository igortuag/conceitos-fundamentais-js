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
  if (typeof distancia !== 'number') {
    return 'Por favor, forneça uma distância válida';
  }

  if (distancia <= 0) {
    return 'A distância deve ser maior que zero';
  }

  const preco = distancia <= 200 ? distancia * 0.50 : distancia * 0.45;
  return `Preço da passagem: R$ ${preco.toFixed(2)}`;
}
