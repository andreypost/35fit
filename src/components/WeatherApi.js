import React from 'react';
// import { weatherData } from './SwitchLungGl';

export const WeatherApi = ({ weatherData }) => {
    console.log(weatherData)
    return (
        weatherData ? <div className="weatherStyle">
        <p>{weatherData.name}</p>
            <li>Temperature: {(weatherData.main.temp - 271.15).toFixed(2)} *C</li>
            <li>Pressure: {weatherData.main.pressure / 1000} MPa  </li>
            <li>Humidity: {weatherData.main.humidity} % </li>
            <li>Speed of wind: {weatherData.wind.speed} m/s</li>
        </div>
        : null
    )
}
