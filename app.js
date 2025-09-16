// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
function agregarAmigo() { 
    // Agrega el nombre del amigo al arreglo "amigos"
    let nombre = document.querySelector('#amigo').value;
    if (nombre == "") {
        alert("Por favor, inserte un nombre.");
    }
    else {
        amigos.push(nombre);
        console.log(amigos);
    }   
    document.querySelector('#amigo').value = "";
}      

function actualizarListaAmigos() {
    let lista= document.getElementById("lista-amigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");//crea un elemento li
        li.textContent = amigos[i];//le asigna el texto del amigo   
        lista.appendChild(li); //agrega el elemento li a la lista ul
    }
}