const menuBtn = document.querySelector('.nav__burgerBtn');
const menuOpen = document.querySelector('.nav__burger');


menuBtn.addEventListener('click' , () => {
    menuOpen.classList.toggle('burger--open');
});