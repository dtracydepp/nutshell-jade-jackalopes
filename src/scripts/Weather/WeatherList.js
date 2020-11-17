import { useEvents } from "../????/EventProvider.js";
import { getWeatherItems } from "../weather/WeatherProvider.js"
import { WeatherHTML } from "./WeatherHTML.js";
import { useWeatherItems } from "./WeatherProvider.js"

const eventHub = document.querySelector(".container")
const weatherContainer = document.querySelector(".eventContainer") //<< Might change containers


eventHub.addEventListener("showWeatherButtonClicked", showWeatherEventObj => { 
  
    const selectedEventLocation = showWeatherEventObj.detail.parkThatWasChosen
    const eventsArray =  useEvents() 

    // console.log("heard that the user clicked a weather button on an event, almost time for weather", selectedParkName)  
    
    const filteredEventArray = eventsArray.find((eventObj) => {
        if(eventObj.location === selectedEventLocation) {
            return true
        }
            return false
    })             

    
    
    getWeatherItems(filteredEventArray.zipcode)   //<this needs to pull zip codes
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


