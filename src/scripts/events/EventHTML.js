/*Author: Erica Purpose: Provides HTML string representation for events
Creates showWeatherButtonClicked event for WeatherDetail.js
*/
//import './EventModalTester.js'
const eventHub = document.querySelector(".container")

//convert object to HTML string
export const EventAsHTML = (eventObj) => {
    const formattedDate = new Date(eventObj.eventDate).toLocaleDateString("en-US")
    const formattedTime = new Date(eventObj.eventDate).toLocaleTimeString("en-US")
    //return HTML string
    return `
    <div class="event">
    <h3>${eventObj.eventName}</h3>
    <p>Date: ${formattedDate}</p>
    <p>Time: ${formattedTime}</p>
    <p>Location: ${eventObj.eventLocation}</p>
    <button id="showWeatherButton--${eventObj.eventLocation}">Show Weather</button>
    <button id="deleteEvent--${eventObj.id}">Delete Event</button>
    <button id="addEventButton--${eventObj}">RENDER MODAL FORM</button>
    </div>
    `
}
/*listens for show weather button click and disptaches 
a custom event with weather information
Listened for by WeatherDetail.js
*/
eventHub.addEventListener("click", clickEvent => {
    const [prefix, eventLocation] = clickEvent.target.id.split("--")
    if (prefix === "showWeatherButton") {
    const weatherClicked = new CustomEvent("showWeatherButtonClicked", {
        detail: {
            eventLocation: eventLocation
        }
    })
    console.log("click", clickEvent)
    eventHub.dispatchEvent(weatherClicked)
    }
})

//UNSURE ABOUT WEATHER BUTTON

eventHub.addEventListener("click", clickEvent => {
    const [prefix] = clickEvent.target.id
    if (prefix === "addEventButton") {
    const newEventClicked = new CustomEvent("newEventButtonClicked", {
        detail: {
            eventLocation: eventLocation
        }
    })
    console.log("click", clickEvent)
    eventHub.dispatchEvent(weatherClicked)
    }
})