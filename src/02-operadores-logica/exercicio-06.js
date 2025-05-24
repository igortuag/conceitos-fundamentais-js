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
  if (typeof salario !== 'number') {
    return 'Por favor, forneça um salário válido';
  }

  if (salario <= 0) {
    return 'O salário deve ser maior que zero';
  }

  const percentualAumento = salario > 1250 ? 0.10 : 0.15;
  const aumento = salario * percentualAumento;
  const novoSalario = salario + aumento;

  return `Salário anterior: R$ ${salario.toFixed(2)}
Percentual de aumento: ${(percentualAumento * 100)}%
Valor do aumento: R$ ${aumento.toFixed(2)}
Novo salário: R$ ${novoSalario.toFixed(2)}`;
}
