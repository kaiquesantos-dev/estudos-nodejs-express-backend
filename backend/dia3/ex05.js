/* Exercício 5: Remover senha */
const usuario = {
  id: 5,
  name: 'João',
  password: '1234',
};

// Criamos um novo objeto pegando apenas os campos que queremos manter,
// deixando "password" de fora
const usuarioSemSenha = { id: usuario.id, name: usuario.name };
console.log(usuarioSemSenha);
