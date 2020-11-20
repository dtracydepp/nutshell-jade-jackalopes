//Author: Patrick Stewart
//Purpose: Create the form which will save new Chats to DOM

import { getChats, sendChat, useChats } from "./ChatProvider.js"

//designates target area where chats will be sent
const contentTarget = document.querySelector(".chatFormContainer")
const eventHub = document.querySelector(".container")

//will be called in Nutshell.js, holds Chat form
export const ChatForm = () => {
    getChats().then(() => {
        const listOfChats = useChats()
        console.log("list of chats:", listOfChats)
        render(listOfChats)
    })
}

const render = () => {
    contentTarget.innerHTML = `
    <textarea id="chat--message" placeholder="What Would You Like to Say?"></textarea>
    <button id="sendChat">Send</button>
    `
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "sendChat") {
        const message = document.querySelector("#chat--message").value
       const userId = parseInt(sessionStorage.getItem("activeUser"))
        
        const newChat = {
            message,
            userId
        }
        sendChat(newChat)
        ChatForm()
    }
})