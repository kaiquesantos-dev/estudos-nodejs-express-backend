/* Exercício 16: Manipular propriedades de um objeto */
const data = { name: 'Pablo', age: 34, country: 'BR' };

// adicionar isAdmin: false
// acessar uma propriedade que não existe e atribuir um valor a cria no objeto
data.isAdmin = false;
console.log(data);

// trocar country por "Brasil"
// atribuir a uma propriedade existente simplesmente sobrescreve o valor antigo
data.country = 'Brasil';
console.log(data);

// remover age
// delete remove a propriedade inteira do objeto (chave e valor)
delete data.age;
console.log(data);

// transformar em array de pares [ [key, value], ... ]
// Object.entries() retorna um array onde cada item é um par [chave, valor]
const dataArray = Object.entries(data);
console.log(dataArray);

// transformar de volta em objeto
// Object.fromEntries() faz o caminho inverso: transforma o array de pares em objeto
const dataObject = Object.fromEntries(dataArray);
console.log(dataObject);
