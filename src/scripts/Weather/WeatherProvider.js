import apiObject from "../Settings.js";

let weatherItems = []  

export const getWeatherItems = (eventLocation) => { 
    console.log("getting weather", eventLocation)
    console.log("getting adsfgsdf", apiObject.weatherKey)
    
  return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${eventLocation},us&appid=${apiObject.weatherKey}&units=imperial`)
  
      .then(
          response => response.json())
      .then(
          parsedWeatherItems => {
               console.log(parsedWeatherItems)
              weatherItems = parsedWeatherItems.weather
          }
      )
}

export const useWeatherItems = () => {  //<copies array^ for later use in code
    return weatherItems.slice()
}

// console.log("yay my array got filled", weatherItems)     

