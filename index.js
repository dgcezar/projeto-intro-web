let jogo1 = {
  titulo: "Fallout 4".toUpperCase(),
  genero: "RPG",
  descricao:
    "O jogador é o único sobrevivente do Vault 111 que emerge 210 anos após o dia da Grande Guerra. Antes disso,  ocorre um período de jogo durante a era pré-Guerra mostrando o jogador vivendo com sua esposa e filho.",
  lancamento: "10 de novembro de 2015",
  plataforma: ["PlayStation 4", "Xbox One", "macOS", "Microsoft Windows"],
  precoAtual: 119.99,
  jogoDoAno: true,
};

let jogo2 = {
  titulo: "Divinity: Original Sin 2".toUpperCase(),
  genero: "RPG",
  descricao:
    "Reúna seu grupo e prepare-se para uma aventura fantástica! Sua imaginação é o único limite na sua busca por restaurar do Divino e salvar o mundo. Combine os elementos para aniquilar seus inimigos. Use técnicas para subverter tudo no seu caminho. Seja você um elfo, humano, anão, lagarto ou morto-vivo, as pessoas vão saber das suas viagens e vão reagir aos seus feitos.",
  lancamento: "14 de setembro de 2017",
  plataforma: [
    "Nintendo Switch",
    "PlayStation 4",
    "Xbox One",
    "macOS",
    "Microsoft Windows",
  ],
  precoAtual: 90.99,
  jogoDoAno: false,
};

let jogo3 = {
  titulo: "Shadow of The Tomb Raider".toUpperCase(),
  genero: "Ação",
  descricao:
    "Em Shadow of the Tomb Raider Definitive Edition, acompanhe o capítulo final da origem de Lara e testemunhe sua     transformação na desbravadora que ela está destinada a ser. Combinando o jogo-base e todas as sete tumbas de    desafio de DLC, além de armas, roupas e habilidades extras, Shadow of the Tomb Raider Definitive Edition é a melhor    maneira de viver o momento decisivo da vida de Lara.",
  lancamento: "12 de setembro de 2018",
  plataforma: [
    "PlayStation 4",
    "Xbox One",
    "macOS",
    "Microsoft Windows",
    "Linux",
    "Google Stadia",
    "Mac OS Classic",
  ],
  precoAtual: 145.9,
  jogoDoAno: true,
};

// Criar array vázio:
const listaJogos = [];

// Adicionar os objetos ao array vázio:
listaJogos.push(jogo1,jogo2,jogo3);
// console.log(listaJogos);

// Relatório impresso com as informações de cada item:
const relatorioJogo = (listaJogos) => {  
  for(i in listaJogos){
    console.log(listaJogos[i].titulo, listaJogos[i].genero, listaJogos[i].descricao, listaJogos[i].lancamento, listaJogos[i].plataforma, listaJogos[i].precoAtual, listaJogos[i].jogoDoAno)
  }
};
console.log(relatorioJogo(listaJogos));

// Média numérica calculada e impressa no console:
const mediaPreco = (jogo1.precoAtual + jogo2.precoAtual + jogo3.precoAtual) / 3;
const resultadoMediaPreco = `A média dos preços dos jogos é: ${mediaPreco}`;
console.log(resultadoMediaPreco);

// // Verificação de booleanos
function verificarBooleanos() {
for(i in listaJogos){
if (listaJogos[i].jogoDoAno === true) {
  console.log(`O jogo ${listaJogos[i].titulo} é jogo do ano. ${listaJogos[i].jogoDoAno}`);
} else {
  console.log(`O jogo ${listaJogos[i].titulo} não é jogo do ano. ${listaJogos[i].jogoDoAno}`);
}
}
}
console.log(verificarBooleanos());

// Pesquisa dos jogos:
const pesquisaJogo = (jogo) => {
  jogo = document.getElementById("barra-pesquisa").value;
  for(i in listaJogos){
    if (jogo === listaJogos[i].titulo) {
      console.log(listaJogos[i].titulo);
      break;
    } else if (jogo === "") {
      alert("Digite algo na barra de pesquisa!");
      break;
    } else {
      alert("nenhum item foi encontrado")
      break;
    }
  }
}

// function pesquisaJogo() {
//   let input = document.getElementById('barra-pesquisa').value
//   input = input.toLowerCase();
//   let x = document.getElementsByClassName('link-titulo');
    
//   for (i = 0; i < x.length; i++) { 
//       if (!x[i].innerHTML.toLowerCase().includes(input)) {
//           x[i].style.display="none";
//       }
//       else {
//           x[i].style.display="list-item";                 
//       }
//   }
// }