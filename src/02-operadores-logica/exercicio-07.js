/**
 * Exercício 07: Analisador de Triângulos 
 * Regras para formar triângulo:
 * - Cada lado deve ser menor que a soma dos outros dois
 * 
 * Tipos de triângulo:
 * - Equilátero: todos os lados iguais
 * - Isósceles: dois lados iguais
 * - Escaleno: todos os lados diferentes
 */
export function analisarTriangulo(lado1, lado2, lado3) {
  // Validação de entrada
  if (typeof lado1 !== 'number' || typeof lado2 !== 'number' || typeof lado3 !== 'number') {
    return 'Por favor, forneça medidas válidas';
  }

  if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    return 'As medidas devem ser maiores que zero';
  }

  // Verifica se pode formar triângulo
  const podeFormarTriangulo = (
    lado1 < lado2 + lado3 &&
    lado2 < lado1 + lado3 &&
    lado3 < lado1 + lado2
  );

  if (!podeFormarTriangulo) {
    return 'Estas medidas não podem formar um triângulo';
  }

  // Identifica o tipo de triângulo
  if (lado1 === lado2 && lado2 === lado3) {
    return 'Triângulo Equilátero';
  }
  if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    return 'Triângulo Isósceles';
  }
  return 'Triângulo Escaleno';
}
