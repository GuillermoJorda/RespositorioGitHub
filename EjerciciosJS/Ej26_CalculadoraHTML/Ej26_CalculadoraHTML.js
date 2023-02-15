function calcular() {
    var numerosInput = document.getElementById("inputNumbers").value.split(",");
    //queremos aplicar la funcion parseInt al array
    var numeros = numerosInput.map(function(num) { //.map sirve para recorrer el array
        return parseInt(num); // también se puede usar la funcion number()
    });

    //Suma
    var suma = 0;
    for ( let i = 0; i < numeros.length; i++ ) {
        suma += numeros[i]; //esto se suma a sí mismo con el valor que le pasamos
    }
    document.getElementById(`resultadoSuma`).innerHTML = "El resultado de la suma es " + suma;
    
    //Media
    var media = suma / numeros.length;
    document.getElementById(`resultadoMedia`).innerHTML = "El resultado de la media es " + media;

    //Máximo
    // var max = Math.max(numeros);
    // Haciendo el bucle:
    for (let i = 0; i < numeros.lenght; i++) {
       if (max < numeros[i]) {
           max = numeros[i];
       }
    }
    document.getElementById(`resultadoMax`).innerHTML = "El valor mayor es " + max;

    //Mínimo
    // var min = numeros[0]
    // Haciendo el bucle:
    for (let i = 0; i < numeros.lenght; i++) {
       if (min > numeros[i]) {
           min = numeros[i];
       }
    }
    document.getElementById(`resultadoMin`).innerHTML = "El valor menor es " + min;
}

function reiniciar() {
    document.getElementById("inputNumbers").value = "";

    document.getElementById("resultadoSuma").innerHTML = "";
    document.getElementById("resultadoMedia").innerHTML = "";
    document.getElementById("resultadoMax").innerHTML = "";
    document.getElementById("resultadoMin").innerHTML = "";
    //se puede mejorar
    // var parrafos = document.getElementsByTagName('p');
    // parrafos.map(function(parraf) {
    //     return parraf.innerHTML = '';
    // })

}

function cargar() {
    document.getElementById("inputNumbers").value = "1,2,3"; //aquí se lo pasamos en formato cadena para que el split de arriba del todo siga funcionando correctamente
}