//Author: Alan Andrusky
//Purpose: Creates a representation of what a weather item should look like on the DOM. 

export const WeatherHTML = (weatherObj) => {
    return `
    <section class ="weatherObj">
         <div class= "weather--temp">Current Temp: ${weatherObj.main.temp}°</div>
         <div class= "weather--maxTemp">High of ${weatherObj.main.temp_max}°</div>
         <div class= "weather--minTemp">Low of ${weatherObj.main.temp_min}°</div>
         <div class= "weather--description">${weatherObj.weather[0].description}</div>
         <img class= "weather--temp"src="http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png" alt="weather icon"></img>  
    </section>
    `
}

