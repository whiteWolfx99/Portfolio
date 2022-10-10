const navbarContainer = document.getElementById('Navbar-mob');
const showNavbar = document.getElementById('header-hamburgerrrs');
const closeNavbars = document.getElementById('X-sign');
const PoNavigation = document.getElementById('navigation-item-po');
const AbNavigation = document.getElementById('navigation-item-ab');
const CoNavigation = document.getElementById('navigation-item-co');

function openNavbar() {
  navbarContainer.classList.remove('hidden');
  showNavbar.classList.add('hidden');
}

function closeNavbar() {
  navbarContainer.classList.add('hidden');
  showNavbar.classList.remove('hidden');
}

showNavbar.addEventListener('click', openNavbar);
closeNavbars.addEventListener('click', closeNavbar);
PoNavigation.addEventListener('click', closeNavbar);
AbNavigation.addEventListener('click', closeNavbar);
CoNavigation.addEventListener('click', closeNavbar);