/**
 * Exercício 08: Comparador de Números
 * Regras:
 * - Receber três números
 * - Identificar o maior, o menor e o valor do meio
 * - Indicar se há números iguais
 * - Calcular a média dos três números
 *
 * @param {number} n1 - Primeiro número
 * @param {number} n2 - Segundo número
 * @param {number} n3 - Terceiro número
 * @returns {Object} Objeto com as análises dos números
 */
export function analisarNumeros(n1, n2, n3) {
  // você deve verificar se os números são válidos
  if (
    typeof n1 !== "number" ||
    typeof n2 !== "number" ||
    typeof n3 !== "number"
  ) {
    return "Por favor, forneça apenas números";
  }

  let maior = 0;
  let menor = 0;
  let temNumerosIguais = false;
  const media = ((n1 + n2 + n3) / 3).toFixed(2);

  // você deve verificar qual é o maior número, qual é o menor, qual é a media e se há números iguais
  // MAIOR
  if (n1 > n2) {
    maior = n1;
  }

  if (n3 > maior) {
    maior = n3;
  }
  // MENOR
  if (n1 < n2) {
    menor = n1;
  }

  if (n2 < n3) {
    menor = n2;
  }

  if (n3 < menor) {
    menor = n3;
  }

  // SE HÁ IGUAIS
  if (n1 === n2 || n2 === n3 || n1 === n3) {
    temNumerosIguais = true;
  }

  return {
    maior,
    menor,
    media,
    temNumerosIguais,
  };
}

console.log("analisar>>>", analisarNumeros(10, 5, 8));
