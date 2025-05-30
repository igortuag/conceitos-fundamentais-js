/**
 * Exercício 01: Encontrar Números Pares
 * Regras:
 * - Receber início e fim do intervalo
 * - Retornar array com números pares
 * - Validar se início é menor que fim
 * - Validar tipos de entrada
 *
 * @param {number} inicio - Número inicial do intervalo
 * @param {number} fim - Número final do intervalo
 * @returns {number[]} Array com números pares
 */
export function encontrarPares(inicio, fim) {
  // verifique se os dados fornecidos são números, caso controario retorne  throw new Error('Por favor, forneça números válidos');
  if (typeof inicio !== "number" || typeof fim !== "number") {
    throw new Error("Por favor, forneça números válidos");
  }

  if (inicio > fim) {
    throw new Error("O início deve ser menor que o fim");
  }

  const pares = [];

  for (let i = inicio; i <= fim; i++) {
    if (i % 2 == 0) {
      pares.push(i);
    }
  }

  // Validação de intervalo
  // Verique se o fim é maior que o início, caso contrário retorne um erro  throw new Error("O início deve ser menor que o fim");

  // Usando white crie um array para armazenar os números pares

  return pares;
}

// console.log("encontrarPares(inicio, fim)", encontrarPares(2, 8));
