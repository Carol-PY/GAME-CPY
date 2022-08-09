
var numeroPensado = Math.round(Math.random()*10);
    var input = document.querySelector("input");
    input.focus();

	function verificar() {

		if (parseInt(input.value) == numeroPensado) {

			alert("Acertaste! :D");

		}
		else {

			alert("No era el número :(");

		}

		input.value = "";
		input.focus();

	} 

	var button = document.querySelector("button");
	button.onclick = verificar;


