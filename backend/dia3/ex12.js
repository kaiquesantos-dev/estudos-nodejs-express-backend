/* Exercício 12: Função LIKE ignorando acentos */
const produtos2 = ['Teclado Mecânico', 'Mouse Gamer', 'Cadeira Escritório'];

// normalize('NFD') separa letras acentuadas em "letra base" + "acento" (caractere combinante)
// o replace() com essa regex remove só os acentos (os caracteres combinantes),
// deixando as letras normais; toLowerCase() ignora diferença de maiúsculas/minúsculas
function normalizar(str) {
  return str.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

// search() normaliza o termo buscado e cada produto, e filtra os que
// contêm o termo (como um "LIKE %termo%" ignorando acentos e caixa)
function search(term) {
  const termoNormalizado = normalizar(term);
  return produtos2.filter(p => normalizar(p).includes(termoNormalizado));
}

console.log(search('mecanico'));
console.log(search('escritorio'));
