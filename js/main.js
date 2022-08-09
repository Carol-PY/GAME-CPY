
var numeroPensado = Math.round(Math.random()*10);
    var input = document.querySelector("input");

	function verificar() {

		if (parseInt(input.value) == numeroPensado) {

			alert("Acertaste! :D");

		}
		else {

			alert("No era el número :(");

		}

		input.value = "";

	} 

	var button = document.querySelector("button");
	button.onclick = verificar;


