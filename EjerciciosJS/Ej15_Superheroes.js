//var a = ["a","b","c"]
//var b = a.map(function(elemento, index){console.log(elemento, index)})

const heros = [
    {name: "Spider-Man"},
    {name: "Thor"},
    {name: "Black Panther"},
    {name: "Captain Marvel"},
    {name: "Silver Surfer"}
];

const superheros = heros.map(function(heroe, index) {
    return {id: index, superhero: heroe.name}
});

console.log(superheros)

//con flechas: const superheros = heros.map(heroe, index => ({id: index, superhero: heroe.name}))
//array.map(function(element, index){
//    console.log(index);
//})

