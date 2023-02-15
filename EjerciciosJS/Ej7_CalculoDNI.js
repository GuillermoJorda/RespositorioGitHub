let dni = prompt("Por favor introduce tu número de DNI sin la letra");
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (dni < 0 || dni.length != 8) {
    console.log(`El DNI ${dni} no es un número válido`)
}
else {
    let result = dni % 23;
    let letra = letrasDNI[result];
    alert(`La letra que corresponde a su DNI es: ${letra}`);
}