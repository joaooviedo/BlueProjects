const entrada = require("prompt-sync")();

entrada(`
  Este jogo se chama Lifesim
  Aperte enter para começar.`);

const países = ["Brasil", "França", "Inglaterra", "Italia", "China", "Russia"];

const nomes = {
  NomesMas: [
    [
      "Miguel",
      "Arthur",
      "Gabriel",
      "Heitor",
      "Theo",
      "Davi",
      "Gabriel",
      "Bernardo",
      "Samuel",
      "João",
    ],
    [
      "Louis",
      "Jules",
      "Adam",
      "Leo",
      "Hugo",
      "Nathan",
      "Liam",
      "Ethan",
      "Paul",
      "Tom",
    ],
    [
      "Oliver",
      "George",
      "Arthur",
      "Noah",
      "Leo",
      "Oscar",
      "Theodore",
      "Freddie",
      "William",
      "Edward",
    ],
    [
      "Andrea",
      "Federico",
      "Giuseppe",
      "Giovanni",
      "Nicolo",
      "Pietro",
      "Luca",
      "Francesco",
      "Lorenzo",
      "Mattia",
    ],
    [
      "Dalai",
      "Ming",
      "Shaoran",
      "Shui",
      "Yan Yan",
      "Yuan",
      "Yun",
      "Zhao",
      "Dalai",
      "Ming",
    ],
    [
      "Yuri",
      "Aleksandr",
      "Dmítri",
      "Artióm",
      "Nikita",
      "Ivan",
      "Vladmir",
      "Nikolai",
      "Bóris",
      "Mikhail",
    ],
  ],
  NomesFem: [
    [
      "Helen",
      "Alice",
      "Laura",
      "Maria",
      "Valentina",
      "Heloísa",
      "Sophia",
      "Ana",
      "Luíza",
    ],
    [
      "Emma",
      "Louise",
      "Alice",
      "Chloé",
      "Lea",
      "Manon",
      "Rose",
      "Camille",
      "Lola",
      "Ambre",
    ],
    [
      "Charlote",
      "Daisy",
      "Sophie",
      "Phoebe",
      "Harper",
      "Matilda",
      "Evelyn",
      "Siena",
      "Ruby",
      "Bonnie",
    ],
    [
      "Giulia",
      "Emma",
      "Sofia",
      "Chiara",
      "Beatrice",
      "Nicole",
      "Martina",
      "Alice",
      "Sara",
      "Matilde",
    ],
    [
      "Akame",
      "Hui Ying",
      "Jia Li",
      "Kumiko",
      "Li",
      "Maylin",
      "Mei",
      "Mei Ling",
      "Xia",
      "Yuga",
    ],
    [
      "Sônia",
      "Sacha",
      "Tânia",
      "Raíssa",
      "Olga",
      "Natasha",
      "Lara",
      "Kátia",
      "Irina",
      "Tatiana",
    ],
  ],
};

const sobrenomes = [
  [
    "Souza",
    "Silva",
    "Oliveira",
    "Ferreira",
    "Borges",
    "Campos",
    "Dias",
    "Costa",
    "Freitas",
    "Lima",
  ],
  [
    "Durand",
    "Leroy",
    "Moreau",
    "Simon",
    "Laurent ",
    "Michel",
    "Martin",
    "Bernard",
    "Dubois",
    "Petit",
  ],
  [
    "Smith",
    "Jones",
    "Williams",
    "Taylor",
    "Davies",
    "Brown",
    "Wilson",
    "Evans",
    "Thomas",
    "Johnson",
  ],
  [
    "Rossi",
    "Russo",
    "Ferrari",
    "Esposito",
    "Bianchi",
    "Romano",
    "Colombo",
    "Ricci",
    "Marino",
    "Greco",
  ],
  ["Wong", "Wu", "Yang", "Liu", "Huang", "Zhang", "Zhou", "Wang", "Rang", "Xu"],
  [
    "Alekseev",
    "Pavlov",
    "Popov",
    "Fedorov",
    "Putin",
    "Utkin",
    "Zorkin",
    "Volkov",
    "Lebedev",
    "Ivanov",
  ],
];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.trunc(Math.random() * (max - min + 1)) + min;
}
function país() {
  let i = getRandomIntInclusive(0, 5);
  var país = países[i];
  return país;
}

function genero(a) {
  var a = getRandomIntInclusive(0, 1);
  if (a == 0) {
    var nome = nomes.NomesMas;
  } else {
    var nome = nomes.NomesFem;
  }
  return nome;
}

