/* Exercício 3: Strings maiúsculas */
const frutas = ['banana', 'uva', 'laranja'];

// map() cria um NOVO array aplicando a função a cada item, sem alterar o original
// toUpperCase() converte a string inteira para maiúsculas
const frutasMaiusculas = frutas.map(f => f.toUpperCase());
console.log(frutasMaiusculas);
