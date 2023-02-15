//var boton = document.getElementById("myBtn");

//boton.addEventListener("click", mostrarAlert("Guardado")); 
function mostrarAlert(){
    alert("Guardado");
}
//boton.addEventListener("click", function(){   esta es otra opcion
//    alert("Guardado");
//});

var inputFondo = document.getElementsByTagName("input")[0];

//inputFondo.addEventListener("focus", cambioColor);
function cambioColor() {
    inputFondo.style.backgroundColor = "yellow";
};

inputFondo.addEventListener("focusout", quitarColor, );
function quitarColor() {
    inputFondo.style.backgroundColor = "";
};

/////////////////////////////////////////////////////////

var inputLetras = document.getElementById("input")[1];

inputLetras.addEventListener("keydown", vocales);
function vocales(event) {
    const vocales = [65, 69, 79, 73, 85];   
//  if (vocales.includes(event.keyCode) === true) {    esta es otra opcion
//  if (event.keyCode == 65 || event.keyCode == 69 || event.keyCode == 79 || event.keyCode == 73 || event.keyCode == 85) {    esta es otra forma
    if (vocales.indexOf(event.keyCode) !== -1) {  //includes y indexOf sirven para saber si hay algo dentro de un array, indexOf nos dice dónde está en el array, -1 significa que no está
        inputLetras.style.color = "red";
    } else {
        inputLetras.style.color = "green";
    }
}