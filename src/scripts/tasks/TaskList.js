import { deleteTask, getTasks, useTasks } from "./TaskProvider.js";
import { Task } from "./TaskHTML.js"

const taskContainer = document.querySelector(".tasksContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("taskStateChanged", () => TaskList())

export const TaskList = () => {
    getTasks()
    .then(() => {
        const activeUser = parseInt(sessionStorage.getItem("activeUser")) //searches session storage to find the current active user
        const tasks = useTasks().filter(task => task.isComplete === false && task.userId === activeUser) // filters the useTasks array for isComplete = false (tasks that have not been completed) and for tasks with a userId value that matches the current active user
        render(tasks)
    })
}

const render = (taskCollection) => {
    let taskHTMLRepresentation = "" 
    for (const task of taskCollection) {
        taskHTMLRepresentation += Task(task)
    }
    taskContainer.innerHTML = `
    <h3>My Tasks:</h3>
    ${taskHTMLRepresentation}
    `
}

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteTask")) {
        const [prefix, id] = event.target.id.split("--")
        deleteTask(id).then(
            () => {
                const deleteTask = useTasks()
                render(deleteTask)
            }
        )   
    }
})
