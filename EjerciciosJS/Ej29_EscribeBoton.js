function transcribir() {
    var x = document.getElementById("texto").value;
    document.getElementById("resultado").innerHTML = (x);
}

//Control sobre lo que escribe el usuario : onkeydown, onkeyup, onkeypress
var areaTexto = document.getElementById('texto');
areaTexto.addEventListener('keydown', compruebaEnter);

//Controlar solo cuando el usar el enter -> keycode enter = 13
//Llamar a la función que muestra por pantalla - transcribir()
function compruebaEnter(evento) {
    if (evento.keyCode === 13) {
        transcribir()
    }
}