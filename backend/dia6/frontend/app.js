const API_BASE = "http://localhost:3000";

const userSelect = document.getElementById("user-select");
const newUserBtn = document.getElementById("new-user-btn");
const newUserForm = document.getElementById("new-user-form");
const cancelUserBtn = document.getElementById("cancel-user-btn");
const newPostForm = document.getElementById("new-post-form");
const newPostText = document.getElementById("new-post-text");
const composeHint = document.getElementById("compose-hint");
const statusBanner = document.getElementById("status-banner");
const feedEl = document.getElementById("feed");
const postTemplate = document.getElementById("post-template");
const commentTemplate = document.getElementById("comment-template");

// ------------------------------------------------------------
// Helpers de rede
// ------------------------------------------------------------

async function api(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const erro = data && data.erro ? data.erro : `Erro ${response.status}`;
    throw new Error(erro);
  }

  return data;
}

function mostrarErro(mensagem) {
  statusBanner.textContent = mensagem;
  statusBanner.classList.remove("hidden");
}

function limparErro() {
  statusBanner.classList.add("hidden");
}

function usuarioSelecionado() {
  return Number(userSelect.value) || null;
}

function formatarData(iso) {
  const data = new Date(iso);
  return data.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

// ------------------------------------------------------------
// Usuários
// ------------------------------------------------------------

async function carregarUsuarios() {
  const usuarios = await api("/users");
  const selecionadoAntes = userSelect.value;

  userSelect.innerHTML = "";
  usuarios.forEach((usuario) => {
    const option = document.createElement("option");
    option.value = usuario.id;
    option.textContent = `${usuario.name} (@${usuario.username})`;
    userSelect.appendChild(option);
  });

  if (selecionadoAntes && usuarios.some((u) => String(u.id) === selecionadoAntes)) {
    userSelect.value = selecionadoAntes;
  }
}

newUserBtn.addEventListener("click", () => {
  newUserForm.classList.toggle("hidden");
});

cancelUserBtn.addEventListener("click", () => {
  newUserForm.reset();
  newUserForm.classList.add("hidden");
});

newUserForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  limparErro();

  const name = document.getElementById("new-user-name").value.trim();
  const username = document.getElementById("new-user-username").value.trim();

  try {
    const novoUsuario = await api("/users", {
      method: "POST",
      body: JSON.stringify({ name, username })
    });

    await atualizarCacheUsuarios();
    await carregarUsuarios();
    userSelect.value = novoUsuario.id;
    newUserForm.reset();
    newUserForm.classList.add("hidden");
  } catch (erro) {
    mostrarErro(`Não foi possível criar o usuário: ${erro.message}`);
  }
});

// ------------------------------------------------------------
// Compor post
// ------------------------------------------------------------

newPostForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  limparErro();
  composeHint.textContent = "";

  const userId = usuarioSelecionado();
  const text = newPostText.value.trim();

  if (!userId) {
    composeHint.textContent = "escolha (ou crie) um usuário antes de postar.";
    return;
  }

  try {
    await api("/posts", {
      method: "POST",
      body: JSON.stringify({ userId, text })
    });

    newPostText.value = "";
    await carregarFeed();
  } catch (erro) {
    mostrarErro(`Não foi possível publicar: ${erro.message}`);
  }
});

// ------------------------------------------------------------
// Feed
// ------------------------------------------------------------

async function carregarFeed() {
  const posts = await api("/feed");

  feedEl.innerHTML = "";

  if (posts.length === 0) {
    feedEl.innerHTML = '<p class="empty">o mural está vazio — seja o primeiro a fixar um recado.</p>';
    return;
  }

  posts
    .slice()
    .reverse()
    .forEach((post) => feedEl.appendChild(criarPostCard(post)));
}

function criarPostCard(post) {
  const node = postTemplate.content.cloneNode(true);

  node.querySelector(".post-author").textContent = post.user.name;
  node.querySelector(".post-time").textContent = formatarData(post.createdAt);
  node.querySelector(".post-text").textContent = post.text;
  node.querySelector(".like-count").textContent = post.likes;
  node.querySelector(".dislike-count").textContent = post.dislikes;

  const likeBtn = node.querySelector(".like-btn");
  const dislikeBtn = node.querySelector(".dislike-btn");

  likeBtn.addEventListener("click", () => reagir(post.id, "like"));
  dislikeBtn.addEventListener("click", () => reagir(post.id, "dislike"));

  const commentList = node.querySelector(".comment-list");
  post.comments.forEach((comentario) => {
    commentList.appendChild(criarComentario(comentario));
  });

  const commentForm = node.querySelector(".comment-form");
  const commentInput = node.querySelector(".comment-input");

  commentForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    limparErro();

    const userId = usuarioSelecionado();
    const text = commentInput.value.trim();

    if (!userId) {
      mostrarErro("escolha (ou crie) um usuário antes de comentar.");
      return;
    }

    try {
      await api(`/posts/${post.id}/comments`, {
        method: "POST",
        body: JSON.stringify({ userId, text })
      });
      commentInput.value = "";
      await carregarFeed();
    } catch (erro) {
      mostrarErro(`Não foi possível comentar: ${erro.message}`);
    }
  });

  return node;
}

function criarComentario(comentario) {
  const node = commentTemplate.content.cloneNode(true);
  const autor = usuariosCache[comentario.userId];

  node.querySelector(".comment-author").textContent = autor ? autor.name : `usuário #${comentario.userId}`;
  node.querySelector(".comment-text").textContent = comentario.text;

  return node;
}

async function reagir(postId, type) {
  limparErro();
  const userId = usuarioSelecionado();

  if (!userId) {
    mostrarErro("escolha (ou crie) um usuário antes de reagir.");
    return;
  }

  try {
    await api(`/posts/${postId}/reactions`, {
      method: "POST",
      body: JSON.stringify({ userId, type })
    });
    await carregarFeed();
  } catch (erro) {
    mostrarErro(`Não foi possível reagir: ${erro.message}`);
  }
}

// ------------------------------------------------------------
// Cache simples de usuários (pra mostrar nome nos comentários
// sem precisar de outra chamada por comentário)
// ------------------------------------------------------------

let usuariosCache = {};

async function atualizarCacheUsuarios() {
  const usuarios = await api("/users");
  usuariosCache = Object.fromEntries(usuarios.map((u) => [u.id, u]));
}

// ------------------------------------------------------------
// Inicialização
// ------------------------------------------------------------

async function iniciar() {
  try {
    await atualizarCacheUsuarios();
    await carregarUsuarios();
    await carregarFeed();
  } catch (erro) {
    feedEl.innerHTML = "";
    mostrarErro(
      `Não consegui falar com a API (${erro.message}). Verifique se o servidor está rodando: cd backend/dia6 && npm run dev`
    );
  }
}

iniciar();
