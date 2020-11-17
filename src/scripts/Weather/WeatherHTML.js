export const WeatherHTML = (weatherObj) => {
    return `
    <div class ="weatherObj">
        <p>Current Temp: ${weatherObj.main.temp}°</p>
        <p>High of ${weatherObj.main.temp_max}°</p>
        <p>Low of ${weatherObj.main.temp_min}°</p>
        <p>${weatherObj.weather.description}</p>
        <img src="http://openweathermap.org/img/wn/${weatherObj.weather.icon}@2x.png" alt="weather icon">
    </div>
    `
}


