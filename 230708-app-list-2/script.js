const searchBtn = document.querySelector(".search-btn");
const searchInp = document.querySelector(".search-input");
let isFocused = (document.activeElement === searchInp);


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('search-btn')) {
        searchInp.classList.remove('shrinked');
        searchInp.focus();
        searchBtn.style.opacity = "0";
    } else if (!isFocused) {
        searchBtn.style.opacity = "1";
        searchInp.classList.add('shrinked');
    }
})
