// ============================================================
// GOOGLE ANALYTICS 4 — activo en todas las páginas del sitio
// ============================================================
(function(){
  const GA_ID = 'G-WEW0T9QKKF';  // ⚠️ REEMPLAZA por tu ID de medición
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ window.dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID);
})();

// ============================================================
// TAMARA Consulting — script.js (compartido por todas las páginas)
// ============================================================

// MENÚ MÓVIL
const burger = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    document.body.style.overflow = '';
    burger.setAttribute('aria-expanded', 'false');
  }));
}

// FADE-IN AL HACER SCROLL
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

// AÑO AUTOMÁTICO EN EL FOOTER
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

