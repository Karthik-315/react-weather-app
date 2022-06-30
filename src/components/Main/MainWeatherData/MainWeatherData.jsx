import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCondition from "./WeatherCondition";
import TemperatureData from "./TemperatureData/TemperatureData";
import OtherWeatherData from "./OtherWeatherData";

function MainWeatherData({ coords, apikey, handleTemperature }) {
    const [weatherData, setWeatherData] = useState();
    const weatherURLPrefix = "https://api.openweathermap.org/data/2.5/weather?";

    async function getWeatherData() {
        const userLocation = coords;
        const { latitude, longitude } = userLocation.coords;
        const weatherURL = `${weatherURLPrefix}lat=${latitude}&lon=${longitude}&appid=${apikey}`;

        axios.get(weatherURL).then((response) => setWeatherData(response.data));
    }

    useEffect(() => {
        getWeatherData();
    }, []);

    return (
        <section className="flex justify-between items-center w-5/6 test-border">
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
