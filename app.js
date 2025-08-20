// Hice un array vacío para guardar los nombres de los amigos
let amigos = [];


// Función que se ejecuta cuando el usuario agrega un nuevo nombre
function agregarAmigo() {
  // Capturé el valor del input con id="amigo" y eliminé espacios extra
  let nombre = document.getElementById("amigo").value.trim();

  // Validé que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre."); // Mensaje de alerta si no hay texto
    return; // Salir de la función sin continuar
  }

  // Agregue el nombre al array de amigos
  amigos.push(nombre);

  // Mostre en consola el estado actual del array (útil para depurar)
  console.log(amigos);

  // Limpie el campo de entrada para que el usuario pueda escribir otro nombre
  document.getElementById("amigo").value = "";

  // Llame a la función que actualiza la lista visual de amigos en pantalla
  mostrarAmigos();
}


// Función que muestra los nombres agregados en la lista HTML
function mostrarAmigos() {
  // Obtenemos el elemento <ul> o <ol> con id="listaAmigos"
  const lista = document.getElementById("listaAmigos");

  // Limpie su contenido para evitar duplicados
  lista.innerHTML = "";

  // Recorremos el array de amigos y creamos un <li> por cada uno
  amigos.forEach(function(amigo) {
    const li = document.createElement("li"); // Cree un nuevo elemento de lista
    li.textContent = amigo; // Le asignamos el nombre como texto
    lista.appendChild(li); // Lo agregamos al contenedor de la lista
  });
}


// Función que selecciona un amigo al azar cuando se presiona el botón de sorteo
function sortearAmigo() {
  // Verifica que haya al menos un nombre en el array
  if (amigos.length === 0) {
    alert("No hay amigos para sortear."); // Mensaje si la lista está vacía
    return; // Salimos de la función
  }

  // Genera un número aleatorio entre 0 y la cantidad de amigos - 1
  let indice = Math.floor(Math.random() * amigos.length);

  // Usa ese índice para obtener el nombre sorteado
  let nombreSorteado = amigos[indice];

  // Buscar el elemento HTML donde se mostrará el resultado del sorteo
  const resultado = document.getElementById("resultado");

  // Insertr el nombre sorteado dentro del elemento, con formato HTML
  resultado.innerHTML = `<li>🎉 El amigo sorteado es: <strong>${nombreSorteado}</strong></li>`;
}
