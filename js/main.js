menuButton = document.getElementById('menu');
menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('--active');
}
