export const Task = (taskObj) => {
    return `
    <section class="task">
    <h3 class="task--name">Task: ${taskObj.name}</h3>
    <p class="task--completeBy">To Be Completed By: ${taskObj.date}</p>
    <input id="hideTask--${taskObj.id}" type="checkbox"/>
    <button id="deleteTask--${taskObj.id}">Delete Task</button>
    </section>
    `
}




