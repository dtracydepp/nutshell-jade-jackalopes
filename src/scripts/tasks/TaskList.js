import { deleteTask, getTasks, useTasks } from "./TaskProvider.js";
import { Task } from "./TaskHTML.js"

const taskContainer = document.querySelector(".tasksContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("taskStateChanged", () => TaskList())

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

eventHub.addEventListener("click", deleteEvent => {
    if (deleteEvent.target.id.startsWith("delete")) {
        const [prefix, id] = deleteEvent.target.id.split("--")

        deleteTask(id).then(
            () => {
                const deleteTask = useTasks()
                render(deleteTask)
            }
        )   
    }
})

// eventHub.addEventListener("click", hideEvent => {
//     if (hideEvent.target.id.startsWith("hide")) {
//         const [prefix, id] = hideEvent.target.id.split("--")

//         hideTask(id).then(
//             () => {
//                 const hideTask = useTasks()
//                 render(hideTask)
//             }
//         )
//     }
// })