import { completeTask } from "./TaskProvider.js"

const eventHub = document.querySelector(".container")

export const Task = (taskObj) => {
    console.log(taskObj)
    return `
    <section class="task">
    <h5 class="task--name">Task: ${taskObj.name}</h5>
    <p class="task--completeBy">To Be Completed By: ${taskObj.date}</p>
    <input id="completeTask--${taskObj.id}" type="checkbox"/>
    <button id="deleteTask--${taskObj.id}">Delete Task</button>
    </section>
    `
}

eventHub.addEventListener("click", event => { //event listening for the click event of checking the checkbox
  if (event.target.id.startsWith("completeTask--")) { //targeting the checkbox from line 11
    //   console.log("id found?", event)
      const [prefix, id] = event.target.id.split("--") // I feel like I understand what is happening here, but I don't have good vocab to explain it. Look up 'split'
      completeTask(id) // Calling completeTask from TaskProvider.js and passing in id from line 20
  }
})

// high level, what does the checkbox need to accomplish?
// user clicks checkbox
// event listener that hears that the box has been checked
// get the task id for that task
// target the isComplete key and toggle the boolean value from false to true
// task should no longer appear on DOM


