import { analisarValor } from "./src/01-variaveis-e-tipos/exercicio-04.js";

const result1 = analisarValor(2);
const result2 = analisarValor({ teste: 9 });
const result3 = analisarValor(["1", "2"]);

console.log("result1  ::>", result1);
console.log("string qualquer  ::>", analisarValor("string qualquer"));
// console.log("result2 ::>", result2);
// console.log("result3  ::>", result3);
