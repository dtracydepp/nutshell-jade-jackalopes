import apiObject from "../Settings.js";

let weatherItems = []  

export const getWeatherItems = (latitude, longitude) => { console.log("getting weather")
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiObject.weatherKey}&units=imperial`)
      .then(
          response => response.json())
      .then(
          parsedWeatherItems => {
              // console.log(parsedWeatherItems)
              weatherItems = parsedWeatherItems.daily.slice()
          }
      )
}

export const useWeatherItems = () => {  //<copies array^ for later use in code
    return weatherItems.slice()
}

// console.log("yay my array got filled", weatherItems)     