const donateButton = document.querySelector('.action__button');
const counter = document.getElementById('counter');

function init() {
    donateButton.addEventListener('click', ()=> {
        let count = parseInt(counter.textContent.replace(',', ''));
        count++;
        counter.textContent = count.toLocaleString();
        blink();
    })

    const randomInterval = () => Math.floor(Math.random() * 5) + 1;

    function autoCounter() {
        const count = parseInt(counter.textContent.replace(',', ''));
        const randomIncrease = Math.floor(Math.random() * 5) + 1;
        const newCount = count + randomIncrease;

        counter.textContent = newCount.toLocaleString();
        blink();
    }

    function recurrentFucntion() {
        const randomValue = randomInterval();
        setTimeout(() => {
            autoCounter();
            recurrentFucntion();
        }, randomValue * 1000);
    }

    function blink() {
        counter.classList.add('blinking');
        setTimeout(() => {
            counter.classList.remove('blinking');
        }, 200);
    }

    recurrentFucntion();
}
init();
