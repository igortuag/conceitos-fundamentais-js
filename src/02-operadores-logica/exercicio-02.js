/**
 * Exercício 02: Calcular desconto em compra
 * Regras:
 * - Compras > 1000: 10% desconto
 * - Cliente Premium: +5% desconto adicional
 * - Black Friday: +8% desconto adicional
 * @param {number} valorCompra
 * @param {boolean} clientePremium
 * @param {boolean} blackFriday
 * @returns {number} Valor final com desconto
 */
export function calcularDesconto(valorCompra, clientePremium, blackFriday) {
  // sem desconto
  let desconto = 0;

  // Compras > 1000: 10% desconto
  if (valorCompra > 1000) {
    desconto = desconto + 0.1;
  }

  // Cliente Premium: +5% desconto adicional
  if (clientePremium) {
    desconto = desconto + 0.05;
  }

  // Black Friday: +8% desconto adicional
  if (blackFriday) {
    desconto = desconto + 0.08;
  }

  return valorCompra - valorCompra * desconto;
}
