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

     //console.log("heard that the user clicked a weather button on an event, almost time for weather", selectedEventLocation)              

    
    getWeatherItems(selectedEventLocation)   //<this needs to pull zip codes  *it does
    .then(()=> {
        const weatherItem = useWeatherItems()
        render(weatherItem)
        //console.log("IS THIS WORKING", weatherItem)
    })
})



const render = (weatherItem) => {   
   //console.log("inside render", weatherItem)  
    let weatherHTMLRepresentation = ""
    
                         //<so why am I even looping here?
        weatherHTMLRepresentation += WeatherHTML(weatherItem)
         
        weatherContainer.innerHTML = `
    <h5>Current Forecast:</5>
    <section class="weatherItem">
        ${weatherHTMLRepresentation}
    </section>
    `
    }


