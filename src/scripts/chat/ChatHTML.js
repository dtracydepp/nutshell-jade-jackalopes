export const Chat = (chatObj) => {
    console.log("chat object:", chatObj)
    return `
    <section class="chat">
    <h5 class="chat--name">${chatObj.userId}</h5>
    <p class="chat--message">Message: ${chatObj.message}</p>
    <button id="deleteChat--${chatObj.id}">Delete Message</button>
    </section>
    `
}
