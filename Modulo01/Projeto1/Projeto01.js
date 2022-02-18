const entrada = require("prompt-sync")();
var emoji = require("node-emoji");
console.clear();
console.log();

entrada("Aperte enter para iniciar ");

//dialogo inicial
console.clear();
console.log(
  `- Olá meu caro viajante, me chamo VIDAR!!! e você está prestes a adentrar no reino de Svein`
);

//pergunta do nome
console.clear();
const nome = entrada("- Mas antes... Informe seu nome: ");
console.log();

//dialogo
console.clear();
console.log("- HAHAHA que nome mais incomum para um aventureiro");
console.clear();
console.log(
  `- Adeus ${nome} está é a minha deixa, pois sua aventura vai começar...`
);
console.clear();
entrada("  ... ");
entrada("  ... ");
entrada("  ... ");
entrada("  !?!?!? ");
console.log(`- O que? Por quê você ainda está aí? `);
entrada("  ... ");
entrada("  ... ");
entrada("  ... ");
console.log("- HUM ");
entrada("  ??? ");
console.clear();
entrada("- Deixe me ver... Será que eu o grande VIDAR!!! esqueci-me de algo? ");
console.clear();
entrada("- AHRG COMO PUDE????? NÃOOOOOO!!!!! ");
console.clear();
entrada(`- Ó ${nome} desculpe a minha confusão... `);
console.clear();
entrada(
  "- Está é a primeira vez que eu faço isso este tipo de Aplicaç... Quer dizer... missão "
);
console.clear();
entrada(
  "- Talvez eu, o grande, o magnânimo, VIDAR!!! tenha esquecido de te perguntar qual classe você gostaria de seguir, então... "
);
console.clear();
entrada(
  `- Nobre ${nome} existem 3 classes disponíveis para sua escolha sendo elas: `
);

//tabela de classes
function Classes(classe) {
  this.classe = classe;
}
var guerreiro = new Classes("Guerreiro");
var ladrao = new Classes("Ladrão");
var mago = new Classes("Mago");
console.table([guerreiro, ladrao, mago]);

//escolha de classe

do {
  var classe = +entrada(
    "- Para escolher a classe de guerreiro digite 0, para escolher a classe de ladrão digite 1 e por fim para escolher a classe de mago digite 2 "
  );
} while (classe < 0 || classe > 2);

var plural;
var arma;
var parte1;
var parte1a;
var q1;
var parte2;
var q2;
var parte3;
var parte4;
var q4;
var final;
if (classe == 0) {
  classe = "Guerreiro";
  plural = "guerreiros";
  arma = "lâmina da espada";

  parte1 = "um pomo de uma espada";
  parte1a = "um pomo";
  q1 = "o pomo";

  parte2 = "a bainha de uma espada";

  parte3 = "uma guarda para espada";

  parte4 = "este cabo de espada";
  q4 = "um cabo para espada";

  final = "A sua espada";

  console.log();
  console.log(
    `- HAHAHA então é isso ${nome}? você acha que tens o que é preciso para ser um grande guerreiro como eu VIDAR!!!`
  );
} else if (classe == 1) {
  classe = "Ladrão";
  plural = "ladrões";
  arma = "lâmina de adaga";

  parte1 = "um pomo de uma adaga";
  parte1a = "um pomo";
  q1 = "o pomo";

  parte2 = "o cabo de uma adaga";

  parte3 = "uma guarda para espada";

  parte4 = "esta empunhadura de adaga";

  final = "A sua adaga";

  console.log();
  console.log(
    -`HUM interessante ${nome}... então você gosta de agir nas sombras...`
  );
} else {
  classe = "Mago";
  plural = "magos";
  arma = "bastão de madeira nobre";

  parte1 = "uma joia em formato de estrela";
  parte1a = "a joia";
  q1 = "a joia";

  parte2 = "um encaixe para a joia";

  parte3 = "um livro de magia";

  parte4 = "este anel de mago";

  final = "O seu cajado";

  console.log();
  console.log(`- Oh temos então um pesquisador das artes arcanas...`);
}

entrada(`- Chegou a hora ó grande ${nome} o ${classe} `);
entrada(`- A sua historia vai começar!!!!!!! `);

console.clear();

//História
entrada(`   Governado pelo rei Erick, Svein, possue
montanhas altaneiras, e vastos campos verdejantes,
com verões longos e invernos e implacáveis.  `);

console.clear();
console.log();
entrada(`   A paz e a harmonia é são o que regem
este reino, mas certo dia o Grão-Mestre
acorda desesperado após sonhar com a comp-
leta destruição do reino causada por um ser
das profundezas.  `);

console.clear();
console.log();
entrada(`   O Grão-Mestre contata o rei Erick que na mesma
hora chama você o mais forte dos ${plural} do reino,
prometendo-lhe tudo o que sempre quis.  `);

console.clear();
console.log();
entrada(`   Você motivado pela proposta do rei, vai em busca
dos grandes sábios eles, então, te dizem que tudo 
necessário para derrotar o mal está na caverna de
Siefried.  `);

