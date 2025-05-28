import { encontrarPares } from './exercicio-01';
import { JogoAdivinhacao } from './exercicio-01';
import { executarMenu } from './exercicio-02';
import { ArrayProcessor } from './exercicio-03';
import { verificarVelocidade } from './exercicio-04';
import { somarImpares } from './exercicio-02';
import { verificarPrimo } from './exercicio-03';
import { verificarPalindromo } from './exercicio-04';
import { contarNumeros } from './exercicio-03';
import { contarPalavras } from './exercicio-04';
import { calcularMedia } from './exercicio-05';
import { gerarTabuada } from './exercicio-06';

describe('Exercício 01: Encontrar Números Pares', () => {
  test('Deve encontrar pares no intervalo de 1 a 10', () => {
    expect(encontrarPares(1, 10)).toEqual([2, 4, 6, 8, 10]);
  });

  test('Deve encontrar pares no intervalo de 5 a 15', () => {
    expect(encontrarPares(5, 15)).toEqual([6, 8, 10, 12, 14]);
  });

  test('Deve retornar array vazio se não houver pares', () => {
    expect(encontrarPares(1, 1)).toEqual([]);
  });

  test('Deve lançar erro se início for maior que fim', () => {
    expect(() => encontrarPares(10, 1)).toThrow('O início deve ser menor que o fim');
  });

  test('Deve lançar erro para entradas não numéricas', () => {
    expect(() => encontrarPares('1', 10)).toThrow('Por favor, forneça números válidos');
    expect(() => encontrarPares(1, '10')).toThrow('Por favor, forneça números válidos');
  });
});

describe('Exercício 01: Jogo de Adivinhação', () => {
  test('Deve acertar o número', () => {
    const jogo = new JogoAdivinhacao();
    const numeroSecreto = jogo.numeroSecreto;
    
    expect(jogo.tentativa(numeroSecreto)).toBe('Parabéns! Você acertou!');
  });

  test('Deve dar dica quando número for maior', () => {
    const jogo = new JogoAdivinhacao();
    jogo.numeroSecreto = 50;
    
    expect(jogo.tentativa(70)).toBe('Tente um número menor');
  });

  test('Deve acabar após 10 tentativas', () => {
    const jogo = new JogoAdivinhacao();
    for (let i = 1; i <= 10; i++) {
      jogo.tentativa(i);
    }
    expect(jogo.tentativa(11)).toBe('Game Over! Número máximo de tentativas atingido');
  });
});

describe('Exercício 02: Menu Interativo', () => {
  test('Deve calcular área', () => {
    expect(executarMenu(1, 2, 3)).toBe(6); // área = base * altura
  });

  test('Deve converter temperatura', () => {
    expect(executarMenu(2, 32, 'F')).toBe(0); // 32°F = 0°C
  });

  test('Deve calcular IMC', () => {
    expect(executarMenu(3, 70, 1.75)).toBe(22.86); // IMC = peso / altura²
  });

  test('Deve sair do menu', () => {
    expect(executarMenu(4)).toBe('Saindo...');
  });
});

describe('Exercício 03: Array Processor', () => {
  test('Deve implementar forEach', () => {
    const array = [1, 2, 3];
    const resultado = [];
    ArrayProcessor.forEach(array, item => resultado.push(item * 2));
    expect(resultado).toEqual([2, 4, 6]);
  });

  test('Deve implementar filter', () => {
    const array = [1, 2, 3, 4, 5];
    const resultado = ArrayProcessor.filter(array, n => n % 2 === 0);
    expect(resultado).toEqual([2, 4]);
  });

  test('Deve implementar find', () => {
    const array = [1, 2, 3, 4, 5];
    const resultado = ArrayProcessor.find(array, n => n > 3);
    expect(resultado).toBe(4);
  });
});

describe('Exercício 04: Radar de Velocidade', () => {
  test('Deve permitir velocidade dentro do limite', () => {
    expect(verificarVelocidade(80)).toBe('Velocidade permitida');
    expect(verificarVelocidade(60)).toBe('Velocidade permitida');
  });

  test('Deve calcular multa para velocidade acima do limite', () => {
    expect(verificarVelocidade(90)).toBe('Multado! Valor da multa: R$ 70,00');
    expect(verificarVelocidade(100)).toBe('Multado! Valor da multa: R$ 140,00');
  });

  test('Deve rejeitar velocidade negativa', () => {
    expect(verificarVelocidade(-10)).toBe('Velocidade inválida');
  });

  test('Deve validar tipo de entrada', () => {
    expect(verificarVelocidade('80')).toBe('Por favor, forneça um número válido');
  });
});

describe('Exercício 02: Somar Números Ímpares', () => {
  test('Deve encontrar e somar ímpares no intervalo de 1 a 5', () => {
    const resultado = somarImpares(1, 5);
    expect(resultado.numerosImpares).toEqual([1, 3, 5]);
    expect(resultado.soma).toBe(9);
  });

  test('Deve encontrar e somar ímpares no intervalo de 4 a 10', () => {
    const resultado = somarImpares(4, 10);
    expect(resultado.numerosImpares).toEqual([5, 7, 9]);
    expect(resultado.soma).toBe(21);
  });

  test('Deve retornar array vazio e soma zero se não houver ímpares', () => {
    const resultado = somarImpares(2, 2);
    expect(resultado.numerosImpares).toEqual([]);
    expect(resultado.soma).toBe(0);
  });

  test('Deve lançar erro se início for maior que fim', () => {
    expect(() => somarImpares(10, 1)).toThrow('O início deve ser menor que o fim');
  });

  test('Deve lançar erro para entradas não numéricas', () => {
    expect(() => somarImpares('1', 10)).toThrow('Por favor, forneça números válidos');
    expect(() => somarImpares(1, '10')).toThrow('Por favor, forneça números válidos');
  });
});

