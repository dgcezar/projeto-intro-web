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
// Criar array vázio
const listaJogos = [];

// Adicionar os objetos ao array vázio
listaJogos.push(jogo1,jogo2,jogo3);
// console.log(listaJogos);

// Tornar os array dos objetos em string
// console.log(jogo1.plataforma.join(), jogo2.plataforma.join(), jogo3.plataforma.join())

// Criar um laço para exibir os objetos
// for(jogo of listaJogos){
//   for (i in jogo){
//       console.log(`${i}: ${jogo[i]}`)
//   }
// console.log("----------------------");
// }

// Criar uma função que receba como parâmetro um objeto e devolva a string do relatório com dados do objeto
// const relatorioJogo = (listaJogos) => {  
//   for(i in listaJogos){
//     console.log(listaJogos[i].titulo, listaJogos[i].genero, listaJogos[i].descricao, listaJogos[i].lancamento, listaJogos[i].plataforma, listaJogos[i].precoAtual, listaJogos[i].jogoDoAno)
//   }
// };
// console.log(relatorioJogo(listaJogos));

// Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
// const pesquisaJogo = (jogo) => {
//   for(i in listaJogos){
//     if (jogo === listaJogos[i].titulo) {
//       console.log(listaJogos[i].titulo)
//     } else {
//       alert("nenhum item foi encontrado")
//     }
//   }
// }
// const pesquisaJogo = (jogo) => {
//   for(i in listaJogos){
//     switch(jogo) {
//       case listaJogos[i].titulo:
//         console.log(listaJogos[i].titulo);
//         break;
//         default:
//         alert("nenhum item foi encontrado");
//     }
//   }
// }

// console.log(pesquisaJogo("FALLOUT 4"));
// console.log(listaJogos[0].titulo)

// Adicionar condição de verdadeiro ao adicionar objetos na lista
// if (jogo1.jogoDoAno === true) {
//   listaJogos.push(jogo1);
// } else {
//   alert("Esse jogo não é válido");
// }
// if (jogo2.jogoDoAno === true) {
//   listaJogos.push(jogo2);
// } else {
//   alert("Esse jogo não é válido");
// }
// if (jogo3.jogoDoAno === true) {
//   listaJogos.push(jogo3);
// } else {
//   alert("Esse jogo não é válido");
// }
// console.log(listaJogos);



// Cálculo de média
// const mediaPreco = (jogo1.precoAtual + jogo2.precoAtual + jogo3.precoAtual) / 3;
// console.log(mediaPreco);

// // Verificação de booleanos
// const saoJogosDoAno = jogo1.jogoDoAno && jogo2.jogoDoAno && jogo3.jogoDoAno;
// console.log(saoJogosDoAno);

// console.log(jogo1, jogo2, jogo3);

// for (let jogo of jogos) {
//   for (let propriedades in jogos) {
//     console.log(`${propriedades}: ${jogo[propriedades]}`)
//   }
// }

//jogos.jogoDoAno ? jogos.push("sim") : alert("Não pode ser adicionado");