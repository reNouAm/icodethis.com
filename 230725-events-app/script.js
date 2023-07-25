const root = document.querySelector(':root');
const appElement = document.querySelector('.app');
const horizontalSlider = document.querySelector('.highlights-wrapper');
const eventsGalleryElement = document.querySelector('.events-gallery');
const verticalSlider = document.querySelector('.events');
const hintElement = document.querySelector('.hint');
const clockElement = document.querySelector('.center');

const offsetLeft = horizontalSlider.offsetLeft - appElement.offsetLeft;
const offsetTop = verticalSlider.offsetTop - horizontalSlider.offsetTop - appElement.offsetTop;
let isDown = false;
let anchorX;
let scrollLeft;
let scrollEvent = false;
let progressStart = false;
let date = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: true });

const events = [
    main = [
        {
            name: "World Puppet Carnival in Kuching",
            date: {
                start: "16 Aug",
                end: "19 Aug"
            },
            imageUrl: "https://nebula.wsimg.com/8f576fd7ba677cb27cf634589deb87ef?AccessKeyId=4210A4C07862F3BC5CF8&disposition=0&alloworigin=1"
        },
        {
            name: "33rd Sabah Annual Art",
            date: {
                start: "2 Sep",
                end: "5 Sep"
            },
            imageUrl: "https://images.unsplash.com/photo-1519940640025-75fdf32010d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        }
    ],
    highlight = [
        {
            name: "Rainforest World Music Festival",
            date: {
                start: "13 Jul",
                end: "18 Jul"
            },
            imageUrl: "https://images.unsplash.com/flagged/photo-1564134204899-4adebaf1adb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
        },
        {
            name: "Kuala Lumpur Fashion Week 2018",
            date: {
                start: "17 Jul",
                end: "24 Jul"
            },
            imageUrl: "https://images.unsplash.com/photo-1570771887955-9d20fd91403e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
        },
        {
            name: "Malaysia Coffee Fest",
            date: {
                start: "14 Aug",
                end: "18 Aug"
            },
            imageUrl: "https://images.unsplash.com/photo-1604326531570-2689ea7ae287?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
        }
    ]
]

function init() {
    createEventsElements();
    horizontalSlider.addEventListener('mousedown', (e) => mousedown(e, "horizontal"));
    verticalSlider.addEventListener('mousedown', (e) => mousedown(e, "vertical"));
    horizontalSlider.addEventListener('mouseleave', () => mouseleave("horizontal"));
    verticalSlider.addEventListener('mouseleave', () => mouseleave("vertical"))
    horizontalSlider.addEventListener('mouseup', () => mouseup("horizontal"));
    verticalSlider.addEventListener('mouseup', () => mouseup("vertical"))
    horizontalSlider.addEventListener('mousemove', (e) => mousemove(e, "horizontal"));
    verticalSlider.addEventListener('mousemove', (e) => mousemove(e, "vertical"));
    clockElement.innerText = date;
}

function mousedown(e, direction) {
    isDown = true;
    if (direction === "horizontal") {
        horizontalSlider.classList.add('active');
        scrollLeft = horizontalSlider.scrollLeft;
        anchorX = e.pageX - offsetLeft;
    } else if (direction === "vertical") {
        verticalSlider.classList.add('active');
        scrollLeft = verticalSlider.scrollTop;
        anchorX = e.pageY - offsetTop;
    }
}

function mouseleave(direction) {
    isDown = false;
    (direction === "horizontal") ? horizontalSlider.classList.remove('active') : verticalSlider.classList.remove('active');
}

function mouseup(direction) {
    isDown = false;
    (direction === "horizontal") ? horizontalSlider.classList.remove('active') : verticalSlider.classList.remove('active');
}

function mousemove(e, direction) {
    let distance, x;
    if (!isDown) return;
    e.preventDefault();

    if (direction === "horizontal") {
        x = e.pageX - offsetLeft;
        distance = x - anchorX;
        horizontalSlider.scrollLeft = scrollLeft - distance;
    } else if (direction === "vertical") {
        x = e.pageY - offsetTop;
        distance = x - anchorX;
        verticalSlider.scrollTop = scrollLeft - distance;
    }
}

function scrollOff() {
    hintElement.classList.remove('scroll-on');
    scrollEvent = false;
}
function progress() {
    if (!progressStart) {
        progressStart = true;
        let progressWent = 1;
        let inter = setInterval(start, 50);
        function start() {
            if (progressWent >= 100) {
                clearInterval(inter);
                progressStart = false;
            } else {
                progressWent++;
                root.style.setProperty('--progress', `${progressWent}%`);
            }
        }
    }
    setTimeout(() => {
        scrollOff();
    }, 5000)
}
onwheel = () => {
    if (!scrollEvent) {
        hintElement.classList.add('scroll-on');
        scrollEvent = true;
        progress();
    }
}

function createEventsElements() {
    highlight.forEach(highlight => {
        const highlightImageElement = document.createElement('img');
        const highlightDateElement = document.createElement('p');
        const highlightNameElement = document.createElement('p');
        const eventInfoElement = document.createElement('div');
        const eventHighlightElement = document.createElement('div');

        highlightImageElement.setAttribute('src', `${highlight.imageUrl}`);
        highlightDateElement.classList.add('date');
        highlightDateElement.textContent = highlight.date.start + " - " + highlight.date.end;
        highlightNameElement.classList.add('name');
        highlightNameElement.textContent = highlight.name;
        eventInfoElement.classList.add('event-info');
        eventHighlightElement.classList.add('event-highlight');

        eventInfoElement.append(highlightDateElement, highlightNameElement);
        eventHighlightElement.append(eventInfoElement, highlightImageElement);
        eventsGalleryElement.appendChild(eventHighlightElement);
    })

    main.forEach(event => {
        const imageEventElement = document.createElement('img');
        const imageEventWrapperElement = document.createElement('div');
        const dateEventElement = document.createElement('p');
        const nameEventElement = document.createElement('h3');
        const eventElement = document.createElement('div');

        imageEventElement.setAttribute('src', `${event.imageUrl}`);
        imageEventWrapperElement.classList.add('image');
        dateEventElement.classList.add('date');
        nameEventElement.classList.add('name');
        eventElement.classList.add('event');

        dateEventElement.textContent = event.date.start + " - " + event.date.end;
        nameEventElement.textContent = event.name;

        imageEventWrapperElement.appendChild(imageEventElement);
        eventElement.append(nameEventElement, dateEventElement, imageEventWrapperElement);
        verticalSlider.appendChild(eventElement);
    })
}

window.addEventListener("DOMContentLoaded", () => {
    init();
})