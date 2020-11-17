//Author: Erica Purpose: Create the form which will save new Events to DOM

import { saveEvent } from "./EventProvider.js"

//designates target area where events will be sent
const eventTarget = document.querySelector(".eventModalContainer")
const eventHub = document.querySelector(".container")
// const users = useUsers()


//creates event form HTML with inputs and renders form to DOM
const render = () => {
    eventTarget.innerHTML = `
    <input id="event--name" type="text" placeholder="Event Name"/>
    <input id="event--date" type="date"/>
    <input id="event--location" type="number" placeholder="Event Zip Code"/>
    <button id="saveEvent">Save Event</button>
    `
}
//do i need parseint for ids

//add click event for when save event button is clicked
//submit should grab values from inputs, build new event obbject, and POST new event to API
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {
        const eventName = document.querySelector("#event--name").value
        const eventDate = document.querySelector("#event--date").value
        const eventLocation = parseInt(document.querySelector("#event--location").value)
        const userId = parseInt(sessionStorage.getItem("activeUser"))
        
    //make a new object representation of event
    //key value pairs here
    const newEvent = {
        eventName,
        eventDate,
        eventLocation,
        userId
        
    }
    //Chane API state and application state
    saveEvent(newEvent)
    // console.log(userId)
    }
    
})

//will be called in Nutshell.js, holds Event form
export const EventForm = () => {
    render()
}