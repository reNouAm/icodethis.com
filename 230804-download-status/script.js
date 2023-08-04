const rootElement = document.querySelector(":root");
const cloudBtnElement = document.querySelector(".cloud__button");
const menuElement = document.querySelector(".floating__menu");
const storageProgress = document.querySelector("progress");
const updatingCloudElement = document.querySelector(".updating__cloud");
const updatingSolutionElement = document.querySelector(".updating__solutions");
const totalSpaceElement = document.getElementById("total__space");
const usedSpaceElement = document.getElementById("used__space");

const totalSpace = 1099511627776;
let currentUsed = 256000000000;
const newFileSize = 50000000000;
let isUpdating = false;

function init() {
    storageProgress.setAttribute("max", `${totalSpace}`);
    storageProgress.setAttribute("value", `${currentUsed}`);
    totalSpaceElement.textContent = formatBytes(totalSpace);
    usedSpaceElement.textContent = formatBytes(currentUsed);
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function updatingCloud() {
    const progressText = document.getElementById("percentage");
    if (!isUpdating && menuElement.classList.contains("show")) {
        isUpdating = true;
        resetProgress();
        for (let i = 0; i <= 100; i++) {
            let degree = (360 * i) / 100;
            rootElement.style.setProperty("--deg", `${degree}deg`);
            progressText.textContent = i + "%";
            await sleep(100);
        }
        isUpdating = false;
        updatingCloudElement.classList.add("done");
        updateSolution();
    }
}

async function updateSolution() {
    if (!isUpdating) {
        rootElement.style.setProperty("--animation", "rotate");
        rootElement.style.setProperty("--pie", "black");
        await sleep(2000);
        updatingSolutionElement.classList.add("done");
        updatingSolutionElement.querySelector(".subtitle").textContent = "Done";
        addToStorage();
    }
}

function resetProgress() {
    rootElement.style.setProperty("--pie", "rgb(207,207,207)");
    updatingSolutionElement.classList.add("Waiting...");
    document.querySelectorAll(".done")?.forEach((e, i) => {
        if (i !== 0) {
            e.classList.remove("done");
        }
    });
}

function formatBytes(bytes) {
    const units = ["Bytes", "KB", "MB", "GB", "TB"];
    let i = 0;
    while (bytes >= 1024 && i < units.length - 1) {
        bytes /= 1024;
        i++;
    }
    return bytes.toFixed(2) + " " + units[i];
}

function addToStorage() {
    currentUsed += newFileSize;
    init();
}

cloudBtnElement.addEventListener("click", () => {
    menuElement.classList.toggle("show");
    updatingCloud();
});

init();
