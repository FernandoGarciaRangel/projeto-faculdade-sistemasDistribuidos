var num, programa, tentativa, pontos;
var gabarito = new Array(30);  // a =vermelho        B= amarelo      c= Azul     D=verde

var gabarito121 = new Array('C', 'B', 'B', 'C', 'D', 'D', 'B', 'A', 'A', 'D', 'C', 'B', 'D', 'A', 'A', 'A', 'C', 'A', 'C', 'C', 'B', 'D', 'A', 'B', 'A', 'B', 'D', 'C', 'A', 'A');
var gabarito122 = new Array('C', 'C', 'B', 'D', 'D', 'D', 'B', 'D', 'D', 'B', 'A', 'B', 'D', 'A', 'C', 'A', 'B', 'C', 'A', 'A', 'B', 'D', 'B', 'B', 'B', 'B', 'C', 'D', 'C', 'D');
var gabarito123 = new Array('D', 'D', 'A', 'C', 'A', 'A', 'B', 'C', 'A', 'A', 'B', 'A', 'D', 'B', 'B', 'C', 'C', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'B', 'D', 'C', 'C', 'B', 'B');
var gabarito124 = new Array('A', 'D', 'B', 'A', 'D', 'B', 'B', 'D', 'C', 'A', 'A', 'D', 'A', 'D', 'A', 'B', 'C', 'C', 'D', 'D', 'C', 'C', 'D', 'D', 'B', 'A', 'C', 'D', 'B', 'B');
var gabarito125 = new Array('D', 'D', 'C', 'C', 'D', 'A', 'B', 'D', 'A', 'B', 'C', 'C', 'A', 'B', 'C', 'D', 'C', 'D', 'C', 'B', 'B', 'B', 'A', 'C', 'A', 'D', 'D', 'D', 'C', 'D');


function iniciar() {

	let numeros = document.getElementById("quiz-input").value

	console.log(numeros)
	
	if (numeros == "121")
		gabarito = gabarito121;
	else if (numeros == "122")
		gabarito = gabarito122;
	else if (numeros == "123")
		gabarito = gabarito123;
	else if (numeros == "124")
		gabarito = gabarito124;
	else if (numeros == "125")
		gabarito = gabarito125;

	
	localStorage.setItem("gabarito", gabarito)  //grava o valor de gabarito em uma localstorage

	window.location.href = "../pag3/pag3.html"
}


let gabaritoNovo = new Array(30)
gabaritoNovo = localStorage.getItem("gabarito") //recupera o valor de gabarito q tava na localstorage e atribui a variável "gabaritoNovo"

console.log(gabaritoNovo)

	pontos = 0;
	num = 1;
	tentativa = 1;

function jogar(resposta) {
	document.getElementsByClassName('quiz-input').value = programa + "->" + num + ":" + resposta;

	if (resposta == gabaritoNovo[num-1]) {
		if (tentativa == 1)
			pontos += 3; // pontos = pontos + 3
		else if (tentativa == 2)
			pontos += 2; // pontos = pontos + 2
		else if (tentativa == 3)
			pontos++; // pontos = pontos + 1

		num++;
		tentativa = 1;	

		document.getElementById('visor1').value = programa + "->" + num + ": ";
		document.getElementById('visor2').value = "Tentativa " + tentativa + " de 3";
	}
	else {
		tentativa++;
		document.getElementById('visor2').value = "Tentativa " + tentativa + " de 3";

		if (tentativa > 3) {
			num++;
			tentativa = 1;
			document.getElementById('visor1').value = programa + "->" + num + ": ";
			document.getElementById('visor2').value = "Tentativa " + tentativa + " de 3";
		}
	}
	
	if (num > 30) {
		document.getElementById('visor1').value = "***FIM***";
		document.getElementById('visor2').value = "Pontuação: " + pontos;
	}
    console.log(gabaritoNovo)
}

function enviarNumeros(){
	let numeros = new Array(2)
	for(i = 0; i<=3;i++){
	numeros = document.getElementsByClassName('quiz-input').value;
	}
}
