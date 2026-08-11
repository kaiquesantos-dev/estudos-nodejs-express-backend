// Módulo nativo do Node.js
const os = require("os");

// Módulo próprio (arquivo local)
const saudacoes = require("./saudacoes");

console.log(saudacoes.bomDia("Kaique"));
console.log(saudacoes.boaTarde("Kaique"));
console.log(saudacoes.boaNoite("Kaique"));

console.log(`Sistema operacional: ${os.type()}`);
console.log(`Usuário: ${os.userInfo().username}`);
