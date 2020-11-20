//Author: Patrick Stewart
//Purpose: Create the form which will save new Tasks to DOM

import { getTasks, saveTask, useTasks } from "./TaskProvider.js"

//designates target area where tasks will be sent
const contentTarget = document.querySelector(".taskModalContainer")
const eventHub = document.querySelector(".container")

//will be called in Nutshell.js, holds Task form
export const TaskForm = () => {
    getTasks().then(() => {
        const listOfTasks = useTasks()
        console.log(listOfTasks)
        render(listOfTasks)
    })
}

const render = () => {
    contentTarget.innerHTML = `
    <textarea id="task--name" placeholder="What Is Your Task?"></textarea>
    <p>Task To Be Completed By:</p>
    <input id="task--date" type="date"/>
    <button id="saveTask">Submit</button>
    `
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "saveTask") {
        const name = document.querySelector("#task--name").value
        const date = document.querySelector("#task--date").value
        const userId = parseInt(sessionStorage.getItem("activeUser"))

        
        const newTask = {
            name,
            date,
            userId,
            isComplete: false //sets isComplete to false as default so that tasks appear unless checked. don't need to add to the event listener from line 24 because the value is set here.
        }
        saveTask(newTask)
    }
})