console.clear();
console.log();
entrada(`   Após dias de viagem você chega na caverna e
ao se aproximar da entrada surge uma placa com 
diversas runas nórdicas, que dizem o seguinte:  `);

console.clear();
console.log();
entrada(`   ${classe} para acabar com o mal você
deve encontrar todas as runas que estão escondidas.  `);

console.clear();
console.log();
entrada(`    Quando você entra na caverna
na sua frente já aparece o primeiro inimigo,
uma gosma humanoide que carrega ${parte1}  `);

console.clear();
console.log();
entrada(`    Você observa o ambiente e vê que 
é possivel avançar sem enfrentar o inimigo,
pois a sua direita há uma porta aberta.  `);

// Objetivo 1
var enfrentou;
var parte1;
var parte1a;
var classe;

console.clear();
console.log();
enfrentou = entrada(`    Agora está em suas mãos ${classe}
    se queres enfrentar o inimigo digite "sim", para correr diretamente
    e se queres correr para a porta aberta digite "nao". `).toUpperCase();

while (enfrentou != "SIM" && enfrentou != "NAO") {
  console.log();
  enfrentou = entrada("Digite sim ou não ").toUpperCase();
}

if (enfrentou == "SIM") {
  console.clear();
  console.log();
  entrada(`    Você avança com calma e em um golpe 
    de sorte acerta o inimigo que cai na hora e derruba
    ${parte1a} que estava segurando, você sem pensar duas 
    vezes pega e guarda em seu inventário `);
} else if (enfrentou == "NAO") {
  entrada(`    Você corre em direção a porta como
    se sua vida dependesse disso e por um triz es-
    capa do monstro sem maiores complicações `);
}

console.clear();
console.log();
entrada(`    Na sala seguinte você encontra um
    ancião que, lhe propõe um enigma e diz que
    se você acertar ele te dará ${parte2} `);

// Objetivo 2
var acertou;
var parte2;

console.clear();
console.log();
acertou = +entrada(`    - Olá aventureiro este é meu enigma:

São sete irmãs, cada uma delas tem um irmão. 
Quantos filhos são ao todo na família? 
(Responda utilizando algarismos)`).toUpperCase();

if (acertou == 14) {
  console.clear();
  console.log();
  entrada(`    Você acertou tome aqui o que combinamos e pode
    passar atravesse este portal para chegar ao seu próximo
    desafio `);
} else {
  console.log();
  entrada(`    Infelizmente você errou mas lhe deixa-
    rei passar, atravesse este portal para chegar ao seu próximo
    desafio `);
}

//objetivo 3
var parte3;
console.clear;
console.log();
entrada(`    Ao sair do portal você encontra um
    saco que está coberto de aranhas `);

console.clear;
console.log();
let pegou = entrada(`    Você quer pegar o saco? `).toUpperCase();
while (pegou != "SIM" && pegou != "NAO") {
  console.clear;
  pegou = entrada("   Digite sim ou não ").toUpperCase();
}

if (pegou == "SIM") {
  console.clear;
  console.log();
  entrada(`    Você então, se concentra, junta
    toda a sua coragem e num ato de loucura 
    põe a mão no meio das aranhas e puxa o 
    saco`);
  console.log();
  entrada(`    Ao abrir o saco você se depara com ${parte3} 
    e continua no caminho para a o próximo desafio`);
} else if (pegou == "NAO") {
  console.clear;
  console.log();
  entrada(`    Você decide ignorar o saco 
    e segue o caminho para o próximo desafio `);
}

//objetivo 4

var parte4;
console.log();
entrada(`    Você chega a uma estrada sem fim
    e decide voltar mas ouve uma vez e quando
    vira de costas surge um velho anão que se
    apresenta como Mimir `);
console.log();
entrada(`    - Olá meu jovem eu me chamo Mimir
    e vim até aqui te propor um desafio por
    ${parte4} `);
console.log();
entrada(`    - O desafio é o seguinte meu jovem
    você me dira algum número e eu te direi o 
    que você deverá fazer com ele, no entanto
    este número tem que ser diferente de 1 e
    de 0 `);

console.log();
var aceita = entrada(`    - Então meu jovem você
    aceita participar do meu desafio? `).toUpperCase();
while (aceita != "SIM" && aceita != "NAO") {
  console.clear;
  console.log();
  aceita = entrada("    - Vamos diga sim ou nao? ").toUpperCase();
}

