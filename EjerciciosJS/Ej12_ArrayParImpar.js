const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

const pares = numbers.filter(numero) {
    if (numero % 2 == 0) {
        return numero
    }
};

console.log("pares", pares);

const impares = numbers.filter(numero) {
    if (numero % 2 != 0) {
        return numero
    }
};

console.log("impares", impares);


numbers.filter(function(numero) {
    if (numero % 2 == 0) {
        pares.push(number)
    } else {
        impares.push(number)
    })
}