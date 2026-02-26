export function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const btn = document.getElementById('burger-btn');
  nav.classList.toggle('open');
  btn.classList.toggle('open'); // змінює іконку burger ↔ close
}

export function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('burger-btn').classList.remove('open');
}

export function scrollToSection(sel) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
}

const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const scrollSpy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      active?.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => scrollSpy.observe(s));

// Робимо функції глобальними, щоб onclick у HTML їх бачив
window.toggleMenu = toggleMenu;
window.closeMenu  = closeMenu;
window.scrollToSection  = scrollToSection;