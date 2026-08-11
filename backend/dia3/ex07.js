/* Exercício 7: Lista de nomes */
const usuarios = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 30 },
];

// map() transforma cada objeto do array em apenas o valor da propriedade "nome",
// resultando num array só de strings
const listaNomes = usuarios.map(u => u.nome);
console.log(listaNomes);
