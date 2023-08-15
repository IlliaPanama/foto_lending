const menuBtn = document.querySelector('.nav__burgerBtn');
const menuOpen = document.querySelector('.nav__burger');


menuBtn.addEventListener('click' , () => {
    menuOpen.classList.toggle('burger--open');
});



const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        const tabId = button.getAttribute("data-tab");
        tabContents.forEach(content => {
            content.classList.remove("active");
        });
        document.getElementById(tabId).classList.add("active");
    });
});




