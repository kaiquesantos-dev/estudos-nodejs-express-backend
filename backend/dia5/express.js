/**
 * ============================================================
 * TREINAMENTO NODE.JS – DIA 4
 * Exercício: Criando uma API REST de usuários com Express
 * ============================================================
 *
 * HISTÓRIA / CONTEXTO
 * ------------------------------------------------------------
 * Imagine que uma pequena empresa está criando um sistema interno
 * para controlar seus colaboradores.
 *
 * Neste primeiro momento, ainda não teremos banco de dados.
 * Os usuários serão armazenados em memória para que possamos
 * concentrar o aprendizado nos conceitos fundamentais de uma API:
 *
 * - criar um servidor HTTP;
 * - criar rotas;
 * - receber parâmetros pela URL;
 * - receber dados pelo body;
 * - buscar dados;
 * - cadastrar dados;
 * - atualizar dados;
 * - excluir dados;
 * - utilizar os principais códigos de status HTTP.
 *
 * Ao final deste exercício teremos uma API com as operações:
 *
 * GET    /usuarios
 * GET    /usuarios/:id
 * POST   /usuarios
 * PUT    /usuarios/:id
 * DELETE /usuarios/:id
 *
 * Execute com:
 *
 *   node api_rotas_usuarios_didatico.js
 *
 * Antes, instale o Express:
 *   npm init -y
 *   npm install express
 */

// ============================================================
// PASSO 1 – IMPORTAR O EXPRESS
// ============================================================
//
// O require() carrega o pacote "express" instalado no projeto.
//
// Express é um framework para Node.js que simplifica a criação
// de servidores HTTP e APIs.
//
// Sem Express, precisaríamos trabalhar diretamente com o módulo
// HTTP nativo do Node.js e escrever mais código para tratar rotas,
// requisições e respostas.

const express = require("express");

// ============================================================
// PASSO 2 – CRIAR A APLICAÇÃO
// ============================================================
//
// Ao executar express(), criamos nossa aplicação.
//
// A variável "app" será usada para:
// - configurar o servidor;
// - registrar middlewares;
// - criar endpoints;
// - iniciar a API.

const app = express();

// ============================================================
// PASSO 3 – HABILITAR O RECEBIMENTO DE JSON
// ============================================================
//
// APIs normalmente recebem dados no formato JSON.
//
// Exemplo de requisição:
//
// {
//   "nome": "Carlos"
// }
//
// O middleware express.json() lê o corpo da requisição
// e transforma o JSON recebido em um objeto JavaScript.
//
// Depois disso, podemos acessar os dados usando:
//
// req.body

app.use(express.json());

// ============================================================
// PASSO 4 – CRIAR NOSSA "BASE DE DADOS" TEMPORÁRIA
// ============================================================
//
// Como ainda não estamos trabalhando com banco de dados,
// vamos armazenar os usuários dentro de um array.
//
// IMPORTANTE:
// esses dados existem somente enquanto a aplicação estiver rodando.
//
// Se o servidor for reiniciado, as alterações serão perdidas.
//
// Em módulos futuros, este array poderá ser substituído por
// PostgreSQL, MongoDB ou outro banco de dados.

let usuarios = [
  { id: 1, nome: "Maria", email:"maria@empresa.com" },
  { id: 2, nome: "João", email:"joao@empresa.com" },
];

// ============================================================
// PASSO 5 – LISTAR TODOS OS USUÁRIOS
// ============================================================
//
// CENÁRIO:
//
// O setor administrativo precisa visualizar todos os usuários
// cadastrados no sistema.
//
// Para consultas utilizamos normalmente o método HTTP GET.
//
// Endpoint:
//
// GET /usuarios
//
// Exemplo:
// http://localhost:3001/usuarios
//
// O callback recebe:
// req -> informações da requisição
// res -> objeto usado para enviar a resposta

app.get("/usuarios", (req, res) => {
  // res.json() converte automaticamente o array para JSON
  // e envia os dados para quem chamou a API.
  res.json(usuarios);
});

// ============================================================
// PASSO 6 – BUSCAR UM USUÁRIO PELO ID
// ============================================================
//
// CENÁRIO:
//
// Agora o setor administrativo quer consultar apenas um usuário.
//
// O ID será enviado diretamente na URL:
//
// GET /usuarios/1
//
// O trecho ":id" é chamado de parâmetro de rota.
//
// Podemos acessar esse valor através de:
//
// req.params.id

app.get("/usuarios/:id", (req, res) => {
  // Os parâmetros da URL chegam como string.
  //
  // Exemplo:
  // req.params.id === "1"
  //
  // Como nossos IDs são números, fazemos a conversão.
  const id = Number(req.params.id);

  // find() percorre o array e retorna o primeiro usuário
  // cujo ID seja igual ao ID recebido na URL.
  const usuario = usuarios.find((u) => u.id === id);

  // Se nenhum usuário for encontrado, "usuario" será undefined.
  //
  // Neste caso retornamos o status HTTP 404:
  // Not Found.
  if (!usuario) {
    return res.status(404).json({
      mensagem: "Usuário não encontrado",
    });
  }

  // Se encontramos o usuário, retornamos seus dados.
  //
  // Como não informamos explicitamente outro status,
  // o Express responderá com HTTP 200 - OK.
  res.json(usuario);
});

