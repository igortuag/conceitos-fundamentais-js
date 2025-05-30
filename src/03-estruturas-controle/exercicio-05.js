/**
 * Exercício 05: Calculadora de Média e Status
 * Calcula a média de notas e determina status de aprovação
 *
 * @param {number[]} notas - Array com as notas do aluno
 * @returns {Object} Média e status do aluno
 *
 * @examples
 * calcularMedia([7, 8, 9]) // { media: 8, status: "Aprovado" }
 * calcularMedia([5, 5, 5]) // { media: 5, status: "Em Recuperação" }
 * calcularMedia([3, 4, 2]) // { media: 3, status: "Reprovado" }
 * calcularMedia(['7', 8]) // "Por favor, forneça apenas números válidos"
 */
export function calcularMedia(notas) {
  // Implementar aqui
  // if (typeof notas !== "number") {
  //   return "Por favor, forneça apenas números válidos";
  // }

  // console.log("COMEÇOU VERIFICAR AS NOTAS ::>", notas);

  let soma = 0;
  let estragado = false;

  for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    if (typeof nota !== "number") {
      estragado = true;
    }
    soma += notas[i];
  }

  if (estragado) {
    return "Por favor, forneça apenas números válidos";
  }

  const media = soma / notas.length;
  let status = "";

  if (media < 5) {
    status = "Reprovado";
  } else if (media < 7) {
    status = "Em Recuperação";
  } else {
    status = "Aprovado";
  }

  return {
    media,
    status,
  };
}

console.log("calcularMedia([7, 8, 9])", calcularMedia([7, 8, 9]));
