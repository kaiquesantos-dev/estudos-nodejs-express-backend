// Importa o framework Express, usado para criar o servidor e as rotas da API
const express = require("express")

// Cria a aplicação (instância do servidor Express)
const app = express()

// Middleware que ensina o Express a entender JSON no corpo (body) das requisições.
// Sem isso, "req.body" chegaria undefined nas rotas POST/PUT/PATCH.
app.use(express.json())

// "Banco de dados" temporário, só em memória.
// Cada usuário criado com POST é guardado aqui dentro.
// Importante: esse array reseta (fica vazio) sempre que o servidor é reiniciado.
const users = []

// ---------------------------------------------------------
// Rota POST /usuarios -> Criar um novo usuário
// ---------------------------------------------------------
// Tipo de rota (método HTTP): POST -> usado para CRIAR um recurso novo
// Endereço (path): /usuarios
app.post("/usuarios", (req, res) => {

    // req.body é o corpo (dados) que o cliente enviou na requisição
    // Exemplo enviado pelo Thunder Client: { "nome": "Ana" }
    users.push(req.body)

    // Responde ao cliente confirmando que deu certo
    res.send("ok, deu bom")

})

// ---------------------------------------------------------
// Rota GET /usuarios -> Listar todos os usuários
// ---------------------------------------------------------
// Tipo de rota (método HTTP): GET -> usado para LER/LISTAR dados
// Endereço (path): /usuarios
app.get("/usuarios", (req, res) => {

    // res.json() responde com o array "users" convertido para JSON
    res.json(users)

})

// ---------------------------------------------------------
// Rota PUT /usuarios -> Editar um usuário existente
// ---------------------------------------------------------
// Tipo de rota (método HTTP): PUT -> usado para ATUALIZAR um recurso (substituindo os dados)
// Endereço (path): /usuarios
// Ainda não implementado de fato (só responde um texto fixo pra testar a rota)
app.put("/usuarios", (req, res) => {
    res.send("put ok")
})

// ---------------------------------------------------------
// Rota PATCH /usuarios -> Editar parcialmente um usuário existente
// ---------------------------------------------------------
// Tipo de rota (método HTTP): PATCH -> usado para ATUALIZAR só alguns campos (diferente do PUT, que substitui tudo)
// Endereço (path): /usuarios
// Ainda não implementado de fato (só responde um texto fixo pra testar a rota)
app.patch("/usuarios", (req, res) => {
    res.send("patch ok")
})

// ---------------------------------------------------------
// Rota DELETE /usuarios -> Remover um usuário
// ---------------------------------------------------------
// Tipo de rota (método HTTP): DELETE -> usado para APAGAR um recurso
// Endereço (path): /usuarios
// Ainda não implementado de fato (só responde um texto fixo pra testar a rota)
app.delete("/usuarios", (req, res) => {
    res.send("delete ok")
})

// Coloca o servidor pra "escutar" (ficar esperando requisições) na porta 3000.
// A partir daqui, o servidor fica rodando e não devolve o terminal até você parar com Ctrl+C.
app.listen(3000)

// ===========================================================
// Objetivo do exercício: Criar nossa API de Usuários
// ===========================================================
// [x] criar um usuário       -> feito no POST /usuarios
// [x] listar todos os usuários -> feito no GET /usuarios
// [ ] editar um usuário      -> falta implementar a lógica dentro do PUT/PATCH
// [ ] deletar um usuário     -> falta implementar a lógica dentro do DELETE
//
// Lembrete de conceitos usados:
// 1> Tipo de rota / Método HTTP (GET, POST, PUT, PATCH, DELETE)
// 2> Endereço (path) da rota, ex: "/usuarios"
