import React, { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import DailyForecastCard from "./DailyForecastCard";

function ForecastContainer({
    coords,
    apikey,
    isCitySearch,
    cityForecastURL,
    handleTemperature,
}) {
    const [forecastData, setForecastData] = useState();
    const weatherForecastURLPrefix = "https://api.openweathermap.org/data/2.5/forecast?";
    const { latitude, longitude } = coords.coords;

    // Default search is location based, if a city is provided in the search bar, weather info for that city is provided.
    const weatherURL = isCitySearch
        ? cityForecastURL
        : `${weatherForecastURLPrefix}lat=${latitude}&lon=${longitude}&appid=${apikey}`;

    async function getForecastData() {
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
    }, [weatherURL]);

    return (
        <section className="flex gap-x-2 w-full mt-20 overflow-x-auto lg:grid lg:grid-cols-8 lg:w-5/6 lg:mt-24">
            {forecastData &&
                forecastData.map((data) => (
                    <DailyForecastCard
                        key={nanoid()}
                        rawDate={data.dt}
                        icon={data.weather[0].icon}
                        forecastCondition={data.weather[0].main}
                        minTemp={data.main.temp_min}
                        maxTemp={data.main.temp_max}
                        handleTemperature={handleTemperature}
                    />
                ))}
        </section>
    );
}

export default ForecastContainer;
