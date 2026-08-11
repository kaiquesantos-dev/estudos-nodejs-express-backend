# Mini Rede Social

Projeto de treinamento com **Node.js + Express** (API) e um **frontend estático** (HTML/CSS/JS) que a consome.

As 8 histórias do roteiro estão implementadas — veja o detalhe de cada uma em [HISTORIAS.md](HISTORIAS.md).

## Arquitetura da API

```text
backend/dia6/
├── server.js              ponto de entrada (só sobe o servidor)
├── src/
│   ├── app.js              monta o Express: middlewares + rotas
│   ├── data/
│   │   └── store.js         "banco de dados" em memória (users, posts, comments, reactions)
│   ├── middlewares/
│   │   ├── logger.js        loga cada requisição
│   │   └── cors.js          libera acesso ao frontend (outra origem)
│   ├── controllers/         a lógica de cada história (1 arquivo por recurso)
│   └── routes/              define os endpoints e liga ao controller certo
└── frontend/                interface visual (abrir index.html ou usar Live Server)
```

Fluxo de uma requisição: **rota → controller → dados** (`src/data/store.js`). Os controllers nunca guardam estado próprio, só leem/alteram os arrays do `store.js`.

## Instalação

```bash
npm install
```

## Execução

```bash
npm start
```

Ou, durante o desenvolvimento:

```bash
npm run dev
```

Servidor:

```text
http://localhost:3000
```

## Teste inicial

```http
GET /
```

Resposta:

```json
{
  "message": "Mini Rede Social API",
  "status": "online"
}
```

## Dados em memória

O projeto possui quatro arrays:

```text
users
posts
comments
reactions
```

Eles funcionam como nosso banco de dados temporário.

Ao reiniciar o servidor, todas as alterações são perdidas.

## Relacionamentos

```text
User
 |
 +---- Post
 |      |
 |      +---- Comment
 |      |
 |      +---- Reaction
 |
 +---- Comment
 |
 +---- Reaction
```

Os relacionamentos são feitos por IDs:

```javascript
post.userId
comment.userId
comment.postId
reaction.userId
reaction.postId
```

## Frontend

Interface em `frontend/` (HTML + CSS + JS puro, sem build tool), servida separadamente da API.

Para abrir:

- **Opção rápida:** clique duas vezes em `frontend/index.html` (ou `Start-Process` no PowerShell) para abrir direto no navegador.
- **Opção recomendada:** clique com o botão direito em `frontend/index.html` no VSCode → **"Open with Live Server"**.

O frontend espera a API rodando em `http://localhost:3000` (`npm run dev`, veja acima). Se a API não estiver no ar, aparece um aviso na tela explicando o que fazer.

## Roteiro original

Veja [HISTORIAS.md](HISTORIAS.md) para o mapeamento de cada história para o código que a implementa.