function escNome(país, arrPaíses, nomes, sobrenomes) {
  let paisPos = arrPaíses.indexOf(país);
  let nome = nomes[paisPos];
  let sobrenome = sobrenomes[paisPos];
  let i = getRandomIntInclusive(0, 9);
  let a = getRandomIntInclusive(0, 9);
  let nomeCompleto = `${nome[i]} ${sobrenome[a]}`;
  pessoa.Nome = nomeCompleto;
  pessoa.País = país;
}
function localDinheiro(b) {
  let Moeda;
  if (b == "Brasil") {
    Moeda = ("pt-br", { style: "currency", currency: "BRL" });
  } else if (b == "França" || b == "Italia") {
    Moeda = ("pt-br", { style: "currency", currency: "EUR" });
  } else if (b == "Inglaterra") {
    Moeda = ("pt-br", { style: "currency", currency: "GBP" });
  } else if (b == "China") {
    Moeda = ("pt-br", { style: "currency", currency: "CNY" });
  } else if (b == "Russia") {
    Moeda = ("pt-br", { style: "currency", currency: "RUB" });
  }
  pessoa.Moeda = Moeda;
  return pessoa.Dinheiro.toLocaleString("pt-br", pessoa.Moeda);
}
const pessoa = {
  Nome: "",
  País: "",
  Moeda: "",
  Dinheiro: 0,
  Idade: 0,
  GanharDinheiro: function (ganho) {
    this.Dinheiro += ganho;
    localDinheiro(this.País);
  },
  PerderDinheiro: function (perda) {
    this.Dinheiro -= perda;
    localDinheiro(this.País);
  },
  Envelhecer: function () {
    this.Idade++;
    EventosAleatorios();
    Trabalho.ReceberSálario();
  },
  ChecarPessoa: function () {
    console.log(`
    Você
    ${Object.keys(pessoa)[0]}: ${pessoa.Nome}
    ${Object.keys(pessoa)[1]}: ${pessoa.País}
    ${Object.keys(pessoa)[3]}: ${localDinheiro(this.País)}
    ${Object.keys(pessoa)[4]}: ${pessoa.Idade}
    ${Object.keys(doença)[1]}: ${doença.doença}
    `);
  },
};
function statusInicial() {
  let I = getRandomIntInclusive(1, 4);
  let B = getRandomIntInclusive(0, 3);
  let F = getRandomIntInclusive(11, 13);
  status.Inteligência = I;
  status.Beleza = B;
  status.Felicidade = F;
  status.Saude = 15;
}
const doença = {
  doente: 0,
  doença: "Você não está doente.",
  depressão: 0,
  verificarDoença: function () {
    if (this.doente == 1) {
      console.log(`
      Você está com ${this.doença}.`);
    }
  },
  perderSaudeDoença: function () {
    if (doença.doente == 1)
      console.log(`
    Você não se curou e perdeu
    5 de saúde.`);
    status.StatusDown("sau", 5);
  },
  perderSaudeDepressão: function () {
    if (doença.depressão == 1)
      console.log(`
    Você não se curou e perdeu
    5 de saúde.`);
    status.StatusDown("sau", 5);
  },
};
const status = {
  Inteligência: 0,
  Beleza: 0,
  Felicidade: 0,
  Saude: 0,

  ChecarStatus: function () {
    console.log(`
    Estes são os teus status.
    ${Object.keys(status)[0]}: ${status.Inteligência}/15
    ${Object.keys(status)[1]}: ${status.Beleza}/15
    ${Object.keys(status)[2]}: ${status.Felicidade}/15
    ${Object.keys(status)[3]}: ${status.Saude}/15
  `);
  },
  StatusMinMax: function () {
    if (this.Felicidade > 15) {
      this.Felicidade = 15;
    }
    if (this.Beleza > 15) {
      this.Beleza = 15;
    }
    if (this.Inteligência > 15) {
      this.Felicidade = 15;
    }
    if (this.Saude > 15) {
      this.Saude = 15;
    }
    if (this.Saude < 0) {
      this.Saude = 0;
    }
    if (this.Inteligência < 0) {
      this.Inteligência = 0;
    }
    if (this.Beleza < 0) {
      this.Beleza = 0;
    }
    if (this.Felicidade < 0) {
      this.Felicidade = 0;
    }
  },
  StatusDown: function (Status, Valor) {
    if (Status == "fel") {
      this.Felicidade = this.Felicidade - Valor;
      if (status.Felicidade == 0) {
        console.log(`
        Você desenvolveu depressão`);
        this.depressão = 1;
      }
    }
    if (Status == "bel") {
      this.Beleza = this.Beleza - Valor;
    }
    if (Status == "int") {
      this.Inteligência = this.Inteligência - Valor;
    }
    if (Status == "sau") {
      this.Saude = this.Saude - Valor;
      if (this.Saude == 0) {
        console.log(`
      Você morreu com ${pessoa.Idade} anos de idade.`);
        console.log(`
      Fim de jogo`);
        personagem = "morreu";
      }
    }
    this.StatusMinMax();
  },
  StatusUp: function (Status, Valor) {
    if (Status == "fel") {
      this.Felicidade = this.Felicidade + Valor;
    }
    if (Status == "bel") {
      this.Beleza = this.Beleza + Valor;
    }
    if (Status == "int") {
      this.Inteligência = this.Inteligência + Valor;
    }
    if (Status == "sau") {
      this.Saude = this.Saude + Valor;
    }
    this.StatusMinMax();
  },
};

