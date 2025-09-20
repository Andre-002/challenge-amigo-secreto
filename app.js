let amigos = [];

function agregarAmigo() { 
    // Agrega el nombre del amigo al arreglo "amigos"
    let nombre = document.querySelector('#amigo').value;
    if (nombre == "") {
        alert("Por favor, inserte un nombre.");
    }
    else {
        amigos.push(nombre);
        console.log(amigos);
        actualizarListaAmigos();
    }   
    document.querySelector('#amigo').value = "";
}      



function actualizarListaAmigos() {
    let lista= document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");//crea un elemento li
        li.textContent = amigos[i];//le asigna el texto del amigo   
        lista.appendChild(li); //agrega el elemento li a la lista ul

    }
}

function sortearAmigo(){
    let resultado = document.getElementById("resultado");
    if (amigos.length > 1){
        let indice = Math.floor(Math.random() * amigos.length);
        //amigos.splice(indice, 1); // Elimina el amigo sorteado del arreglo
        //actualizarListaAmigos(); // Actualiza la lista de amigos en la interfaz
        resultado.innerHTML = `<li>El amigo seleccionado es: ${amigos[indice]}</li>`;
    } else if (amigos.length == 1) {
        alert("Por favor, agrega al menos dos amigos.");
    } else
        alert("No hay amigos para sortear. Por favor, agrega al menos dos amigos.");
}