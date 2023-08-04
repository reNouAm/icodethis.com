const dropdownButton = document.querySelector(".dropdown__button");
const languageMenuButton = document.querySelector(".languages__button");

const dropdownResults = document.querySelector(".dropdown__results");
const languageMenu = document.querySelector(".dropdown__languages");

[dropdownButton, languageMenuButton].forEach((element, index) => {
    element.addEventListener("click", (e) => {
        index === 0
            ? dropdownResults.classList.toggle("hidden")
            : languageMenu.classList.toggle("hidden");
    });
});
