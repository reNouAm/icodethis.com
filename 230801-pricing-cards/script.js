const body = document.querySelector("body");
const themeButton = document.querySelector(".theme-switch");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circles = [];

class Circle {
    constructor(x, y, radius, color, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
            this.dx = -this.dx;
        }
        if (
            this.y - this.radius <= 0 ||
            this.y + this.radius >= canvas.height
        ) {
            this.dy = -this.dy;
        }
    }
}
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach((circle) => {
        circle.update();
        circle.draw();
    });
}

function init() {
    for (let i = 0; i < 3; i++) {
        const radius = Math.floor(Math.random() * (140 - 100 + 1) + 100);
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        let color;
        switch (i) {
            case 0:
                color = "rgb(183, 143, 254)";
                break;
            case 1:
                color = "rgb(254, 178, 193)";
                break;
            case 2:
                color = "rgb(196, 210, 254)";
                break;
        }
        const dx = (Math.random() - 0.4) * 1;
        const dy = (Math.random() - 0.4) * 1;

        circles.push(new Circle(x, y, radius, color, dx, dy));
    }

    animate();

    themeButton.addEventListener("click", () => {
        const icon = themeButton.querySelector("i");
        body.classList.toggle("dark-mode");
        icon.classList.contains("bx-moon")
            ? icon.classList.replace("bx-moon", "bx-sun")
            : icon.classList.replace("bx-sun", "bx-moon");
    });
}

init();
