//Author: Alan Andrusky
//Purpose: Gets weather data from remote API, puts it in an array, and copies the array

import apiObject from "../Settings.js";

let weatherItems = "" 

export const getWeatherItems = (eventLocation) => { 
    console.log("getting weather", eventLocation)
    console.log("getting test", apiObject.weatherKey)
    
  return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${eventLocation},us&appid=${apiObject.weatherKey}&units=imperial`)
  
      .then(
          response => response.json())
      .then(
          parsedWeatherItems => {
               console.log("IS THIS ALIVE", parsedWeatherItems)
               
              weatherItems = parsedWeatherItems   //this .weather is taking away access to other details I want from the API. How do I get both? When I remove it, I get an error saying .slice is not a function
              console.log("what is weatherItems", weatherItems)
          }
      )
}

export const useWeatherItems = () => {  //<copies array^ for later use in code
    return weatherItems
}

// console.log("yay my array got filled", weatherItems)     

