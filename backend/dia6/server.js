// Ponto de entrada do projeto. Única responsabilidade: pegar a
// aplicação já configurada (src/app.js) e colocá-la escutando numa porta.
const app = require("./src/app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`
========================================
 MINI REDE SOCIAL - API
========================================

Servidor:
http://localhost:${PORT}

Rotas disponíveis:

GET  /
GET  /users
GET  /users/:id
POST /users
GET  /posts
POST /posts
POST /posts/:postId/comments
POST /posts/:postId/reactions
GET  /feed

Frontend: abra frontend/index.html
(ou sirva com Live Server).

========================================
`);
});
