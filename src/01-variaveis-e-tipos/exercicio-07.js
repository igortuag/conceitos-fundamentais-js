/**
 * Exercício 07: Formatador de Nome Completo
 * Regras:
 * - Receber nome e sobrenome separadamente
 * - Retornar nome completo formatado
 * - Primeira letra de cada parte deve ser maiúscula
 * - Demais letras minúsculas
 */
export function formatarNomeCompleto(nome, sobrenome) {
  // verifique se os parâmetros são strings
  if (typeof nome !== "string" || typeof sobrenome !== "string") {
    return "Por favor, forneça strings válidas";
  }

  // DICA: utilize o método .toLowerCase() para deixar todas as letras minúsculas
  const nomeMinusculo = nome.toLowerCase();
  const sobrenomeMinusculo = sobrenome.toLowerCase();

  // DICA: utilize o método .charAt(0).toUpperCase() para deixar a primeira letra maiúscula
  // DICA: utilize o método .slice(1) para pegar o restante da string

  // NOME
  const nomePrimeiraLetraMinuscula = nomeMinusculo.charAt(0);
  const nomePrimeiraLetraMaiscula = nomePrimeiraLetraMinuscula.toUpperCase();
  //NOME FORMATADO
  const nomeCompletoFormatado =
    nomePrimeiraLetraMaiscula + nomeMinusculo.slice(1);

  // SOBRENOME
  const sobrenomePrimeiraLetraMiniscula = sobrenomeMinusculo.charAt(0);
  const sobrenomePrimeiraLetraMaiscula =
    sobrenomePrimeiraLetraMiniscula.toUpperCase();

  //SOBRENOME FORMATADO
  const sobrenomeCompletoFormatado =
    sobrenomePrimeiraLetraMaiscula + sobrenomeMinusculo.slice(1);

  // retorne o nome completo formatado
  // DICA: utilize o método .concat() para concatenar as strings
  // Exemplo: "joão da silva" deve retornar "João da Silva"
  return `${nomeCompletoFormatado} ${sobrenomeCompletoFormatado}`;
}
