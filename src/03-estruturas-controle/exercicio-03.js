/**
 * Exercício 03: Contador de Números
 * Conta quantos números em um array são positivos, negativos e zeros
 * 
 * @param {number[]} numeros - Array de números para analisar 
 * @returns {Object} Contagem de números positivos, negativos e zeros
 * 
 * @examples
 * contarNumeros([1, -2, 0, 3, -4]) // { positivos: 2, negativos: 2, zeros: 1 }
 * contarNumeros([1, 2, 3]) // { positivos: 3, negativos: 0, zeros: 0 }
 * contarNumeros(['1', 2]) // "Por favor, forneça apenas números"
 */
export function contarNumeros(numeros) {
  const resultado = {
    positivos: 0,
    negativos: 0,
    zeros: 0
  };

  // verifique se o dado fornecido é um array, caso contrário retorne um erro

  // Usando alguma estrutura de repetição, itere sobre o array e:
    // - incremente o contador de positivos se o número for maior que zero
    // - incremente o contador de negativos se o número for menor que zero
    // - incremente o contador de zeros se o número for igual a zero


  return resultado;
}
