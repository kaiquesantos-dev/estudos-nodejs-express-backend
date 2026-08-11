/**
 * ============================================================
 * EXERCÍCIO 04 - PROMISES ENCADEADAS
 * MISSÃO: CONSTRUINDO UM ROBÔ
 * ============================================================
 *
 * HISTÓRIA:
 * A fábrica "Node Robotics" recebeu um pedido urgente.
 *
 * Um novo robô precisa ser construído e cada etapa depende da
 * conclusão da etapa anterior.
 *
 * PROCESSO:
 *
 * 1. Montar estrutura
 * 2. Instalar motor
 * 3. Instalar inteligência artificial
 * 4. Realizar testes
 *
 * Cada etapa demora 1 segundo.
 *
 * DESAFIO:
 * Cada função deverá retornar uma Promise.
 *
 * Depois, as Promises deverão ser encadeadas utilizando .then().
 *
 * IMPORTANTE:
 * O objetivo é perceber que retornar uma Promise dentro de um
 * .then() faz o próximo .then() aguardar sua conclusão.
 */


// ------------------------------------------------------------
// ETAPA 1
// ------------------------------------------------------------
function montarEstrutura() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Estrutura montada');
      resolve();
    }, 1000);
  });
}


// ------------------------------------------------------------
// ETAPA 2
// ------------------------------------------------------------
function instalarMotor() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Motor instalado');
      resolve();
    }, 1000);
  });
}


// ------------------------------------------------------------
// ETAPA 3
// Esta etapa pode falhar.
// ------------------------------------------------------------
function instalarIA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = Math.random() > 0.2;

      if (sucesso) {
        console.log('Inteligência artificial instalada');
        resolve();
      } else {
        reject('Erro ao instalar inteligência artificial');
      }
    }, 1000);
  });
}


// ------------------------------------------------------------
// ETAPA 4
// ------------------------------------------------------------
function testarRobo() {
  return new Promise((resolve) => {

    // TODO:
    // Aguarde 1 segundo.
    // Exiba "Testes concluídos".
    // Execute resolve().

  });
}


// ============================================================
// SUA MISSÃO
// ============================================================

console.log('Iniciando construção...');

/*
 * Encadeie as operações:
 *
 * montarEstrutura()
 *   .then(() => {
 *      return instalarMotor();
 *   })
 *   .then(() => {
 *      ...
 *   })
 *
 * Depois dos testes, exiba:
 *
 * "Robô pronto para trabalhar!"
 *
 * Também adicione um .catch() para capturar uma possível falha
 * na instalação da IA.
 */

// TODO: montar o encadeamento aqui


/*
 * RESULTADO ESPERADO EM CASO DE SUCESSO:
 *
 * Iniciando construção...
 * Estrutura montada
 * Motor instalado
 * Inteligência artificial instalada
 * Testes concluídos
 * Robô pronto para trabalhar!
 *
 *
 * POSSÍVEL RESULTADO EM CASO DE ERRO:
 *
 * Iniciando construção...
 * Estrutura montada
 * Motor instalado
 * Falha na construção: Erro ao instalar inteligência artificial
 *
 *
 * OBSERVE:
 *
 * O fluxo:
 *
 * Promise 1
 *    ↓
 * .then()
 *    ↓
 * Promise 2
 *    ↓
 * .then()
 *    ↓
 * Promise 3
 *
 * evita o aninhamento profundo que vimos no Callback Hell.
 */