// ============================================================
// PASSO 7 – CADASTRAR UM NOVO USUÁRIO
// ============================================================
//
// CENÁRIO:
//
// Um novo colaborador entrou na empresa e precisa ser cadastrado.
//
// Para criação de novos recursos utilizamos normalmente POST.
//
// Endpoint:
//
// POST /usuarios
//
// Body esperado:
//
// {
//   "nome": "Carlos"
// }

app.post("/usuarios", (req, res) => {
  // Extraímos a propriedade "nome" do body usando destructuring.
  //
  // É equivalente a:
  //
  // const nome = req.body.nome;
  const { nome, email } = req.body;

  // Antes de cadastrar, validamos os dados recebidos.
  //
  // Se o nome não foi informado, retornamos:
  //
  // HTTP 400 - Bad Request
  //
  // Isso indica que a requisição enviada pelo cliente
  // possui dados inválidos ou incompletos.
  if (!nome) {
    return res.status(400).json({
      mensagem: "Nome é obrigatório",
    });
  }

  // Criamos um novo objeto representando o usuário.
  //
  // Neste exercício simples, o novo ID é calculado com base
  // na quantidade de itens existentes.
  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
  };

  // push() adiciona o novo usuário ao final do array.
  usuarios.push(novoUsuario);

  // HTTP 201 - Created
  //
  // É o status normalmente utilizado quando um novo recurso
  // foi criado com sucesso.
  res.status(201).json(novoUsuario);
});

// ============================================================
// PASSO 8 – ATUALIZAR UM USUÁRIO
// ============================================================
//
// CENÁRIO:
//
// Um usuário teve seu nome alterado ou corrigido.
//
// Utilizaremos PUT para atualizar o recurso.
//
// Endpoint:
//
// PUT /usuarios/1
//
// Body:
//
// {
//   "nome": "Maria Silva"
// }

app.put("/usuarios/:id", (req, res) => {
  // Primeiro descobrimos qual usuário será atualizado.
  const id = Number(req.params.id);

  // Depois recuperamos o novo nome enviado no body.
  const { nome } = req.body;

  // Procuramos o usuário correspondente no array.
  const usuario = usuarios.find((u) => u.id === id);

  // Não podemos atualizar um usuário que não existe.
  if (!usuario) {
    return res.status(404).json({
      mensagem: "Usuário não encontrado",
    });
  }

  // Também precisamos validar o novo valor recebido.
  if (!nome) {
    return res.status(400).json({
      mensagem: "Nome é obrigatório",
    });
  }

  // Como "usuario" referencia o próprio objeto existente
  // dentro do array, alterar essa propriedade modifica
  // o usuário armazenado.
  usuario.nome = nome;

  // Retornamos o objeto atualizado.
  res.json(usuario);
});

// ============================================================
// PASSO 9 – EXCLUIR UM USUÁRIO
// ============================================================
//
// CENÁRIO:
//
// Um colaborador saiu da empresa e seu cadastro deve ser removido.
//
// Endpoint:
//
// DELETE /usuarios/1

app.delete("/usuarios/:id", (req, res) => {
  const id = Number(req.params.id);

  // Guardamos a quantidade de usuários antes da tentativa
  // de exclusão.
  //
  // Isso permitirá descobrir se algum registro foi realmente
  // encontrado e removido.
  const tamanhoAntes = usuarios.length;

  // filter() cria um novo array mantendo somente os usuários
  // cujo ID seja diferente do ID recebido.
  //
  // Em outras palavras, o usuário selecionado fica de fora.
  usuarios = usuarios.filter((u) => u.id !== id);

  // Se o tamanho do array não mudou, significa que nenhum
  // usuário possuía aquele ID.
  if (usuarios.length === tamanhoAntes) {
    return res.status(404).json({
      mensagem: "Usuário não encontrado",
    });
  }

  // HTTP 204 - No Content
  //
  // Significa que a operação foi concluída com sucesso,
  // mas não existe conteúdo para devolver na resposta.
  res.status(204).send();
});

// ============================================================
// PASSO 10 – INICIAR O SERVIDOR
// ============================================================
//
// Até aqui apenas configuramos nossa aplicação.
//
// app.listen() efetivamente inicia o servidor e faz com que ele
// passe a aguardar requisições HTTP.
//
// Neste exercício utilizaremos a porta 3001.

app.listen(3001, () => {
  console.log("API de usuários rodando em http://localhost:3001");
});

/**
 * ============================================================
 * DESAFIOS PARA OS ALUNOS
 * ============================================================
 *
 * Depois que a API estiver funcionando, tente evoluí-la.
 *
 * 1. Adicione o campo "email" aos usuários.
 *
 * 2. Faça o POST exigir nome e email.
 *
 * 3. Não permita cadastrar dois usuários com o mesmo email.
 *
 * 4. Crie o endpoint:
 *
 *      GET /usuarios?nome=Maria
 *
 *    para filtrar usuários pelo nome.
 *
 * 5. Adicione o campo "ativo" e crie uma forma de listar
 *    apenas usuários ativos.
 *
 * 6. Pense:
 *
 *    Qual problema existe nesta linha?
 *
 *      id: usuarios.length + 1
 *
 *    Experimente excluir um usuário e depois cadastrar outro.
 *
 * ============================================================
 */