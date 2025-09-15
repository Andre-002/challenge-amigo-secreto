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