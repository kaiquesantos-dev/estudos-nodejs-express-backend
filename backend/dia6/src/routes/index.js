// Ponto central que junta todas as rotas da aplicação.
// src/app.js só precisa conhecer ESTE arquivo — não os routers
// individuais — o que deixa fácil adicionar um novo recurso no
// futuro (crie o arquivo de rotas e registre aqui, só isso).
const { Router } = require("express");

const usersRoutes = require("./users.routes");
const postsRoutes = require("./posts.routes");
const feedRoutes = require("./feed.routes");

const router = Router();

// Rota de "health check": confirma que a API está no ar.
router.get("/", (req, res) => {
  return res.json({ message: "Mini Rede Social API", status: "online" });
});

// router.use(prefixo, router) diz: "todas as rotas definidas dentro
// desse router-filho vivem debaixo desse prefixo de URL".
router.use("/users", usersRoutes); // tudo em users.routes.js vira /users/...
router.use("/posts", postsRoutes); // tudo em posts.routes.js vira /posts/...
router.use("/feed", feedRoutes);   // tudo em feed.routes.js vira /feed/...

module.exports = router;
