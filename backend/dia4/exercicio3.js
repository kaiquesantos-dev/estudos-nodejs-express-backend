/**
 * ============================================================
 * EXERCÍCIO 03 - PROMISE
 * MISSÃO: O BAÚ MÁGICO
 * ============================================================
 *
 * HISTÓRIA:
 * Durante uma aventura, você encontrou o lendário "Baú de Node".
 *
 * Ao tentar abrir o baú, existem duas possibilidades:
 *
 * 80% de chance -> você encontra 100 moedas de ouro.
 * 20% de chance -> uma armadilha é ativada.
 *
 * O baú demora 2 segundos para abrir.
 *
 * DESAFIO:
 * Criar uma função abrirBau() que retorne uma Promise.
 *
 * Se o aventureiro tiver sucesso:
 *
 * resolve('Você encontrou 100 moedas de ouro!')
 *
 * Se a armadilha for ativada:
 *
 * reject('Uma armadilha foi ativada!')
 *
 * Depois, trate os dois resultados utilizando:
 *
 * .then()
 * .catch()
 */


function abrirBau() {
  console.log('Abrindo o baú...');

  // Uma Promise recebe uma função com dois parâmetros:
  //
  // resolve -> indica que a operação terminou com SUCESSO.
  // reject  -> indica que a operação terminou com ERRO.
  //
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const chance = Math.random();

      if (chance < 0.8) {
        resolve('Você encontrou 100 moedas de ouro!');
      } else {
        reject('Uma armadilha foi ativada!');
      }
    }, 2000);

  });
}


// ============================================================
// SUA MISSÃO
// ============================================================
//
// Execute abrirBau().
//
// Utilize .then() para mostrar o resultado em caso de sucesso.
//
// Utilize .catch() para mostrar o erro caso a Promise seja
// rejeitada.
//
// Estrutura:
//
// abrirBau()
//   .then((resultado) => {
//      ...
//   })
//   .catch((erro) => {
//      ...
//   });


abrirBau()
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro);
  });


/*
 * POSSÍVEL RESULTADO 1:
 *
 * Abrindo o baú...
 * Você encontrou 100 moedas de ouro!
 *
 *
 * POSSÍVEL RESULTADO 2:
 *
 * Abrindo o baú...
 * Uma armadilha foi ativada!
 *
 *
 * CONCEITO IMPORTANTE:
 *
 * Promise
 *   |
 *   +---- resolve() ----> .then()
 *   |
 *   +---- reject()  ----> .catch()
 */