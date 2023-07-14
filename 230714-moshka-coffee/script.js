const galleryElements = document.querySelectorAll('.gallery-element');
const buttonLeft = document.querySelector('.left');
const buttonRight = document.querySelector('.right');

let activeIndex = 1;

galleryElements.forEach((element, index) => {
    element.addEventListener('click', () => {
        activeIndex = index + 1;
        activeImage(activeIndex);
    })
})
buttonLeft.addEventListener('click', () => {
    activeIndex--;
    activeImage(activeIndex);
})
buttonRight.addEventListener('click', () => {
    activeIndex++;
    activeImage(activeIndex);
})
function activeImage(index) {
    if (index > galleryElements.length) { activeIndex = 1 };
    if (index < 1) { activeIndex = galleryElements.length };
    document.querySelectorAll('.active')?.[0].classList.remove('active');
    galleryElements[activeIndex-1].classList.add('active')
}