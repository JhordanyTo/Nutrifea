// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// ===== SMOOTH SCROLL NAV =====
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===== ACCORDION DIAGNÓSTICO =====
document.querySelectorAll('.acord-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.acord-item');
    const body = item.querySelector('.acord-body');
    const isOpen = item.classList.contains('acord-open');

    // Cierra todos
    document.querySelectorAll('.acord-item').forEach(el => {
      el.classList.remove('acord-open');
      el.querySelector('.acord-body').style.maxHeight = null;
    });

    // Abre el clickeado si estaba cerrado
    if (!isOpen) {
      item.classList.add('acord-open');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});

// Abre el primer paso por defecto
const firstAcord = document.querySelector('.acord-item');
if (firstAcord) {
  firstAcord.classList.add('acord-open');
  const firstBody = firstAcord.querySelector('.acord-body');
  firstBody.style.maxHeight = firstBody.scrollHeight + 'px';
}