// Módulo nativo do Node para trabalhar com caminhos de arquivos/pastas de forma segura (funciona em Windows e Linux)
const path = require('path');
// Módulo nativo do Node para ler dados digitados pelo usuário no terminal (input)
const readline = require('readline');
// Módulo nativo do Node, versão SÍNCRONA - usamos só para o "existsSync", que não tem custo alto e não precisa ser assíncrono
const fs = require('fs');
// Versão PROMISE do módulo fs - cada método (readFile, appendFile, etc.) retorna uma Promise, então podemos usar await
const fsPromises = require('fs').promises;
// Biblioteca externa para formatar datas e horas de um jeito fácil
const dayjs = require('dayjs');
// Biblioteca externa para colorir o texto exibido no terminal
const chalk = require('chalk');

// Monta o caminho completo do arquivo "notas.txt", sempre na mesma pasta deste script (__dirname)
const ARQUIVO = path.join(__dirname, 'notas.txt');

// Função responsável por exibir todas as notas salvas no terminal
// Agora é "async" porque usa "await" lá dentro para ler o arquivo sem travar o programa
async function listarNotas() {
  // Verifica se o arquivo de notas ainda não foi criado
  // (existsSync continua síncrono de propósito, é uma checagem rápida antes de ler o arquivo)
  if (!fs.existsSync(ARQUIVO)) {
    // Se não existe, avisa o usuário e encerra a função (return)
    console.log(chalk.yellow('Nenhuma nota encontrada.'));
    return;
  }

  // "await" pausa a função até a leitura do arquivo terminar, sem travar o resto do Node (assíncrono)
  // fsPromises.readFile devolve uma Promise, e o await "espera" o resultado dela
  const conteudo = (await fsPromises.readFile(ARQUIVO, 'utf8')).trim();

  // Verifica se o arquivo existe mas está vazio (sem nenhuma nota dentro)
  if (!conteudo) {
    console.log(chalk.yellow('Nenhuma nota encontrada.'));
    return;
  }

  // Exibe um título em azul e negrito antes de mostrar as notas
  console.log(chalk.blue.bold('=== Notas salvas ==='));
  // Exibe o conteúdo (todas as notas) no terminal
  console.log(conteudo);
}

// Função responsável por perguntar uma nova nota ao usuário e salvá-la no arquivo
// Também virou "async" porque agora usa "await" para salvar o arquivo de forma assíncrona
async function adicionarNota() {
  // Cria uma interface de leitura, ligando a entrada (teclado) e a saída (tela) do terminal
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // rl.question usa callback (não dá pra usar await direto nela), então embrulhamos numa Promise
  // Isso permite "esperar" a resposta do usuário com await, em vez de aninhar callbacks
  const nota = await new Promise((resolve) => {
    rl.question(chalk.cyan('Digite sua nota: '), (resposta) => {
      resolve(resposta);
    });
  });

  // Pega a data e hora atual e formata como DD/MM/AAAA HH:mm:ss
  const dataHora = dayjs().format('DD/MM/YYYY HH:mm:ss');
  // Monta a linha final que será salva: [data/hora] texto da nota + quebra de linha
  const linha = `[${dataHora}] ${nota}\n`;

  // "await" espera o arquivo terminar de ser gravado antes de seguir para a próxima linha
  // Adiciona (append) a linha no final do arquivo, sem apagar o que já existia
  await fsPromises.appendFile(ARQUIVO, linha);

  // Avisa o usuário que a nota foi salva com sucesso
  console.log(chalk.green('Nota salva com sucesso!'));
  // Fecha a interface de leitura, encerrando o programa
  rl.close();
}

// Pega o terceiro argumento passado na linha de comando
// Ex: "node bloco_notas.js listar" -> process.argv = [node, bloco_notas.js, "listar"]
const comando = process.argv[2];

// Função "main" que decide o que rodar - também é async porque precisa usar "await" para chamar
// as funções assíncronas acima (listarNotas/adicionarNota) e esperar elas terminarem
async function main() {
  // Se o comando digitado foi "listar", chama a função que mostra as notas
  if (comando === 'listar') {
    await listarNotas();
  } else {
    // Caso contrário (nenhum comando ou outro texto), assume que o usuário quer adicionar uma nota
    await adicionarNota();
  }
}

// Chama a função principal para iniciar o programa
main();
