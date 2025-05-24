/**
 * Exercício 03: Formatar data de nascimento
 * TODO:
 * 1. Validar se os parâmetros são números
 * 2. Validar ranges (dia: 1-31, mês: 1-12, ano: 1900-atual)
 * 3. Converter mês numérico para nome por extenso
 * 4. Retornar data formatada (ex: "15 de Março de 1990")
 */
export function formatarDataNascimento(dia, mes, ano) {
  if (
    typeof dia !== "number" ||
    typeof mes !== "number" ||
    typeof ano !== "number"
  ) {
    return "Por favor, forneça números válidos";
  }

  // Validar ranges
  // valie o dia, exemplo:
  if (dia < 1 || dia > 31) return "Dia inválido";

  // valide o mes e se caso for inválido retorne "Mês inválido"
  if (mes < 1 || mes > 12) return "Mês inválido";

  // valide o ano e se caso for inválido retorne "Ano inválido"
  if (ano < 1900 || ano > 2025) return "Ano inválido";

  // Array com nomes dos meses
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const indexParaPassarParaOArray = mes - 1;

  const mesFormatado = meses[indexParaPassarParaOArray];

  // Formatar a data, exemplo: "15 de Março de 1990"
  return `${dia} de ${mesFormatado} de ${ano}`;
}
