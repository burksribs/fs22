import { useState, useEffect } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

const Weather = ({ country }) => {
    const [capital, setCapital] = useState('')

    const key = "";
    useEffect(() => {
        axios
            .get(`http://api.openweathermap.org/geo/1.0/direct?q=${country.capital}&appid=${key}`)
            .then(response => { setCapital(response.data[0])})
    }, []);

    return <WeatherInfo lat={capital.lat} lon={capital.lon} key={key} capital={capital} />

};

export default Weather;