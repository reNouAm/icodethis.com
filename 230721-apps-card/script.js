const appsElement = document.querySelector('.apps');
const apps = [
    {
        name: "Slack",
        iconUrl: "https://cdn.freebiesupply.com/logos/large/2x/slack-1-logo-png-transparent.png"
    },
    {
        name: "Trello",
        iconUrl: "https://cdn.icon-icons.com/icons2/3041/PNG/512/trello_logo_icon_189227.png"
    },
    {
        name: "RealtieBoard",
        iconUrl: "https://super-monitoring.com/blog/wp-content/uploads/2016/10/realtimeboard.png"
    },
    {
        name: "Jira",
        iconUrl: "https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png"
    },
    {
        name: "Icon Finder",
        iconUrl: "https://www.iconfinder.com/static/img/favicons/favicon-194x194.png?bf2736d2f8"
    },
    {
        name: "DropBox",
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/1101px-Dropbox_Icon.svg.png"
    }
]

function init() {
    apps.forEach((app, index) => {
        const appElement = document.createElement('div');
        const imgElement = document.createElement('img');
        const nameElement = document.createElement('div');

        appElement.classList.add('app');
        imgElement.setAttribute('src', `${app.iconUrl}`);
        nameElement.classList.add('app-name');
        nameElement.innerText = app.name;

        appElement.appendChild(imgElement);
        appElement.appendChild(nameElement);
        appsElement.appendChild(appElement);
    })
}


window.addEventListener("DOMContentLoaded", () => {
    init();
})