# 📚 Conceito 01: Variáveis e Tipos em JavaScript

## Introdução
Variáveis são como "caixas" onde guardamos informações no programa. Cada variável tem um tipo que define que tipo de informação ela pode guardar.

## 📝 Declarando Variáveis

Existem 3 formas de declarar variáveis em JavaScript:

### 1. `let` - Para valores que podem mudar
```javascript
let idade = 25;        // número
let nome = "Maria";    // texto
idade = 26;           // podemos mudar o valor
```

### 2. `const` - Para valores que não mudam
```javascript
const PI = 3.14159;
const CPF = "123.456.789-00";
// const PI = 3.14; ❌ Erro! Não podemos reatribuir uma const
```

### 3. `var` - Forma antiga (evite usar)
```javascript
var contador = 1; // ❌ Melhor usar let ou const
```

## 📦 Tipos de Dados

### 1. String (texto)
```javascript
let nome = "João";           // com aspas duplas
let sobrenome = 'Silva';     // com aspas simples
let frase = `Meu nome é ${nome}`; // template string
```

### 2. Number (números)
```javascript
let idade = 25;        // inteiro
let altura = 1.75;     // decimal
let infinito = Infinity;
let naoNumero = NaN;   // Not a Number
```

### 3. Boolean (verdadeiro/falso)
```javascript
let estaChovendo = true;
let temSol = false;
```

### 4. Undefined e Null
```javascript
let indefinido;              // undefined (não definido)
let vazio = null;           // null (vazio intencional)
```

### 5. Object (objeto)
```javascript
const pessoa = {
    nome: "João",
    idade: 25
};
```

### 6. Array (lista)
```javascript
const frutas = ["maçã", "banana", "laranja"];
```

## 🔄 Verificando Tipos

Use `typeof` para descobrir o tipo:
```javascript
typeof "texto"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (peculiaridade do JavaScript)
typeof {}          // "object"
typeof []          // "object"
```

## ⚠️ Valores Falsy
Valores que são considerados falsos em condições:
```javascript
false
0
""  // string vazia
null
undefined
NaN
```

## 💡 Dicas Importantes

### Template Strings
```javascript
const nome = "Maria";
const idade = 25;
console.log(`${nome} tem ${idade} anos`);
```

### Conversão de Tipos
```javascript
String(123)        // "123"
Number("123")      // 123
Boolean(1)         // true
parseInt("123.45") // 123
parseFloat("123.45") // 123.45
```

## 🎯 Exercícios
1. Crie diferentes tipos de variáveis
2. Pratique conversão entre tipos
3. Experimente com template strings

## ▶️ Como Testar
```bash
npm test
```