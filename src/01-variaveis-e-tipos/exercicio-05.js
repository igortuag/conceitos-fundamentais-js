/**
 * Exercício 05: Converter Reais para Dólares
 * TODO:
 * 1. Validar se os valores são números
 * 2. Validar se os valores são positivos
 * 3. Usar cotação padrão se não fornecida
 * 4. Calcular conversão
 * 5. Retornar mensagem formatada com 2 casas decimais
 */
export function converterRealParaDolar(reais, cotacaoDolar = 5.0) {
  // verifique o tipo, exemplo:
  if (typeof reais !== "number" || typeof cotacaoDolar !== "number") {
    return "Por favor, forneça valores numéricos";
  }

  // adicione um if para validar se os valores são positivos
  if (reais < 0 || cotacaoDolar < 0) {
    return "Os valores precisam ser positivos";
  }

  // obtemos o valor em dólares
  // se real for 100 e a cotação do dolar é de 5, então a conversao será 100*5 = 500 dolares

  const valorEmDolar = reais / cotacaoDolar;

  // retorna a mensagem formatada exemplo: "Com R$ 100.00 você pode comprar US$ 20.00"
  return `Com R$ ${reais.toFixed(
    2
  )} você pode comprar US$ ${valorEmDolar.toFixed(2)}`;
}
