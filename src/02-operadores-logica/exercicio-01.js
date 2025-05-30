/**
 * Exercício 01: Verificar elegibilidade para votação
 * Regras:
 * - Idade >= 18: Voto obrigatório
 * - Idade 16 ou 17: Voto opcional
 * - Idade < 16: Não pode votar
 * @param {number} idade
 * @returns {string} Status da votação
 */
export function verificarElegibilidadeVoto(idade) {
  // Implementar aqui

  if (idade >= 16 && idade <= 17) {
    return "Voto opcional";
  }

  if (idade < 16) {
    return "Não pode votar";
  }

  return "Voto obrigatório";
}