describe('Exercício 03: Verificador de Números Primos', () => {
  test('Deve identificar números primos', () => {
    const primos = [2, 3, 5, 7, 11, 13, 17, 19, 23];
    primos.forEach(numero => {
      const resultado = verificarPrimo(numero);
      expect(resultado.ehPrimo).toBe(true);
    });
  });

  test('Deve identificar números não primos', () => {
    const nPrimos = [4, 6, 8, 9, 10, 12, 14, 15];
    nPrimos.forEach(numero => {
      const resultado = verificarPrimo(numero);
      expect(resultado.ehPrimo).toBe(false);
    });
  });

  test('Deve fornecer explicação para números primos', () => {
    const resultado = verificarPrimo(17);
    expect(resultado.explicacao).toBe('17 é primo pois só é divisível por 1 e por ele mesmo');
  });

  test('Deve fornecer explicação para números não primos', () => {
    const resultado = verificarPrimo(9);
    expect(resultado.explicacao).toBe('9 não é primo pois é divisível por 3');
  });

  test('Deve tratar caso especial do número 2', () => {
    const resultado = verificarPrimo(2);
    expect(resultado.ehPrimo).toBe(true);
    expect(resultado.explicacao).toBe('2 é o único número primo par');
  });

  test('Deve rejeitar números menores que 2', () => {
    const resultado = verificarPrimo(1);
    expect(resultado.ehPrimo).toBe(false);
  });

  test('Deve lançar erro para entrada não numérica', () => {
    expect(() => verificarPrimo('17')).toThrow('Por favor, forneça um número válido');
  });
});

describe('Exercício 04: Verificador de Palíndromo', () => {
  test('Deve identificar palíndromos simples', () => {
    const resultado = verificarPalindromo('ovo');
    expect(resultado.ehPalindromo).toBe(true);
    expect(resultado.explicacao).toBe('"ovo" é um palíndromo');
  });

  test('Deve identificar palíndromos com espaços', () => {
    const resultado = verificarPalindromo('A base do teto desaba');
    expect(resultado.ehPalindromo).toBe(true);
  });

  test('Deve identificar não-palíndromos', () => {
    const resultado = verificarPalindromo('javascript');
    expect(resultado.ehPalindromo).toBe(false);
    expect(resultado.explicacao).toBe('"javascript" não é um palíndromo');
  });

  test('Deve ignorar maiúsculas/minúsculas', () => {
    const resultado = verificarPalindromo('Ovo');
    expect(resultado.ehPalindromo).toBe(true);
  });

  test('Deve lançar erro para entrada não string', () => {
    expect(() => verificarPalindromo(123)).toThrow('Por favor, forneça uma string válida');
  });
});

describe('Exercício 03: Contador de Números', () => {
  test('Deve contar números corretamente', () => {
    const resultado = contarNumeros([1, -2, 0, 3, -4]);
    expect(resultado).toEqual({
      positivos: 2,
      negativos: 2,
      zeros: 1
    });
  });

  test('Deve tratar array só com positivos', () => {
    const resultado = contarNumeros([1, 2, 3]);
    expect(resultado).toEqual({
      positivos: 3,
      negativos: 0,
      zeros: 0
    });
  });

  test('Deve validar entrada', () => {
    expect(contarNumeros(['1', 2])).toBe('Por favor, forneça apenas números');
  });
});

describe('Exercício 04: Contador de Palavras', () => {
  test('Deve contar palavras corretamente', () => {
    const resultado = contarPalavras('hello world');
    expect(resultado).toEqual({
      palavras: 2,
      frase: 'hello world'
    });
  });

  test('Deve tratar espaços extras', () => {
    const resultado = contarPalavras('   spaces   ');
    expect(resultado).toEqual({
      palavras: 1,
      frase: 'spaces'
    });
  });

  test('Deve validar entrada', () => {
    expect(contarPalavras(123)).toBe('Por favor, forneça uma string válida');
  });
});

describe('Exercício 05: Calculadora de Média e Status', () => {
  test('Deve identificar aluno aprovado', () => {
    const resultado = calcularMedia([7, 8, 9]);
    expect(resultado).toEqual({
      media: 8,
      status: 'Aprovado'
    });
  });

  test('Deve identificar aluno em recuperação', () => {
    const resultado = calcularMedia([5, 5, 5]);
    expect(resultado).toEqual({
      media: 5,
      status: 'Em Recuperação'
    });
  });

  test('Deve identificar aluno reprovado', () => {
    const resultado = calcularMedia([3, 4, 2]);
    expect(resultado).toEqual({
      media: 3,
      status: 'Reprovado'
    });
  });

  test('Deve validar entrada', () => {
    expect(calcularMedia(['7', 8, 9])).toBe('Por favor, forneça apenas números válidos');
  });
});

describe('Exercício 06: Tabuada', () => {
  test('Deve gerar tabuada do 2', () => {
    const resultado = gerarTabuada(2);
    expect(resultado).toEqual({
      numero: 2,
      resultados: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    });
  });

  test('Deve gerar tabuada do 5', () => {
    const resultado = gerarTabuada(5);
    expect(resultado).toEqual({
      numero: 5,
      resultados: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    });
  });

  test('Deve validar entrada', () => {
    expect(gerarTabuada('2')).toBe('Por favor, forneça um número válido');
  });
});
