const posts = [
    {
        bannerUrl: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        articleTitle: "How to Build Trust at Work",
        articleBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugit unde quaerat ea ad distinctio voluptas? Magni, amet nulla, aliquid excepturi nam molestias minus ullam distinctio, ipsam quas repellat tenetur.",
        authorName: "Nina Ford",
        authotJob: "Manager",
        authorImage: "https://this-person-does-not-exist.com/img/avatar-gen11316cc853bc9d9006b3a2704c0b9117.jpg",
        date: "8 April"
    },
    {
        bannerUrl: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        articleTitle: "How to Get Up and Go Forward",
        articleBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugit unde quaerat ea ad distinctio voluptas? Magni, amet nulla, aliquid excepturi nam molestias minus ullam distinctio, ipsam quas repellat tenetur.",
        authorName: "Laura Reeves",
        authotJob: "Manager",
        authorImage: "https://this-person-does-not-exist.com/img/avatar-genc1d8146b54e53a36af474f7b7e73ca91.jpg",
        date: "8 April"
    },
    {
        bannerUrl: "https://images.unsplash.com/photo-1433878455169-4698e60005b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        articleTitle: "Accomplish Great Things In Your Life",
        articleBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugit unde quaerat ea ad distinctio voluptas? Magni, amet nulla, aliquid excepturi nam molestias minus ullam distinctio, ipsam quas repellat tenetur.",
        authorName: "Nina Ford",
        authotJob: "Manager",
        authorImage: "https://this-person-does-not-exist.com/img/avatar-gen1195ad144ee30669a0276d32d0d0b617.jpg",
        date: "8 April"
    }
]

function init() {
    const appElement = document.createElement('div');
    appElement.classList.add('app');
    document.querySelector('body').appendChild(appElement);
    posts.forEach((post, index) => {
        const cardElement = document.createElement('div');
        const bannerElement = document.createElement('div');
        const bannerImgElement = document.createElement('img');
        const articleElement = document.createElement('div');
        const articleHeadElement = document.createElement('h3');
        const articleBodyElement = document.createElement('div');
        const authorElement = document.createElement('div');
        const authorImgElement = document.createElement('img');
        const authorInfoElement = document.createElement('div');
        const authorInfoNameElement = document.createElement('p');
        const authorInfoJobElement = document.createElement('p');
        const dateElement = document.createElement('p');

        cardElement.classList.add('card');
        bannerElement.classList.add('banner');
        bannerImgElement.setAttribute('src', `${post.bannerUrl}`)
        articleElement.classList.add('article');
        articleHeadElement.classList.add('head');
        articleBodyElement.classList.add('body');
        authorElement.classList.add('author');
        authorImgElement.setAttribute('src', `${post.authorImage}`)
        authorInfoElement.classList.add('info');
        authorInfoNameElement.classList.add('name');
        authorInfoJobElement.classList.add('job');
        dateElement.classList.add('date');
        (index == 1) ? cardElement.classList.add('new') : cardElement.classList.remove('new');

        articleHeadElement.innerText = post.articleTitle;
        articleBodyElement.innerText = post.articleBody;
        authorInfoNameElement.innerText = post.authorName;
        authorInfoJobElement.innerText = post.authotJob;
        dateElement.innerText = post.date;

        bannerElement.appendChild(bannerImgElement);
        articleElement.append(articleHeadElement, articleBodyElement);
        authorInfoElement.append(authorInfoNameElement, authorInfoJobElement);
        authorElement.append(authorImgElement, authorInfoElement, dateElement);

        cardElement.append(bannerElement, articleElement, authorElement);

        appElement.appendChild(cardElement);
    })
}

window.addEventListener("DOMContentLoaded", () => {
    init();
})