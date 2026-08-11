/* Exercício 18: Manipulação de datas */
const date = new Date('2025-03-05');

// retornar ano
// getFullYear() retorna o ano com 4 dígitos
const ano = date.getFullYear();
console.log(ano);

// retornar mês
// getMonth() retorna o mês, mas começando em 0 (janeiro = 0, dezembro = 11)
const mes = date.getMonth();
console.log(mes);

// adicionar 5 dias
// setDate() define o dia do mês; somando 5 ao dia atual, o próprio JS ajusta
// o mês/ano automaticamente se ultrapassar o fim do mês
date.setDate(date.getDate() + 5);
console.log(date);

// converter pra ISO
// toISOString() retorna no formato padrão "AAAA-MM-DDTHH:mm:ss.sssZ" (em UTC)
console.log(date.toISOString());

// converter pra string local
// toLocaleString() formata a data conforme o idioma/região do ambiente
console.log(date.toLocaleString());

// converter pra string simples
// toString() retorna uma representação legível e completa da data
console.log(date.toString());
