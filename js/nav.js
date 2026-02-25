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

// Робимо функції глобальними, щоб onclick у HTML їх бачив
window.toggleMenu = toggleMenu;
window.closeMenu  = closeMenu;
window.scrollToSection  = scrollToSection;