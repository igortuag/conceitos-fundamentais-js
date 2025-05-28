import { encontrarPares } from "./exercicio-01";
import { JogoAdivinhacao } from "./exercicio-01";
import { executarMenu } from "./exercicio-02";
import { ArrayProcessor } from "./exercicio-03";
import { verificarVelocidade } from "./exercicio-04";
import { somarImpares } from "./exercicio-02";
import { verificarPrimo } from "./exercicio-03";
import { verificarPalindromo } from "./exercicio-04";
import { contarNumeros } from "./exercicio-03";
import { contarPalavras } from "./exercicio-04";
import { calcularMedia } from "./exercicio-05";
import { gerarTabuada } from "./exercicio-06";

describe("Exercício 01: Encontrar Números Pares", () => {
  test("Deve encontrar pares no intervalo de 1 a 10", () => {
    expect(encontrarPares(1, 10)).toEqual([2, 4, 6, 8, 10]);
  });

  test("Deve encontrar pares no intervalo de 5 a 15", () => {
    expect(encontrarPares(5, 15)).toEqual([6, 8, 10, 12, 14]);
  });

  test("Deve retornar array vazio se não houver pares", () => {
    expect(encontrarPares(1, 1)).toEqual([]);
  });

  test("Deve lançar erro se início for maior que fim", () => {
    expect(() => encontrarPares(10, 1)).toThrow(
      "O início deve ser menor que o fim"
    );
  });

  test("Deve lançar erro para entradas não numéricas", () => {
    expect(() => encontrarPares("1", 10)).toThrow(
      "Por favor, forneça números válidos"
    );
    expect(() => encontrarPares(1, "10")).toThrow(
      "Por favor, forneça números válidos"
    );
  });
});

describe("Exercício 02: Somar Números Ímpares", () => {
  test("Deve encontrar e somar ímpares no intervalo de 1 a 5", () => {
    const resultado = somarImpares(1, 5);
    expect(resultado.numerosImpares).toEqual([1, 3, 5]);
    expect(resultado.soma).toBe(9);
  });

  test("Deve encontrar e somar ímpares no intervalo de 4 a 10", () => {
    const resultado = somarImpares(4, 10);
    expect(resultado.numerosImpares).toEqual([5, 7, 9]);
    expect(resultado.soma).toBe(21);
  });

  test("Deve retornar array vazio e soma zero se não houver ímpares", () => {
    const resultado = somarImpares(2, 2);
    expect(resultado.numerosImpares).toEqual([]);
    expect(resultado.soma).toBe(0);
  });

  test("Deve lançar erro se início for maior que fim", () => {
    expect(() => somarImpares(10, 1)).toThrow(
      "O início deve ser menor que o fim"
    );
  });

  test("Deve lançar erro para entradas não numéricas", () => {
    expect(() => somarImpares("1", 10)).toThrow(
      "Por favor, forneça números válidos"
    );
    expect(() => somarImpares(1, "10")).toThrow(
      "Por favor, forneça números válidos"
    );
  });
});

describe("Exercício 03: Contador de Números", () => {
  test("Deve contar números corretamente", () => {
    const resultado = contarNumeros([1, -2, 0, 3, -4]);
    expect(resultado).toEqual({
      positivos: 2,
      negativos: 2,
      zeros: 1,
    });
  });

  test("Deve tratar array só com positivos", () => {
    const resultado = contarNumeros([1, 2, 3]);
    expect(resultado).toEqual({
      positivos: 3,
      negativos: 0,
      zeros: 0,
    });
  });

  test("Deve validar entrada", () => {
    expect(contarNumeros(["1", 2])).toBe("Por favor, forneça apenas números");
  });
});

describe("Exercício 04: Contador de Palavras", () => {
  test("Deve contar palavras corretamente", () => {
    const resultado = contarPalavras("hello world");
    expect(resultado).toEqual({
      palavras: 2,
      frase: "hello world",
    });
  });

  test("Deve tratar espaços extras", () => {
    const resultado = contarPalavras("   spaces   ");
    expect(resultado).toEqual({
      palavras: 1,
      frase: "spaces",
    });
  });

  test("Deve validar entrada", () => {
    expect(contarPalavras(123)).toBe("Por favor, forneça uma string válida");
  });
});

describe("Exercício 05: Calculadora de Média e Status", () => {
  test("Deve identificar aluno aprovado", () => {
    const resultado = calcularMedia([7, 8, 9]);
    expect(resultado).toEqual({
      media: 8,
      status: "Aprovado",
    });
  });

  test("Deve identificar aluno em recuperação", () => {
    const resultado = calcularMedia([5, 5, 5]);
    expect(resultado).toEqual({
      media: 5,
      status: "Em Recuperação",
    });
  });

  test("Deve identificar aluno reprovado", () => {
    const resultado = calcularMedia([3, 4, 2]);
    expect(resultado).toEqual({
      media: 3,
      status: "Reprovado",
    });
  });

  test("Deve validar entrada", () => {
    expect(calcularMedia(["7", 8, 9])).toBe(
      "Por favor, forneça apenas números válidos"
    );
  });
});

describe("Exercício 06: Tabuada", () => {
  test("Deve gerar tabuada do 2", () => {
    const resultado = gerarTabuada(2);
    expect(resultado).toEqual({
      numero: 2,
      resultados: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    });
  });

  test("Deve gerar tabuada do 5", () => {
    const resultado = gerarTabuada(5);
    expect(resultado).toEqual({
      numero: 5,
      resultados: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    });
  });

  test("Deve validar entrada", () => {
    expect(gerarTabuada("2")).toBe("Por favor, forneça um número válido");
  });
});
