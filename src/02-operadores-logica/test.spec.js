import { verificarElegibilidadeVoto } from './exercicio-01';
import { calcularDesconto } from './exercicio-02';
import { avaliarSituacaoAluno } from './exercicio-03';
import { calcularPrecoPassagem } from './exercicio-04';
import { verificarAnoBissexto } from './exercicio-05';
import { calcularAumentoSalario } from './exercicio-06';
import { analisarTriangulo } from './exercicio-07';
import { analisarNumeros } from './exercicio-08';

describe('Exercício 01: Verificação de elegibilidade para votação', () => {
  test('Deve identificar voto obrigatório', () => {
    expect(verificarElegibilidadeVoto(18)).toBe('Voto obrigatório');
    expect(verificarElegibilidadeVoto(45)).toBe('Voto obrigatório');
  });

  test('Deve identificar voto opcional', () => {
    expect(verificarElegibilidadeVoto(16)).toBe('Voto opcional');
    expect(verificarElegibilidadeVoto(17)).toBe('Voto opcional');
  });

  test('Deve identificar quando não pode votar', () => {
    expect(verificarElegibilidadeVoto(15)).toBe('Não pode votar');
    expect(verificarElegibilidadeVoto(12)).toBe('Não pode votar');
  });
});

describe('Exercício 02: Cálculo de desconto', () => {
  test('Deve calcular desconto básico', () => {
    expect(calcularDesconto(1200, false, false)).toBe(1080); // 10% de desconto
  });

  test('Deve calcular desconto para cliente premium', () => {
    expect(calcularDesconto(1200, true, false)).toBe(1020); // 15% de desconto
  });

  test('Deve calcular desconto na Black Friday', () => {
    expect(calcularDesconto(1200, false, true)).toBe(984); // 18% de desconto
  });

  test('Deve calcular todos os descontos combinados', () => {
    expect(calcularDesconto(1200, true, true)).toBe(924); // 23% de desconto
  });
});

describe('Exercício 03: Sistema de notas', () => {
  test('Deve identificar aluno aprovado', () => {
    expect(avaliarSituacaoAluno([7, 8, 9])).toBe('Aprovado');
    expect(avaliarSituacaoAluno([10, 10, 10])).toBe('Aprovado');
  });

  test('Deve identificar aluno em recuperação', () => {
    expect(avaliarSituacaoAluno([5, 5, 5])).toBe('Recuperação');
    expect(avaliarSituacaoAluno([7, 5, 6])).toBe('Recuperação');
  });

  test('Deve identificar aluno reprovado', () => {
    expect(avaliarSituacaoAluno([4, 4, 4])).toBe('Reprovado');
    expect(avaliarSituacaoAluno([3, 2, 1])).toBe('Reprovado');
  });

  test('Deve rejeitar notas inválidas', () => {
    expect(avaliarSituacaoAluno([11, 7, 8])).toBe('Notas inválidas');
    expect(avaliarSituacaoAluno([-1, 5, 7])).toBe('Notas inválidas');
  });
});

describe('Exercício 04: Calculadora de Preço de Passagem', () => {
  test('Deve calcular preço para viagens curtas', () => {
    expect(calcularPrecoPassagem(100)).toBe('Preço da passagem: R$ 50.00');
    expect(calcularPrecoPassagem(200)).toBe('Preço da passagem: R$ 100.00');
  });

  test('Deve calcular preço para viagens longas', () => {
    expect(calcularPrecoPassagem(300)).toBe('Preço da passagem: R$ 135.00');
    expect(calcularPrecoPassagem(1000)).toBe('Preço da passagem: R$ 450.00');
  });

  test('Deve validar entrada negativa', () => {
    expect(calcularPrecoPassagem(-100)).toBe('A distância deve ser maior que zero');
  });

  test('Deve validar tipo de entrada', () => {
    expect(calcularPrecoPassagem('100')).toBe('Por favor, forneça uma distância válida');
  });
});

