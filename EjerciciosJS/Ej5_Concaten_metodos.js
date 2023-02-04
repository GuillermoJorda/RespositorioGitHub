// Ejercicio 5 (10 en las diapositivas)
//A partir de un array con todos los meses del año escritos en minusculas, 
//crea otro dondo sólo estén los meses que tienen más de 7 letras y haz que estén 
//escritos en mayúsculas. En otra variable, indica cuántos meses son.


const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const longMeses = meses
    .filter(meses => meses.length > 7)
    .map(meses => meses.toUpperCase());

console.log(longMeses);
var cuantosMeses = longMeses.length;
console.log(cuantosMeses);