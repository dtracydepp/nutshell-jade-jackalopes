import { getChats, sendChat, useChats } from "./ChatProvider.js"

const contentTarget = document.querySelector(".chatContainer")
const eventHub = document.querySelector(".container")

export const ChatForm = () => {
    getChats().then(() => {
        const listOfChats = useChats()
        console.log("list of chats:", listOfChats)
        render(listOfChats)
    })
}

const render = () => { //not rendering
    contentTarget.innerHTML = `
    <textarea id="chat--message" placeholder="What Would You Like to Say?"></textarea>
    <button id="sendChat">Send</button>
    `
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "sendChat") {
        const message = document.querySelector("#chat--message").value
        const userId = parseInt(sessionStorage.getItem("activeUser")) //I don't think i need this, because the list of chats is not user specific

        
        const newChat = {
            message,
            userId
        }
        sendChat(newChat)
    }
})