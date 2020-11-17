import { getTasks, saveTask, useTasks } from "./TaskProvider.js"


const contentTarget = document.querySelector(".taskModalContainer")
const eventHub = document.querySelector(".container")

export const TaskForm = () => {
    getTasks().then(() => {
        const listOfTasks = useTasks()
        // console.log(listOfTasks)
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
        const date = document.querySelector("#task--name").value
        
        const newTask = {
            name,
            date
        }
        saveTask(newTask)
    }
})