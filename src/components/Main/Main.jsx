import React, { useState, useEffect } from "react";
import MainWeatherData from "./MainWeatherData/MainWeatherData";
import ForecastContainer from "./ForecastContainer/ForecastContainer";

function Main() {
    const [coords, setCoords] = useState();
    const APIKey = "";

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
                        apikey={APIKey}
                        handleTemperature={formatTemperature}
                    />
                    <ForecastContainer
                        coords={coords}
                        apikey={APIKey}
                        handleTemperature={formatTemperature}
                    />
                </>
            )}
        </main>
    );
}

export default Main;
