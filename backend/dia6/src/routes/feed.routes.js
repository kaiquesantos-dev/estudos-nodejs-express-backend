// Rota do feed. É só uma (GET /feed), então este arquivo é o
// mais simples de todos — mas mantém o mesmo padrão dos outros
// por consistência (facilita adicionar novas rotas de feed no futuro).
const { Router } = require("express");
const feedController = require("../controllers/feed.controller");

const router = Router();

router.get("/", feedController.listar); // GET /feed

module.exports = router;
