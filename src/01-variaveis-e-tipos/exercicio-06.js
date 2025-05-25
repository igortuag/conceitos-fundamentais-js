/**
 * Função para calcular a área da parede
 * @param {number} largura - Largura da parede em metros
 * @param {number} altura - Altura da parede em metros
 * @returns {number} Área total em metros quadrados

*/
export function calcularArea(largura, altura) {
  // Implementar lógica aqui
  // 1. Validar se os parâmetros são números
  if (typeof largura !== "number" && typeof altura !== "number") {
    return "os valores devem ser somente números";
  }

  // 2. Validar se os valores são positivos
  if (largura < 0 || altura < 0) {
    return "Os valores devem ser somente positivos";
  }

  // 3. Calcular a área multiplicando largura por altura
  const areaCalculada = largura * altura;

  //4. Retornar a área
  return areaCalculada;
}
