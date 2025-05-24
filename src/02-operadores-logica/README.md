# 📚 Conceito 02: Operadores e Lógica em JavaScript

## Introdução
Operadores são símbolos especiais que realizam operações em valores e variáveis. A lógica nos permite tomar decisões e controlar o fluxo do programa.

## 🔢 Operadores Aritméticos
```javascript
const soma = 5 + 3;        // 8
const subtracao = 5 - 3;   // 2
const multiplicacao = 5 * 3;// 15
const divisao = 15 / 3;    // 5
const modulo = 5 % 2;      // 1 (resto)
const exponenciacao = 2 ** 3; // 8 (2³)
```

## 📏 Operadores de Comparação
```javascript
5 == "5"   // true (comparação com coerção)
5 === "5"  // false (comparação estrita)
5 != "5"   // false
5 !== "5"  // true
5 > 3      // true
5 >= 5     // true
3 < 5      // true
3 <= 3     // true
```

## 🔄 Operadores Lógicos
```javascript
// AND (&&)
true && true    // true
true && false   // false

// OR (||)
true || false   // true
false || false  // false

// NOT (!)
!true           // false
!false          // true
```

## 🔀 Operadores de Atribuição
```javascript
let x = 5;
x += 3;  // x = x + 3
x -= 2;  // x = x - 2
x *= 4;  // x = x * 4
x /= 2;  // x = x / 2
x %= 3;  // x = x % 3
```

## 🎯 Operadores Condicionais
```javascript
// Operador Ternário
const idade = 20;
const podeBeber = idade >= 18 ? "Sim" : "Não";

// Operador de Coalescência Nula (??)
const nome = null ?? "Anônimo";
```

## ⛓️ Precedência de Operadores
1. `()` - Parênteses
2. `**` - Exponenciação
3. `* / %` - Multiplicação, Divisão, Módulo
4. `+ -` - Adição, Subtração
5. `=== !== > < >= <=` - Comparações
6. `&& || ??` - Operadores Lógicos

## 🎭 Truthy e Falsy
Valores considerados falsy:
```javascript
false
0
""
null
undefined
NaN
```

Todo o resto é considerado truthy.

## 🔍 Exemplos Práticos
```javascript
// Validação de idade
const idade = 16;
const acompanhado = true;
const podeEntrar = idade >= 18 || (idade >= 16 && acompanhado);

// Verificação de valor padrão
const nome = "";
const nomeExibicao = nome || "Anônimo";

// Verificação de permissões
const admin = true;
const editor = false;
const podeEditar = admin && !editor;
```

## 🎯 Exercícios Sugeridos
1. Verificação de elegibilidade para votação
2. Cálculo de desconto baseado em condições
3. Sistema de notas com aprovação/reprovação
4. Validação de formulário simples

## 📝 Dicas de Boas Práticas
1. Use `===` em vez de `==` para evitar coerção de tipos
2. Evite negações duplas (`!!`)
3. Prefira expressões positivas a negativas
4. Use parênteses para deixar a precedência clara
5. Utilize constantes para valores fixos

## 🔍 Links Úteis
- [MDN - Expressões e Operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [MDN - Estruturas de Controle](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
