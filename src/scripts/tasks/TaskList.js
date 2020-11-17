import { getTasks, useTasks } from "./TaskProvider.js";
import { Task } from "./TaskHTML.js"

const taskContainer = document.querySelector(".tasksContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener(".taskStateChanged", () => TaskList())

export const TaskList = () => {
    getTasks()
    .then(() => {
        const tasks = useTasks()
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