document.addEventListener('DOMContentLoaded', () => {
  const topBar = document.querySelector('.top-bar');
  const topBarH = topBar.offsetHeight;

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      const scrollToY = target.offsetTop - topBarH;
      window.scrollTo({ top: scrollToY, behavior: 'smooth' });
    });
  });
});
