function guardarNombre() {
  const nombre = document.getElementById("nombreInput").value.trim();

  if (nombre !== "") {
    localStorage.setItem("nombreUsuario", nombre);
  }
}