function Brincar() {
  let i = getRandomIntInclusive(1, 10);
  if (pessoa.Idade <= 4) {
    if (i <= 5) {
      console.log(`
      Você brinca de acertar as formas
      e ganha 1 ponto de felicidade.`);
      status.StatusUp("fel", 1);
    } else if (i <= 9) {
      console.log(`
      Você brinca de jogar a bola
      e ganha 2 pontos  de felicidade. `);
      status.StatusUp("fel", 2);
    } else if (i == 10) {
      console.log(`
      Você brinca de cavalinho mas cai
      e se machuca.
      Você perde 1 ponto de saúde. `);
      status.StatusDown("sau", 1);
    }
  }
}
function Médico() {
  var açao;
  do {
    do {
      açao = +entrada(`
    Escolha o que você quer fazer
    1 - Consultar.
    2 - Plástica.
    3 - Psiquiatra.
    4 - Voltar.
     `);
    } while (açao == isNaN || açao > 4 || açao < 0);
    if (açao == 1) {
      var tratar;
      do {
        if (doença.doente == 0) {
          console.log(`
            Você não está doente. `);
        } else if (doença.doente == 1) {
          console.log(`
      Você está com ${doença.doença}.`);
          tratar = +entrada(`
      Você gostaria de tentar tratar?
      1 - Sim.
      2 - Não. `);
          if (tratar == 1) {
            let i = getRandomIntInclusive(1, 10);
            if (i <= 7) {
              console.log(`
            Você conseguiu se tratar e
            deixou de ter ${doença.doença}.`);
              doença.doente = 0;
              doença.doença = "Você não está doente.";
            } else if (i <= 10) {
              console.log(`
            Você não conseguiu se tratar e
            continua com ${doença.doença}.`);
              console.log(`
            E você perdeu 2 de saúde.`);
              status.StatusDown("sau", 2);
            }
          }
        }
      } while (tratar == isNaN || tratar > 2 || tratar < 0);
    } else if (açao == 2) {
      if (pessoa.Idade < 18) {
        console.log(`
          Você não tem idade para fazer
          plástica`);
      } else {
        do {
          var tipo;
          tipo = +entrada(`
            Qual plástica você gostaria de
            fazer?
            1 - Nariz (1500)
            2 - Boca  (500)
            3 - Bucheca (1000)
            4 - Sair `);
        } while (tipo == isNaN || tipo > 4 || tipo < 0);
        if (tipo == 1) {
          if (pessoa.Dinheiro < 1500) {
            console.log(`
              Você não tem dinheiro o suficiente`);
          } else {
            console.log(`
              Você faz a cirurgia e aumenta
              3 de beleza`);
            status.StatusUp("bel", 3);
            pessoa.PerderDinheiro(1500);
          }
        } else if (tipo == 2) {
          if (pessoa.Dinheiro < 500) {
            console.log(`
              Você não tem dinheiro o suficiente`);
          } else {
            console.log(`
              Você faz a cirurgia e aumenta
              1 de beleza`);
            status.StatusUp("bel", 1);
            pessoa.PerderDinheiro(1500);
          }
        } else if (tipo == 3) {
          if (pessoa.Dinheiro < 1000) {
            console.log(`
                Você não tem dinheiro o suficiente`);
          } else {
            console.log(`
                Você faz a cirurgia e aumenta
                2 de beleza`);
            status.StatusUp("bel", 2);
            pessoa.PerderDinheiro(1500);
          }
        }
      }
    } else if (açao == 3) {
      var tratar;
      do {
        if (doença.depressão == 0) {
          console.log(`
            Você não está com depressão`);
        } else if (doença.depressão == 1) {
          console.log(`
      Você está com depressão`);
          tratar = +entrada(`
      Você gostaria de tentar tratar?
      1 - Sim
      2 - Não `);
          if (tratar == 1) {
            let i = getRandomIntInclusive(1, 10);
            if (i <= 7) {
              console.log(`
            Você conseguiu se tratar e
            deixou de ter depressão`);
              doença.depressão = 0;
            } else if (i <= 10) {
              console.log(`
            Você não conseguiu se tratar e
            continua com depressão`);
              console.log(`
            E você perdeu 2 de saúde`);
              status.StatusDown("sau", 2);
            }
          }
        }
      } while (tratar == isNaN || tratar > 2 || tratar < 0);
    }
  } while (açao != 4);
}
const Escola = {
  Nota: 0,

  Estudar: function () {
    let i = getRandomIntInclusive(1, 15);
    if (i < 7) {
      console.log(`
    Você estuda e com muita dificuldade
    entende o conteúdo.
    A sua nota aumenta em 1 `);
      this.Nota += 1;
      if (this.Nota > 10) {
        this.Nota = 10;
      }
    } else if (i <= 12) {
      console.log(`
    Você estuda e entende o conteúdo de maneira tranquila.
    A sua nota aumenta em 2 `);
      this.Nota += 2;
      if (this.Nota > 10) {
        this.Nota = 10;
      }
    } else if (i <= 15) {
      console.log(`
    Você estuda mas não entende o conteúdo.
    A sua nota decai 2 pontos `);
      this.Nota -= 2;
      if (this.Nota < 0) {
        this.Nota = 0;
      }
    }
  },
};
const EV1 = {
  Nome: "Passear com cachorros",
  GanhoPorAno: 1500,
};
const EV2 = {
  Nome: "Vender Limonada",
  GanhoPorAno: 350,
};
const EV3 = {
  Nome: "Cortar Grama",
  GanhoPorAno: 600,
};
const EV4 = {
  Nome: "Lavar Carro",
  GanhoPorAno: 800,
};

