import React, { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import DailyForecastCard from "./DailyForecastCard";

function ForecastContainer({ coords, apikey, handleTemperature }) {
    const [forecastData, setForecastData] = useState();
    const weatherForecastURLPrefix = "https://api.openweathermap.org/data/2.5/forecast?";

    async function getForecastData() {
        const userLocation = coords;
        const { latitude, longitude } = userLocation.coords;
        const weatherURL = `${weatherForecastURLPrefix}lat=${latitude}&lon=${longitude}&appid=${apikey}`;

        axios.get(weatherURL).then((response) => {
            // Get first 8 forecast data with a 12 hour gap. Starting with the next day.
            const nextDataGap = 4;
            let dataIndexToDisplay = 7;

            let slicedForecastData = [];

            while (slicedForecastData.length < 8) {
                slicedForecastData.push(response.data.list[dataIndexToDisplay]);
                dataIndexToDisplay += nextDataGap;
            }

            setForecastData(slicedForecastData);
        });
    }

    useEffect(() => {
        getForecastData();
    }, []);

    console.log(forecastData);

    return (
        <section className="grid grid-cols-8 gap-x-4 w-5/6 mt-28">
            {forecastData &&
                forecastData.map((data) => (
                    <DailyForecastCard
                        key={nanoid()}
                        rawDate={data.dt}
                        icon={data.weather[0].icon}
                        minTemp={data.main.temp_min}
                        maxTemp={data.main.temp_max}
                        handleTemperature={handleTemperature}
                    />
                ))}
        </section>
    );
}

export default ForecastContainer;
