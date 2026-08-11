const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual é seu primeiro numero?", (primeiro) => {
  rl.question("Qual é seu segundo numero?", (segundo) => {
    rl.question("Qual é o operador?", (operador) => {
      const num1 = Number(primeiro);
      const num2 = Number(segundo);
      let resultado;

      switch (operador) {
        case "+":
          resultado = num1 + num2;
          break;
        case "-":
          resultado = num1 - num2;
          break;
        case "*":
          resultado = num1 * num2;
          break;
        case "/":
          resultado = num1 / num2;
          break;
        default:
          console.log("Operador inválido");
          rl.close();
          return;
      }

      console.log(`Resultado: ${resultado}`);
      rl.close();
    });
  });
});