const EmpregosVerão = {
  empregosDeVerão: [EV1, EV2, EV3, EV4],
  VerEmpregos: function () {
    for (const emprego of this.empregosDeVerão) {
      console.log(emprego);
    }
    do {
      var escolha = +entrada(`
      Qual você escolhe?
      1 - ${this.empregosDeVerão[0].Nome}
      2 - ${this.empregosDeVerão[1].Nome}
      3 - ${this.empregosDeVerão[2].Nome}
      4 - ${this.empregosDeVerão[3].Nome} `);
    } while (escolha == isNaN || escolha > 4 || escolha < 0);
    Trabalho.Nome = this.empregosDeVerão[escolha - 1].Nome;
    Trabalho.SálarioPorAno = this.empregosDeVerão[escolha - 1].GanhoPorAno;
    Trabalho.emprego = 1;
  },
};
const Trabalho = {
  Nome: "Sem emprego",
  SálarioPorAno: 0,
  emprego: 0,
  VerificarTrabalho: function () {
    console.log(`
    Este é o seu emprego
    ${Object.keys(Trabalho)[0]}: ${Trabalho.Nome}
    ${Object.keys(Trabalho)[1]}: ${Trabalho.SálarioPorAno}
  `);
  },
  ReceberSálario: function () {
    if (this.emprego == 1) {
      pessoa.GanharDinheiro(this.SálarioPorAno);
    }
  },
};
const eventos = {
  evento1: function () {
    entrada(`
      Você está com gripe`);
    doença.doença = "Gripe";
    doença.doente = 1;
  },
  evento2: function () {
    entrada(`
      Você está com resfriado`);
    doença.doença = "Resfriado";
    doença.doente = 1;
  },
  evento3: function () {
    entrada(`
      Você ganhou de presente dos 
      teus pais um brinquedo`);
    entrada(`
      E sua felicidade aumentou em 3`);
    status.StatusUp("fel", 3);
  },
  evento4: function () {
    entrada(`
      Prova surpresa... Se sua nota for
      menor que 6, você roda de ano`);
    console.log(`
      E sua felicidade cai em 4`);
    if (Escola.Nota < 6) {
      entrada(`
      Você perdeu 4 de felicidade`);
      status.StatusDown("fel", 4);
    } else {
      entrada(`
        Você conseguiu passar na
        prova`);
    }
  },
  evento5: function () {
    do {
      console.log(`
      Você arruma uma briga na escola`);
      açao = +entrada(`
      Você quer brigar ou fugir?
      1 - Brigar
      2 - Fugir `);
      if (açao == 1) {
        let i = getRandomIntInclusive(1, 10);
        if (i <= 7) {
          entrada(`
            Você perde a briga e sua saúde
            cai 3 pontos`);
          status.StatusDown("sau", 3);
        } else if (i <= 10) {
          entrada(`
            Você ganha a briga e não se machuca`);
        }
      } else if (açao == 2) {
        entrada(`
        Você consegue fugir mas 
        enquanto estava correndo 
        perde 200 de dinheiro `);
        pessoa.PerderDinheiro(200);
      }
    } while (açao == isNaN || açao > 2 || açao < 0);
  },
  evento6: function () {
    entrada(`
    Você aposta em cavalos e perde
    10000 de dinheiro `);
    pessoa.PerderDinheiro(10000);
  },
  evento7: function () {
    entrada(`
    Você aposta em cavalos e ganha
    300 de dinheiro `);
    pessoa.GanharDinheiro(300);
  },
  evento8: function () {
    entrada(`
    Você estava correndo de manhã
    tropeça e quebra a perna
    Você perde 3 de saúde `);
    status.StatusDown("sau", 3);
  },
  evento9: function () {
    entrada(`
    Você sai para uma balada e
    arruma uma namorada
    Você ganha 5 de felicidade`);
    status.StatusUp("fel", 5);
  },
  evento10: function () {
    if (posses.carro == 1) {
      let i = getRandomIntInclusive(1, 10);
      if (i < 5) {
        entrada(`
        Você bate o carro e morre.
        Você morreu com ${pessoa.Idade} anos de idade.`);
        entrada(`
        FIM DE JOGO.`);
        personagem = "morreu";
      }
    }
  },
  evento11: function () {
    entrada(`
    Você acha uma raspadinha e
    ganha 10000 de dinheiro`);
    pessoa.GanharDinheiro(10000);
  },
  evento12: function () {
    entrada(`
    Um senhor te oferece um
    carro de graça, você
    aceita? 
    `);
    do {
      var escolha;
      escolha = +entrada(`
      1 - Sim. 
      2 - Não. `);
      while (escolha == isNaN || escolha > 2 || escolha < 0) {
        escolha = +entrada(`
        1 - Sim. 
        2 - Não. `);
      }
      if (escolha == 1) {
        entrada(`
        Você ganhou um carro.`);
        posses.carro = 1;
      }
    } while (escolha != 2);
  },
};
function EventosAleatorios() {
  if (pessoa.Idade > 1 && pessoa.Idade <= 6) {
    let i = getRandomIntInclusive(1, 100);
    if (i <= 60) {
      eventos.evento1();
    } else if (i > 60 && i <= 90) {
      eventos.evento2();
    } else if (i > 90 && i <= 100) {
      eventos.evento3;
    }
  } else if (pessoa.Idade > 6 && pessoa.Idade <= 11) {
    let i = getRandomIntInclusive(1, 100);
    if (i <= 40) {
      eventos.evento1();
    } else if (i > 40 && i <= 60) {
      eventos.evento2();
    } else if (i > 60 && i <= 80) {
      eventos.evento3();
    } else if (i > 80 && i <= 100) {
      eventos.evento4();
    }
  } else if (pessoa.Idade > 11 && pessoa.Idade <= 17) {
    let i = getRandomIntInclusive(1, 100);
    if (i <= 20) {
      eventos.evento2();
    } else if (i > 20 && i <= 40) {
      eventos.evento3();
    } else if (i > 40 && i <= 70) {
      eventos.evento4();
    } else if (i > 70 && i <= 100) {
      eventos.evento5();
    }
  } else if (pessoa.Idade > 17 && pessoa.Idade <= 25) {
    let i = getRandomIntInclusive(1, 100);
    if (i <= 30) {
      eventos.evento6();
    } else if (i <= 40) {
      eventos.evento7();
    } else if (i <= 60) {
      eventos.evento8();
    } else if (i <= 100) {
      eventos.evento9();
    }
  } else if (pessoa.Idade > 25) {
    let i = getRandomIntInclusive(1, 100);
    if (i <= 30) {
      eventos.evento11();
    } else if (i <= 40) {
      eventos.evento();
    } else if (i <= 80) {
      eventos.evento8();
    } else if (i <= 100) {
      eventos.evento12();
    }
    eventos.evento10();
  }
}
function Chorar() {
  let i = getRandomIntInclusive(1, 10);
  if (i <= 4) {
    console.log(`
      Você chora mas ninguém aparece
      `);
    console.log(`
      Você perde 2 pontos de felicidade
      `);
    status.StatusDown("fel", 2);
  } else {
    console.log(`
      Você chora e sua mãe aparece
      `);
  }
}
function pedirDinheiro() {
  pedir++;
  if (pedir <= 3) {
    let i = getRandomIntInclusive(1, 100);
    if (i <= 20) {
      console.log(`
        Os teus pais não vão te dar
        dinheiro`);
    } else if (i <= 50) {
      console.log(`
        Os teus pais te deram 15
        de dinheiro`);
      pessoa.GanharDinheiro(15);
    } else if (i <= 60) {
      console.log(`
        Os teus pais te deram 30
        de dinheiro`);
      pessoa.GanharDinheiro(30);
    } else if (i <= 80) {
      console.log(`
        Os teus pais te deram 45
        de dinheiro`);
      pessoa.GanharDinheiro(45);
    } else if (i <= 90) {
      console.log(`
        Os teus pais te deram 60
        de dinheiro`);
      pessoa.GanharDinheiro(60);
    } else if (i <= 100) {
      console.log(`
        Os teus pais te deram 100
        de dinheiro`);
      pessoa.GanharDinheiro(100);
    }
  } else {
    console.log(`
      Você já pediu dinheiro demais
      os teus pais não vão te dar
      mais.`);
  }
}
function TrabalhoDeVerão() {
  let Ação;
  do {
    Ação = +entrada(`
    Estas são as tuas opções.
    Digite o número do que você gostaria de fazer
    1 - Procurar emprego
    2 - Checar o emprego atual
    3 - Voltar `);
    while (Ação == isNaN || Ação > 3 || Ação < 0) {
      Ação = +entrada(`
      Por favor digite o número do que você gostaria de fazer
      1 - Procurar emprego
      2 - Checar o emprego atual
      3 - Voltar `);
    }
    if (Ação == 1) {
      EmpregosVerão.VerEmpregos();
    } else if (Ação == 2) {
      Trabalho.VerificarTrabalho();
    }
  } while (Ação != 3);
}
const ER1 = {
  Nome: "Programador",
  GanhoPorAno: 50000,
};
const ER2 = {
  Nome: "Professor",
  GanhoPorAno: 20000,
};
const ER3 = {
  Nome: "Engenheiro",
  GanhoPorAno: 60000,
};

