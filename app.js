let amigos = [];

function agregarAmigo() {
  // 1. Capturo el valor
  let nombre = document.getElementById("amigo").value;

  // 2. Valido que no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }  // cerramos el if

  // 3. Actualizar el array
  amigos.push(nombre);

  mostrarAmigos();// Llamamos a la función para mostrar la lista actualizada
  console.log(amigos); // Verás la lista en la consola

  // 4. Limpiar el campo de entrada
  document.getElementById("amigo").value = "";
}

//Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.