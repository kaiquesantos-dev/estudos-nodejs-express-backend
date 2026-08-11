const readline = require("readline");

function perguntarPerfil() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Qual é seu nome?", (nome) => {
    rl.question("Qual é sua idade?", (idade) => {
      rl.question("Onde vc mora?", (cidade) => {
        console.log(`${nome} tem ${idade} e mora em ${cidade}`);
        rl.close();
      });
    });
  });
}

module.exports = perguntarPerfil;
perguntarPerfil();
