/* Exercício 1: Extrair nome e cidade de um objeto */
const user = { id: 1, name: 'Ana', age: 25, city: 'São Paulo' };

// Desestruturação: extrai as propriedades "name" e "city" do objeto
// direto em variáveis de mesmo nome, sem precisar fazer user.name / user.city
const { name, city } = user;
console.log(name, city);
