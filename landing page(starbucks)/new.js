const menuButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuButton.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
});