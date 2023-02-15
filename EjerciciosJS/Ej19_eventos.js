var boton = document.getElementById("myBtn");

boton.addEventListener("click", comprobarNum);

function comprobarNum() {
        var valor = document.getElementsByTagName("input")[0].value;
        var resultadoPantalla = document.getElementById("resultado");
        if (valor % 2 === 0) {
            resultadoPantalla.innerHTML = `El número`+ valor + ` es un número par`;
        } else {
            resultadoPantalla.innerHTML = `El número ${valor} es un número impar`;
        }
}