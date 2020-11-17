const eventHub = document.querySelector(".container")
const dispatchStateChangeEvent = () => {
    const taskStateChangedEvent = new CustomEvent("taskStateChanged")

    eventHub.dispatchEvent(taskStateChangedEvent)
}

let tasks = []

export const getTasks = () => {
    return fetch ("http://localhost:8088/tasks")
    .then(response => response.json())
    .then(parsedTasks => {
        tasks = parsedTasks
        console.log(parsedTasks)
    })
}

export const useTasks = () => {
    return tasks.slice()
}

export const saveTask = task => {
    return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}

export const deleteTask = taskId => {
    return fetch (`http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
    })
        .then(getTasks)
}