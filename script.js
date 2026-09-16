document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('track');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nav = document.getElementById('carouselNav');

  // Verificar que los elementos existan antes de ejecutar
  if (!track || !nextBtn || !prevBtn || !nav) return;

  const slides = Array.from(track.children);
  let currentIndex = 0;

  // Crear indicadores (puntos) según la cantidad de imágenes
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToSlide(index));
    nav.appendChild(dot);
  });

  const dots = Array.from(nav.children);

  function moveToSlide(index) {
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }
    track.style.transform = `translateX(-${index * 100}%)`;
    dots[currentIndex].classList.remove('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }

  nextBtn.addEventListener('click', () => moveToSlide(currentIndex + 1));
  prevBtn.addEventListener('click', () => moveToSlide(currentIndex - 1));
});

// --- Lógica para alternar entre Iniciar Sesión y Registro ---
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

if (loginTab && registerTab && loginForm && registerForm) {
  loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
  });

  registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
  });
}