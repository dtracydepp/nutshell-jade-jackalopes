import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"

<<<<<<< HEAD
import "./events/EventProvider.js"
import { EventForm } from "./events/EventForm.js"
import { EventList } from "./events/EventList.js"
import "./events/EventHTML.js"
import { ChatList } from "./chat/ChatList.js"
import { ChatForm } from "./chat/ChatForm.js"
=======
const eventHub = document.querySelector(".container")
>>>>>>> master

eventHub.addEventListener("userAuthenticated", e => {
    Nutshell()
}
)

if (sessionStorage.getItem("activeUser") !== null) {
Nutshell()
}

else {
LoginForm()
RegisterForm()
}



/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/


<<<<<<< HEAD
TaskForm()
TaskList()

EventForm()
EventList()

ChatForm()
ChatList()
=======
>>>>>>> master
