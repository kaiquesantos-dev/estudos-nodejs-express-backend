// Importa a biblioteca Express, que facilita a criação de servidores/APIs em Node.js
// (sem ela, teríamos que usar o módulo nativo "http" e escrever muito mais código na mão)
const express = require("express");

// Cria a aplicação Express - esse "app" é o objeto principal que usamos para
// configurar rotas, middlewares e ligar o servidor
const app = express();

// Middleware que ensina o Express a entender JSON no corpo (body) das requisições
// Sem essa linha, "req.body" chegaria "undefined" nas rotas de POST e PUT
// IMPORTANTE: precisa vir ANTES das rotas que usam req.body
app.use(express.json());

// Lista de produtos guardada em memória (RAM) - simula um "banco de dados" simples
// Usamos "let" (não "const") porque essa lista vai ser alterada pelas rotas
// de criar (POST), atualizar (PUT) e remover (DELETE) produtos
let produtos = [
  { id: 1, nome: "teclado", preco: 150.0 },
  { id: 2, nome: "mouse", preco: 80.5 },
  { id: 3, nome: "monitor", preco: 900.0 },
];

// ===== ROTA GET - Listar todos os produtos =====
// Responde a requisições GET feitas para "/produtos"
// GET é usado para BUSCAR dados, sem alterar nada no servidor
app.get("/produtos", (req, res) => {
  // req = a requisição que chegou (request)
  // res = o objeto usado para responder (response)
  // res.json(...) envia a lista de produtos formatada como JSON para quem pediu
  res.json(produtos);
});

// ===== ROTA GET - Buscar um produto específico pelo id =====
// Exemplo de uso: GET /produtos/2
app.get("/produtos/:id", (req, res) => {
  // ":id" na rota é um parâmetro dinâmico - o valor digitado na URL
  // fica disponível em "req.params.id" (sempre chega como texto/string)
  // Number(...) converte esse texto para número, para poder comparar com o id da lista
  const id = Number(req.params.id);

  // "find" percorre o array e devolve o primeiro item cujo id seja igual ao buscado
  const produto = produtos.find((p) => p.id === id);

  // Se não encontrou nenhum produto com esse id, "produto" fica "undefined"
  if (!produto) {
    // Responde com status 404 (Não encontrado) e uma mensagem de erro em JSON
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  // Se encontrou, devolve o produto encontrado
  res.json(produto);
});

// ===== ROTA POST - Criar um novo produto =====
// POST é usado para CRIAR um novo registro
// Exemplo de uso: POST /produtos com body { "nome": "cabo HDMI", "preco": 25 }
app.post("/produtos", (req, res) => {
  // Monta o objeto do novo produto
  const novoProduto = {
    // Gera um id simples somando 1 ao tamanho atual da lista
    // (funciona aqui porque é só para fins didáticos; em um projeto real,
    // o id normalmente vem gerado pelo banco de dados)
    id: produtos.length + 1,
    // Pega o nome e o preço enviados pelo cliente no corpo (body) da requisição
    nome: req.body.nome,
    preco: req.body.preco,
  };

  // Adiciona o novo produto na lista em memória
  produtos.push(novoProduto);

  // Responde com status 201 (Created = criado com sucesso)
  // e devolve o produto recém-criado, para o cliente confirmar os dados
  res.status(201).json(novoProduto);
});

// ===== ROTA PUT - Atualizar um produto existente =====
// PUT é usado para ATUALIZAR um registro já existente, por completo
// Exemplo de uso: PUT /produtos/2 com body { "nome": "mouse gamer", "preco": 120 }
app.put("/produtos/:id", (req, res) => {
  // Pega o id enviado na URL e converte para número
  const id = Number(req.params.id);

  // Procura a POSIÇÃO (índice) do produto na lista, não o produto em si
  // "findIndex" devolve -1 se não encontrar nada
  const index = produtos.findIndex((p) => p.id === id);

  // Se não achou o produto, retorna erro 404
  if (index === -1) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  // Atualiza o produto na posição encontrada, substituindo nome e preço
  // pelos valores novos enviados no corpo da requisição
  produtos[index] = {
    id, // mantém o mesmo id (não deixamos o id ser trocado)
    nome: req.body.nome,
    preco: req.body.preco,
  };

  // Devolve o produto já atualizado
  res.json(produtos[index]);
});

// ===== ROTA DELETE - Remover um produto =====
// DELETE é usado para REMOVER um registro existente
// Exemplo de uso: DELETE /produtos/2
app.delete("/produtos/:id", (req, res) => {
  // Pega o id enviado na URL e converte para número
  const id = Number(req.params.id);

  // Verifica se existe algum produto com esse id antes de tentar remover
  const existe = produtos.some((p) => p.id === id);

  if (!existe) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  // "filter" cria uma nova lista mantendo apenas os produtos DIFERENTES do id removido
  // ou seja, tudo que não é o produto buscado continua na lista
  produtos = produtos.filter((p) => p.id !== id);

  // Status 204 (No Content) = sucesso, mas sem corpo de resposta
  // é o padrão usado para DELETE quando não há nada a devolver
  res.status(204).send();
});

// Coloca o servidor para escutar (ficar esperando requisições) na porta 3000
// A função dentro do listen só roda UMA VEZ, quando o servidor sobe com sucesso
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
