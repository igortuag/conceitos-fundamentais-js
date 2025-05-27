/**
 * Exercício 05: Verificador de Ano Bissexto
 * Regras para ano bissexto:
 * - Divisível por 4 E
 * - Não divisível por 100 OU
 * - Divisível por 400
 * @param {number} ano - Ano a ser verificado
 * @returns {string} Mensagem indicando se é bissexto ou não eg. "2000 é um ano BISSEXTO" ou "2021 NÃO é um ano BISSEXTO",
 */
export function verificarAnoBissexto(ano) {
  if (typeof ano !== "number") {
    return "Por favor, forneça um ano válido";
  }

  if (ano < 0) {
    return "O ano deve ser maior que zero";
  }

  if (ano % 4 == 0) {
    if (ano % 100 != 0 || ano % 400 === 0) {
      return `${ano} é um ano BISSEXTO`;
    }
  }

  return `${ano} NÃO é um ano BISSEXTO`;
}
