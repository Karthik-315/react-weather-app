import React, { useState, useEffect } from "react";
import axios from "axios";
import UnitContext from "./unit-context";
import MainWeatherData from "./MainWeatherData/MainWeatherData";
import ForecastContainer from "./ForecastContainer/ForecastContainer";

function Main({ apikey, isCitySearch, cityCurrentURL, cityForecastURL }) {
    const [coords, setCoords] = useState();
    const [unitType, setUnitType] = useState();

    function getUserLocation() {
        navigator.geolocation.getCurrentPosition((pos) => setCoords(pos));
    }

    // To determine using Metric or Imperial Units
    function getUserCountry() {
        axios.get("http://ip-api.com/json/").then((response) => {
            ["US", "MM", "LR"].includes(response?.data?.countryCode)
                ? setUnitType("Imperial")
                : setUnitType("Metric");
        });
    }

    function formatTemperature(data) {
        const tempInCelcius = data - 273;
        if (unitType === "Metric") return Math.round(tempInCelcius);
        if (unitType === "Imperial") return Math.round(tempInCelcius * (9 / 5) + 32);
    }

    useEffect(() => {
        getUserLocation();
        getUserCountry();
    }, [unitType]);

    return (
        <main className="flex flex-col justify-between items-center prose-config mt-8 p-2 lg:p-0">
            {coords && (
                <UnitContext.Provider value={unitType}>
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
                </UnitContext.Provider>
            )}
        </main>
    );
}

export default Main;
