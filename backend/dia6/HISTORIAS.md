# Histórias implementadas

Roteiro original das 8 histórias do treinamento. Cada uma virou uma rota
real na API — veja a implementação em `src/controllers/`.

## 1. Listar usuários
`GET /users` → `src/controllers/users.controller.js` (`listar`)

## 2. Buscar usuário por id
`GET /users/:id` → `src/controllers/users.controller.js` (`buscarPorId`)

## 3. Criar usuário
`POST /users` (body: `{ name, username }`) → `src/controllers/users.controller.js` (`criar`)

## 4. Listar posts
`GET /posts` → `src/controllers/posts.controller.js` (`listar`)

## 5. Criar post
`POST /posts` (body: `{ userId, text }`) → `src/controllers/posts.controller.js` (`criar`)

## 6. Comentar em um post
`POST /posts/:postId/comments` (body: `{ userId, text }`) → `src/controllers/comments.controller.js` (`criar`)

## 7. Like / Dislike
`POST /posts/:postId/reactions` (body: `{ userId, type }`, `type` é `"like"` ou `"dislike"`) → `src/controllers/reactions.controller.js` (`criar`)

Um usuário só pode ter uma reação por post — reagir de novo atualiza a reação existente em vez de duplicar.

## 8. Feed completo
`GET /feed` → `src/controllers/feed.controller.js` (`listar`)

Combina `posts` + `users` + `comments` + `reactions` num único objeto por post.
