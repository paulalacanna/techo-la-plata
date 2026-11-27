// Menú hamburguesa (mobile y tablet).
// Sin JavaScript el menú queda siempre visible, así el sitio funciona igual.
const toggle = document.querySelector('.encabezado__toggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    const abierto = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!abierto));
  });

  // Cerrar el menú al elegir una sección
  document.querySelectorAll('.encabezado__nav a, .encabezado__dona').forEach((enlace) => {
    enlace.addEventListener('click', () => toggle.setAttribute('aria-expanded', 'false'));
  });
}
