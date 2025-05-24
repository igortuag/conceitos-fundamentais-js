# 📚 Conceito 04: Estruturas de Controle em JavaScript

## Introdução
Estruturas de controle permitem que você controle o fluxo de execução do seu código.

## 🔀 if...else
```javascript
// Condicional simples
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// if...else encadeado
if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else {
    console.log("C");
}
```

## 🔄 switch
```javascript
switch (diaSemana) {
    case 1:
        return "Domingo";
    case 2:
        return "Segunda";
    default:
        return "Dia inválido";
}
```

## ➰ Loops
```javascript
// for tradicional
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for...of (arrays)
for (const item of array) {
    console.log(item);
}

// for...in (objetos)
for (const key in objeto) {
    console.log(key, objeto[key]);
}

// while
while (condicao) {
    // código
}

// do...while
do {
    // código
} while (condicao);
```

## 🚩 Break e Continue
```javascript
// break: sai do loop
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
}

// continue: pula para próxima iteração
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
}
```

## 🎯 Exercícios Sugeridos
1. Implementar um jogo de adivinhação com loops
2. Criar um menu interativo com switch
3. Processar array com diferentes estruturas de controle
