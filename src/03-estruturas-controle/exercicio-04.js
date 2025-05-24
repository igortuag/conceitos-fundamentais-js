/**
 * Exercício 04: Verificador de Palíndromo
 * Regras:
 * - Remover espaços e pontuação
 * - Ignorar maiúsculas/minúsculas
 * - Verificar se a string é igual de trás para frente
 * - Retornar objeto com resultado e explicação
 *
 * @param {string} frase - Frase a ser verificada
 * @returns {Object} Objeto com resultado e explicação
 */
export function verificarPalindromo(frase) {
  // Verifica se o dado fornecido é uma string, caso contrário retorne um erro

  // Limpa a string (remove espaços e converte para minúsculas)

  // Fáca uma cópia da string limpa e inverta

  // Remova a const abaixo depois de implementar a lógica
  const ehPalindromo = false;

  return {
    frase: frase,
    fraseProcessada: "",
    ehPalindromo: ehPalindromo,
    explicacao: ehPalindromo
      ? `"${frase}" é um palíndromo`
      : `"${frase}" não é um palíndromo`
  };
}
