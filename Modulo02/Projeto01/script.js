let title = window.document.getElementById("title");
let msg = window.document.getElementById("msg");
let imagem = window.document.getElementById("imagem");
let butao = window.document.getElementById("butao");
let i = 1;
function transformar(a) {
  if (a == 1) {
    imagem = document.getElementById("img").src = `./images/besta.png`;
    document.body.style.backgroundColor = "#e69138";
    title.style.color = "#5b5b5b";
    msg.style.color = "#5b5b5b";
    butao.style.color = "#5b5b5b";
    i++;
  } else if (a == 2) {
    imagem = document.getElementById("img").src = `./images/ultraT.png`;
    document.body.style.backgroundColor = "#08ff08";
    title.style.color = "#000000";
    msg.style.color = "#000000";
    butao.style.color = "#08ff08";
    i++;
  } else if (a == 3) {
    imagem = document.getElementById("img").src = `./images/quatrobracos.png`;
    document.body.style.backgroundColor = "#800000";
    title.style.color = "#ffffff";
    msg.style.color = "#ffffff";
    butao.style.color = "#ffffff";
    i = 0;
  } else if (a == 0) {
    imagem = document.getElementById("img").src = `./images/omnitrix.png`;
    document.body.style.backgroundColor = "#000000";
    title.style.color = "#6ad821";
    msg.style.color = "#6ad821";
    butao.style.color = "#6ad821";
    i++;
  }
}
