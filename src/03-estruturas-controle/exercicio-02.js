/**
 * Exercício 02: Somar Números Ímpares
 * Regras:
 * - Receber início e fim do intervalo
 * - Encontrar todos os números ímpares
 * - Retornar a soma dos números ímpares
 * - Validar entrada
 *
 * @param {number} inicio - Número inicial do intervalo
 * @param {number} fim - Número final do intervalo
 * @returns {Object} Objeto com números ímpares e sua soma
 */
export function somarImpares(inicio, fim) {
  // Verifica se os dados fornecidos são números caso contrário retorne um erro Error('Por favor, forneça números válidos');
  if (typeof inicio !== "number" || typeof fim !== "number") {
    throw new Error("Por favor, forneça números válidos");
  }

  // Verifique se o fim é maior que o início, caso contrário retorne um erro throw new Error("O início deve ser menor que o fim");
  if (inicio > fim) {
    throw new Error("O início deve ser menor que o fim");
  }

  // Usando while, crie um array para armazenar os números ímpares e uma variável para a soma

  const impares = [];
  let soma = 0;

  for (let i = inicio; i <= fim; i++) {
    if (i % 2 !== 0) {
      impares.push(i);
      soma += i;
    }
  }

  return {
    numerosImpares: impares || [],
    soma,
  };
}

// console.log("somarImpares(1, 5)", somarImpares(1, 5));
