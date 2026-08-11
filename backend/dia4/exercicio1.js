/**
 * ============================================================
 * EXERCÍCIO 01 - CALLBACK
 * MISSÃO: ABASTECENDO A NAVE ESPACIAL
 * ============================================================
 *
 * CONCEITO:
 * Callback é uma função que é passada como argumento para outra
 * função e executada posteriormente.
 *
 * HISTÓRIA:
 * Você faz parte da equipe de lançamento da nave "Node Explorer".
 *
 * Antes do lançamento, a nave precisa ser abastecida.
 * O abastecimento demora 2 segundos.
 *
 * Somente depois que o abastecimento terminar, a nave poderá ser
 * liberada para o lançamento.
 *
 * OBJETIVO:
 * Entender como uma função pode receber outra função e executá-la
 * depois que uma operação terminar.
 *
 * Este primeiro exercício já está RESOLVIDO e servirá como exemplo
 * para os próximos desafios.
 */

// ------------------------------------------------------------
// 1. Criamos uma função que recebe:
//    - nomeNave: informação que será utilizada pela função;
//    - callback: função que deverá ser executada posteriormente.
// ------------------------------------------------------------
function abastecerNave(nomeNave, callback) {
  console.log(`Iniciando abastecimento da ${nomeNave}...`);

  // setTimeout simula uma operação que demora para terminar.
  // Em aplicações reais poderia ser, por exemplo:
  // - leitura de arquivo;
  // - consulta ao banco;
  // - chamada de uma API;
  // - processamento demorado.
  setTimeout(() => {
    console.log('Abastecimento concluído!');

    // O callback somente é executado depois que o abastecimento termina.
    callback();
  }, 2000);
}

// ------------------------------------------------------------
// 2. Esta é a função que será passada como callback.
// ------------------------------------------------------------
function liberarNave() {
  console.log('Node Explorer pronta para lançamento!');
}

// ------------------------------------------------------------
// 3. Executamos abastecerNave e passamos liberarNave como callback.
//
// IMPORTANTE:
// Não usamos liberarNave() aqui.
// Se usássemos os parênteses, estaríamos executando a função
// imediatamente.
//
// Passamos apenas liberarNave para que abastecerNave possa
// decidir quando executá-la.
// ------------------------------------------------------------
abastecerNave('Node Explorer', liberarNave);

/*
 * RESULTADO ESPERADO:
 *
 * Iniciando abastecimento da Node Explorer...
 * Abastecimento concluído!
 * Node Explorer pronta para lançamento!
 *
 *
 * FLUXO:
 *
 * abastecerNave()
 *       |
 *       v
 * aguarda 2 segundos
 *       |
 *       v
 * abastecimento termina
 *       |
 *       v
 * callback()
 *       |
 *       v
 * liberarNave()
 *//**
 * ============================================================
 * EXERCÍCIO 01 - CALLBACK
 * MISSÃO: ABASTECENDO A NAVE ESPACIAL
 * ============================================================
 *
 * CONCEITO:
 * Callback é uma função que é passada como argumento para outra
 * função e executada posteriormente.
 *
 * HISTÓRIA:
 * Você faz parte da equipe de lançamento da nave "Node Explorer".
 *
 * Antes do lançamento, a nave precisa ser abastecida.
 * O abastecimento demora 2 segundos.
 *
 * Somente depois que o abastecimento terminar, a nave poderá ser
 * liberada para o lançamento.
 *
 * OBJETIVO:
 * Entender como uma função pode receber outra função e executá-la
 * depois que uma operação terminar.
 *
 * Este primeiro exercício já está RESOLVIDO e servirá como exemplo
 * para os próximos desafios.
 */

// ------------------------------------------------------------
// 1. Criamos uma função que recebe:
//    - nomeNave: informação que será utilizada pela função;
//    - callback: função que deverá ser executada posteriormente.
// ------------------------------------------------------------
function abastecerNave(nomeNave, callback) {
  console.log(`Iniciando abastecimento da ${nomeNave}...`);

  // setTimeout simula uma operação que demora para terminar.
  // Em aplicações reais poderia ser, por exemplo:
  // - leitura de arquivo;
  // - consulta ao banco;
  // - chamada de uma API;
  // - processamento demorado.
  setTimeout(() => {
    console.log('Abastecimento concluído!');

    // O callback somente é executado depois que o abastecimento termina.
    callback();
  }, 2000);
}

// ------------------------------------------------------------
// 2. Esta é a função que será passada como callback.
// ------------------------------------------------------------
function liberarNave() {
  console.log('Node Explorer pronta para lançamento!');
}

// ------------------------------------------------------------
// 3. Executamos abastecerNave e passamos liberarNave como callback.
//
// IMPORTANTE:
// Não usamos liberarNave() aqui.
// Se usássemos os parênteses, estaríamos executando a função
// imediatamente.
//
// Passamos apenas liberarNave para que abastecerNave possa
// decidir quando executá-la.
// ------------------------------------------------------------
abastecerNave('Node Explorer', liberarNave);

/*
 * RESULTADO ESPERADO:
 *
 * Iniciando abastecimento da Node Explorer...
 * Abastecimento concluído!
 * Node Explorer pronta para lançamento!
 *
 *
 * FLUXO:
 *
 * abastecerNave()
 *       |
 *       v
 * aguarda 2 segundos
 *       |
 *       v
 * abastecimento termina
 *       |
 *       v
 * callback()
 *       |
 *       v
 * liberarNave()
 */