// Controller responsável pelos comentários dentro de um post.
const { users, posts, comments } = require("../data/store");

// POST /posts/:postId/comments
// Cria um comentário associado a um post e a um usuário existentes.
function criar(req, res) {
  // :postId vem da URL (rota "/posts/:postId/comments"), então chega
  // como string — convertemos para número antes de comparar ids.
  const postId = Number(req.params.postId);
  // userId e text vêm do corpo (body) da requisição.
  const { userId, text } = req.body;

  // 1) O post precisa existir: não faz sentido comentar em algo
  // que não está no mural.
  const postExiste = posts.find((post) => post.id === postId);
  if (!postExiste) {
    return res.status(404).json({ erro: "Post não encontrado" });
  }

  // 2) Os dados do comentário precisam ter vindo preenchidos.
  if (!userId || !text) {
    return res.status(400).json({ erro: "userId e text são obrigatórios" });
  }

  // 3) O usuário que está comentando também precisa existir.
  const usuarioExiste = users.find((user) => user.id === userId);
  if (!usuarioExiste) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  // Novo id = maior id já existente em "comments" + 1.
  const maiorId = comments.reduce((max, comment) => Math.max(max, comment.id), 0);

  const novoComentario = {
    id: maiorId + 1,
    postId, // liga o comentário ao post (relacionamento Comment -> Post)
    userId, // liga o comentário a quem escreveu (relacionamento Comment -> User)
    text,
    createdAt: new Date().toISOString()
  };

  comments.push(novoComentario);

  return res.status(201).json(novoComentario);
}

module.exports = { criar };
