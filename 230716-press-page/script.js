const toggleNav = document.querySelector(".toggle-nav");
const navbar = document.querySelector(".nav-bar");

toggleNav.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
    (toggleNav.classList.contains('bx-menu')) ? toggleNav.classList.replace('bx-menu', 'bx-x') : toggleNav.classList.replace('bx-x', 'bx-menu');
    (!navbar.classList.contains('hidden')) ? document.querySelector('body').style.overflow = "hidden" : document.querySelector('body').style.overflow = "auto";

})