const TrabalhoReal = {
  empregosReais: [ER1, ER2, ER3],
  VerEmpregosReais: function () {
    for (const emprego of this.empregosReais) {
      console.log(emprego);
    }
    do {
      var escolha = +entrada(`
      Qual você escolhe?
      1 - ${this.empregosReais[0].Nome}
      2 - ${this.empregosReais[1].Nome}
      3 - ${this.empregosReais[2].Nome} `);
    } while (escolha == isNaN || escolha > 3 || escolha < 0);
    Trabalho.Nome = this.empregosReais[escolha - 1].Nome;
    Trabalho.SálarioPorAno = this.empregosReais[escolha - 1].GanhoPorAno;
    Trabalho.emprego = 1;
  },
};
function TrabalhoDeVerdade() {
  let Ação;
  do {
    Ação = +entrada(`
    Estas são as tuas opções.
    Digite o número do que você gostaria de fazer
    1 - Procurar emprego
    2 - Checar o emprego atual
    3 - Voltar `);
    while (Ação == isNaN || Ação > 3 || Ação < 0) {
      Ação = +entrada(`
      Por favor digite o número do que você gostaria de fazer
      1 - Procurar emprego
      2 - Checar o emprego atual
      3 - Voltar `);
    }
    if (Ação == 1) {
      TrabalhoReal.VerEmpregosReais();
    } else if (Ação == 2) {
      Trabalho.VerificarTrabalho();
    }
  } while (Ação != 3);
}
function SairComOsAmigos() {
  if (pessoa.Idade < 18) {
    let lugar;
    do {
      lugar = +entrada(`
      Estas são as tuas opções.
      Digite o número do que você gostaria de fazer
      1 - Ir ao Shopping
      2 - Ir tomar um sorvete
      3 - Ir no fliperama
      4 - Voltar `);
      while (lugar == isNaN || lugar > 4 || lugar < 0) {
        lugar = +entrada(`
        Digite o número do que você gostaria de fazer
        1 - Ir ao cinema (ingresso 30)
        2 - Ir tomar um sorvete ( preço 10)
        3 - Ir no fliperama (ficha 20)
        4 - Voltar `);
      }
      if (lugar == 1) {
        do {
          var maneira;
          maneira = +entrada(`
          Estas são as tuas opções.
          Digite o número da maneira que você gostaria de ir
          1 - A pé 
          2 - De ônibus (passagem 25)
          3 - Voltar `);
          while (maneira == isNaN || maneira > 3 || maneira < 0) {
            maneira = +entrada(`
            Digite o número da maneira que você gostaria de ir
            1 - A pé 
            2 - De ônibus (passagem 50)
            3 - Voltar `);
          }
          if (maneira == 1) {
            let i = getRandomIntInclusive(1, 100);
            if (i <= 60) {
              console.clear()
              console.log(`
              Vocês são assaltados e perdem todo o dinheiro
              `);
              pessoa.PerderDinheiro(pessoa.Dinheiro);
            } else {
              console.clear()
              console.log(`
              Vocês chegam no cinema`);
              if (pessoa.Dinheiro < 30) {
                console.log(`
                Você não tem dinheiro o suficiente
                então, não assiste o filme e volta
                pra casa`);
              } else {
                console.log(`
                você compra um ingresso`);
                console.log(`
                Assiste o filme
                e ganha 3 de felicidade`);
                status.StatusUp("fel", 3);
                pessoa.PerderDinheiro(30);
              }
            }
          } else if (maneira == 2) {
            if (pessoa.Dinheiro < 50) {
              console.log(`
              Você não tem dinheiro suficiente`);
            } else {
              console.log(`
              Vocês chegam no cinema`);
              if (pessoa.Dinheiro < 30) {
                console.log(`
                Você não tem dinheiro o suficiente,
                então não assiste o filme e volta
                pra casa`);
              } else {
                console.log(`
                você compra um ingresso`);
                console.log(`
                Assiste o filme
                e ganha 3 de felicidade`);
                status.StatusUp("fel", 3);
                pessoa.PerderDinheiro(30);
              }
            }
          }
        } while (maneira != 3);
      } else if (lugar == 2) {
        do {
          var maneira;
          maneira = +entrada(`
        Estas são as tuas opções.
        Digite o número da maneira que você gostaria de ir
        1 - A pé 
        2 - De ônibus (passagem 25)
        3 - Voltar `);
          while (maneira == isNaN || maneira > 3 || maneira < 0) {
            maneira = +entrada(`
          Digite o número da maneira que você gostaria de ir
          1 - A pé 
          2 - De ônibus (passagem 50)
          3 - Voltar `);
          }
          if (maneira == 1) {
            let i = getRandomIntInclusive(1, 100);
            if (i <= 60) {
              console.log(`
            Vocês são assaltados e perdem todo o dinheiro
            `);
              pessoa.PerderDinheiro(pessoa.Dinheiro);
            } else {
              console.log(`
            Vocês chegam na sorveteria`);
              if (pessoa.Dinheiro < 10) {
                console.log(`
              Você não tem dinheiro o suficiente
              então, não pode comprar um sorvete
              e volta pra casa`);
              } else {
                console.log(`
              Você compra um sorvete e ganha
              1 de felicidade`);
                status.StatusUp("fel", 1);
                pessoa.PerderDinheiro(10);
              }
            }
          } else if (maneira == 2) {
            if (pessoa.Dinheiro < 50) {
              console.log(`
            Você não tem dinheiro suficiente`);
            } else {
              console.log(`
            Vocês chegam na sorveteria`);
              if (pessoa.Dinheiro < 10) {
                console.log(`
              Você não tem dinheiro o suficiente
              então, não compra um sorvete e volta
              pra casa`);
              } else {
                console.log(`
              Você compra um sorvete`);
                console.log(`
              Come o sorvete
              e ganha 1 de felicidade`);
                status.StatusUp("fel", 1);
                pessoa.PerderDinheiro(10);
              }
            }
          }
        } while (maneira != 3);
      } else if (lugar == 3) {
        do {
          var maneira;
          maneira = +entrada(`
      Estas são as tuas opções.
      Digite o número da maneira que você gostaria de ir
      1 - A pé 
      2 - De ônibus (passagem 25)
      3 - Voltar `);
          while (maneira == isNaN || maneira > 3 || maneira < 0) {
            maneira = +entrada(`
        Digite o número da maneira que você gostaria de ir
        1 - A pé 
        2 - De ônibus (passagem 50)
        3 - Voltar `);
          }
          if (maneira == 1) {
            let i = getRandomIntInclusive(1, 100);
            if (i <= 60) {
              console.log(`
          Vocês são assaltados e perdem todo o dinheiro
          `);
              pessoa.PerderDinheiro(pessoa.Dinheiro);
            } else {
              console.log(`
          Vocês chegam no fliperama`);
              if (pessoa.Dinheiro < 10) {
                console.log(`
            Você não tem dinheiro o suficiente
            então, não pode comprar uma ficha
            e volta pra casa`);
              } else {
                console.log(`
            Você compra uma ficha e ganha
            1 de felicidade`);
                status.StatusUp("fel", 1);
                pessoa.PerderDinheiro(10);
              }
            }
          } else if (maneira == 2) {
            if (pessoa.Dinheiro < 50) {
              console.log(`
          Você não tem dinheiro suficiente`);
            } else {
              console.log(`
          Vocês chegam np fliperama`);
              if (pessoa.Dinheiro < 10) {
                console.log(`
            Você não tem dinheiro o suficiente
            então, não pode comprar uma ficha
            e volta pra casa`);
              } else {
                console.log(`
            Você compra uma ficha`);
                console.log(`
            Joga e ganha 1 de felicidade`);
                status.StatusUp("fel", 1);
                pessoa.PerderDinheiro(10);
              }
            }
          }
        } while (maneira != 3);
      }
    } while (lugar != 4);
  } else if (pessoa.Idade < 18) {
  }
}

