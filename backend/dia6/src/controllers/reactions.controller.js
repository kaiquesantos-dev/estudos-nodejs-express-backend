// Controller responsável pelas reações (like/dislike) em um post.
const { users, posts, reactions } = require("../data/store");

// POST /posts/:postId/reactions
// Registra (ou atualiza) a reação de um usuário a um post.
function criar(req, res) {
  const postId = Number(req.params.postId);
  const { userId, type } = req.body;

  // Regra de negócio: só aceitamos exatamente "like" ou "dislike".
  // Qualquer outro valor é considerado inválido.
  if (type !== "like" && type !== "dislike") {
    return res.status(400).json({ erro: "type deve ser 'like' ou 'dislike'" });
  }

  const postExiste = posts.find((post) => post.id === postId);
  if (!postExiste) {
    return res.status(404).json({ erro: "Post não encontrado" });
  }

  const usuarioExiste = users.find((user) => user.id === userId);
  if (!usuarioExiste) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  // Regra de negócio: cada usuário só pode ter UMA reação por post.
  // Por isso procuramos se já existe uma reação desse userId nesse postId
  // ANTES de criar uma nova.
  const reacaoExistente = reactions.find(
    (reaction) => reaction.postId === postId && reaction.userId === userId
  );

  if (reacaoExistente) {
    // Já existe reação: apenas atualizamos o tipo dela
    // (ex: o usuário tinha dado "like" e mudou pra "dislike").
    // Isso evita ter duas reações do mesmo usuário no mesmo post.
    reacaoExistente.type = type;
    return res.json(reacaoExistente);
  }

  // Não existe reação ainda: criamos uma nova, seguindo o mesmo
  // padrão de id incremental das outras histórias.
  const maiorId = reactions.reduce((max, reaction) => Math.max(max, reaction.id), 0);

  const novaReacao = {
    id: maiorId + 1,
    postId,
    userId,
    type
  };

  reactions.push(novaReacao);

  return res.status(201).json(novaReacao);
}

module.exports = { criar };
