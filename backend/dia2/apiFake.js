// Carrega o módulo nativo "fs" (file system) do Node, já na versão ".promises"
// Essa versão devolve Promises em vez de usar callback, permitindo usar await
const fs = require("fs").promises;

// Lista de produtos simulando os dados que uma API de verdade retornaria
// Cada item é um objeto com id, nome e preço
const produtos = [
  { id: 1, nome: "teclado", preco: 150.0 },
  { id: 2, nome: "mouse", preco: 80.5 },
  { id: 3, nome: "monitor", preco: 900.0 },
];

// Função que simula uma chamada de API (uma requisição que demora pra responder)
function buscarProdutosNaApi() {
  // Retorna uma Promise: só entrega o resultado quando o setTimeout terminar
  return new Promise((resolve) => {
    // setTimeout espera 1000ms (1 segundo) antes de rodar a função de dentro
    setTimeout(() => {
      // resolve(...) entrega os produtos como resultado da Promise
      // é isso que quem chamou essa função vai receber no "await"
      resolve(produtos);
    }, 1000);
  });
}

// Função principal do programa, marcada como "async" pois usa "await" dentro dela
async function main() {
  // Espera a "API falsa" responder e guarda o resultado (a lista de produtos)
  const resultado = await buscarProdutosNaApi();
  // Grava o resultado no arquivo produtos.json
  // JSON.stringify transforma o array de objetos em texto no formato JSON
  // O "null, 2" deixa o texto identado (organizado), com 2 espaços por nível
  await fs.writeFile("produtos.json", JSON.stringify(resultado, null, 2));

  // Lê o conteúdo do arquivo que acabamos de gravar, como texto (utf-8)
  const conteudo = await fs.readFile("produtos.json", "utf-8");
  // JSON.parse transforma o texto de volta em array/objeto do JavaScript
  // console.log exibe esse resultado formatado no terminal
  console.log(JSON.parse(conteudo));
}

// Chama a função principal para começar a execução do programa
// Sem essa linha, a função "main" nunca seria executada
main();
