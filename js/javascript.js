// 🔘 Scroll suave al contacto


  // 👁️ Detectar cuando las habilidades entren en pantalla
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.4
  });
  
  document.querySelectorAll('.card-habilidad').forEach(card => {
    observer.observe(card);
  });
  


  // Efecto de entrada animada para las cards
const portafolioCards = document.querySelectorAll('.card-categoria');

const animarCards = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

portafolioCards.forEach(card => animarCards.observe(card));


// ✨ Flotar cards con movimiento del mouse
const cards = document.querySelectorAll('.card-categoria');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // posición X dentro de la card
    const y = e.clientY - rect.top;  // posición Y dentro de la card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});


// Animar servicios al hacer scroll
const serviciosCards = document.querySelectorAll('.card-servicio');

const observerServicios = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animado-servicio');
    }
  });
}, {
  threshold: 0.3
});

serviciosCards.forEach(card => observerServicios.observe(card));



// 📩 JS para manejar el envío del formulario
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Aquí podrías integrar EmailJS, Formspree o backend propio
      alert("¡Mensaje enviado exitosamente!");
  
      form.reset();
    });
  });



  // 📦 Archivo: javascript.js