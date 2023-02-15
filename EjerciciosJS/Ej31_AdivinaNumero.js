
//var adivinado;
var contador = 0;
var vidas = 10;
const numero = Math.floor(Math.random() * 100);;
console.log(numero);


function adivinaNum() {
    var entrada = parseInt(document.getElementById("entrada").value);

    
    if (entrada === numero && entrada < 100) {
        //adivinado = true;
        document.getElementById("resultado").innerHTML = 'Ole tú, has acertado';
    } else if (entrada <= numero && entrada < 100) {
        //adivinado = false;
        document.getElementById("resultado").innerHTML = 'Fallaste! número demasiado bajo';
    } else if (entrada >= numero && entrada < 100) {
        //adivinado = false;
        document.getElementById("resultado").innerHTML = 'Fallaste! número demasiado alto';
    } else {
        document.getElementById("resultado").innerHTML = 'Número no válido, lee bien';
        //adivinado = false;
    }

    contador++;
    vidas--;
    document.getElementById("contador").innerHTML = contador;
    document.getElementById("vidas").innerHTML = vidas;
}