/**
 * Exercício 11: Calculadora de Preço de Maçãs
 * Regras:
 * - Até 4 maçãs: R$ 0,50 cada
 * - 5 ou mais maçãs: R$ 0,25 cada
 * 
 * @param {number} quantidade - Quantidade de maçãs
 * @returns {string} Possíveis retornos:
 * - "Total: R$ X.XX" (valor calculado com 2 casas decimais)
 * - "Quantidade inválida" (quando menor que 0)
 * - "Por favor, forneça um número válido" (quando não for número)
 * * @examples
//  * calcularPrecoMacas(3) // "Total: R$ 1.50"
//  * calcularPrecoMacas(5) // "Total: R$ 1.25"
//  * calcularPrecoMacas(-1) // "Quantidade inválida"
//  * calcularPrecoMacas("texto") // "Por favor, forneça um número válido"
 */
export function calcularPrecoMacas(quantidade) {
  // Implementar aqui
  if (typeof quantidade !== "number") {
    return "Por favor, forneça um número válido";
  }

  if (quantidade < 0) {
    return "Quantidade inválida";
  }

  if (quantidade <= 4) {
    const total = (quantidade * 0.5).toFixed(2);
    return `Total: R$ ${total}`;
  }

  const total = (quantidade * 0.25).toFixed(2);

  return `Total: R$ ${total}`;
}
