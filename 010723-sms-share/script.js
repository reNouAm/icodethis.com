const linkEl = document.getElementById("link");
const copyLinkEl = document.getElementById("copy_link");
const flagDropEl = document.querySelector(".flags-dropdown");
const flagResEl = document.querySelector(".flags-result");
const data = [
    {
        "code": "RO",
        "dialCode": "+40"
    },
    {
        "code": "CH",
        "dialCode": "+41"
    },
    {
        "code": "JP",
        "dialCode": "+81"
    },
    {
        "code": "US",
        "dialCode": "+1"
    }
];

const flagPop = () => {
    data.forEach((flag, index) => {
        let opt = document.createElement("div");
        let span = document.createElement("span");
        let label = document.createElement("p");
        let emoji = `fi-${flag.code}`;
        opt.classList.add("flag-option");
        opt.addEventListener('click', () => selectFlag(flag));
        if (index === 0) opt.classList.add("selected");
        span.classList.add("fi", `${emoji.toLowerCase()}`);
        label.innerText = flag.dialCode;
        opt.appendChild(span);
        opt.appendChild(label);
        flagResEl.appendChild(opt);
    });
    const selectedEl = document.querySelector(".selected");
    if (selectedEl) {
        let onlyFlag = selectedEl.querySelector("span").cloneNode(true);
        flagDropEl.appendChild(onlyFlag)
    }
}

flagDropEl.addEventListener("click", (e) => {
    flagResEl.style.display = "block";
})

copyLinkEl.addEventListener("click", () => {
    const clipboard = linkEl.innerText;
    navigator.clipboard.writeText(clipboard);
    copyLinkEl.innerText = "Copied!";
    setTimeout(() => { copyLinkEl.innerText = "Copy" }, 1500)
})

const selectFlag = (element) => {
    const span = flagDropEl.querySelector("span");
    span.className = "";
    span.classList.add("fi", `fi-${element.code.toLowerCase()}`);
    flagResEl.style.display = "none";
}
flagPop();
