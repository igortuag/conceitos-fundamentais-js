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
    zeros: 0,
  };

  let soma = 0;
  let todosSaoNumeros = true;

  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    // console.log(i);

    if (typeof numero !== "number") {
      todosSaoNumeros = false;
    }
    // console.log("todosSaoNumeros>>>", todosSaoNumeros);
    // Usando alguma estrutura de repetição, itere sobre o array e:
    // - incremente o contador de positivos se o número for maior que zero
    if (numero > 0) {
      soma += numero;
      resultado.positivos++;
    }
    // - incremente o contador de negativos se o número for menor que zero
    if (numero < 0) {
      soma += numero;
      resultado.negativos++;
    }
    // - incremente o contador de zeros se o número for igual a zero
    if (numero === 0) {
      soma += numero;
      resultado.zeros++;
    }
  }

  if (!todosSaoNumeros) {
    return "Por favor, forneça apenas números";
  }

  return resultado;
}

// console.log(contarNumeros([1, -2, 0, 3, -4])); // { positivos: 2, negativos: 2, zeros: 1 }
