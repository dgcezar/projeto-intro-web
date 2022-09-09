const jogos = [
  {
    nomeDoJogo: "Fallout 4".toUpperCase(),
    genero: "RPG",
    descricao:
        "O jogador é o único sobrevivente do Vault 111 que emerge 210 anos após o dia da Grande Guerra. Antes disso,  ocorre um período de jogo durante a era pré-Guerra mostrando o jogador vivendo com sua esposa e filho.",
    lancamento: "10 de novembro de 2015",
    plataforma: ["PlayStation 4", "Xbox One", "macOS", "Microsoft Windows"],
    precoAtual: 119.99,
    jogoDoAno: true,
  },
  {
    nomeDoJogo: "Divinity: Original Sin 2".toUpperCase(),
    genero: "RPG",
    descricao: 
        "Reúna seu grupo e prepare-se para uma aventura fantástica! Sua imaginação é o único limite na sua busca por restaurar do Divino e salvar o mundo. Combine os elementos para aniquilar seus inimigos. Use técnicas para subverter tudo no seu caminho. Seja você um elfo, humano, anão, lagarto ou morto-vivo, as pessoas vão saber das suas viagens e vão reagir aos seus feitos.",
    lancamento: "14 de setembro de 2017",
    plataforma: ["Nintendo Switch", "PlayStation 4", "Xbox One", "macOS", "Microsoft Windows"],
    precoAtual: 90.99,
    jogoDoAno: false,
  },
  {
    nomeDoJogo: "Shadow of The Tomb Raider".toUpperCase(),
    genero: "Ação",
    descricao: 
        "Em Shadow of the Tomb Raider Definitive Edition, acompanhe o capítulo final da origem de Lara e testemunhe sua     transformação na desbravadora que ela está destinada a ser. Combinando o jogo-base e todas as sete tumbas de    desafio de DLC, além de armas, roupas e habilidades extras, Shadow of the Tomb Raider Definitive Edition é a melhor    maneira de viver o momento decisivo da vida de Lara.",
    lancamento: "12 de setembro de 2018",
    plataforma: ["PlayStation 4","Xbox One", "macOS", "Microsoft Windows", "Linux", "Google Stadia", "Mac OS Classic"],
    precoAtual: 145.9,
    jogoDoAno:  true,
  }
];

jogos.jogoDoAno ? jogos.push("sim") : alert("Não pode ser adicionado");

const mediaPreco = (jogos[0].precoAtual + jogos[1].precoAtual + jogos[2].precoAtual) / 3;
console.log(mediaPreco);

const saoJogosDoAno = jogos[0].jogoDoAno && jogos[1].jogoDoAno && jogos[2].jogoDoAno;
console.log(saoJogosDoAno);

console.log(jogos)