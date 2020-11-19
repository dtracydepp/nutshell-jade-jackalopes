const eventHub = document.querySelector(".container")
const dispatchStateChangeEvent = () => {
    const chatStateChangedEvent = new CustomEvent("chatStateChanged")

    eventHub.dispatchEvent(chatStateChangedEvent)
}

let chats = []
let users = []

export const getUsers = () => {
    return fetch ("http://localhost:8088/users")
    .then(response => response.json())
    .then(parsedUsers => {
        users = parsedUsers
    })
}

export const useUsers = () => {
    return users.slice()
}

export const getChats = () => {
    return fetch ("http://localhost:8088/chats")
    .then(response => response.json())
    .then(parsedChats => {
        chats = parsedChats
        // console.log("parsedChats:", parsedChats)
    })
}

export const useChats = () => {
    return chats.slice()
}

export const sendChat = chat => {
    return fetch("http://localhost:8088/chats", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
    })
    .then(getChats)
    .then(dispatchStateChangeEvent)
}

export const deleteMessage = chatId => {
    return fetch (`http://localhost:8088/chats/${chatId}`, {
        method: "DELETE"
    })
        .then(getChats)
}