
var num, programa, tentativa, pontos;
var gabarito = new Array(30);

var gabarito121 = new Array('B', 'A', 'A', 'D', 'C', 'B', 'D', 'A', 'A', 'D', 'C', 'B', 'B', 'C', 'D', 'D', 'D', 'D', 'B', 'D', 'A', 'B', 'A', 'A', 'D', 'A', 'C', 'A', 'C', 'C');
var gabarito122 = new Array('B', 'D', 'A', 'A', 'A', 'B', 'D', 'A', 'C', 'A', 'C', 'C', 'B', 'D', 'D', 'B', 'C', 'D', 'C', 'D', 'D', 'D', 'A', 'C', 'A', 'A', 'B', 'C', 'A', 'A');
var gabarito123 = new Array('B', 'A', 'D', 'B', 'B', 'B', 'C', 'D', 'C', 'D', 'D', 'D', 'A', 'C', 'A', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'B', 'D', 'D', 'C', 'B', 'D', 'B', 'C');
var gabarito124 = new Array('B', 'A', 'D', 'B', 'B', 'D', 'C', 'C', 'C', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'D', 'A', 'B', 'B', 'D', 'A', 'B', 'D', 'A', 'B', 'C', 'C', 'D', 'D');
var gabarito125 = new Array('C', 'C', 'D', 'D', 'A', 'A', 'C', 'D', 'B', 'B', 'D', 'D', 'B', 'B', 'D', 'D', 'C', 'B', 'B', 'B', 'D', 'A', 'B', 'D', 'D', 'D', 'C', 'D', 'C', 'B');

function iniciar() {
	programa = window.prompt("Digite o número do programa:", "");

	if (programa == "121")
		gabarito = gabarito121;
	else if (programa == "122")
		gabarito = gabarito122;
	else if (programa == "123")
		gabarito = gabarito123;
	else if (programa == "124")
		gabarito = gabarito124;
	else if (programa == "125")
		gabarito = gabarito125;
	else {
		window.alert("Número de Programa Inválido!!!\nDigite entre 121 e 125!!!");
		iniciar();
	}

	pontos = 0;
	num = 1;
	tentativa = 1;

	document.getElementById('visor1').value = programa + "->" + num + ": ";
	document.getElementById('visor2').value = "Tentativa " + tentativa + " de 3";
}

function jogar(resposta) {
	document.getElementById('visor1').value = programa + "->" + num + ":" + resposta;

	if (resposta == gabarito[num-1]) {
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
    console.log()
}