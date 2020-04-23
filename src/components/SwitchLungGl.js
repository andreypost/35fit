/* eslint-disable eqeqeq */
// import React, { useState, useEffect } from 'react';
import React from 'react';
// import { LungContext } from './lung-context';
// import key from '../key.json';
// import { WeatherApi } from './WeatherApi';

export const SwitchLungGl = () => {
    // const fetchWeatherData = (city) => {
        // return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key.weatherKey}`)
        // https://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&appid=${key}
    // }

    // const [weatherData, setWeatherData] = useState(null)

    // useEffect(() => {
    //     getWeatherCityByName('London');
    // }, []);

    // const getWeatherCityByName = (city) => {
    //     fetchWeatherData(city)
    //         .then(res => res.json())
    //         .then(data => setWeatherData(data))
    //         .catch(console.log)
    // }
    // console.log(weatherData ? weatherData.country : null)

    const handleClick = (ev) => {
        // getWeatherCityByName('Berlin')
        // console.log(LungContext)
        let switchGl = document.querySelector('.switchLGl'),
            up = switchGl.querySelector('.arrowUpGl'),
            down = switchGl.querySelector('.arrowDnGl'),
            cont = switchGl.querySelector('.linksSwGl'),
            base = switchGl.querySelector('.linksSwGl > li')

        up.classList.toggle('disBlockGl')
        down.classList.toggle('nonBlockGl')
        for (let li of switchGl.querySelectorAll('li')) {
            li.classList.toggle('disBlockGl')
        }
        let target = ev.target.closest('li')
        if (target == base) {
            return
        } else if (target) {
            // LungContext._currentValue = target.innerHTML
            cont.prepend(target)
        }
    }
    return (
        <>
        {/* <LungContext.Consumer>
            {({ lung, lightgreen }) => (
                <button
                    style={{ color: lightgreen }}>
                        put enter
                    {lung}
                </button>
            )}
        </LungContext.Consumer>
            <li>{LungContext._currentValue}</li> */}
            <div className="switchLGl flex" onClick={(ev) => handleClick(ev)}>
                <div className="relative">
                    <ul className="linksSwGl column">
                        <li>EN</li>
                        <li>EST</li>
                        <li>DEU</li>
                    </ul>
                </div>
                <i className="arrowUpGl"></i>
                <i className="arrowDnGl"></i>
                {/* <WeatherApi  weatherData={weatherData} /> */}
            </div>
</>
        // <div className="switchLGl flex" onClick={(ev) => handleClick(ev)}>
        //     <div className="relative">
        //         <ul className="linksSwGl column">
        //             <li onClick={() => getWeatherCityByName('London')}>EN</li>
        //             <li onClick={() => getWeatherCityByName('Tallinn')}>EST</li>
        //             <li onClick={() => getWeatherCityByName('Berlin')}>DEU</li>
        //         </ul>
        //     </div>
        //     <i className="arrowUpGl"></i>
        //     <i className="arrowDnGl"></i>
        //     {/* <WeatherApi  weatherData={weatherData} /> */}
        // </div>
    );
}
