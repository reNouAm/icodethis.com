const keeboard = {
    element: {
        keeb: null,
        keesKontainer: null,
        keesRows: [],
        sound: new Audio("https://files.catbox.moe/8vim0r.mp3"),
    },

    properties: {
        capsLock: false,
    },

    init() {
        const rows = ["row-1", "row-2", "row-3", "row-4"];

        document.head.innerHTML +=
            "<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>";

        this.element.keeb = document.createElement("div");
        this.element.keesKontainer = document.createElement("div");

        this.element.keeb.classList.add("keeb");
        this.element.keesKontainer.classList.add("kees");

        rows.forEach((row) => {
            this.element.keesRows = document.createElement("div");
            this.element.keesRows.classList.add(row);

            switch (row) {
                case "row-1":
                    this.element.keesRows.appendChild(this._createRowOneKees());
                    break;
                case "row-2":
                    this.element.keesRows.appendChild(this._createRowTwoKees());
                    break;
                case "row-3":
                    this.element.keesRows.appendChild(
                        this._createRowThreeKees()
                    );
                    break;
                case "row-4":
                    this.element.keesRows.appendChild(
                        this._createRowFourKees()
                    );
                    break;
            }
            this.element.keesKontainer.appendChild(this.element.keesRows);
        });
        this.element.keeb.appendChild(this.element.keesKontainer);
        document.body.appendChild(this.element.keeb);
    },
    _createRowOneKees() {
        const fragment = document.createDocumentFragment();
        const keesRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

        keesRow.forEach((key) => {
            const keeElement = document.createElement("button");
            keeElement.setAttribute("type", "button");
            keeElement.classList.add("kee", "letter");
            keeElement.innerText = key;
            keeElement.addEventListener("click", () => {
                this._sound();
            });
            fragment.appendChild(keeElement);
        });
        return fragment;
    },
    _createRowTwoKees() {
        const fragment = document.createDocumentFragment();
        const keesRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

        keesRow.forEach((key, index) => {
            const keeElement = document.createElement("button");

            keeElement.setAttribute("type", "button");
            keeElement.classList.add("kee", "letter");
            keeElement.innerText = key;
            keeElement.addEventListener("click", () => {
                this._sound();
            });
            fragment.appendChild(keeElement);
        });
        return fragment;
    },
    _createRowThreeKees() {
        const fragment = document.createDocumentFragment();
        const keesRow = [
            "shift",
            "z",
            "x",
            "c",
            "v",
            "b",
            "n",
            "m",
            "backspace",
        ];

        keesRow.forEach((key, index) => {
            const keeElement = document.createElement("button");
            keeElement.setAttribute("type", "button");
            keeElement.classList.add("kee");

            switch (key) {
                case "shift":
                    keeElement.classList.add("L");
                    keeElement.setAttribute("id", "shiftkee");
                    keeElement.innerHTML =
                        "<i class='bx bx-up-arrow-alt' ></i>";
                    break;
                case "backspace":
                    keeElement.classList.add("L");
                    keeElement.setAttribute("id", "backspacekee");
                    keeElement.innerText = "⌫";
                    break;
                default:
                    keeElement.classList.add("letter");
                    keeElement.innerText = key;
                    break;
            }
            keeElement.addEventListener("click", () => {
                this._sound();
            });
            fragment.appendChild(keeElement);
        });
        return fragment;
    },
    _createRowFourKees() {
        const fragment = document.createDocumentFragment();
        const keesRow = ["123", "lang", "mic", "Space", "Search"];

        keesRow.forEach((key) => {
            const keeElement = document.createElement("button");

            keeElement.setAttribute("type", "button");
            keeElement.classList.add("kee");

            switch (key) {
                case "lang":
                    keeElement.classList.add("L");
                    keeElement.setAttribute("id", "langkee");
                    keeElement.innerHTML = "<i class='bx bx-globe'></i>";
                    break;
                case "mic":
                    keeElement.setAttribute("id", "mickee");
                    keeElement.innerHTML = "<i class='bx bx-microphone'></i>";
                    break;
                case "Space":
                    keeElement.setAttribute("id", "spacekee");
                    keeElement.classList.add("XXL");
                    keeElement.innerText = key;
                    break;
                case "Search":
                    keeElement.setAttribute("id", "searchkee");
                    keeElement.classList.add("XL");
                    keeElement.innerText = key;
                    break;
                case "123":
                    keeElement.setAttribute("id", "numkee");
                    keeElement.innerText = key;
                    break;
            }
            keeElement.addEventListener("click", () => {
                this._sound();
            });
            fragment.appendChild(keeElement);
        });
        return fragment;
    },
    _sound() {
        this.element.sound.play();
    },
};

window.addEventListener("DOMContentLoaded", () => {
    keeboard.init();
});
