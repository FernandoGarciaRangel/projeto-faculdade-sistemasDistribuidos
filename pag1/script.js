var num, programa, tentativa, pontos;
var gabarito = new Array(30);

var gabarito121 = new Array('B', 'A', 'A', 'D', 'C', 'B', 'D', 'A', 'A', 'D', 'C', 'B', 'B', 'C', 'D', 'D', 'D', 'D', 'B', 'D', 'A', 'B', 'A', 'A', 'D', 'A', 'C', 'A', 'C', 'C');
var gabarito122 = new Array('B', 'D', 'A', 'A', 'A', 'B', 'D', 'A', 'C', 'A', 'C', 'C', 'B', 'D', 'D', 'B', 'C', 'D', 'C', 'D', 'D', 'D', 'A', 'C', 'A', 'A', 'B', 'C', 'A', 'A');
var gabarito123 = new Array('B', 'A', 'D', 'B', 'B', 'B', 'C', 'D', 'C', 'D', 'D', 'D', 'A', 'C', 'A', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'B', 'D', 'D', 'C', 'B', 'D', 'B', 'C');
var gabarito124 = new Array('B', 'A', 'D', 'B', 'B', 'D', 'C', 'C', 'C', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'D', 'A', 'B', 'B', 'D', 'A', 'B', 'D', 'A', 'B', 'C', 'C', 'D', 'D');
var gabarito125 = new Array('C', 'C', 'D', 'D', 'A', 'A', 'C', 'D', 'B', 'B', 'D', 'D', 'B', 'B', 'D', 'D', 'C', 'B', 'B', 'B', 'D', 'A', 'B', 'D', 'D', 'D', 'C', 'D', 'C', 'B');


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
