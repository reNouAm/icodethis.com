const elements = {
    displaySection: document.querySelector(".info__display"),
    editSection: document.querySelector(".info__edit"),
    roundButtons: document.querySelectorAll(".round"),
    saveButton: document.querySelector(".save__edit"),
    cancelButton: document.querySelector(".cancel__edit"),
    type: document.getElementById("type"),
    areaSize: document.getElementById("areaSize"),
    duration: document.getElementById("duration"),
};

let originalType, originalSize, originalDuration;
let isCanceled = false;

function init() {
    displayInfo();

    elements.saveButton.addEventListener("click", save);
    elements.cancelButton.addEventListener("click", () =>
        closeEditSection(true)
    );
    elements.roundButtons.forEach((button) => {
        button.addEventListener("click", () => sectionsOperation(button));
    });
}

function save() {
    originalType = elements.type.value;
    originalSize = elements.areaSize.value;
    originalDuration = elements.duration.value;

    displayInfo();
    closeEditSection();
}

function displayInfo() {
    const { type, areaSize, duration } = elements;
    document.querySelector(".type .value").textContent = type.value;
    document.querySelector(
        ".area__size .value"
    ).textContent = `${areaSize.value} m2`;
    document.querySelector(".selling__estimate .value").textContent =
        duration.value;
}

function sectionsOperation(button) {
    const { displaySection, editSection } = elements;
    if (button.classList.contains("edit")) {
        displaySection.classList.replace("show", "hidden");
        editSection.classList.replace("hidden", "show");
    } else {
        closeEditSection();
    }
}

function closeEditSection(isCanceled) {
    if (isCanceled) {
        elements.type.value = originalType;
        elements.areaSize.value = originalSize;
        elements.duration.value = originalDuration;
    }
    const { displaySection, editSection } = elements;
    displaySection.classList.replace("hidden", "show");
    editSection.classList.replace("show", "hidden");
}

init();
