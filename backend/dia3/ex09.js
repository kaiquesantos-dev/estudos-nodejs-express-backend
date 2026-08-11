/* Exercício 9: Atualizar usuário por ID */
const lista = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Carlos' },
];

// map() percorre a lista; para o item com id === 1, criamos uma cópia dele
// (...i copia todas as propriedades) sobrescrevendo só o "nome".
// Para os demais itens, retornamos eles sem alteração
const listaAtualizada = lista.map(i =>
  i.id === 1 ? { ...i, nome: 'Carlos Silva' } : i
);
console.log(listaAtualizada);
