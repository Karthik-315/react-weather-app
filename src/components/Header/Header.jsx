import React, { useEffect } from "react";
import CitySearchForm from "./CitySearchForm";

function Header({ apikey, handleCityInput }) {
  const cityWeatherURLPrefix =
    "https://api.openweathermap.org/data/2.5/weather?q=";
  const cityForecastURLPrefix =
    "https://api.openweathermap.org/data/2.5/forecast?q=";

  function getCityWeather(event, city) {
    event.preventDefault();
    const cityWeatherURL = `${cityWeatherURLPrefix}${city}&appid=${apikey}`;
    const cityForecastURL = `${cityForecastURLPrefix}${city}&appid=${apikey}`;

    handleCityInput(cityWeatherURL, cityForecastURL);
  }

  return (
    <header className="flex h-32 flex-col items-center justify-center p-2 lg:h-20 lg:flex-row  lg:justify-between">
      <h1 className="m-0 my-2 py-4 text-2xl tracking-wider md:text-4xl">
        Can You Go Out Today App
      </h1>
      <CitySearchForm handleCitySearch={getCityWeather} />
    </header>
  );
}

export default Header;
