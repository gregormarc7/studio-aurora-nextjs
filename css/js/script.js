// js/script.js
document.querySelectorAll('.tabs a').forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    // označi aktivni gumb
    document.querySelectorAll('.tabs a').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    // prikaži ustrezno vsebino
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelector(tab.getAttribute('href')).classList.add('active');
  });
});
