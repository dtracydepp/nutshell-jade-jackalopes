import { Chat } from "./ChatHTML.js"
import { deleteMessage, getChats, useChats} from "./ChatProvider.js"


const chatContainer = document.querySelector(".chatContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("chatStateChanged", () => ChatList())

export const ChatList = () => {
    getChats()
    .then(() => {
        const chats = useChats()
        render(chats)
    })
}

const render = (chatCollection) => {
    let chatHTMLRepresentation = ""
    for (const chat of chatCollection) {
        chatHTMLRepresentation += Chat(chat)
    }
    chatContainer.innerHTML = `
    <h3>Messages:</h3>
    ${chatHTMLRepresentation}
    `
}

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("delete")) {
        const [prefix, id] = event.target.id.split("--")
        deleteMessage(id).then(
            () => {
                const deleteMessage = useChats()
                render(deleteMessage)
            }
        )   
    }
})