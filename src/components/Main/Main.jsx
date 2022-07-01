import React, { useState, useEffect } from "react";
import MainWeatherData from "./MainWeatherData/MainWeatherData";
import ForecastContainer from "./ForecastContainer/ForecastContainer";

function Main({ apikey, isCitySearch, cityCurrentURL, cityForecastURL }) {
    const [coords, setCoords] = useState();

    function getUserLocation() {
        navigator.geolocation.getCurrentPosition((pos) => setCoords(pos));
    }

    function formatTemperature(data) {
        return Math.round(data - 273);
    }

    useEffect(() => getUserLocation(), []);

    return (
        <main className="flex flex-col justify-between items-center prose-config mt-8 ">
            {coords && (
                <>
                    <MainWeatherData
                        coords={coords}
                        apikey={apikey}
                        isCitySearch={isCitySearch}
                        cityCurrentURL={cityCurrentURL}
                        handleTemperature={formatTemperature}
                    />
                    <ForecastContainer
                        coords={coords}
                        apikey={apikey}
                        isCitySearch={isCitySearch}
                        cityForecastURL={cityForecastURL}
                        handleTemperature={formatTemperature}
                    />
                </>
            )}
        </main>
    );
}

export default Main;
