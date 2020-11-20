//Author: Patrick Stewart
//Purpose: //Purpose: Creates functions to get task list,
//use the task list, delete a task, save a new task,
//and complete a task to remove it from the DOM
//Dispatches save event, which is listened for in TaskList

//designates eventHub where outputs will be sent or displayed
const eventHub = document.querySelector(".container")

//disptaches taskStateChanged to eventHub, listened for in TaskList
const dispatchStateChangeEvent = () => {
    const taskStateChangedEvent = new CustomEvent("taskStateChanged")

    //dispatches new custom event to the eventHub
    eventHub.dispatchEvent(taskStateChangedEvent)
}

//create empty array to hold tasks
let tasks = []

//gets tasks from server, parses responses into json
//creates tasks from parsed tasks
export const getTasks = () => {
    return fetch ("http://localhost:8088/tasks")
    .then(response => response.json())
    .then(parsedTasks => {
        tasks = parsedTasks
        console.log("parsed Tasks:", parsedTasks)
    })
}

//creates a usable copy of tasks
export const useTasks = () => {
    return tasks.slice() 
}

//saves tasks onto the DOM
export const saveTask = task => {
    //gets tasks currently saved to DOM
    return fetch("http://localhost:8088/tasks", {
        //POST event object to API
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    //gets all tasks from API
    .then(getTasks)
    //dispatch state change event to eventHub that tasks has been updated
    .then(dispatchStateChangeEvent)
}

//deletes task from API
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
        body: JSON.stringify(taskComplete) //passing through the variable from line 43 (look up stringify to better explain)
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}
