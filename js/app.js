import '../components/espe-card.js';
import '../components/espe-filter.js';
import '../components/espe-list.js';
import '../components/espe-modal.js';
import '../components/my-navbar.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Aplicación PWA lista ✅');

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./js/service-worker.js')
      .then(() => console.log('Service Worker registrado'))
      .catch(err => console.error('Error registrando Service Worker:', err));
  }

  const sections = document.querySelectorAll('.section');
  const navbar = document.querySelector('my-navbar');

  navbar.addEventListener('navchange', e => {
    const id = e.detail;
    sections.forEach(section => {
      section.classList.toggle('hidden', section.id !== id);
      section.classList.toggle('visible', section.id === id);
    });
  });

  const filter = document.querySelector('espe-filter');
  const list = document.querySelector('espe-list');

  filter.addEventListener('filterchange', e => {
    list.filterText = e.detail;
  });
});
