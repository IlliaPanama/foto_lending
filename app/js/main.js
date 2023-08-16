// const menuBtn = document.querySelector('.nav__burgerBtn');
// const menuOpen = document.querySelector('.nav__burger');


// menuBtn.addEventListener('click' , () => {
//     menuOpen.classList.toggle('burger--open');
// });
const menuBtn = document.querySelector('.nav__burgerBtn');
const menuOpen = document.querySelector('.nav__burger');
const closeBtn = document.querySelector('.nav__burgerCloseBtn');

menuBtn.addEventListener('click', () => {
  menuOpen.classList.toggle('burger--open');
});

closeBtn.addEventListener('click', () => {
  menuOpen.classList.remove('burger--open');
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



//переключатель для табов 
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Удаление класса .active у всех кнопок и контентов
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // Добавление класса .active к текущей кнопке и соответствующему контенту
        button.classList.add("active");
        const targetTab = button.getAttribute("data-tab");
        const targetContent = document.getElementById(targetTab);
        targetContent.classList.add("active");
      });
    });
  });



