/* Exercício 13: Remover campos sensíveis */
const apiUsers = [
  { id: 1, name: 'Ana', password: 'teste' },
  { id: 2, name: 'João', password: 'abc123' },
];

// map() percorre cada usuário; a desestruturação { password, ...resto }
// separa o campo "password" do restante das propriedades ("resto"),
// e retornamos apenas "resto", descartando a senha
const apiUsersSemSenha = apiUsers.map(({ password, ...resto }) => resto);
console.log(apiUsersSemSenha);
