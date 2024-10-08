const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const opModalButton = document.querySelector("#reiniciar");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, opModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

var num, programa, tentativa, pontos;
var gabarito = new Array(30);

var gabarito121 = new Array(
  "C",
  "B",
  "B",
  "C",
  "D",
  "D",
  "B",
  "A",
  "A",
  "D",
  "C",
  "B",
  "D",
  "A",
  "A",
  "A",
  "C",
  "A",
  "C",
  "C",
  "B",
  "D",
  "A",
  "B",
  "A",
  "B",
  "D",
  "C",
  "A",
  "A"
);

var gabarito122 = new Array(
  "C",
  "C",
  "B",
  "D",
  "D",
  "D",
  "B",
  "D",
  "D",
  "B",
  "A",
  "B",
  "D",
  "A",
  "C",
  "A",
  "B",
  "C",
  "A",
  "A",
  "B",
  "D",
  "B",
  "B",
  "B",
  "B",
  "C",
  "D",
  "C",
  "D"
);

var gabarito123 = new Array(
  "D",
  "D",
  "A",
  "C",
  "A",
  "A",
  "B",
  "C",
  "A",
  "A",
  "B",
  "A",
  "D",
  "B",
  "B",
  "C",
  "C",
  "B",
  "A",
  "D",
  "B",
  "A",
  "D",
  "B",
  "B",
  "D",
  "C",
  "C",
  "B",
  "B"
);

var gabarito124 = new Array(
  "A",
  "D",
  "B",
  "A",
  "D",
  "B",
  "B",
  "D",
  "C",
  "A",
  "A",
  "D",
  "A",
  "D",
  "A",
  "B",
  "C",
  "C",
  "D",
  "D",
  "C",
  "C",
  "D",
  "D",
  "B",
  "A",
  "C",
  "D",
  "B",
  "B"
);

var gabarito125 = new Array(
  "D",
  "D",
  "C",
  "C",
  "D",
  "A",
  "B",
  "D",
  "A",
  "B",
  "C",
  "C",
  "A",
  "B",
  "C",
  "D",
  "C",
  "D",
  "C",
  "B",
  "B",
  "B",
  "A",
  "C",
  "A",
  "D",
  "D",
  "D",
  "C",
  "D"
);

function iniciar() {
  const visor1 = document.getElementById("visor1").value;
  const visor2 = document.getElementById("visor2").value;
  const visor3 = document.getElementById("visor3").value;

  programa = visor1 + visor2 + visor3;

  if (programa == "121") gabarito = gabarito121;
  else if (programa == "122") gabarito = gabarito122;
  else if (programa == "123") gabarito = gabarito123;
  else if (programa == "124") gabarito = gabarito124;
  else if (programa == "125") gabarito = gabarito125;
  else {
    window.alert("Sequência inválida!\nDigite entre 121 e 125!!!");
    iniciar();
  }

  pontos = 0;
  num = 1;
  tentativa = 1;

  document.getElementById("visor4").value = programa + " > " + num + ": ";
  document.getElementById("visor5").value = "Tentativa " + tentativa + " de 3";
}

function jogar(resposta) {
  document.getElementById("visor4").value =
    programa + " > " + num + ":" + resposta;

  if (resposta == gabarito[num - 1]) {
    if (tentativa == 1) pontos += 3; // pontos = pontos + 3
    else if (tentativa == 2) pontos += 2; // pontos = pontos + 2
    else if (tentativa == 3) pontos++; // pontos = pontos + 1

    num++;
    tentativa = 1;

    document.getElementById("visor4").value = programa + " > " + num + ": ";
    document.getElementById("visor5").value =
      "Tentativa " + tentativa + " de 3";
  } else {
    tentativa++;
    document.getElementById("visor5").value =
      "Tentativa " + tentativa + " de 3";

    if (tentativa > 3) {
      num++;
      tentativa = 1;
      document.getElementById("visor4").value = programa + " > " + num + ": ";
      document.getElementById("visor5").value =
        "Tentativa " + tentativa + " de 3";
    }
  }

  if (num > 30) {
    document.getElementById("visor4").value = "VOCÊ FINALIZOU!";
    document.getElementById("visor5").value = "Pontuação: " + pontos;
  }

  if (resposta.value === respostaCorreta) {
    resposta.style.backgroundColor = "green";
  } else {
    resposta.style.backgroundColor = "red";
  }
}
