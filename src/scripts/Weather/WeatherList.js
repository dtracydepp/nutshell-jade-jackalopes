import { useEvents } from "../????/EventProvider.js";
import { getWeatherItems } from "../weather/WeatherProvider.js"
import { WeatherHTML } from "./WeatherHTML.js";
import { useWeatherItems } from "./WeatherProvider.js"

const eventHub = document.querySelector(".container")
const weatherContainer = document.querySelector(".eventContainer") //<< Might change containers


eventHub.addEventListener("//*showWeatherButtonCLicked*//", showWeatherEventObj => { 
  
    const selectedEventLocation = showWeatherEventObj.detail.parkThatWasChosen
    const eventsArray =  useEvents() 

    // console.log("heard that the user clicked a weather button on an event, almost time for weather", selectedParkName)  
    
    const filteredEventArray = eventsArray.find((eventObj) => {
        if(eventObj.location === selectedEventLocation) {
            return true
        }
            return false
    })             

    
    
    getWeatherItems(filteredParkArray.latitude, filteredParkArray.longitude)
    .then(()=> {
        const slicedUpWeatherArray = useWeatherItems()
        render(slicedUpWeatherArray)
    })
})



const render = (weatherArray) => {  
    let weatherBlockHTMLRepresentations = ""
    
     for (let slicedWeather of weatherArray) {
        weatherBlockHTMLRepresentations += WeatherBlock(slicedWeather)
     }
        weatherContainer.innerHTML = `
    <h3>7-Day Forecast</3>
    <section class="weatherList">
        ${weatherBlockHTMLRepresentations}
    </section>
    `
    }


