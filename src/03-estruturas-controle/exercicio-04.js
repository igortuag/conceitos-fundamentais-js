/**
 * Exercício 04: Contador de Palavras
 * Conta quantas palavras existem em uma frase
 *
 * @param {string} frase - Frase para contar as palavras
 * @returns {Object} Número de palavras e a frase processada
 *
 * @examples
 * contarPalavras("hello world") // { palavras: 2, frase: "hello world" }
 * contarPalavras("   spaces   ") // { palavras: 1, frase: "spaces" }
 * contarPalavras(123) // "Por favor, forneça uma string válida"
 */
export function contarPalavras(frase) {
  if (typeof frase !== "string") {
    return "Por favor, forneça uma string válida";
  }

  const arrayPalavras = frase.split(" ");
  const palavrasProcessadas = [];

  const resultado = {
    palavras: 0,
    frase: 0,
  };

  // console.log(
  //   `test frase:"${frase}":::::::::::::array de palavras ::>`,
  //   arrayPalavras
  // );

  for (let i = 0; i < arrayPalavras.length; i++) {
    const item = arrayPalavras[i];

    // console.log(`Item na posição ${i}: ${item}.`);

    if (item) {
      palavrasProcessadas.push(item);
      resultado.palavras++;
    }
  }

  return {
    palavras: resultado.palavras,
    frase: palavrasProcessadas.join(" "),
  };
}

// console.log("contarPalavras(frase)", contarPalavras("hello world"));
