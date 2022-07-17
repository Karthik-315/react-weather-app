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
        handleErrors(error.response.data.message);
      });
  }

  // Adding weatherURL as dependency to re-render when user enters a city.
  useEffect(() => {
    getWeatherData();
  }, [weatherURL]);

  return (
    <section className="mt-4 grid w-full grid-cols-2 grid-rows-1 md:mt-20 lg:mt-10 lg:flex lg:w-11/12 lg:items-center lg:justify-between">
      {weatherData && (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </section>
  );
}

export default MainWeatherData;
