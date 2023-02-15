const topics = ["JavaScript","funciones","condicionales","bucles"];

//var newTopics = topics.map(function(tema){
//    return tema.toUpperCase();
//});

var newTopics = topics.map(tema => tema.toUpperCase());

console.log("topics",topics);
console.log("new topics",newTopics.reverse());