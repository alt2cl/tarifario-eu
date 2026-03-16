/**
 * Script transversal — Tarifario Grupo Emisoras Unidas Digital
 * Usado por: web.html, streaming.html, brand.html, push-notification.html, social-media.html,
 * produccion-audiovisual.html, content-marketing.html, influencers.html y cualquier subpágina
 * que comparta el mismo header/menú y AOS.
 *
 * - Inicializa AOS (Animate On Scroll) para elementos con data-aos.
 * - Menú de navegación: abrir/cerrar, cambio de ícono (hamburguesa / X), cierre al clic en enlace o fuera.
 */
document.addEventListener('DOMContentLoaded', function () {
  // AOS: animaciones al hacer scroll (offset, duración, una sola vez)
  if (typeof AOS !== 'undefined') {
    AOS.init({ offset: 40, duration: 400, once: true });
  }

  // Menú tarifario: toggle y cierre
  var toggle = document.getElementById('tarifario-nav-toggle');
  var nav = document.getElementById('tarifario-nav');
  if (!toggle || !nav) return;

  function openMenu() {
    nav.classList.add('tarifario-nav--open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menú');
    var icon = toggle.querySelector('.tarifario-nav__icon');
    if (icon) {
      icon.classList.remove('bi-list');
      icon.classList.add('bi-x');
    }
  }

  function closeMenu() {
    nav.classList.remove('tarifario-nav--open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    var icon = toggle.querySelector('.tarifario-nav__icon');
    if (icon) {
      icon.classList.add('bi-list');
      icon.classList.remove('bi-x');
    }
  }

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('tarifario-nav--open')) closeMenu();
    else openMenu();
  });

  nav.querySelectorAll('.tarifario-nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  document.addEventListener('click', function (e) {
    if (nav.classList.contains('tarifario-nav--open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });
});
