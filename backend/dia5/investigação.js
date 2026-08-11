/**
 * ============================================================
 * EXERCÍCIO 05 - PROMISE COM ASYNC/AWAIT
 * MISSÃO: INVESTIGAÇÃO SECRETA
 * ============================================================
 *
 * HISTÓRIA:
 * Você agora trabalha para a agência:
 *
 * NIA - Node Intelligence Agency
 *
 * Um arquivo secreto foi roubado e escondido em um servidor.
 *
 * Para recuperá-lo, o agente precisa realizar quatro operações:
 *
 * 1. Localizar o suspeito
 * 2. Descobrir a senha
 * 3. Acessar o servidor
 * 4. Baixar o arquivo secreto
 *
 * Todas as operações retornam Promises.
 *
 * DESAFIO:
 * Executar as operações em sequência utilizando:
 *
 * async
 * await
 * try
 * catch
 *
 * O objetivo é perceber que async/await trabalha com Promises,
 * mas permite escrever o fluxo assíncrono de forma mais linear.
 */


// ------------------------------------------------------------
// ETAPA 1
// ------------------------------------------------------------
function localizarSuspeito() {
  return new Promise((resolve) => {

    setTimeout(() => {
      console.log('Suspeito localizado');
      resolve();
    }, 1000);

  });
}


// ------------------------------------------------------------
// ETAPA 2
// ------------------------------------------------------------
function descobrirSenha() {
  return new Promise((resolve) => {

    setTimeout(() => {
      console.log('Senha descoberta');
      resolve();
    }, 1000);

  });
}


// ------------------------------------------------------------
// ETAPA 3
// Esta operação possui 30% de chance de falhar.
// ------------------------------------------------------------
function acessarServidor() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      const sucesso = Math.random() > 0.3;

      if (sucesso) {
        console.log('Servidor acessado');
        resolve();
      } else {
        reject('Servidor bloqueou o acesso');
      }

    }, 1000);

  });
}


// ------------------------------------------------------------
// ETAPA 4
// ------------------------------------------------------------
function baixarArquivo() {
  return new Promise((resolve) => {

    setTimeout(() => {
      console.log('Arquivo secreto baixado');
      resolve();
    }, 1000);

  });
}


// ============================================================
// SUA MISSÃO
// ============================================================

/*
 * Crie:
 *
 * async function executarMissao() {
 *
 *   try {
 *
 *     console.log('Iniciando missão...');
 *
 *     await ...
 *     await ...
 *     await ...
 *     await ...
 *
 *     console.log('Missão concluída!');
 *
 *   } catch (erro) {
 *
 *     console.log(`Missão abortada: ${erro}`);
 *
 *   }
 * }
 *
 *
 * IMPORTANTE:
 *
 * O await faz a função async aguardar a Promise terminar antes
 * de continuar para a próxima linha.
 */

async function executarMissao() {

  try {

    console.log('Iniciando missão...');

    await localizarSuspeito();
    await descobrirSenha();
    await acessarServidor();
    await baixarArquivo();

    console.log('Missão concluída!');

  } catch (erro) {

    console.log(`Missão abortada: ${erro}`);

  }
}

executarMissao();


/*
 * RESULTADO ESPERADO:
 *
 * Iniciando missão...
 * Suspeito localizado
 * Senha descoberta
 * Servidor acessado
 * Arquivo secreto baixado
 * Missão concluída!
 *
 *
 * POSSÍVEL ERRO:
 *
 * Iniciando missão...
 * Suspeito localizado
 * Senha descoberta
 * Missão abortada: Servidor bloqueou o acesso
 *
 *
 * PARA REFLETIR:
 *
 * Compare:
 *
 * CALLBACK:
 *
 * etapa1(() => {
 *   etapa2(() => {
 *     etapa3(() => {
 *     });
 *   });
 * });
 *
 *
 * PROMISE:
 *
 * etapa1()
 *   .then(() => etapa2())
 *   .then(() => etapa3());
 *
 *
 * ASYNC/AWAIT:
 *
 * await etapa1();
 * await etapa2();
 * await etapa3();
 *
 * As três formas trabalham com operações assíncronas, mas possuem
 * estilos diferentes de organização do fluxo.
 */