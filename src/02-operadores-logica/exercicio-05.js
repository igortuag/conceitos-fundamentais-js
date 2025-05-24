/**
 * Exercício 05: Verificador de Ano Bissexto
 * Regras para ano bissexto:
 * - Divisível por 4 E
 * - Não divisível por 100 OU
 * - Divisível por 400
 * @param {number} ano - Ano a ser verificado
 * @returns {string} Mensagem indicando se é bissexto ou não
 */
export function verificarAnoBissexto(ano) {
  if (typeof ano !== 'number') {
    return 'Por favor, forneça um ano válido';
  }

  if (ano <= 0) {
    return 'O ano deve ser maior que zero';
  }

  const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  return ehBissexto ? `${ano} é um ano BISSEXTO` : `${ano} NÃO é um ano BISSEXTO`;
}
