/* Exercício 10: Agrupar itens por categoria */
const itens = [
  { nome: 'Banana', categoria: 'fruta' },
  { nome: 'Maçã', categoria: 'fruta' },
  { nome: 'Cenoura', categoria: 'legume' },
];

// Objeto que vai guardar os grupos, onde cada chave é uma categoria
const agrupado = {};

// forEach() percorre cada item sem gerar um novo array (é só para efeito colateral)
itens.forEach(item => {
  // se ainda não existe um array para essa categoria, cria um vazio
  if (!agrupado[item.categoria]) {
    agrupado[item.categoria] = [];
  }
  // adiciona o item dentro do array da categoria correspondente
  agrupado[item.categoria].push(item);
});

console.log(agrupado);
