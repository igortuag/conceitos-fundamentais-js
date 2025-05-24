/**
 * Exercício 03: Verificador de Números Primos
 * Regras:
 * - Verificar se um número é primo
 * - Otimizar verificação até a raiz quadrada do número
 * - Validar entrada (número positivo)
 * - Retornar mensagem explicativa
 * 
 * @param {number} numero - Número a ser verificado
 * @returns {Object} Objeto com resultado e explicação
 */
export function verificarPrimo(numero) {
  const retornoNegativo = {
    ehPrimo: false,
    explicacao: `${numero} não é primo pois não é um número positivo`
  };

  // verifique se o dado fornecido é um número, caso contrário retorne um erro

  // Verique se o numero é igual a 1

  // Verique se o numero é igual a 2 (unico numero primo par) primo

  // Verifique se o número é par, se for não é primo


  // Usando alguma estrutura de repetição, verifique se o número é divisível por algum número ímpar até a raiz quadrada do número


  return {
    ehPrimo: true,
    explicacao: `${numero} é primo pois só é divisível por 1 e por ele mesmo`
  };
}
