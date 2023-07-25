const body = document.querySelector('body');
const scheme = document.querySelector('.scheme span');
const submitButton = document.querySelectorAll('.submit');

scheme.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    (body.classList.contains('dark-mode')) ? scheme.innerText = "light" : scheme.innerText = "dark";
})
submitButton.forEach(submit => {
    submit.addEventListener('click', () => {
        if (submit.classList.contains('submitted')) {
            submit.textContent = "SUBMIT";
            
        } else {
            submit.textContent = "SUBMITTED";
        }
        submit.classList.toggle('submitted');
    })
})