const posses = {
  Nome: "Você não tem carro",
  carro: 0,
  VerificarPosses: function () {
    console.log(`${Object.keys(posses)[0]}: ${posses.Nome}`);
  },
};
const CA1 = {
  Nome: "Uno Way",
  Valor: "48441",
};
const CA2 = {
  Nome: "Logan Authentique",
  Valor: "51382",
};
const CA3 = {
  Nome: "Ecosport Freestyle",
  Valor: "49990",
};
const CA4 = {
  Nome: "Nissan Kicks",
  Valor: "118990",
};
const carros = {
  TodosOsCarros: [CA1, CA2, CA3, CA4],

  VerCarrosParaComprar: function () {
    for (const carros of this.TodosOsCarros) {
      console.log(carros);
    }
    do {
      var escolha = +entrada(`
      Qual você escolhe?
      1 - ${this.TodosOsCarros[0].Nome}
      2 - ${this.TodosOsCarros[1].Nome}
      3 - ${this.TodosOsCarros[2].Nome}
      4 - ${this.TodosOsCarros[3].Nome} `);
    } while (escolha == isNaN || escolha > 4 || escolha < 0);
    if (pessoa.Dinheiro < this.TodosOsCarros[escolha-1].Valor){
      console.log(`
      Você não tem dinheiro suficiente para
      comprar este carro. `)
    }else {
      posses.Nome = this.TodosOsCarros[escolha - 1].Nome;
      pessoa.PerderDinheiro(this.TodosOsCarros[escolha - 1].Valor);
      posses.carro = 1;
    }
  },
};

