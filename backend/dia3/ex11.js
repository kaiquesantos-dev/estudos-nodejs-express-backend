/* Exercício 11: Mesclar dados de duas listas */
const usuarios2 = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Bruno' },
];
const pedidos = [
  { id: 100, userId: 1, total: 500 },
  { id: 101, userId: 2, total: 300 },
];

// map() percorre cada pedido; para cada um, procuramos (find) o usuário
// correspondente pelo userId e criamos um novo objeto juntando os dados do
// pedido (...pedido) com o nome do usuário encontrado
const pedidosComUsuario = pedidos.map(pedido => {
  const usuario = usuarios2.find(u => u.id === pedido.userId);
  return { ...pedido, usuario: usuario.nome };
});
console.log(pedidosComUsuario);
