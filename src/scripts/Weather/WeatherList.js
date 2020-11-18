//Author: Alan Andrusky
//Purpose: Listens for a dispatched event from separate module to trigger a rendered Weather to DOM

import { useEvents } from "../events/EventProvider.js";
import { getWeatherItems } from "../Weather/WeatherProvider.js"
import { WeatherHTML } from "./WeatherHTML.js";
import { useWeatherItems } from "./WeatherProvider.js"

const eventHub = document.querySelector(".container")
const weatherContainer = document.querySelector(".eventContainer") //<< Might change containers


eventHub.addEventListener("showWeatherButtonClicked", event => { 
  
    const selectedEventLocation = event.detail.eventLocation

     console.log("heard that the user clicked a weather button on an event, almost time for weather", selectedEventLocation)              

    
    getWeatherItems(selectedEventLocation)   //<this needs to pull zip codes  *it does
    .then(()=> {
        const WeatherItem = useWeatherItems()
        render(WeatherItem)
        console.log("IS THIS WORKING", WeatherItem)
    })
})



const render = (WeatherItem) => {   
    console.log("inside render", WeatherItem)  
    let weatherHTMLRepresentation = ""
    
                         //<so why am I even looping here?
        weatherHTMLRepresentation += WeatherHTML(WeatherItem)
         
        weatherContainer.innerHTML = `
    <h3>Current Forecast</3>
    <section class="weatherItem">
        ${weatherHTMLRepresentation}
    </section>
    `
    }


