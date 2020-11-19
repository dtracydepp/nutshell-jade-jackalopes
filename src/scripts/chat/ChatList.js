import { Chat } from "./ChatHTML.js"
import { deleteMessage, getChats, getUsers, useChats, useUsers } from "./ChatProvider.js"


const chatContainer = document.querySelector(".chatContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("chatStateChanged", () => ChatList())

export const ChatList = () => {
    getChats() 
    .then(getUsers)
    .then(() => {
        const chats = useChats()
        const users = useUsers()
        render(chats, users)
    })
}

const render = (allChats, allUsers) => {
    if (sessionStorage.activeUser) {
    let chatHTMLRepresentation = ""
    allChats.forEach(chat => {
        const userChats = allUsers.find(user => user.id === chat.userId)
        chatHTMLRepresentation += Chat(chat, userChats)}) 
    
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
