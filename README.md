# Estudos de Backend com Node.js e Express

Repositório de estudos de backend, organizado dia a dia, cobrindo desde os fundamentos do Node.js (módulos nativos, callbacks, Promises, `async/await`) até a construção de APIs REST com Express. O ponto mais avançado é uma mini rede social (`backend/dia6`), com API em Node.js + Express e um frontend estático simples que a consome.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## Stack

- **Node.js** (JavaScript no backend)
- **Express** (`^5.x`) para rotas e middlewares
- Módulos nativos do Node: `fs`, `path`, `os`, `readline`
- **dayjs** e **chalk** (dependências usadas nos exercícios da raiz)
- Frontend estático em HTML, CSS e JavaScript puro (sem build tool), usado apenas em `backend/dia6/frontend`

## Estrutura

```text
backend/
├── dia1/   primeiros scripts em Node.js (variáveis, funções, "olá mundo")
├── dia2/   módulos nativos (fs, os), API fake em arquivo JSON, bloco de notas via terminal
├── dia3/   introdução ao Express: primeira API REST (rotas de produtos) + exercícios avulsos
├── dia4/   assincronismo: callbacks, callback hell, Promises e Promises encadeadas
├── dia5/   API REST com Express (CRUD de usuários) e testes de requisição
└── dia6/   mini rede social: API Express completa + frontend estático
    ├── server.js
    ├── src/
    │   ├── app.js            monta o Express (middlewares + rotas)
    │   ├── data/store.js     "banco de dados" em memória
    │   ├── middlewares/      logger e CORS
    │   ├── controllers/      lógica de cada recurso (users, posts, comments, reactions, feed)
    │   └── routes/           definição dos endpoints
    └── frontend/             interface HTML/CSS/JS que consome a API
```

## Como executar

O projeto mais completo do repositório é a mini rede social em `backend/dia6`. Para rodá-la:

```bash
cd backend/dia6
npm install
npm start
```

Ou, em modo desenvolvimento (reinício automático a cada alteração):

```bash
npm run dev
```

A API sobe em `http://localhost:3000`. O frontend (`backend/dia6/frontend/index.html`) pode ser aberto diretamente no navegador ou via extensão Live Server, e consome a API nessa mesma URL. Os endpoints implementados (usuários, posts, comentários, reações e feed) estão detalhados em [`backend/dia6/HISTORIAS.md`](backend/dia6/HISTORIAS.md).

Os demais exercícios (`dia1` a `dia5`) são scripts independentes, executados individualmente com `node caminho/do/arquivo.js`.

## Sobre este repositório

Este é um repositório de estudos, não um produto finalizado. Cada pasta `diaN` representa uma etapa de aprendizado — dos conceitos básicos de Node.js até a construção de uma API REST mais estruturada, com separação em rotas, controllers e camada de dados. O objetivo aqui é registrar a evolução prática desses conceitos de backend com Node.js e Express.
