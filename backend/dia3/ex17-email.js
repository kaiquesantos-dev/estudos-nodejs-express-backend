/* Exercício 17: Manipulação de strings com um e-mail */
let email = '  PABLO@EMAIL.COM ';

// limpar espaços
// trim() remove espaços em branco só do início e do fim da string (não mexe nos do meio)
email = email.trim();
console.log(email);

// ficar tudo minúsculo
// toLowerCase() converte todas as letras para minúsculas
email = email.toLowerCase();
console.log(email);

// validar se contém @
// includes() retorna true/false se o caractere/trecho existe na string
const containsAtSymbol = email.includes('@');
console.log(containsAtSymbol);

// separar username e domínio
// split("@") quebra a string em um array usando "@" como separador
// ex: "pablo@email.com" vira ["pablo", "email.com"]
// desestruturamos o array direto em duas variáveis
const [username, domain] = email.split('@');
console.log('Username:', username);
console.log('Domain:', domain);

// substituir "email" por "mail"
// replace() troca a primeira ocorrência do trecho encontrado por outro texto
const updatedEmail = email.replace('email', 'mail');
console.log(updatedEmail);

// verificar se termina com ".com"
// endsWith() checa se a string termina exatamente com o trecho informado
const endsWithCom = email.endsWith('.com');
console.log(endsWithCom);

// obter os primeiros 5 caracteres
// slice(0, 5) pega os caracteres do índice 0 até o 5 (sem incluir o 5)
const firstFiveChars = email.slice(0, 5);
console.log(firstFiveChars);

// obter os últimos 3 caracteres
// slice(-3) com índice negativo conta a partir do final da string
const lastThreeChars = email.slice(-3);
console.log(lastThreeChars);

// encontrar a posição do símbolo "@"
// indexOf() retorna o índice (posição) da primeira ocorrência, ou -1 se não achar
const atSymbolIndex = email.indexOf('@');
console.log(atSymbolIndex);

// contar o número de caracteres
// length é uma propriedade (não função) que retorna o tamanho da string
const charCount = email.length;
console.log(charCount);
