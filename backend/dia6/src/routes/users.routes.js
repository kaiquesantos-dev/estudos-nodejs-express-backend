// Rotas relacionadas a usuários.
// Router() cria um "mini app" Express que depois é "encaixado"
// dentro do prefixo "/users" (ver src/routes/index.js).
const { Router } = require("express");
const usersController = require("../controllers/users.controller");

const router = Router();

// Repare: os caminhos aqui NÃO incluem "/users" — isso já é
// adicionado pelo router.use("/users", ...) em routes/index.js.
// Então "GET /" aqui vira, de fato, "GET /users".

router.get("/", usersController.listar);       // GET  /users
router.get("/:id", usersController.buscarPorId); // GET  /users/:id
router.post("/", usersController.criar);        // POST /users

module.exports = router;
