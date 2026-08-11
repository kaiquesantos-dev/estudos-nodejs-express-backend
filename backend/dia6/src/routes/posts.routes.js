// Rotas relacionadas a posts — e também aos recursos "filhos" de um
// post: comentários e reações. Por isso este arquivo importa três
// controllers diferentes.
const { Router } = require("express");
const postsController = require("../controllers/posts.controller");
const commentsController = require("../controllers/comments.controller");
const reactionsController = require("../controllers/reactions.controller");

const router = Router();

// Estes caminhos são relativos a "/posts" (prefixo definido em routes/index.js).

router.get("/", postsController.listar); // GET  /posts
router.post("/", postsController.criar); // POST /posts

// "/:postId/comments" e "/:postId/reactions" viram, na prática:
// POST /posts/:postId/comments  e  POST /posts/:postId/reactions
router.post("/:postId/comments", commentsController.criar);
router.post("/:postId/reactions", reactionsController.criar);

module.exports = router;
