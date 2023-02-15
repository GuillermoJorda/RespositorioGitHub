function agregarTarea() {
    //CAPTURAR LO QUE INTRODUCE EL USUARIO
    var tarea = document.getElementById("entrada").value;//guarda valor entrada en tarea

    //MOSTRARLO POR PANTALLA
    const nodo = document.createElement("li");          //esta funcion crea elementos
    nodo.innerHTML = `<input type="checkbox">${tarea}`; //element será tipo input chekbox

    nodo.append(tarea);    //añade a cada fila el texto de la tarea
    document.getElementById("taskList").appendChild(nodo);//añade cada fila a la lista
}







// function agregarTarea() {
//     //Capturar lo que dice que usuario
//     var tarea = document.getElementById("entrada").value;//guarda valor entrada en tarea

//     //Mostrarlo por pantalla
//     const nodo = document.createElement("li");          //esta funcion crea elementos
//     nodo.innerHTML = `<input type="checkbox">${tarea}`; //element será tipo input chekbox

//     const textoNode = document.createTextNode(tarea);   // 
    
//     nodo.appendChild(textoNode);    //añade a cada fila el texto de la tarea
//     document.getElementById("taskList").appendChild(nodo);//añade cada fila a la lista
// }