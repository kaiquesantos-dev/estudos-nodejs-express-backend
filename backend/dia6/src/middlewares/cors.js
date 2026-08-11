// Libera o acesso à API a partir do frontend, que roda em outra
// origem (ex: Live Server em http://127.0.0.1:5500). Sem isso, o
// navegador bloqueia as requisições do frontend por política de CORS.
function cors(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
}

module.exports = cors;
