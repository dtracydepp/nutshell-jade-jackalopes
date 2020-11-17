export const WeatherHTML = (weatherObj) => {
    return `
    <div class ="weatherObj">
        <h5>${weatherObj.dt}</h5>
        <p>High of ${weatherObj.temp.max}°</p>
        <p>Low of ${weatherObj.temp.min}°</p>
        <p>Will feel like ${weatherObj.feels_like.day}° during the day</p>
        <p>${weatherObj.weather.description}</p>
        <img src="http://openweathermap.org/img/wn/${weatherObj.weather.icon}.png" alt="weather icon">
    </div>
    `
}