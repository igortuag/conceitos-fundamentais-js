/**
 * Exercício 08: Conversor de Temperatura
 * Regras:
 * - Converter entre Celsius e Fahrenheit
 * - Fórmula: (C * 9/5) + 32 = F
 * - Retornar valor formatado com unidade
 */
export function converterTemperatura(valor, unidade) {
  // Verifica se o valor é um número

  if (typeof valor !== "number") {
    return "Por favor, forneça um número válido";
  }

  // se a unidade for Celsius utilize a formula para converter para Fahrenheit
  // formula: (valor * 9/5) + 32

  if (unidade === "C") {
    const valorConvertido = (valor * 9) / 5 + 32;
    const valorFormatado = valorConvertido.toFixed(1);
    return `${valor}°C = ${valorFormatado}°F`;
  }

  // se a unidade for Fahrenheit utilize a formula para converter para Celsius
  // formula: (valor - 32) * 5/9
  if (unidade === "F") {
    const valorConvertido = ((valor - 32) * 5) / 9;
    const valorFormatado = valorConvertido.toFixed(1);
    return `${valor}°F = ${valorFormatado}°C`;
  }

  // se a unidade não for "C" ou "F", retorne uma mensagem de erro
  // Por favor, use "C" ou "F" como unidade
  return `Por favor, use "C" ou "F" como unidade`;
}
