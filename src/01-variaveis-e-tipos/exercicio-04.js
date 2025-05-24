/**
 * Exercício 04: Analisar tipo e propriedades de um valor
 * TODO:
 * 1. Identificar o tipo primitivo do valor
 * 2. Verificar se está vazio
 * 3. Verificar se é número/texto/booleano/array/objeto
 * 4. Verificar comprimento (se aplicável)
 * 5. Retornar objeto com todas as análises
 */
export function analisarValor(valor) {
  // TODO edite os null para os valores corretos, exemplo: tipo: typeof valor

  const tipo = typeof valor;

  console.log("tipo ::>", tipo);

  const ehNumero = tipo === "number";
  const ehVazio = !valor;
  const ehTexto = tipo === "string";
  const ehBooleano = tipo === "boolean";
  const ehArray = Array.isArray(valor);
  const ehObjeto = tipo === "object";
  const temComprimento = valor.length;

  const analise = {
    tipo: tipo,
    ehVazio: ehVazio,
    ehNumero: ehNumero,
    ehTexto: ehTexto,
    ehBooleano: ehBooleano,
    ehArray: ehArray,
    ehObjeto: ehObjeto,
    temComprimento: temComprimento,
    valorOriginal: valor,
  };

  return analise;
}
