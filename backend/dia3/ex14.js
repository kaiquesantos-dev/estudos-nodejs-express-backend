/* Exercício 14: Pipeline entrada->soma */
const transacoes = [
  { id: 1, tipo: 'entrada', valor: 100 },
  { id: 2, tipo: 'saida', valor: 40 },
  { id: 3, tipo: 'entrada', valor: 10 },
];

// Pipeline: primeiro filter() mantém só as transações do tipo "entrada",
// depois reduce() soma o campo "valor" de todas elas
const totalEntradas = transacoes
  .filter(t => t.tipo === 'entrada')
  .reduce((acc, t) => acc + t.valor, 0);
console.log(totalEntradas);
