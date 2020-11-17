const eventHub = document.querySelector(".container")

//convert object to HTML string
export const EventAsHTML = (eventObj) => {
    //return HTML string
    return `
    <div class="event">
    <h3>${eventObj.name}</h3>
    <p>Date: ${eventObj.date}</p>
    <p>Location: ${eventObj.location}</p>
    <button id="showWeatherButton--${eventObj.id}">Show Weather</button>
    <button id="deleteEvent--${eventObj.id}">Delete Event</button>
    </div>
    `
}

eventHub.addEventListener("click", event => {
    const [prefix, id] = event.target.id.split("--")
    if (prefix === "showWeatherButton") {
    const weatherClicked = new CustomEvent("showWeatherButtonClicked", {
        detail: {
            eventId: id
        }
    })
    console.log("click", event)
    eventHub.dispatchEvent(weatherClicked)
    }
})
//UNSURE ABOUT WEATHER BUTTON