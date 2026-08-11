// Controller responsável por montar o feed: a "foto" combinada de
// todos os posts já enriquecidos com autor, comentários e reações.
const { users, posts, comments, reactions } = require("../data/store");

// GET /feed
function listar(req, res) {
  // map() transforma cada post original num objeto "enriquecido",
  // sem alterar o array "posts" original.
  const feed = posts.map((post) => {
    // Busca o usuário dono deste post (relacionamento Post -> User).
    const autor = users.find((user) => user.id === post.userId);

    // Filtra, dentro de TODOS os comentários, só os que pertencem
    // a este post específico.
    const comentariosDoPost = comments.filter(
      (comment) => comment.postId === post.id
    );

    // Mesma lógica para as reações deste post...
    const reacoesDoPost = reactions.filter(
      (reaction) => reaction.postId === post.id
    );
    // ...e a partir delas contamos quantas são like e quantas são dislike.
    const likes = reacoesDoPost.filter((reaction) => reaction.type === "like").length;
    const dislikes = reacoesDoPost.filter((reaction) => reaction.type === "dislike").length;

    return {
      // Spread operator: copia todos os campos do post original
      // (id, userId, text, createdAt) para este novo objeto.
      ...post,
      // Substitui o "userId" solto por um objeto "user" com os
      // dados já resolvidos — mais prático pro frontend consumir.
      user: { id: autor.id, name: autor.name },
      comments: comentariosDoPost,
      likes,
      dislikes
    };
  });

  return res.json(feed);
}

module.exports = { listar };
