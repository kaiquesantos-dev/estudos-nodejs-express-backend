// importar readline
/*const readline = require("readline")
// Atribuir uma função do readline a uma constante 
const rl = readline.createInterface({input:process.stdin, output: process.stdout})

rl.question("Qual é o seu nome? ", nome => {
    console.log(`Ola, ${nome}!`)
    rl.close()
})*/


const readline = require ("readline")

const rl = readline.createInterface({input:process.stdin, output: process.stdout})

rl.question("Qual é o seu nome? ", nome => {
    rl.question("Qual é a sua idade? ", idade => {
        console.log(`${nome} tem ${idade} anos`)
        rl.close()
    })
})


