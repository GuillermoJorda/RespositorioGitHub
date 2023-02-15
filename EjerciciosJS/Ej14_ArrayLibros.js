const books = [{ title: "El Quijote", avg_rating: 4.5},{ title: "Don Juan", avg_rating: 3.8},{ title: "Cien años de soledad", avg_rating: 4.7},{ title: "Matar a un ruiseñor", avg_rating: 5},{ title: "El gran Gatsby", avg_rating: 3.6}];

var resultados = books
    .filter(function(libro) {
        return libro.avg_rating > 4
    }).map(function(libro) {
        return { title: libro.title, rating: libro.avg_rating}
});

console.log(resultados) ;

//var resultado3 = resultados

//console.log("resultados2", resultado2)