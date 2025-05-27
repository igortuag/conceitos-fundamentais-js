/**
 * Exercício 06: Calculadora de Aumento Salarial
 * Regras:
 * - Salário > 1250: aumento de 10%
 * - Salário <= 1250: aumento de 15%
 * - Validar entrada (número positivo)
 * @param {number} salario - Salário atual do funcionário
 * @returns {string} Mensagem com o novo salário e o aumento
 */
export function calcularAumentoSalario(salario) {
  if (typeof salario !== "number") {
    return "Por favor, forneça um salário válido";
  }

  if (salario < 0) {
    return "O salário deve ser maior que zero";
  }

  let aumento = 0.1;

  if (salario <= 1250) {
    aumento = 0.15;
  }

  let valorAumento = salario * aumento;
  return `Salário anterior: R$ ${salario.toFixed(2)} Percentual de aumento: ${
    aumento * 100
  }% Valor do aumento: R$ ${valorAumento.toFixed(2)} Novo salário: R$ ${(
    salario + valorAumento
  ).toFixed(2)} `;
}

console.log(calcularAumentoSalario(1000));