function Ação() {
  if (pessoa.Idade == 0) {
    console.log(`
    Você acabou de nascer então não tem muito o que fazer...`);
    let Ação;
    do {
      Ação = +entrada(`
        Estas são as tuas opções.
        Digite o número do que você gostaria de fazer
        1 - Checar Você
        2 - Checar Status
        3 - Chorar
        4 - Envelhecer `);
      while (Ação == isNaN || Ação > 4 || Ação < 0) {
        Ação = +entrada(`
          Por favor digite o número do que você gostaria de fazer
          1 - Checar Você
          2 - Checar Status
          3 - Chorar
          4 - Envelhecer `);
      }
      if (Ação == 1) {
        pessoa.ChecarPessoa();
      } else if (Ação == 2) {
        status.ChecarStatus();
      } else if (Ação == 3) {
        Chorar();
      } else if (Ação == 4) {
        pessoa.Envelhecer();
        console.log(`
          Agora você tem ${pessoa.Idade} ano de idade`);
      }
    } while (Ação != 4);
  } else if (pessoa.Idade == 1) {
    console.clear();
    console.log(`
    Agora você pode ficar doente, se você envelhecer
    1 ano estando doente você perde 5 de saúde.`);
    doença.verificarDoença();
    console.log(`
        Agora você tem ${pessoa.Idade} ano de idade.`);
    let Ação;
    do {
      Ação = +entrada(`
        Estas são as tuas opções.
        Digite o número do que você gostaria de fazer.
        1 - Checar Você.
        2 - Checar Status.
        3 - Chorar.
        4 - Brincar.
        5 - Envelhecer. `);
      while (Ação == isNaN || Ação > 5 || Ação < 0) {
        Ação = +entrada(`
          Por favor digite o número do que você gostaria de fazer
          1 - Checar Você
          2 - Checar Status
          3 - Chorar
          4 - Brincar 
          5 - Envelhecer`);
      }
      if (Ação == 1) {
        pessoa.ChecarPessoa();
      } else if (Ação == 2) {
        status.ChecarStatus();
      } else if (Ação == 3) {
        Chorar();
      } else if (Ação == 4) {
        Brincar();
      } else if (Ação == 5) {
        pessoa.Envelhecer();
      }
    } while (Ação != 5);
  } else if (pessoa.Idade <= 5) {
    console.clear();
    doença.verificarDoença();
    console.log(`
      Agora você tem ${pessoa.Idade} anos de idade.`);
    let Ação;
    do {
      Ação = +entrada(`
      Estas são as tuas opções.
      Digite o número do que você gostaria de fazer.
      1 - Checar Você.
      2 - Checar Status.
      3 - Chorar.
      4 - Brincar.
      5 - Ir ao médico.
      6 - Envelhecer.
       `);
      while (Ação == isNaN || Ação > 6 || Ação < 0) {
        Ação = +entrada(`
        Por favor digite o número do que você gostaria de fazer
        1 - Checar Você.
        2 - Checar Status.
        3 - Chorar.
        4 - Brincar .
        5 - Ir ao médico.
        6 - Envelhecer.
        `);
      }
      if (Ação == 1) {
        pessoa.ChecarPessoa();
      } else if (Ação == 2) {
        status.ChecarStatus();
      } else if (Ação == 3) {
        Chorar();
      } else if (Ação == 4) {
        Brincar();
      } else if (Ação == 5) {
        Médico();
      } else if (Ação == 6) {
        pessoa.Envelhecer();
      }
    } while (Ação != 6);
  } else if (pessoa.Idade <= 11) {
    console.clear();
    doença.verificarDoença();
    console.log(`
    Agora você tem ${pessoa.Idade} anos de idade.`);
    console.log(`
    Você entrou na escola, provas surpresa
    podem acontecer, se você não tiver nota
    maior ou igual a 6 você reprovará. `);
    let Ação;
    do {
      Ação = +entrada(`
    Estas são as tuas opções.
    Digite o número do que você gostaria de fazer.
    1 - Checar Você.
    2 - Checar Status.
    3 - Verificar a nota.
    4 - Estudar.
    5 - Ir ao médico.
    6 - Pedir dinheiro aos pais.
    7 - Envelhecer. `);
      while (Ação == isNaN || Ação > 7 || Ação < 0) {
        Ação = +entrada(`
      Digite o número do que você gostaria de fazer.
      1 - Checar Você.
      2 - Checar Status.
      3 - Verificar a nota.
      4 - Estudar.
      5 - Ir ao médico.
      6 - Pedir dinheiro aos pais.
      7 - Envelhecer. `);
      }
      if (Ação == 1) {
        pessoa.ChecarPessoa();
      } else if (Ação == 2) {
        status.ChecarStatus();
      } else if (Ação == 3) {
        console.log(`
      ${Object.keys(Escola)[0]}: ${Escola.Nota}/10.`);
      } else if (Ação == 4) {
        Escola.Estudar();
      } else if (Ação == 5) {
        Médico();
      } else if (Ação == 6) {
        pedirDinheiro(pedir);
      } else if (Ação == 7) {
        pessoa.Envelhecer();
      }
    } while (Ação != 7);
  } else if (pessoa.Idade <= 17) {
    console.clear();
    doença.verificarDoença();
    Escola.Nota = 0;
    console.log(`
    Agora você tem ${pessoa.Idade} anos de idade. `);
    console.log(`
    Você ainda está na escola, porém a sua nota
    voltou a ser 0. `);
    let Ação;
    do {
      Ação = +entrada(`
    Estas são as tuas opções.
    Digite o número do que você gostaria de fazer.
    1 - Checar Você.
    2 - Checar Status.
    3 - Verificar a nota.
    4 - Estudar.
    5 - Ir ao médico.
    6 - Sair com os amigos.
    7 - Emprego de verão.
    8 - Envelhecer. `);
      while (Ação == isNaN || Ação > 8 || Ação < 0) {
        Ação = +entrada(`
      Digite o número do que você gostaria de fazer.
      1 - Checar Você.
      2 - Checar Status.
      3 - Verificar a nota.
      4 - Estudar.
      5 - Ir ao médico.
      6 - Sair com os amigos.
      7 - Emprego de verão.
      8 - Envelhecer. `);
      }
      if (Ação == 1) {
        pessoa.ChecarPessoa();
      } else if (Ação == 2) {
        status.ChecarStatus();
      } else if (Ação == 3) {
        console.log(`
      ${Object.keys(Escola)[0]}: ${Escola.Nota}/10`);
      } else if (Ação == 4) {
        Escola.Estudar();
      } else if (Ação == 5) {
        Médico();
      } else if (Ação == 6) {
        SairComOsAmigos();
      } else if (Ação == 7) {
        TrabalhoDeVerão();
      } else if (Ação == 8) {
        pessoa.Envelhecer();
      }
    } while (Ação != 8);
  } else if (pessoa.Idade > 17) {
    console.clear();
    doença.verificarDoença();
    console.log(`
      Agora você tem ${pessoa.Idade} anos de idade.`);
    console.log(`
      Você já se formou, agora pode arrumar empregos
      melhores. `);
    let Ação;
    do {
      Ação = +entrada(`
      Estas são as tuas opções.
      Digite o número do que você gostaria de fazer
      1 - Checar Você.
      2 - Checar Status.
      3 - Ver posses.
      4 - Ir ao médico.
      5 - Comprar um carro.
      6 - Emprego real.
      7 - Envelhecer.
       `);
      while (Ação == isNaN || Ação > 7 || Ação < 0) {
        Ação = +entrada(`
        Digite o número do que você gostaria de fazer
        1 - Checar Você.
        2 - Checar Status.
        3 - Ver posses.
        4 - Ir ao médico.
        5 - Comprar um carro.
        6 - Emprego real.
        7 - Envelhecer.
         `);
      }
      if (Ação == 1) {
        pessoa.ChecarPessoa();
      } else if (Ação == 2) {
        status.ChecarStatus();
      } else if (Ação == 3) {
        posses.VerificarPosses();
      } else if (Ação == 4) {
        Médico();
      } else if (Ação == 5) {
        carros.VerCarrosParaComprar();
      } else if (Ação == 6) {
        TrabalhoDeVerdade();
      } else if (Ação == 7) {
        pessoa.Envelhecer();
      }
    } while (Ação != 7);
  }
}

var pedir = 0;
let personagem;
escNome(país(), países, genero(), sobrenomes);
statusInicial();
console.log(`
  Olá você nasceu no país ${pessoa.País} e você se chama ${pessoa.Nome}.
  Se a sua saúde chegar a 0 você morre.`);
console.log(`
  Se você estiver com depressão e envelhecer um ano, você
  perde 5 de sáude.`);
console.log(`
  Você tem ${pessoa.Idade} anos de idade.`);

while ((personagem = "vivo")) {
  Ação();
  if (personagem == "morreu") {
    break;
  }
}
