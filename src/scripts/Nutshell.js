import { TaskForm } from "./tasks/TaskForm.js"
import { TaskList } from "./tasks/TaskList.js"

import "./events/EventProvider.js"
import { EventForm } from "./events/EventForm.js"
import { EventList } from "./events/EventList.js"
import "./events/EventHTML.js"

import "./Weather/WeatherList.js"

export const Nutshell = () => {
    // Render all your UI components here
TaskForm()
TaskList()

EventForm()
EventList()
}