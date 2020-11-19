export const Chat = (chatObj, UserObj) => {
    console.log("chat object:", chatObj)
    return `
    <section class="chat">
    <h5 id="${chatObj.user.id}" class="chat--name">User: ${chatObj.user.username}</h5>
    <p class="chat--message">Message: ${chatObj.message}</p>
    <button id="deleteChat--${chatObj.id}">Delete Message</button>
    </section>
    `
}
