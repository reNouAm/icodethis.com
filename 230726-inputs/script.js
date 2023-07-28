const root = document.querySelector(':root');
const bodyElement = document.querySelector('body');
const themeElement = document.querySelector('.theme');
const languageElement = document.querySelector('.language');
const inputsMenuElement = document.querySelector('.inputs-menu');
const filterInputsElement = document.querySelector('.filter-inputs');
const searchElement = document.querySelector('.search');
const chevronIconElement = document.querySelector('.dropdown-head > .bx');
const switchElement = document.getElementById('switch');

function init() {
    bodyElement.addEventListener('click', (e) => {
        if (searchElement === document.activeElement) {
            toggle(inputsMenuElement, true);
        } else if (e.target.classList.value === "switch" ||
            e.target.parentElement.classList.value === "switch") {
            if (switchElement.checked) {
                root.style.setProperty('--clr-sw-ball', 'var(--clr-bg)')
                root.style.setProperty('--clr-sw-track', 'var(--clr-accent)')
                root.style.setProperty('--sw-ball-pos', '0px');
            } else {
                root.style.setProperty('--clr-sw-ball', 'var(--clr-accent)')
                root.style.setProperty('--clr-sw-track', 'var(--clr-bg)')
                root.style.setProperty('--sw-ball-pos', '50px');
            }
        } else if (e.target.classList.value === "theme" ||
            e.target.parentElement.classList.value === "theme") {
            toggle(themeElement.querySelector('.theme-dropdown'));
        } else if (e.target.classList.value === "language" ||
            e.target.parentElement.classList.value === "language") {
            toggle(languageElement.querySelector('.language-dropdown'));
        } else {
            if (e.target.classList.contains("remove-filters")) {
                filterInputsElement.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
                    checkbox.checked = false;
                })
            }
            closeModals();
        }
    })

    searchElement.addEventListener('keyup', (e) => {
        let typed = e.target.value;
        inputsMenuElement.querySelectorAll("label").forEach(item => {
            if (item.textContent.toLowerCase().indexOf(typed.toLowerCase()) !== -1) {
                item.parentElement.style.display = "";
            } else {
                item.parentElement.style.display = "none";
            }
        })
    })

    console.log(switchElement.checked)

    function toggle(element, third) {
        document.querySelector('.active')?.classList.remove('active');
        element.classList.toggle('active');

        if (!third) {
            element.addEventListener('click', (e) => {
                if (e.target.classList.contains('dark')) {
                    bodyElement.classList.add('dark-theme')
                } else if (e.target.classList.contains('light')) {
                    bodyElement.classList.remove('dark-theme')
                }
            })
        } else {
            chevronIconElement.classList.replace('bx-chevron-down', 'bx-chevron-up');
            inputsMenuElement.addEventListener('click', () => {
                searchElement.focus();
            })
        }

    }

    function closeModals() {
        document.querySelectorAll('.active').forEach(el => {
            el.classList.remove('active');
        })
        chevronIconElement.classList.replace('bx-chevron-up', 'bx-chevron-down');
    }
}

window.addEventListener("DOMContentLoaded", () => {
    init();
})
