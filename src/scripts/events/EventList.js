import { EventAsHTML } from "./EventHTML.js"
import { getEvents, useEvents, deleteEvent } from "./EventProvider.js"
// import { getWeather, useWeather } from "../WeatherProvider.js"

const eventsContainer = document.querySelector(".eventContainer")
const eventHub = document.querySelector(".container")

//listens for newEventSaved, calls EventList when it happens
eventHub.addEventListener("newEventSaved", () => EventList())

const currentDate = new Date()
const currentDateUTC = Date.parse(currentDate)
console.log(currentDateUTC)




//renders events
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

//list of events rendered to DOM
export const EventList = () => {
    getEvents()
    .then(() => {
        const allEvents = useEvents()
        console.log(allEvents)
        const upcomingEvents = allEvents.filter(event => event.eventDateUTC > currentDateUTC)
        console.log(upcomingEvents, "upcoming events")
        const closest = upcomingEvents.reduce((a, b) => {
            // for (const event of upcomingEvents) {
                // console.log("all events", allEvents)
            // if (event.eventDateUTC > currentDateUTC) {
            //     console.log("eventdates", event.eventDateUTC)
                let aDiff = Math.abs(a.eventDateUTC - currentDateUTC);
                let bDiff = Math.abs(b.eventDateUTC - currentDateUTC);
        
            // if (aDiff == bDiff) {
            //     // Choose largest vs smallest (> vs <)
            //     return a < b ? a : b;
            // } else {
                return bDiff < aDiff ? b : a;
            
        })
        console.log("closest number", closest)
        render(allEvents)
    })
}

//listens for delete button to be clicked
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteEvent--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        //invoke function that does delete operation
        //once deleted then invoke useEvents and render new event list
        deleteEvent(id).then(
            () => {
                const updatedEvents = useEvents()

                const upcomingEvents = updatedEvents.filter(event => event.eventDateUTC > currentDateUTC)
        console.log(upcomingEvents, "upcoming events")
        const closest = upcomingEvents.reduce((a, b) => {
            // for (const event of upcomingEvents) {
                // console.log("all events", allEvents)
            // if (event.eventDateUTC > currentDateUTC) {
            //     console.log("eventdates", event.eventDateUTC)
                let aDiff = Math.abs(a.eventDateUTC - currentDateUTC);
                let bDiff = Math.abs(b.eventDateUTC - currentDateUTC);
        
            // if (aDiff == bDiff) {
            //     // Choose largest vs smallest (> vs <)
            //     return a < b ? a : b;
            // } else {
                return bDiff < aDiff ? b : a;
            
        })
        console.log("closest number", closest)
                render(updatedEvents)
            }
        )
    }
})

