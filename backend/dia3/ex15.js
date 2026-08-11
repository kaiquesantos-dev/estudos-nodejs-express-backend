/* Exercício 15: Estatísticas */
const notas = [7, 8.5, 9, 6, 5, 10];

// {
//   media: ...,
//   maior: ...,
//   menor: ...,
//   aprovados: ...,
//   reprovados: ...
// }

// Calcular a média: soma todas as notas (reduce) e divide pela quantidade delas
const media = notas.reduce((acc, n) => acc + n, 0) / notas.length;

// Encontrar a maior nota: Math.max espalha (...) o array como argumentos separados
const maior = Math.max(...notas);

// Encontrar a menor nota: mesma lógica do Math.max, mas pegando o mínimo
const menor = Math.min(...notas);

// Contar quantos foram aprovados (≥ 7): filtra as notas >= 7 e pega o tamanho do array
const aprovados = notas.filter(n => n >= 7).length;

// Contar quantos foram reprovados (< 7): filtra as notas < 7 e pega o tamanho do array
const reprovados = notas.filter(n => n < 7).length;

const estatisticas = { media, maior, menor, aprovados, reprovados };
console.log(estatisticas);
