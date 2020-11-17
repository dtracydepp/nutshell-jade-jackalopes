import { EventAsHTML } from "./EventHTML.js"
import { getEvents, useEvents, deleteEvent } from "./EventProvider.js"
import { getWeather, useWeather } from "../WeatherProvider.js"

const eventsContainer = document.querySelector("eventContainer")
const eventHub = document.querySelector(".container")

//listens for newEventSaved, calls EventList when it happens
eventHub.addEventListener("newEventSaved", () => addEventListener())

export const EventList = () => {
    getEvents()
    .then(() => {
        const allEvents = useEvents()
        render(allEvents)
    })
}

//renders events and weather?
const render = (eventsArray) => {
//creates empty string to hold event HTML
let eventsHTMLRepresentations = ""
//iterates through events
for (const event of eventsArray) {
    //event HTML has parameters for event
    eventsHTMLRepresentations += EventAsHTML(event)
}
eventsContainer.innerHTML = `
${eventsHTMLRepresentations}
`
}