import { saudacao } from "./exercicio-01";
import { converteNumeroParaMensagem } from "./exercicio-02";
import { formatarDataNascimento } from "./exercicio-03";
import { analisarValor } from "./exercicio-04";
import { converterRealParaDolar } from "./exercicio-05";
import { calcularArea } from "./exercicio-06";

describe("Exercicio 01", () => {
  test('Deve retornar "Olá, mundo"', () => {
    // 1. Configuração (opcional)
    const resultadoEsperado = "Olá, mundo";

    // 2. Execução
    const resultado = saudacao();

    // 3. Verificação
    expect(resultado).toBe(resultadoEsperado);
    expect(typeof resultado).toBe("string"); // Teste adicional
  });
});

describe("Exercicio 02", () => {
  test("Deve converter número para mensagem formatada", () => {
    const resultado = converteNumeroParaMensagem(42);
    expect(resultado).toBe('O número 42 convertido para texto é "42"');
  });

  test("Deve retornar mensagem de erro para entrada inválida", () => {
    const resultado = converteNumeroParaMensagem("não é número");
    expect(resultado).toBe("Por favor, forneça um número válido");
  });
});

describe("Exercicio 03: Teste da função formatarDataNascimento", () => {
  test("Deve formatar a data corretamente", () => {
    const resultado = formatarDataNascimento(15, 3, 1990);
    expect(resultado).toBe("15 de Março de 1990");
  });

  test("Deve validar dia inválido", () => {
    const resultado = formatarDataNascimento(32, 3, 1990);
    expect(resultado).toBe("Dia inválido");
  });

  test("Deve validar mês inválido", () => {
    const resultado = formatarDataNascimento(15, 13, 1990);
    expect(resultado).toBe("Mês inválido");
  });

  test("Deve validar ano inválido", () => {
    const resultado = formatarDataNascimento(15, 3, 1800);
    expect(resultado).toBe("Ano inválido");
  });

  test("Deve validar tipos de entrada", () => {
    const resultado = formatarDataNascimento("15", 3, 1990);
    expect(resultado).toBe("Por favor, forneça números válidos");
  });
});

describe("Exercicio 04: Teste da função analisarValor", () => {
  test("Deve analisar uma string", () => {
    const resultado = analisarValor("teste");
    expect(resultado.tipo).toBe("string");
    expect(resultado.ehTexto).toBe(true);
    expect(resultado.ehVazio).toBe(false);
    expect(resultado.temComprimento).toBe(5);
  });

  test("Deve analisar um número", () => {
    const resultado = analisarValor(42);
    expect(resultado.tipo).toBe("number");
    expect(resultado.ehNumero).toBe(true);
    expect(resultado.ehTexto).toBe(false);
  });

  test("Deve analisar um array", () => {
    const resultado = analisarValor([1, 2, 3]);
    expect(resultado.ehArray).toBe(true);
    expect(resultado.temComprimento).toBe(3);
    expect(resultado.tipo).toBe("object");
  });

  test("Deve analisar valor vazio", () => {
    const resultado = analisarValor("");
    expect(resultado.ehVazio).toBe(true);
    expect(resultado.temComprimento).toBe(0);
  });
});

describe("Exercicio 06: Teste da função converterRealParaDolar", () => {
  test("Deve converter reais para dólares corretamente", () => {
    const resultado = converterRealParaDolar(100, 5);
    expect(resultado).toBe("Com R$ 100.00 você pode comprar US$ 20.00");
  });

  test("Deve rejeitar valores negativos", () => {
    const resultado = converterRealParaDolar(-100, 5);
    expect(resultado).toBe("Os valores precisam ser positivos");
  });

  test("Deve rejeitar entradas não numéricas", () => {
    const resultado = converterRealParaDolar("100", 5);
    expect(resultado).toBe("Por favor, forneça valores numéricos");
  });

  test("Deve usar cotação padrão quando não fornecida", () => {
    const resultado = converterRealParaDolar(100);
    expect(resultado).toBe("Com R$ 100.00 você pode comprar US$ 20.00");
  });
});

describe("Exercicio 06: calculo de área", () => {
  test("Deve calcular área corretamente", () => {
    const area = calcularArea(4, 2);
    expect(area).toBe(8);

    const area2 = calcularArea(5, 3);
    expect(area2).toBe(15);

    const area3 = calcularArea(0, 3);
    expect(area3).toBe(0);

    const area4 = calcularArea(3, 0);
    expect(area4).toBe(0);
  });
});
