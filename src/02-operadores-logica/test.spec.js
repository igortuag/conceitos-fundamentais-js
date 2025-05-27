import { verificarElegibilidadeVoto } from "./exercicio-01";
import { calcularDesconto } from "./exercicio-02";
import { avaliarSituacaoAluno } from "./exercicio-03";
import { calcularPrecoPassagem } from "./exercicio-04";
import { verificarAnoBissexto } from "./exercicio-05";
import { calcularAumentoSalario } from "./exercicio-06";
import { analisarTriangulo } from "./exercicio-07";
import { analisarNumeros } from "./exercicio-08";
import { determinarTreino } from "./exercicio-09";
import { verificarParOuImpar } from './exercicio-10';
import { calcularPrecoMacas } from './exercicio-11';
import { calcularIMC } from './exercicio-12';
import { encontrarMaior } from './exercicio-13';
import { encontrarMenor } from './exercicio-14';
import { podeDigirir } from './exercicio-15';

describe("Exercício 01: Verificação de elegibilidade para votação", () => {
  test("Deve identificar voto obrigatório", () => {
    expect(verificarElegibilidadeVoto(18)).toBe("Voto obrigatório");
    expect(verificarElegibilidadeVoto(45)).toBe("Voto obrigatório");
  });

  test("Deve identificar voto opcional", () => {
    expect(verificarElegibilidadeVoto(16)).toBe("Voto opcional");
    expect(verificarElegibilidadeVoto(17)).toBe("Voto opcional");
  });

  test("Deve identificar quando não pode votar", () => {
    expect(verificarElegibilidadeVoto(15)).toBe("Não pode votar");
    expect(verificarElegibilidadeVoto(12)).toBe("Não pode votar");
  });
});

describe("Exercício 02: Cálculo de desconto", () => {
  test("Deve calcular desconto básico", () => {
    expect(calcularDesconto(1200, false, false)).toBe(1080); // 10% de desconto
  });

  test("Deve calcular desconto para cliente premium", () => {
    expect(calcularDesconto(1200, true, false)).toBe(1020); // 15% de desconto
  });

  test("Deve calcular desconto na Black Friday", () => {
    expect(calcularDesconto(1200, false, true)).toBe(984); // 18% de desconto
  });

  test("Deve calcular todos os descontos combinados", () => {
    expect(calcularDesconto(1200, true, true)).toBe(924); // 23% de desconto
  });
});

describe("Exercício 03: Sistema de notas", () => {
  test("Deve identificar aluno aprovado", () => {
    expect(avaliarSituacaoAluno(7, 8, 9)).toBe("Aprovado");
    expect(avaliarSituacaoAluno(10, 10, 10)).toBe("Aprovado");
  });

  test("Deve identificar aluno em recuperação", () => {
    expect(avaliarSituacaoAluno(5, 5, 5)).toBe("Recuperação");
    expect(avaliarSituacaoAluno(7, 5, 6)).toBe("Recuperação");
  });

  test("Deve identificar aluno reprovado", () => {
    expect(avaliarSituacaoAluno(4, 4, 4)).toBe("Reprovado");
    expect(avaliarSituacaoAluno(3, 2, 1)).toBe("Reprovado");
  });

  test("Deve rejeitar notas inválidas", () => {
    expect(avaliarSituacaoAluno(11, 7, 8)).toBe(
      "As notas devem estar entre 0 e 10"
    );
    expect(avaliarSituacaoAluno(-1, 5, 7)).toBe(
      "As notas devem estar entre 0 e 10"
    );
  });

  test("Deve validar tipo de entrada", () => {
    expect(avaliarSituacaoAluno("7", 8, 9)).toBe(
      "Por favor, forneça notas válidas"
    );
  });
});

describe("Exercício 04: Calculadora de Preço de Passagem", () => {
  test("Deve calcular preço para viagens curtas", () => {
    expect(calcularPrecoPassagem(100)).toBe("Preço da passagem: R$ 50.00");
    expect(calcularPrecoPassagem(200)).toBe("Preço da passagem: R$ 100.00");
  });

  test("Deve calcular preço para viagens longas", () => {
    expect(calcularPrecoPassagem(300)).toBe("Preço da passagem: R$ 135.00");
    expect(calcularPrecoPassagem(1000)).toBe("Preço da passagem: R$ 450.00");
  });

  test("Deve validar entrada negativa", () => {
    expect(calcularPrecoPassagem(-100)).toBe(
      "A distância deve ser maior que zero"
    );
  });

  test("Deve validar tipo de entrada", () => {
    expect(calcularPrecoPassagem("100")).toBe(
      "Por favor, forneça uma distância válida"
    );
  });
});

