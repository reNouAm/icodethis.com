const root = document.querySelector(":root");
const tagBox = document.querySelector(".tagsbox");
const tagInput = document.getElementById("taginput");
const categoryButton = document.querySelector(".category-button");
const categoryOptions = document.querySelector(".category-options");
const options = categoryOptions.querySelectorAll("a");
const popUp = document.querySelector(".pop-up");
const examples = document.querySelectorAll(".hint span");

let tags = [];
let progressStart = false;

function init() {
    tagsLoad();
    setTimeout(() => {
        progress();
    }, 500);
    tagBox.addEventListener("click", () => tagInput.focus());
    tagInput.addEventListener("keyup", tagInsert);
    categoryButton.addEventListener("click", categoryToggle);
    options.forEach((option) => {
        option.addEventListener("click", selected);
    });
    examples.forEach((tag) => {
        tag.addEventListener("click", () => {
            tagBox.querySelectorAll("a").forEach((a) => a.remove());
            !tags.includes(tag.textContent)
                ? tags.push(tag.textContent)
                : console.log(tags);
            init();
        });
    });
}

function tagInsert(e) {
    if (e.key === "Enter" || e.key === ",") {
        tagBox.querySelectorAll("a").forEach((a) => a.remove());
        let tag = e.target.value.replace(",", "");
        if (tag.length >= 1 && !tags.includes(tag)) {
            tag.split(",").forEach((t) => {
                tags.push(t.trim());
            });
        }
        tagInput.value = "";
        init();
    }
}

function tagsLoad() {
    tags.forEach((tag) => {
        const tagElement = document.createElement("a");
        tagElement.classList.add("tag");
        tagElement.textContent = tag;
        tagElement.addEventListener("click", (e) => {
            tagRemove(e, tag);
        });
        tagElement.addEventListener("mouseover", tagHoverIn);
        tagElement.addEventListener("mouseout", (e) => {
            tagHoverOut(e, tag);
        });
        tagBox.insertBefore(tagElement, tagInput);
    });
}

function tagHoverIn(e) {
    e.target.textContent = "About to be deleted";
}
function tagHoverOut(e, tag) {
    e.target.textContent = tag;
}

function tagRemove(e, tag) {
    let index = tags.indexOf(tag);
    tags.splice(index, 1);
    e.target.remove();
}

function selected(e) {
    categoryButton.textContent = e.target.textContent;
    categoryToggle();
}

function categoryToggle() {
    categoryOptions.classList.toggle("hidden");
    categoryButton.classList.toggle("active");
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
                root.style.setProperty("--progress", `${progressWent}%`);
            }
        }
    }
    setTimeout(() => {
        progressStart = false;
        popUp.classList.add("dropout");
    }, 6500);
}

window.addEventListener("DOMContentLoaded", () => {
    init();
});
