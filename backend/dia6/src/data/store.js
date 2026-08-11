// ============================================================
// "BANCO DE DADOS" EM MEMÓRIA
// ============================================================
//
// Sem banco de dados real: os dados vivem em arrays JavaScript.
// Ao reiniciar o processo Node, tudo volta ao estado inicial abaixo.
//
// Este módulo é a única fonte da verdade dos dados da aplicação —
// controllers nunca declaram arrays próprios, sempre importam daqui.

let users = [
  { id: 1, name: "Ana", username: "ana" },
  { id: 2, name: "Carlos", username: "carlos" },
  { id: 3, name: "Maria", username: "maria" }
];

let posts = [
  {
    id: 1,
    userId: 1,
    text: "Hoje comecei a estudar Node.js! 🚀",
    createdAt: "2026-08-10T12:00:00.000Z"
  },
  {
    id: 2,
    userId: 2,
    text: "Express deixa a criação de APIs muito mais simples 😄",
    createdAt: "2026-08-10T12:10:00.000Z"
  }
];

let comments = [
  {
    id: 1,
    postId: 1,
    userId: 2,
    text: "Boa! Depois olha middlewares.",
    createdAt: "2026-08-10T12:20:00.000Z"
  }
];

// type: "like" | "dislike"
let reactions = [
  { id: 1, postId: 1, userId: 2, type: "like" },
  { id: 2, postId: 1, userId: 3, type: "like" }
];

module.exports = { users, posts, comments, reactions };
