/* Exercício 4: Somar valores */
const valores = [10, 20, 5, 15];

// reduce() percorre o array acumulando um único valor
// "acc" é o acumulador (começa em 0, o segundo argumento do reduce)
// "v" é o valor atual da iteração; a cada passo somamos v ao acumulador
const soma = valores.reduce((acc, v) => acc + v, 0);
console.log(soma);
