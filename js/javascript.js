// 🔘 Scroll suave al contacto

  // 👁️ Detectar cuando las habilidades entren en pantalla

  


  // Efecto de entrada animada para las cards
  const cards = document.querySelectorAll('.card-categoria');

  const animarCards = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll
          ? entry.target.querySelectorAll('.card-categoria')
          : [entry.target];
  
        cards.forEach((card, i) => {
          setTimeout(() => {
            card.classList.add('visible');
          }, i * 200);
        });
      }
    });
  }, { threshold: 0.3 });
  
  cards.forEach(card => animarCards.observe(card));


// ✨ Flotar cards con movimiento del mouse


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