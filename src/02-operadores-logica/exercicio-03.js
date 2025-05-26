/**
 * Exercício 03: Sistema de notas
 * Regras:
 * - Média >= 7: Aprovado
 * - 5 <= Média < 7: Recuperação
 * - Média < 5: Reprovado
 * - Notas válidas: 0 a 10
 * @param {number} nota1 Primeira nota do aluno
 * @param {number} nota2 Segunda nota do aluno
 * @param {number} nota3 Terceira nota do aluno
 * @returns {string} 'Por favor, forneça notas válidas', 'As notas devem estar entre 0 e 10', 'Aprovado', 'Recuperação' ou 'Reprovado'
 */
export function avaliarSituacaoAluno(nota1, nota2, nota3) {
  // Implementação da função
  if (
    typeof nota1 !== "number" ||
    typeof nota2 !== "number" ||
    typeof nota3 !== "number"
  ) {
    return "Por favor, forneça notas válidas";
  }

  // verifica o intervalo das notas válidas
  if (nota1 < 0 || nota1 > 10) {
    return "As notas devem estar entre 0 e 10";
  }
  if (nota2 < 0 || nota2 > 10) {
    return "As notas devem estar entre 0 e 10";
  }
  if (nota3 < 0 || nota3 > 10) {
    return "As notas devem estar entre 0 e 10";
  }

  // media das notas
  const media = (nota1 + nota2 + nota3) / 3;

  if (media < 5) {
    return "Reprovado";
  }

  if (media < 7) {
    return "Recuperação";
  }

  return "Aprovado";
}
