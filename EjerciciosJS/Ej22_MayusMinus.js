//comprobar si está en minúsculas



function comprobarFrase() {
    // Capturar o que el usuario ha escrito
    var fraseUsuario = document.getElementById("frase").value;

    //comprobar si está en mayúscula o minuscula. Para eso primero lo paso a mayus y haré una comparación
    var fraseMayus = fraseUsuario.toUpperCase();
    var fraseMinus = fraseUsuario.toLoweCase();

    if (fraseUsuario === fraseMayus) {
       document.getElementById("resultado").innerHTML = "Está en mayúscula";
    } else  if (fraseUsuario === fraseMinus) {
        document.getElementById("resultado").innerHTML = "Está en minúscula";
    } else {
        document.getElementById("resultado").innerHTML = "Está en mayúscula y minúscula";
    }
}