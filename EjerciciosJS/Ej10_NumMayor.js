const numeros = [2,15,28,3];
let max = numeros[0];

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
    let current = numeros[i];

    if (current > max) {
        max = current;
    }
    console.log("El valor máximo" , max)
}
/* OTRA FORMA DE HACERLO USANDO ...for...of...
for  (let j of numeros) {

    if(j >max) {
        max=j
    }
    console.log("El valor máximo", max)
}
*/