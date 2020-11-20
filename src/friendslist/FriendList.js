// Responsible for displaying the data to the DOM
import { getFriends, useFriends } from "./FriendProvider.js"

// put the list of articles in the friend container
export const friendList = () => {
    const contentTarget = document.querySelector(".friendContainer")
    let friendHTMLRep = ""
    friendHTMLRep += addFriend()
    contentTarget.innerHTML = `${friendHTMLRep}`
}

// adds a "add friend" button
const addFriend = () => {
    return `<button id="addFriendBtn">Add Friend</button>
    <input type = text id=addFriendInput>`
}

// listens for add friend button and searches the users and prompts persmission to add friend
const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id ==="addFriendBtn"){
    // console.log("I hear you")
    const userName = document.querySelector("#addFriendInput").value
     fetch (`http://localhost:8088/users/?username=${username}`)
     .then (response => response.json())
     .then (response =>{
         if (response.length > 0){
             if (window.confirm(`Do you want to add this ${response[0].username}`)){
                 const addFriendEvent = new CustomEvent ("newFriendAdded", {
                     detail: {
                         userId: parseInt(sessionStorage.getItem("activeUser")),
                         friendId: response[0].id
                     }
                 })
                 eventHub.dispatchEvent(addFriendEvent)
             }
         }
     })
    const newFriend = new CustomEvent("addNewFriend")
    eventHub.dispatchEvent(newFriend)
    console.log(userName)
    }
})

// listens for the delete button click
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("delete")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        // Invoke the function to delete the friend and render the updated list

        deleteFriend(id).then(
            () => {
                const updatedfriends = useFriends()
                render(updatedfriends)
            }
        )

    }

})


