/* Exercício 8: Ordenar produtos por preço */
const produtos = [
  { nome: 'Mouse', preco: 70 },
  { nome: 'Teclado', preco: 120 },
  { nome: 'Headset', preco: 200 },
];

// sort() ordena o array IN PLACE (modifica o original) usando a função de comparação
// se (a.preco - b.preco) for negativo, "a" vem antes de "b" -> ordem crescente
const produtosOrdenados = produtos.sort((a, b) => a.preco - b.preco);
console.log(produtosOrdenados);
