const chat = document.querySelector(".chat");
const cards = document.querySelectorAll(".user-card");
const clickableCards = document.querySelectorAll(".user-card img");
const closeCardButtons = document.querySelectorAll(".card-close-btn");

const init = () => {
    clickableCards.forEach((c, i) => {
        c.addEventListener('click', () => {
            clickCard(c, i);
        })
    } )
    closeCardButtons.forEach((ccb, index) => {
        ccb.addEventListener('click', () => {
            closeCard(ccb, index);
        })
    })
}
const clickCard = (element, index) => {
    const username = element.parentElement.querySelector(".username").innerText;
    const imageUrl = element.getAttribute("src");
    renderChat(username, imageUrl, index);

    const chat = document.querySelector(".chat");
    chat.style.opacity = "1";
}
const closeCard = (element, index) => {
    let parent = element.parentElement;
    closeChat();
    parent.style.display = "none";
}
const closeChat = () => {
    chat.style.opacity = "0";
}
const renderChat = (username, imageUrl, index) => {
    const chatContent = `
<div class="top-bar">
    <h3 class="title">${username}</h3>
    <span class="ugly-close-btn fa fa-times"></span>
</div>
<div class="chat-field">
    <div class="blue-bubbles">
        <div class="bubble-info">
            <p class="username">You</p>
            <span class="time-stamp">13:32</span>
        </div>
        <div class="bubbles">
            <p>Hey!</p>
            <p>Okay, let me know!</p>
        </div>
    </div>
    <div class="new-message-hint">2 new messages</div>
    <div class="gray-bubbles">
        <div class="bubble-info">
            <img src="${imageUrl}" class="user-avatar">
            <p class="username">${username}</p>
            <span class="time-stamp">14:04</span>
        </div>
        <div class="bubbles">
            <p>Hey!</p>
            <p>Ready in 5?</p>
        </div>
    </div>
</div>
<div class="bottom-bar">
    <input type="text" class="message-input" placeholder="Type something..." autofocus>
    <div class="toolbar">
        <div class="left">
            <span class="action-btn fa fa-picture-o" aria-hidden="true"></span>
            <span class="action-btn fa fa-camera" aria-hidden="true"></span>
            <span class="action-btn fa fa-microphone" aria-hidden="true"></span>
        </div>
        <button class="send-btn" aria-hidden="true">Send</button>
    </div>
</div>
    `;
    chat.innerHTML = "";
    chat.innerHTML += chatContent;
    const closeChatButton = document.querySelector(".ugly-close-btn");
    if (closeChatButton) {
        closeChatButton.addEventListener('click', () => {
            closeChat();
        })
    }
    setTimeout(() => {
        document.querySelectorAll(".new-notification-hint")[index].style.display = "none";
        document.querySelector(".new-message-hint").style.display = "none";
    }, 1000)
}
init()
