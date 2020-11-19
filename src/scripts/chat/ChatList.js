import { Chat } from "./ChatHTML.js"
import { deleteMessage, getChats, useChats} from "./ChatProvider.js"


const chatContainer = document.querySelector(".chatContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("chatStateChanged", () => ChatList())
let chats = []

export const ChatList = () => {
    getChats() //getUsers, .map & find
    .then(() => {
        chats = useChats()
    })
    .then(render)
}

const render = () => {
    if (sessionStorage.activeUser) {
    let chatHTMLRepresentation = ""
    for (const chat of chats) {
        chatHTMLRepresentation += Chat(chat) // put this in forEach, don't need for of from line 22
    }
    chatContainer.innerHTML = `
    <h3>Messages:</h3>
    ${chatHTMLRepresentation}
    `
}
}

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteChat")) {
        const [prefix, id] = event.target.id.split("--")
        deleteMessage(id).then(
            () => {
                const deleteMessage = useChats()
                render(deleteMessage)
            }
        )   
    }
})

let users = []
let userChats = []

const getUserChats = (user) => {
    const allChats = userChats.filter(chatMessages => chatMessages.userId === user.id) //no need to filter, need to use forEach 
    return allChats
}

export const getUsername =  username => {
    const userObj = username.map(userChat => {
        return users.find(user => user.id === userChat.userId)
    })
    return userObj
}