const entrada = require("prompt-sync")();
console.log("Nós vamos jogar Pedra, Papel ou Tesoura");
let continuar = "s";
while (continuar == "s") {
  console.clear();
  entrada("Aperte enter para começar ");
  //Pergunta de quantas rodadas serão jogadas
  console.clear();
  var rodadas = +entrada(
    "Por favor digite o número de rodas que você quer jogar "
  );
  while (rodadas <= 0 || isNaN(rodadas)) {
    console.clear();
    rodadas = +entrada("Por favor digite um número maior que 0 ");
  }
  const pontospc = [];
  const pontosjogador = [];
  //Escolha rodadas
  for (i = 1; i <= rodadas; i++) {
    //Escolha jogador
    console.log();
    var escJogador = entrada("Diga o que você quer jogar ").toLowerCase();
    while (
      escJogador !== "pedra" &&
      escJogador !== "papel" &&
      escJogador !== "tesoura"
    ) {
      escJogador = entrada(
        "Por favor escolha pedra, papel ou tesoura "
      ).toLowerCase();
    }
    //Escolha pc
    var pc = Math.floor(Math.random() * 3) + 1;
    if (pc == 1) {
      pc = "pedra";
      console.log();
      console.log(`O PC jogou ${pc}`);
    } else if (pc == 2) {
      pc = "papel";
      console.log();
      console.log(`O PC jogou ${pc}`);
    } else if (pc == 3) {
      pc = "tesoura";
      console.log();
      console.log(`O PC jogou ${pc}`);
    }
    //Ver quem ganhou
    //Possibilidades se o jogador escolher pedra
    if (escJogador == "pedra" && pc == "tesoura") {
      console.log();
      console.log("Você ganhou esta rodada ");
      pontosjogador.push(1);
    } else if (escJogador == "pedra" && pc == "papel") {
      console.log();
      console.log("Você perdeu esta rodada ");
      pontospc.push(1);
    }
    if (escJogador == "pedra" && pc == "pedra") {
      console.log();
      console.log("Esta rodada empatou, logo ninguém pontuou ");
    }
    //Possibilidades se o jogador escolher papel
    else if (escJogador == "papel" && pc == "pedra") {
      console.log();
      console.log("Você ganhou esta rodada ");
      pontosjogador.push(1);
    } else if (escJogador == "papel" && pc == "tesoura") {
      console.log();
      console.log("Você perdeu esta rodada ");
      pontospc.push(1);
    }
    if (escJogador == "papel" && pc == "papel") {
      console.log();
      console.log("Esta rodada empatou, logo ninguém pontuou ");
    }
    //Possibilidades se o jogador escolher tesoura
    else if (escJogador == "tesoura" && pc == "papel") {
      console.log();
      console.log("Você ganhou esta rodada ");
      pontosjogador.push(1);
    } else if (escJogador == "tesoura" && pc == "pedra") {
      console.log();
      console.log("Você perdeu esta rodada");
      pontospc.push(1);
    }
    if (escJogador == "tesoura" && pc == "tesoura") {
      console.log();
      console.log("Esta rodada empatou, logo ninguém pontuou ");
    }
  }
  //Soma dos pontos das rodadas que foram depositadas em suas respectivas arrays
  let somapontosJ = 0;
  let somapontosPC = 0;

  for (let i of pontosjogador) {
    somapontosJ = somapontosJ + pontosjogador;
  }
  for (let i of pontospc) {
    somapontosPC = somapontosPC + pontosjogador;
  }

  //Comparação da soma dos pontos para verificar o vencedor
  var vencedor;
  if (somapontosJ > somapontosPC) {
    vencedor = "você";
  } else if (somapontosJ < somapontosPC) {
    vencedor = "o PC";
  } else if (somapontosJ == somapontosPC) {
    vencedor = "ninguém... Deu empate";
  }
  console.log();
  console.log();
  console.log(
    `Você fez ${somapontosJ} pontos e o PC fez ${somapontosPC} pontos.`
  );
  console.log(`Portando o grande campeão foi ${vencedor}.`);
  //Verificação se quer jogar novamente ou não
  continuar = entrada(
    "Você quer jogar novamente? digite 's' ou 'n' "
  ).toLowerCase();
  while (continuar !== "s" && continuar !== "n") {
    continuar = entrada("Digite 's' ou 'n' ").toLowerCase();
  }
}
