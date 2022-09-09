const nomeDoJogo1 = "Fallout 4".toUpperCase();
const genero1 = "RPG";
const descricao1 =
  "O jogador é o único sobrevivente do Vault 111 que emerge 210 anos após o dia da Grande Guerra. Antes disso, ocorre um período de jogo durante a era pré-Guerra mostrando o jogador vivendo com sua esposa e filho.";
const lancamento1 = "10 de novembro de 2015";
const plataforma1 = ["PlayStation 4", "Xbox One", "macOS", "Microsoft Windows"];
const precoAtual1 = 119.99;
const jogoDoAno1 = true;

const nomeDoJogo2 = "Divinity: Original Sin 2".toUpperCase();
const genero2 = "RPG";
const descricao2 =
  "Reúna seu grupo e prepare-se para uma aventura fantástica! Sua imaginação é o único limite na sua busca por restaurar do Divino e salvar o mundo. Combine os elementos para aniquilar seus inimigos. Use técnicas para subverter tudo no seu caminho. Seja você um elfo, humano, anão, lagarto ou morto-vivo, as pessoas vão saber das suas viagens e vão reagir aos seus feitos.";
const lancamento2 = "14 de setembro de 2017";
const plataforma2 = [
  "Nintendo Switch",
  "PlayStation 4",
  "Xbox One",
  "macOS",
  "Microsoft Windows",
];
const precoAtual2 = 90.99;
const jogoDoAno2 = false;

const nomeDoJogo3 = "Shadow of The Tomb Raider".toUpperCase();
const genero3 = "RPG";
const descricao3 =
  "Em Shadow of the Tomb Raider Definitive Edition, acompanhe o capítulo final da origem de Lara e testemunhe sua transformação na desbravadora que ela está destinada a ser. Combinando o jogo-base e todas as sete tumbas de desafio de DLC, além de armas, roupas e habilidades extras, Shadow of the Tomb Raider Definitive Edition é a melhor maneira de viver o momento decisivo da vida de Lara.";
const lancamento3 = "12 de setembro de 2018";
const plataforma3 = [
  "PlayStation 4",
  "Xbox One",
  "macOS",
  "Microsoft Windows",
  "Linux",
  "Google Stadia",
  "Mac OS Classic",
];
const precoAtual3 = 145.9;
const jogoDoAno3 = true;

const mediaPreco = (precoAtual1 + precoAtual2 + precoAtual3) / 3;

console.log(mediaPreco);

const saoJogosDoAno = jogoDoAno1 && jogoDoAno2 && jogoDoAno3;

console.log(saoJogosDoAno);

console.log(nomeDoJogo1, genero1, descricao1, lancamento1, plataforma1, precoAtual1, jogoDoAno1);
console.log(nomeDoJogo2, genero2, descricao2, lancamento2, plataforma2, precoAtual2, jogoDoAno2);
console.log(nomeDoJogo3, genero3, descricao3, lancamento3, plataforma3, precoAtual3, jogoDoAno3);
