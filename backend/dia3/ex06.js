/* Exercício 6: Filtrar maiores de idade */
const usuarios = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 30 },
];

// filter() mantém só os objetos cuja idade é >= 18
const maioresDeIdade = usuarios.filter(u => u.idade >= 18);
console.log(maioresDeIdade);
