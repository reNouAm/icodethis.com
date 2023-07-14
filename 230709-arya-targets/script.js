const root = document.querySelector(':root');
const accountButton = document.querySelector('.account-button');
const accountList = document.querySelector('.account-list');
const listProgress = document.querySelector('.list-progress');
const progressValue = document.querySelector('.value');
const undone = document.getElementById('undoneTasks');
const finished = document.querySelector('.finished .tasks');

const circleIco = "fa-circle-o";
const checkIco = "fa-check";

accountButton.addEventListener('click', () => {
    accountList.classList.add('opened');
    document.querySelector('body').addEventListener('click', (e) => {
        if (!e.target.classList.contains('account-button')) {
            accountList.classList.remove('opened');
        }
    })
    setTimeout(() => {
        accountList.classList.remove('opened');
    }, 3000)
})

const init = () => {
    updateProgress();
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(t => {
        let check = t.classList.contains('done');
        if (!check) {
            t.querySelector('span').classList.add(circleIco)
        } else if (check) {
            t.querySelector('span').classList.add(checkIco)
        }
        t.querySelector('span').addEventListener('click', () => {
            let check = t.classList.contains('done');
            if (!check) {
                t.querySelector('span').classList.replace(circleIco, checkIco);
                t.classList.add("done");
            } else {
                t.querySelector('span').classList.replace(checkIco, circleIco);
                t.classList.remove("done");

            }
            updateProgress();
        })
    })
}

const updateProgress = () => {
    const tasks = document.querySelectorAll('.task').length;
    const doneTasks = document.querySelectorAll('.done').length;
    const todoTasks = tasks - doneTasks;
    let degree = 360 * doneTasks / tasks;

    root.style.setProperty('--deg', `${degree}deg`);
    if (todoTasks === 0) {
        progressValue.innerText = "✔";
        progressValue.style.color = "green";
    } else {
        progressValue.innerText = todoTasks;
    }
}

init();