describe('Exercício 05: Verificador de Ano Bissexto', () => {
  test('Deve identificar anos bissextos corretamente', () => {
    expect(verificarAnoBissexto(2000)).toBe('2000 é um ano BISSEXTO');
    expect(verificarAnoBissexto(2020)).toBe('2020 é um ano BISSEXTO');
    expect(verificarAnoBissexto(2024)).toBe('2024 é um ano BISSEXTO');
  });

  test('Deve identificar anos não bissextos', () => {
    expect(verificarAnoBissexto(2021)).toBe('2021 NÃO é um ano BISSEXTO');
    expect(verificarAnoBissexto(2100)).toBe('2100 NÃO é um ano BISSEXTO');
  });

  test('Deve validar entrada negativa', () => {
    expect(verificarAnoBissexto(-2024)).toBe('O ano deve ser maior que zero');
  });

  test('Deve validar tipo de entrada', () => {
    expect(verificarAnoBissexto('2024')).toBe('Por favor, forneça um ano válido');
  });
});

describe('Exercício 06: Calculadora de Aumento Salarial', () => {
  test('Deve calcular aumento de 10% para salários acima de 1250', () => {
    const resultado = calcularAumentoSalario(2000);
    expect(resultado).toContain('Salário anterior: R$ 2000.00');
    expect(resultado).toContain('Percentual de aumento: 10%');
    expect(resultado).toContain('Valor do aumento: R$ 200.00');
    expect(resultado).toContain('Novo salário: R$ 2200.00');
  });

  test('Deve calcular aumento de 15% para salários até 1250', () => {
    const resultado = calcularAumentoSalario(1000);
    expect(resultado).toContain('Salário anterior: R$ 1000.00');
    expect(resultado).toContain('Percentual de aumento: 15%');
    expect(resultado).toContain('Valor do aumento: R$ 150.00');
    expect(resultado).toContain('Novo salário: R$ 1150.00');
  });

  test('Deve validar entrada negativa', () => {
    expect(calcularAumentoSalario(-1000)).toBe('O salário deve ser maior que zero');
  });

  test('Deve validar tipo de entrada', () => {
    expect(calcularAumentoSalario('1000')).toBe('Por favor, forneça um salário válido');
  });
});

describe('Exercício 07: Analisador de Triângulos', () => {
  test('Deve identificar triângulo equilátero', () => {
    expect(analisarTriangulo(5, 5, 5)).toBe('Triângulo Equilátero');
  });

  test('Deve identificar triângulo isósceles', () => {
    expect(analisarTriangulo(5, 5, 3)).toBe('Triângulo Isósceles');
    expect(analisarTriangulo(5, 3, 5)).toBe('Triângulo Isósceles');
    expect(analisarTriangulo(3, 5, 5)).toBe('Triângulo Isósceles');
  });

  test('Deve identificar triângulo escaleno', () => {
    expect(analisarTriangulo(3, 4, 5)).toBe('Triângulo Escaleno');
  });

  test('Deve identificar quando não pode formar triângulo', () => {
    expect(analisarTriangulo(1, 1, 3)).toBe('Estas medidas não podem formar um triângulo');
  });

  test('Deve validar entradas negativas', () => {
    expect(analisarTriangulo(-1, 2, 2)).toBe('As medidas devem ser maiores que zero');
  });

  test('Deve validar tipo de entrada', () => {
    expect(analisarTriangulo('1', 2, 2)).toBe('Por favor, forneça medidas válidas');
  });
});

describe('Exercício 08: Comparador de Números', () => {
  test('Deve identificar maior e menor número', () => {
    const resultado = analisarNumeros(10, 5, 8);
    expect(resultado.maior).toBe(10);
    expect(resultado.menor).toBe(5);
  });

  test('Deve calcular média corretamente', () => {
    const resultado = analisarNumeros(10, 5, 6);
    expect(resultado.media).toBe('7.00');
  });

  test('Deve identificar números iguais', () => {
    const resultado = analisarNumeros(5, 5, 10);
    expect(resultado.temNumerosIguais).toBe(true);
  });

  test('Deve identificar quando não há números iguais', () => {
    const resultado = analisarNumeros(5, 6, 7);
    expect(resultado.temNumerosIguais).toBe(false);
  });

  test('Deve rejeitar entradas não numéricas', () => {
    expect(() => analisarNumeros('5', 6, 7)).toThrow('Por favor, forneça apenas números');
  });
});
