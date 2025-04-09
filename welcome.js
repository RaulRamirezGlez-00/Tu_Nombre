const nombre = localStorage.getItem("nombreUsuario");
const mensajeBienvenida = document.getElementById("mensajeBienvenida");

if (nombre) {
  mensajeBienvenida.textContent = `¡Hola, ${nombre}, bienvenido/a de nuevo. Por favor ve a Index e ingresa tu nombre`;
} 

function borrarNombre() {
  localStorage.removeItem("nombreUsuario");
}