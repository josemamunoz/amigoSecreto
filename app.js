// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigoSecreto = "";
let indicesSorteados = [];

function agregarAmigo() {
  let integrante = document.getElementById("amigo").value;

  if (integrante == "") {
    // Validar la entrada
    alert("Por favor, inserte un nombre.");
  } else {
    if (amigos.includes(integrante)) {
      alert("Tu amigo ya se encuentra en tu lista");
    } else {
      // Actualizar el array de amigos
      amigos.push(integrante);
      crearElementoLista(integrante, "listaAmigos");
    }
  }
  // Limpiar el campo de entrada
  document.getElementById("amigo").value = "";
  return;
}

function crearElementoLista(nombre, id) {
  // Para cada amigo, crea un nuevo elemento de lista
  let ul = document.getElementById(id);
  //Obtener el elemento de la lista
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(nombre));
  ul.appendChild(li);
}

function sortearAmigo() {
  // Validar que haya amigos disponible
  document.getElementById("resultado").innerHTML = "";
  if (amigos.length > 0) {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    if (indicesSorteados.includes(indiceAleatorio)) {
      crearElementoLista(amigos[indiceAleatorio], "resultado");
    } else {
      crearElementoLista(amigos[indiceAleatorio], "resultado");
      indicesSorteados.push(indiceAleatorio);
    }
  } else {
    alert("No hay amigos en tu lista");
  }
  // Generar un indice aleatorio
  // Obtener el nombre sorteado
  // Mostrar el resultado
  return;
}