describe("Exercício 05: Verificador de Ano Bissexto", () => {
  test("Deve identificar anos bissextos corretamente", () => {
    expect(verificarAnoBissexto(2000)).toBe("2000 é um ano BISSEXTO");
    expect(verificarAnoBissexto(2020)).toBe("2020 é um ano BISSEXTO");
    expect(verificarAnoBissexto(2024)).toBe("2024 é um ano BISSEXTO");
  });

  test("Deve identificar anos não bissextos", () => {
    expect(verificarAnoBissexto(2021)).toBe("2021 NÃO é um ano BISSEXTO");
    expect(verificarAnoBissexto(2500)).toBe("2500 NÃO é um ano BISSEXTO");
  });

  test("Deve validar entrada negativa", () => {
    expect(verificarAnoBissexto(-2024)).toBe("O ano deve ser maior que zero");
  });

  test("Deve validar tipo de entrada", () => {
    expect(verificarAnoBissexto("2024")).toBe(
      "Por favor, forneça um ano válido"
    );
  });
});

describe("Exercício 06: Calculadora de Aumento Salarial", () => {
  test("Deve calcular aumento de 10% para salários acima de 1250", () => {
    const resultado = calcularAumentoSalario(2000);
    expect(resultado).toContain("Salário anterior: R$ 2000.00");
    expect(resultado).toContain("Percentual de aumento: 10%");
    expect(resultado).toContain("Valor do aumento: R$ 200.00");
    expect(resultado).toContain("Novo salário: R$ 2200.00");
  });

  test("Deve calcular aumento de 15% para salários até 1250", () => {
    const resultado = calcularAumentoSalario(1000);
    expect(resultado).toContain("Salário anterior: R$ 1000.00");
    expect(resultado).toContain("Percentual de aumento: 15%");
    expect(resultado).toContain("Valor do aumento: R$ 150.00");
    expect(resultado).toContain("Novo salário: R$ 1150.00");
  });

  test("Deve validar entrada negativa", () => {
    expect(calcularAumentoSalario(-1000)).toBe(
      "O salário deve ser maior que zero"
    );
  });

  test("Deve validar tipo de entrada", () => {
    expect(calcularAumentoSalario("1000")).toBe(
      "Por favor, forneça um salário válido"
    );
  });
});

describe("Exercício 07: Analisador de Triângulos", () => {
  test("Deve identificar triângulo equilátero", () => {
    expect(analisarTriangulo(5, 5, 5)).toBe("Triângulo Equilátero");
  });

  test("Deve identificar triângulo isósceles", () => {
    expect(analisarTriangulo(5, 5, 3)).toBe("Triângulo Isósceles");
    expect(analisarTriangulo(5, 3, 5)).toBe("Triângulo Isósceles");
    expect(analisarTriangulo(3, 5, 5)).toBe("Triângulo Isósceles");
  });

  test("Deve identificar triângulo escaleno", () => {
    expect(analisarTriangulo(3, 4, 5)).toBe("Triângulo Escaleno");
  });

  test("Deve identificar quando não pode formar triângulo", () => {
    expect(analisarTriangulo(1, 1, 3)).toBe(
      "Estas medidas não podem formar um triângulo"
    );
  });

  test("Deve validar entradas negativas", () => {
    expect(analisarTriangulo(-1, 2, 2)).toBe(
      "As medidas devem ser maiores que zero"
    );
  });

  test("Deve validar tipo de entrada", () => {
    expect(analisarTriangulo("1", 2, 2)).toBe(
      "Por favor, forneça medidas válidas"
    );
  });
});

describe("Exercício 08: Comparador de Números", () => {
  test("Deve identificar maior e menor número", () => {
    const resultado = analisarNumeros(10, 5, 8);
    expect(resultado.maior).toBe(10);
    expect(resultado.menor).toBe(5);
  });

  test("Deve calcular média corretamente", () => {
    const resultado = analisarNumeros(10, 5, 6);
    expect(resultado.media).toBe("7.00");
  });

  test("Deve identificar números iguais", () => {
    const resultado = analisarNumeros(5, 5, 10);
    expect(resultado.temNumerosIguais).toBe(true);
  });

  test("Deve identificar quando não há números iguais", () => {
    const resultado = analisarNumeros(5, 6, 7);
    expect(resultado.temNumerosIguais).toBe(false);
  });

  test("Deve rejeitar entradas não numéricas", () => {
    expect(analisarNumeros("5", 6, 7)).toBe(
      "Por favor, forneça apenas números"
    );
  });
});

describe("Exercício 09: Rotina de Academia", () => {
  test("Deve retornar treino para segunda e sexta", () => {
    expect(determinarTreino("segunda")).toBe("triceps e costa");
    expect(determinarTreino("sexta")).toBe("triceps e costa");
  });

  test("Deve retornar descanso para terça", () => {
    expect(determinarTreino("terça")).toBe("descanso");
  });

  test("Deve retornar treino para quarta e sábado", () => {
    expect(determinarTreino("quarta")).toBe("biceps, peito e ombro");
    expect(determinarTreino("sabado")).toBe("biceps, peito e ombro");
  });

  test("Deve retornar treino para quinta e domingo", () => {
    expect(determinarTreino("quinta")).toBe("perna");
    expect(determinarTreino("domingo")).toBe("perna");
  });

  test("Deve validar entrada inválida", () => {
    expect(determinarTreino("invalid")).toBe("Dia inválido");
  });
});

