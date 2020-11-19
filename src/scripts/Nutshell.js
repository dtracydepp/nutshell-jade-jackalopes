import { TaskForm } from "./tasks/TaskForm.js"
import { TaskList } from "./tasks/TaskList.js"
import { NewsList } from "./news/NewsList.js"     
import { makeNoteForm } from "./news/NewsForm.js"

import "./events/EventProvider.js"
import { EventForm } from "./events/EventForm.js"
import { EventList } from "./events/EventList.js"
import "./events/EventHTML.js"

import "./Weather/WeatherList.js"

import { ChatList } from "./chat/ChatList.js"
import { ChatForm } from "./chat/ChatForm.js"

export const Nutshell = () => {
    // Render all your UI components here
TaskForm()
TaskList()

EventForm()
EventList()
NewsList()
makeNoteForm()
ChatForm()
ChatList()

 const eventHub = document.querySelector(".container")
 eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id ==="newarticle"){
     // console.log("I hear you")
   const newArticle = new CustomEvent("addNewArticle")
     eventHub.dispatchEvent(newArticle)
     }
 })
}
