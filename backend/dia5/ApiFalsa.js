const fs = require("fs").promises

function buscarFilmesDaApiFalsa() {
  return new Promise((resolve) => {
    console.log("Buscando filmes na API falsa...");
    setTimeout(() => {
      const filmes = [
        { id: 1, titulo: "Matrix", nota: 9.0 },
        { id: 2, titulo: "Interestelar", nota: 9.5 },
        { id: 3, titulo: "Cidade de Deus", nota: 9.3 },
      ];
      resolve(filmes);
    }, 1500);
  });
}


async function salvarFilmesEmArquivo(filmes) {
    try{
        const json = JSON.stringify(filmes, null , 2)
        await fs.writeFile("filmes.json", json)
        console.log("Arquivos filmes.json gravado com sucesso!");
    } catch(erro){
        console.error("Erro ao gravar filmes.json:", erro.message)
    }
}
    
async function lerFilmesDoArquivo() {
  try {
    const conteudo = await fs.readFile("filmes.json", "utf-8");
    const filmes = JSON.parse(conteudo);

    console.log("\n=== Filmes cadastrados ===");
    filmes.forEach((filme) => {
      console.log(`${filme.id} - ${filme.titulo} - Nota: ${filme.nota}`);
    });
  } catch (erro) {
    console.error("Erro ao ler filmes.json:", erro.message);
  }
}
 async function main() {
  const filmes = await buscarFilmesDaApiFalsa();
  await salvarFilmesEmArquivo(filmes);
  await lerFilmesDoArquivo();
}

main();

