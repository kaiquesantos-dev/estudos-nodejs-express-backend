// Controller responsável pelos posts (publicações do mural).
const { users, posts } = require("../data/store");

// GET /posts
// Primeira versão: apenas devolve o array de posts, sem relacionar
// com usuário/comentários/reações (isso é feito em feed.controller.js).
function listar(req, res) {
  return res.json(posts);
}

// POST /posts
// Cria uma nova publicação, associada a um usuário existente.
function criar(req, res) {
  const { userId, text } = req.body;

  // Validação: os dois campos são obrigatórios.
  if (!userId || !text) {
    return res.status(400).json({ erro: "userId e text são obrigatórios" });
  }

  // Regra de relacionamento: só cria o post se o userId informado
  // corresponder a um usuário que realmente existe.
  const usuarioExiste = users.find((user) => user.id === userId);

  if (!usuarioExiste) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  // Mesmo padrão de geração de id do users.controller.js, agora
  // aplicado ao array "posts" (cada array tem sua própria contagem).
  const maiorId = posts.reduce((max, post) => Math.max(max, post.id), 0);

  const novoPost = {
    id: maiorId + 1,
    userId,
    text,
    // toISOString() gera a data/hora atual no formato padrão
    // ("2026-08-11T18:00:00.000Z"), igual aos posts de exemplo.
    createdAt: new Date().toISOString()
  };

  posts.push(novoPost);

  return res.status(201).json(novoPost);
}

module.exports = { listar, criar };
