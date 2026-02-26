const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // спрацьовує один раз
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  document.getElementById('scrollTop')
    .classList.toggle('show', window.scrollY > 400);
});