//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto

let amigos = [];

//agregarán amigos a una lista visible al hacer clic en "Adicionar".

function agregarAmigo () {
    let amigoNombre = document.getElementById("amigo"); //Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
        if (amigoNombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
let lista = document.getElementById("listaAmigos"); //Se obtiene la lista de amigos del HTML 
}


//Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.