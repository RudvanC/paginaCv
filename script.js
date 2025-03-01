// Seleccionar elementos del DOM
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");


// Agregar evento de clic al menú de hamburguesa
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active"); // Alternar la clase "active"
});

// Seleccionamos todos los enlaces dentro del menú
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active"); // Cierra el menú
    });
});


document.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 70) { 
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.addEventListener('scroll', function () {
  const nameNav = document.getElementById('name-nav');
  if (window.scrollY > 70) { 
    nameNav.classList.add('scrolled');
  } else {
    nameNav.classList.remove('scrolled');
  }
});




