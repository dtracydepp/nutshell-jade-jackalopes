export const Chat = (chatObj, userObj) => {
    console.log("chat object:", chatObj)
    return `
    <section class="chat">
    <h5 id="${userObj.id}" class="chat--name">User: ${userObj.username}</h5>
    <p class="chat--message">Message: ${chatObj.message}</p>
    <button id="deleteChat--${chatObj.id}">Delete Message</button>
    </section>
    `
}

//make line 5 an anchor link