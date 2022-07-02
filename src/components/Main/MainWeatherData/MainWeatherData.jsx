import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import WeatherCondition from "./WeatherCondition";
import TemperatureData from "./TemperatureData/TemperatureData";
import OtherWeatherData from "./OtherWeatherData";

function MainWeatherData({
    coords,
    apikey,
    isCitySearch,
    cityCurrentURL,
    handleTemperature,
    handleErrors,
}) {
    const [weatherData, setWeatherData] = useState();
    const weatherURLPrefix = "https://api.openweathermap.org/data/2.5/weather?";
    const { latitude, longitude } = coords.coords;

    // Default search is location based, if a city is provided in the search bar, weather info for that city is provided.
    const weatherURL = isCitySearch
        ? cityCurrentURL
        : `${weatherURLPrefix}lat=${latitude}&lon=${longitude}&appid=${apikey}`;

    async function getWeatherData() {
        axios
            .get(weatherURL)
            .then((response) => {
                setWeatherData(response.data);
            })
            .catch((error) => {
                console.log(error.response.data.message);
                handleErrors(error.response.data.message);
            });
    }

    // Adding weatherURL as dependency to re-render when user enters a city.
    useEffect(() => {
        getWeatherData();
    }, [weatherURL]);

    return (
        <section className="grid grid-cols-2 grid-rows-1 w-full lg:flex lg:justify-between lg:items-center lg:w-5/6 lg:pt-10 test-border">
            {weatherData && (
                <>
                    <WeatherCondition weatherCondition={weatherData.weather[0]} />
                    <TemperatureData
                        city={weatherData.name}
                        rawDate={weatherData.dt}
                        country={weatherData.sys.country}
                        mainTemperature={weatherData.main}
                        handleTemperature={handleTemperature}
                    />
                    <OtherWeatherData
                        pressure={weatherData.main.pressure}
                        humidity={weatherData.main.humidity}
                        windSpeed={weatherData.wind.speed}
                    />
                </>
            )}
        </section>
    );
}

export default MainWeatherData;
