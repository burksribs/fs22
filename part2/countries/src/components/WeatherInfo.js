import axios from "axios";
import { useEffect, useState } from "react";

const WeatherInfo = ({ lat, lon, key, capital }) => {

    const [weather, setWeather] = useState('')

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
            .then(response => { setWeather(response.data) })
    }, []);

    return (
        /*
        <div>
            <h2>Weather in {capital.name} </h2>
            <p>temp {weather.main.temp - 273} Celsius</p>
            <p>wind {weather.wind.speed}m/s </p>

        </div>
        */
       console.log(weather)
    )

}

export default WeatherInfo
