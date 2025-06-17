// /src/scripts/aos-init.js
import AOS from 'aos';
import 'aos/dist/aos.css';

// Función para inicializar AOS
function initAOS() {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    // Configuraciones adicionales
    offset: 120,
    delay: 0,
    easing: 'ease-in-out',
  });
}

// Inicializar AOS cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAOS);
} else {
  initAOS();
}

// Re-inicializar AOS después de navegación SPA (si la usas)
document.addEventListener('astro:page-load', initAOS);