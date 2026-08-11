/* Exercício 2: Filtrar números pares */
const numeros = [1, 2, 3, 4, 5, 6];

// filter() percorre o array e mantém apenas os itens em que a condição é true
// n % 2 === 0 é o resto da divisão por 2; se for 0, o número é par
const numerosPares = numeros.filter(n => n % 2 === 0);
console.log(numerosPares);
