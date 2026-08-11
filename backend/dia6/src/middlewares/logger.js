// Loga cada requisição recebida no formato "MÉTODO /caminho".
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

module.exports = logger;
