import { useEvents } from "../events/EventProvider.js";
import { getWeatherItems } from "../Weather/WeatherProvider.js"
import { WeatherHTML } from "./WeatherHTML.js";
import { useWeatherItems } from "./WeatherProvider.js"

const eventHub = document.querySelector(".container")
const weatherContainer = document.querySelector(".eventContainer") //<< Might change containers


eventHub.addEventListener("showWeatherButtonClicked", event => { 
  
    const selectedEventLocation = event.detail.eventLocation

     console.log("heard that the user clicked a weather button on an event, almost time for weather", selectedEventLocation)              

    
    getWeatherItems(selectedEventLocation)   //<this needs to pull zip codes
    .then(()=> {
        const slicedUpWeatherArray = useWeatherItems()
        render(slicedUpWeatherArray)
    })
})



const render = (weatherArray) => {  
    let weatherHTMLRepresentation = ""
    
     for (let slicedWeather of weatherArray) {
        weatherHTMLRepresentation += WeatherHTML(slicedWeather)
     }
        weatherContainer.innerHTML = `
    <h3>Day-of Forecast</3>
    <section class="weatherItem">
        ${weatherHTMLRepresentation}
    </section>
    `
    }


