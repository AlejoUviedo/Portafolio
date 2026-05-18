document.addEventListener('DOMContentLoaded', () => {

  // Pointer de precisión reactivo
  const cursor = document.getElementById('custom-cursor');
  
  if (cursor) {
    window.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  }

  // Despliegue de alertas en nodos en desarrollo
  const placeholders = document.querySelectorAll('.js-dev-placeholder, .js-design-placeholder, .js-sec-placeholder');
  const toast = document.getElementById('toast-msg');

  const triggerToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-active');
    
    setTimeout(() => {
      toast.classList.remove('is-active');
    }, 3000);
  };

  placeholders.forEach(element => {
    element.addEventListener('click', () => {
      triggerToast('Módulo en desarrollo — Archivos en proceso de carga');
    });
  });

  // Manejador del envío de contacto
  const submitBtn = document.getElementById('submit-btn');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      // Lógica de validación o envío asíncrono futura
      triggerToast('Mensaje enviado con éxito');
    });
  }

  // Animación básica por scroll para elementos con clase nativa
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  const checkReveal = () => {
    const triggerBottom = window.innerHeight * 0.85;
    
    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  };

  // Inicialización de estilos de animación para mantener el CSS limpio
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  window.addEventListener('scroll', checkReveal);
  checkReveal(); // Ejecución inicial
});