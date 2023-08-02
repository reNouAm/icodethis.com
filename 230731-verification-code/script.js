const verification = document.querySelector(".verification-code");
const inputWrapper = document.querySelector(".input-code-wrapper");
const inputMessage = document.querySelector(".input-message");
const inputs = document.querySelectorAll(".input-code");
const confirmButton = document.querySelector(".confirm-button");

function init() {
    verification.innerText = generateCode();
    verification.addEventListener("click", () => {
        const clipboard = verification.innerText;
        navigator.clipboard.writeText(clipboard);
        alert("text copied! now PATE or TYPE it in the confirmation inputs");
    });

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            const currentInput = e.target;
            const nextInput = inputs[index + 1];
            if (currentInput.value.trim() !== "" && nextInput) {
                removeBG(input);
                nextInput.focus();
            }
        });

        input.addEventListener("keyup", (e) => {
            const currentInput = e.target;
            const previousInput = inputs[index - 1];

            if (
                e.key == "Backspace" &&
                currentInput.value === "" &&
                previousInput
            ) {
                removeBG(input);
                currentInput.blur();
                previousInput.focus();
            }
            input.style.border = "initial";
        });

        input.addEventListener("focus", (e) => {
            const currentInput = e.target;
            const previousInput = inputs[index - 1];
            input.classList.remove("filled");
            if (previousInput && previousInput.value === "") {
                currentInput.value = "";
                currentInput.blur();
                previousInput.focus();
            }
        });

        input.addEventListener("paste", (e) => {
            e.preventDefault();
            const pastedCode = e.clipboardData.getData("text/plain");
            const pastedCharacters = pastedCode.split("");
            pastedCharacters.forEach((character, charIndex) => {
                if (inputs[index + charIndex]) {
                    inputs[index + charIndex].value = character;
                }

                if (
                    inputs[index + pastedCharacters.length - 1] &&
                    inputs[index + pastedCharacters.length - 1] !== ""
                ) {
                    inputs[index + pastedCharacters.length - 1].focus();
                }
            });
        });
    });

    confirmButton.addEventListener("click", () => {
        const inputs = document.querySelectorAll(".input-code");
        let insertedChars = "";
        inputs.forEach((input) => {
            insertedChars += input.value;
        });
        if (insertedChars === verification.innerText) {
            success();
        } else {
            fail();
        }
    });
}

function generateCode() {
    let newCode = Math.floor(1000 + Math.random() * 9000);

    return newCode;
}

function removeBG(input) {
    if (input.value === "") {
        input.classList.remove("filled");
    } else if (input.value !== "" && !input.focus()) {
        input.classList.add("filled");
    }
}

function success() {
    inputs.forEach((input, index) => {
        setTimeout(() => {
            input.blur();
            input.style.transition = "all 200ms ease-in";
            input.style.border = "1px solid hsl(120, 51%, 55%)";
        }, index * 100);
    });
    inputMessage.style.display = "none";
}
function fail() {
    inputMessage.style.display = "block";
}

window.addEventListener("DOMContentLoaded", init);