if (aceita == "SIM") {
  console.clear;
  console.log();
  var num = +entrada(`    - Então vamos lá diga um número `);
  while (num == 0 || num == 1) {
    console.clear;
    console.log();
    num = +entrada(`      - Vamos lá meu jovem
    NÃO ME TIRE PARA TOLO DIGA UM
    NÚMERO DIFERENTE DE 1 E 0!!!! `);
  }
  console.log();
  entrada(`    - Hmm perfeito... Deixe me ver hehe...
    Você deverá me dizer qual o dobro da metade 
    deste número HEHE IMPOSSIVEL VOCÊ
    ACERTAR `);
  console.log();
  let res = +entrada(`    - Vamos diga qual é a resposta `);
  if (res == num) {
    console.log();
    entrada(`    - NÃOOOOOOOOOO IMPOSSIVEL COMO?????? `);
    entrada(`    - ARG... Ok você me venceu tome aqui 
    e siga seu caminho`);
    console.log();
    entrada(`    Uma porta então surge...`);
  } else {
    console.log();
    entrada(`    - HAHHAH EU SABIA VOCE 
    NUNCA ACERTARIA`);
    entrada(`    - Vá prossiga `);
    console.log();
    entrada(`    Uma porta então surge...`);
  }
}

//objetivo 5
entrada(`    Nesta porta diz a última sala`);
console.log();
console.clear();
entrada(`    Você, então, entra e se depara com outras
    runas nordicas, você as traduz e percebe que elas
    dizem:
    Chegou a hora ${nome}, aqui está a ultima parte das 
    relíquias pegue-a e parta para seu verdadeiro desafio,
    quando a hora certa chegar, elas se converteram em um
    artefato muito poderoso capaz de vencer todo mal. `);

entrada(`    Chegando no reino e começa a
    se questionar se pegou todas as relíquias, quando
    do além surge o ancião da caverna e faz as seguin-
    tes perguntas `);

var plural;
var arma;
var parte1;
var parte1a;
var q1;
var parte2;
var q2;
var parte3;
var parte4;
var q4;
var final;
var nome;
console.clear();
console.log();
let quest1 = entrada(`  -Você pegou ${q1}?  `).toUpperCase();
while (quest1 != "SIM" && quest1 != "NAO") {
  console.clear;
  quest1 = entrada("  -Diga se sim ou se não ").toUpperCase();
}
console.clear();
console.log();
let quest2 = entrada(`  -Você pegou ${parte2}?  `).toUpperCase();
while (quest2 != "SIM" && quest2 != "NAO") {
  console.clear;
  quest2 = entrada("  -Diga se sim ou se não ").toUpperCase();
}
console.clear();
console.log();
let quest3 = entrada(`  -Você pegou ${parte3}?  `).toUpperCase();
while (quest3 != "SIM" && quest3 != "NAO") {
  console.clear;
  quest3 = entrada("  -Diga se sim ou se não ").toUpperCase();
}
console.clear();
console.log();
let quest4 = entrada(`  -Você pegou ${parte4}?  `).toUpperCase();
while (quest4 != "SIM" && quest4 != "NAO") {
  console.clear;
  quest4 = entrada("  -Diga se sim ou se não ").toUpperCase();
}
console.clear();
console.log();
let quest5 = entrada(`  -Você pegou ${arma}?  `).toUpperCase();
while (quest5 != "SIM" && quest5 != "NAO") {
  console.clear;
  quest5 = entrada("  -Diga se sim ou se não ").toUpperCase();
}

var contador = 0;

if (quest1 == "SIM") {
  contador++;
}
if (quest2 == "SIM") {
  contador++;
}
if (quest3 == "SIM") {
  contador++;
}
if (quest4 == "SIM") {
  contador++;
}
if (quest5 == "SIM") {
  contador++;
}

if (quest1 == "SIM") {
  contador = contador + 1;
}
if (quest2 == "SIM") {
  contador = contador + 1;
}
if (quest3 == "SIM") {
  contador = contador + 1;
}
if (quest4 == "SIM") {
  contador = contador + 1;
}
if (quest5 == "SIM") {
  contador = contador + 1;
}

if (contador == 0) {
  console.clear();
  console.log(
    `   Infelimente você não consegue derrotar o mal sem o poder do artefato`
  );
  console.log("   Você falhou miseravelmente ");
  console.log(`   Este é o fim de sua aventura ${nome} `);
} else if (contador == 1 || contador == 2) {
  console.clear();
  console.log(`   Como algém despreparado você não lutar decide`);
  console.log(
    "   Você falhou, mas ainda consegue fugir do reino antes que ele sucumba. "
  );
  console.log(`   Este é o fim de sua aventura ${nome} `);
} else if (contador == 3) {
  console.clear();
  console.log(`   Tão perto mas tão longe...`);
  console.log(
    "   Você chegou perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco. "
  );
  console.log(`   Este é o fim de sua aventura ${nome} `);
} else if (contador == 4) {
  console.clear();
  console.log(
    `   Sem o artefato a batalha é dura mas você juntou algumas partes e junto com ${final} você vence`
  );
  console.log(
    "   Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita. "
  );
  console.log(`   Este é o fim de sua aventura ${nome} `);
} else if (contador == 5) {
  console.clear();
  console.log(`   Com o poder do artefato o mal cai perante você`);
  console.log(
    "   Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações. "
  );
  console.log(`   Este é o fim de sua aventura ${nome} `);
}
