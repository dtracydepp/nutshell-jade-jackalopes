//Author: Patrick Stewart
//Purpose: Creates functions to get user and chat lists,
//use the chat and users lists, delete a chat, save a new chat
//Dispatches save event, which is listened for in ChatList

//designates eventHub where outputs will be sent or displayed
const eventHub = document.querySelector(".container")

//disptaches chatStateChanged to eventHub, listened for in ChatList
const dispatchStateChangeEvent = () => {
    const chatStateChangedEvent = new CustomEvent("chatStateChanged")

    eventHub.dispatchEvent(chatStateChangedEvent)
}

//create empty array to hold chats and users
let chats = []
let users = []

//gets users from server, parses responses into json
//creates users from parsed users
export const getUsers = () => {
    return fetch ("http://localhost:8088/users")
    .then(response => response.json())
    .then(parsedUsers => {
        users = parsedUsers
    })
}

//creates a usable copy of users
export const useUsers = () => {
    return users.slice()
}

//gets chats from server, parses responses into json
//creates chats from parsed chats
export const getChats = () => {
    return fetch ("http://localhost:8088/chats")
    .then(response => response.json())
    .then(parsedChats => {
        chats = parsedChats
        // console.log("parsedChats:", parsedChats)
    })
}

//creates a usable copy of chats
export const useChats = () => {
    return chats.slice()
}

//saves chat onto DOM
export const sendChat = chat => {
    // gets chats currently saved tot he DOM
    return fetch("http://localhost:8088/chats", {
        //POST chat object to API
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
    })
    //gets all chats from API
    .then(getChats)
    //dispatch state change event to eventHub that chats has been updated
    .then(dispatchStateChangeEvent)
}

//deletes event from API
export const deleteMessage = chatId => {
    return fetch (`http://localhost:8088/chats/${chatId}`, {
        method: "DELETE"
    })
        .then(getChats)
}