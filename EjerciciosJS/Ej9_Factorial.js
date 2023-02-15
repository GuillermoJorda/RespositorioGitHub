const numero = prompt("Por favor introduzca un número para calcular si factorial");
let factorial = 0;
let i = numero;

while (i > 1) {
        i--
        if  (factorial == 0) {
            factorial = numero * i;
        }
        else if (factorial != 0){
            factorial = factorial * i;    
        }
}

alert(`El factorial de ${numero} es ${factorial}`)