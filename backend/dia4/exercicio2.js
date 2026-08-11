/**
 * ============================================================
 * EXERCÍCIO 02 - CALLBACK HELL
 * MISSÃO: A PIZZARIA MAIS DESORGANIZADA DA CIDADE
 * ============================================================
 *
 * HISTÓRIA:
 * Você foi contratado para desenvolver o sistema da pizzaria
 * "Node Pizza".
 *
 * Para uma pizza chegar até o cliente, várias etapas precisam
 * acontecer obrigatoriamente na seguinte ordem:
 *
 * 1. Receber o pedido
 * 2. Preparar a massa
 * 3. Adicionar os ingredientes
 * 4. Assar a pizza
 * 5. Entregar a pizza
 *
 * Cada etapa demora 1 segundo.
 *
 * DESAFIO:
 * Implemente as cinco funções utilizando setTimeout e callbacks.
 *
 * Uma função somente pode iniciar depois que a anterior terminar.
 *
 * O objetivo deste exercício é criar propositalmente um
 * "Callback Hell" para perceber os problemas que aparecem quando
 * temos muitos callbacks dependentes.
 */

// ------------------------------------------------------------
// ETAPA 1
// Após 1 segundo deve imprimir:
// "Pedido recebido"
// e executar callback().
// ------------------------------------------------------------
function receberPedido(callback) {
    setTimeout(() => {
        console.log("pedido recebido")
        callback();
    }, 1000)
}

// ------------------------------------------------------------
// ETAPA 2
// Após 1 segundo deve imprimir:
// "Massa preparada"
// e executar callback().
// ------------------------------------------------------------
function prepararMassa(callback) {
    setTimeout(() => {
        console.log("Massa preparada")
        callback()
    }, 1000)
  // TODO: implementar
}

// ------------------------------------------------------------
// ETAPA 3
// Após 1 segundo deve imprimir:
// "Ingredientes adicionados"
// e executar callback().
// ------------------------------------------------------------
function adicionarIngredientes(callback) {
    setTimeout(() =>{
        console.log("Ingredientes adicionados")
        callback()
    }, 1000)
  // TODO: implementar
}

// ------------------------------------------------------------
// ETAPA 4
// Após 1 segundo deve imprimir:
// "Pizza assada"
// e executar callback().
// ------------------------------------------------------------
function assarPizza(callback) {
    setTimeout(() => {
        console.log ("Pizza assada")
        callback()
    }, 1000)
  // TODO: implementar
}

// ------------------------------------------------------------
// ETAPA 5
// Após 1 segundo deve imprimir:
// "Pizza entregue ao cliente"
// e executar callback().
// ------------------------------------------------------------
function entregarPizza(callback) {
    setTimeout(() => {
        console.log ("Pizza entregue ao cliente")
        callback()

    }, 1000)
  // TODO: implementar
}


// ============================================================
// SUA MISSÃO
// ============================================================
//
// Encadeie as funções utilizando callbacks.
//
// A sequência obrigatória é:
//
// receberPedido
//      ↓
// prepararMassa
//      ↓
// adicionarIngredientes
//      ↓
// assarPizza
//      ↓
// entregarPizza
//
// Comece por aqui:
//
// receberPedido(() => {
//   // próxima etapa...
// });


// TODO: escreva aqui o fluxo completo


/*
 * RESULTADO ESPERADO:
 *
 * Pedido recebido
 * Massa preparada
 * Ingredientes adicionados
 * Pizza assada
 * Pizza entregue ao cliente
 * Pedido finalizado!
 *
 *
 * PARA REFLETIR:
 *
 * Imagine que o processo tivesse 20 etapas.
 *
 * - Como ficaria a leitura do código?
 * - Seria fácil adicionar uma nova etapa?
 * - Como trataríamos erros em cada operação?
 *
 * Esse crescimento de callbacks aninhados é conhecido como:
 *
 * CALLBACK HELL
 */

receberPedido(() =>{
    prepararMassa(() =>{
        adicionarIngredientes(() =>{
            assarPizza(() =>{
                entregarPizza(() =>{
                    console.log("Pedido finalizado")
                }
                )
            })
        })
    })
})