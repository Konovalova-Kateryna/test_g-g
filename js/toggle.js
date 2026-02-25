export function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('burger-btn').classList.toggle('open');
}

export function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('burger-btn').classList.remove('open');
}



export function scrollTo(sel){
    document.querySelector(sel).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}