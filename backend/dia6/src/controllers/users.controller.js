// Controller = onde mora a REGRA DE NEGÓCIO de cada rota.
// Ele recebe (req, res) do Express e decide o que responder.
// Os dados em si (o array "users") ficam isolados em data/store.js.
const { users } = require("../data/store");

// GET /users
// Lista todos os usuários cadastrados, sem filtro nenhum.
function listar(req, res) {
  return res.json(users);
}

// GET /users/:id
// Busca um único usuário pelo id que veio na URL.
function buscarPorId(req, res) {
  // req.params.id sempre chega como STRING (é texto da URL),
  // por isso convertemos para Number antes de comparar.
  const id = Number(req.params.id);

  // find() percorre o array e retorna o primeiro item que bate
  // com a condição, ou "undefined" se não achar nenhum.
  const usuario = users.find((user) => user.id === id);

  if (!usuario) {
    // 404 = "Not Found": o recurso pedido não existe.
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  // Por padrão res.json() já responde com status 200 (sucesso).
  return res.json(usuario);
}

// POST /users
// Cria um novo usuário a partir dos dados enviados no body.
function criar(req, res) {
  // Desestruturação: pega "name" e "username" de dentro de req.body.
  const { name, username } = req.body;

  // Validação simples: nenhum dos dois campos pode vir vazio/ausente.
  if (!name || !username) {
    // 400 = "Bad Request": o CLIENTE mandou dados inválidos.
    return res.status(400).json({ erro: "name e username são obrigatórios" });
  }

  // Como não existe banco de dados de verdade, calculamos o próximo id
  // manualmente: pegamos o maior id já existente e somamos 1.
  // reduce(...) percorre o array acumulando um resultado — aqui o resultado
  // acumulado ("max") é sempre o maior id visto até agora.
  const maiorId = users.reduce((max, user) => Math.max(max, user.id), 0);

  const novoUsuario = {
    id: maiorId + 1,
    name,
    username
  };

  // push() adiciona o novo usuário no fim do array (isso "salva" o dado).
  users.push(novoUsuario);

  // 201 = "Created": convenção HTTP para "o recurso foi criado com sucesso".
  return res.status(201).json(novoUsuario);
}

// Exporta as três funções para as rotas (src/routes/users.routes.js)
// poderem ligá-las aos endpoints correspondentes.
module.exports = { listar, buscarPorId, criar };