describe('Exercício 10: Verificador de Par ou Ímpar', () => {
  test('Deve identificar números pares', () => {
    expect(verificarParOuImpar(2)).toBe('Par');
    expect(verificarParOuImpar(0)).toBe('Par');
    expect(verificarParOuImpar(-4)).toBe('Par');
  });

  test('Deve identificar números ímpares', () => {
    expect(verificarParOuImpar(3)).toBe('Ímpar');
    expect(verificarParOuImpar(1)).toBe('Ímpar');
    expect(verificarParOuImpar(-1)).toBe('Ímpar');
  });

  test('Deve validar entrada', () => {
    expect(verificarParOuImpar('2')).toBe('Por favor, forneça um número válido');
  });
});

describe('Exercício 11: Calculadora de Preço de Maçãs', () => {
  test('Deve calcular preço para menos de 5 maçãs', () => {
    expect(calcularPrecoMacas(1)).toBe('Total: R$ 0.50');
    expect(calcularPrecoMacas(4)).toBe('Total: R$ 2.00');
  });

  test('Deve calcular preço para 5 ou mais maçãs', () => {
    expect(calcularPrecoMacas(5)).toBe('Total: R$ 1.25');
    expect(calcularPrecoMacas(10)).toBe('Total: R$ 2.50');
  });

  test('Deve validar quantidade negativa', () => {
    expect(calcularPrecoMacas(-1)).toBe('Quantidade inválida');
  });

  test('Deve validar entrada', () => {
    expect(calcularPrecoMacas('5')).toBe('Por favor, forneça um número válido');
  });
});

describe('Exercício 12: Calculadora de IMC', () => {
  test('Deve identificar abaixo do peso', () => {
    expect(calcularIMC(50, 1.70)).toBe('Abaixo do peso');
  });

  test('Deve identificar peso normal', () => {
    expect(calcularIMC(70, 1.75)).toBe('Peso normal');
  });

  test('Deve identificar acima do peso', () => {
    expect(calcularIMC(85, 1.75)).toBe('Acima do peso');
  });

  test('Deve identificar obesidade', () => {
    expect(calcularIMC(100, 1.75)).toBe('Obeso');
  });

  test('Deve validar valores negativos', () => {
    expect(calcularIMC(-70, 1.75)).toBe('Peso e altura devem ser maiores que zero');
    expect(calcularIMC(70, -1.75)).toBe('Peso e altura devem ser maiores que zero');
  });

  test('Deve validar entrada', () => {
    expect(calcularIMC('70', 1.75)).toBe('Por favor, forneça valores válidos');
  });
});

describe('Exercício 13: Encontrar o Maior Número', () => {
  test('Deve encontrar o maior entre três números diferentes', () => {
    expect(encontrarMaior(1, 2, 3)).toBe('O maior número é 3');
    expect(encontrarMaior(5, 2, 1)).toBe('O maior número é 5');
  });

  test('Deve encontrar o maior com números iguais', () => {
    expect(encontrarMaior(5, 5, 5)).toBe('O maior número é 5');
    expect(encontrarMaior(5, 5, 1)).toBe('O maior número é 5');
  });

  test('Deve validar entrada', () => {
    expect(encontrarMaior('5', 2, 3)).toBe('Por favor, forneça números válidos');
  });
});

describe('Exercício 14: Encontrar o Menor Número', () => {
  test('Deve encontrar o menor entre três números diferentes', () => {
    expect(encontrarMenor(1, 2, 3)).toBe('O menor número é 1');
    expect(encontrarMenor(5, 2, 1)).toBe('O menor número é 1');
  });

  test('Deve encontrar o menor com números iguais', () => {
    expect(encontrarMenor(5, 5, 5)).toBe('O menor número é 5');
    expect(encontrarMenor(5, 5, 6)).toBe('O menor número é 5');
  });

  test('Deve validar entrada', () => {
    expect(encontrarMenor('5', 2, 3)).toBe('Por favor, forneça números válidos');
  });
});

describe('Exercício 15: Verificador de Idade para Dirigir', () => {
  test('Deve permitir dirigir para maiores de idade', () => {
    expect(podeDigirir(18)).toBe('Pode dirigir');
    expect(podeDigirir(25)).toBe('Pode dirigir');
  });

  test('Deve negar permissão para menores de idade', () => {
    expect(podeDigirir(16)).toBe('Não pode dirigir');
    expect(podeDigirir(17)).toBe('Não pode dirigir');
  });

  test('Deve validar idade negativa', () => {
    expect(podeDigirir(-18)).toBe('Por favor, forneça uma idade válida');
  });

  test('Deve validar entrada', () => {
    expect(podeDigirir('18')).toBe('Por favor, forneça uma idade válida');
  });
});
