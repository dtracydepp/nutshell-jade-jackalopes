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
    return tasks.slice()  //tasks.slice.filter for isComplete
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

export const completeTask = taskId => { //creating completeTask function with taskId as a parameter (need to connect the checkbox/isComplete to a particular task id)
    const taskComplete = { //create taskComplete variable
        isComplete: true //changes isComplete to true
    }
    return fetch(`http://localhost:8088/tasks/${taskId}`, { //fetching data from local hosts for the given taskId
        method: "PATCH", //PATCH method edits/updates a single key:value pair in the database
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(taskComplete) //passing through the variable from line 43  (look up stringify to better explain)
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}
