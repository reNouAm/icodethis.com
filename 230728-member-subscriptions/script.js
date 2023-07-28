const rootElement = document.querySelector(':root');
const sliderElement = document.querySelector('.slider');
const slideButtons = document.querySelectorAll('[data-slider-button]');
const creators = [
    {
        name: "Ludwig Lagos",
        job: "Illustrator",
        imageUrl: "https://avatars.dzeninfra.ru/get-zen_doc/5262161/pub_6280ddf194ad955f70d6220d_6280de06cb51c46548777205/scale_1200"
    },
    {
        name: "Nina Valentine",
        job: "3D Artist",
        imageUrl: "https://this-person-does-not-exist.com/img/avatar-gen9cb1271e704a783ca101839714861df8.jpg"
    },
    {
        name: "Carolina Vargas",
        job: "Illustrator",
        imageUrl: "https://this-person-does-not-exist.com/img/avatar-gen3495f7cb70b762a85070932e34a1ae84.jpg"
    },
    {
        name: "Jacob Gomez",
        job: "Back-end Developer",
        imageUrl: "https://this-person-does-not-exist.com/img/avatar-genfbb23d2166924a2a758f3896d3416256.jpg"
    },
    {
        name: "Hugh Green",
        job: "Product Manager",
        imageUrl: "https://this-person-does-not-exist.com/img/avatar-gen5d591d261193ea89252c04a1abc638a8.jpg"
    },
    {
        name: "Shierly Wann",
        job: "Code Review",
        imageUrl: "https://this-person-does-not-exist.com/img/avatar-gen1133c3a749c872bb62f20ea5d91735a4.jpg"
    }
]

function init() {
    let creatorsElement;
    creators.forEach((element, index) => {
        if (index < 3) {
            creatorsElement = document.querySelector('.creators.one');
        } else {
            creatorsElement = document.querySelector('.creators.two');
        }
        const creatorElement = document.createElement('div');
        const imageWrapperElement = document.createElement('div');
        const imgElement = document.createElement('img');
        const nameElement = document.createElement('h4');
        const jobElement = document.createElement('p');
        const buttonElement = document.createElement('button');

        creatorElement.classList.add('creator');
        imageWrapperElement.classList.add('icon');
        imgElement.setAttribute('src', `${element.imageUrl}`);
        nameElement.classList.add('name');
        jobElement.classList.add('job');
        buttonElement.classList.add('action-button');

        nameElement.textContent = element.name;
        jobElement.textContent = element.job;
        buttonElement.textContent = "View content";

        imageWrapperElement.appendChild(imgElement);
        creatorElement.append(imageWrapperElement, nameElement, jobElement, buttonElement);
        creatorsElement.appendChild(creatorElement);
    })
    slideButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (sliderElement.scrollLeft === 0) {
                sliderElement.scrollLeft = sliderElement.scrollLeftMax;
            } else {
                sliderElement.scrollLeft = 0;
            }
        })
    })
}
window.addEventListener("DOMContentLoaded", () => {
    init();
})