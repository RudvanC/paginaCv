// Seleccionar elementos del DOM
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// Agregar evento de clic al menú de hamburguesa
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active"); // Alternar la clase "active"
});