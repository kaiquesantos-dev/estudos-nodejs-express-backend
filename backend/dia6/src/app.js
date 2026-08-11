// Monta a aplicação Express: registra os middlewares (na ordem certa!)
// e liga as rotas. Não sobe o servidor aqui — isso é feito em server.js,
// pra manter "configurar a app" separado de "ligar a porta".
const express = require("express");

const cors = require("./middlewares/cors");
const logger = require("./middlewares/logger");
const routes = require("./routes");

const app = express();

// A ORDEM dos app.use() importa: cada requisição passa por eles
// de cima para baixo, como uma linha de montagem.

app.use(cors);           // 1. libera acesso de outras origens (frontend)
app.use(express.json()); // 2. converte o body JSON da requisição em req.body
app.use(logger);         // 3. loga a requisição no terminal

app.use(routes);         // 4. por fim, entrega a requisição pra rota certa

module.exports = app;
