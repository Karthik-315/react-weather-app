import React, { useState, useEffect } from "react";
import axios from "axios";
import UnitContext from "./unit-context";
import MainWeatherData from "./MainWeatherData/MainWeatherData";
import ForecastContainer from "./ForecastContainer/ForecastContainer";
import ErrorCard from "./ErrorCard/ErrorCard";

function Main({ apikey, isCitySearch, cityCurrentURL, cityForecastURL, resetPref }) {
    const [coords, setCoords] = useState();
    const [unitType, setUnitType] = useState("Metric");
    const [hasErrors, setHasErrors] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    function getUserLocation() {
        navigator.geolocation.getCurrentPosition((pos) => setCoords(pos));
    }

    // To determine using Metric or Imperial Units
    function getUserCountry() {
        axios
            .get("http://ip-api.com/json")
            .then((response) => {
                ["US", "MM", "LR"].includes(response?.data?.countryCode) &&
                    setUnitType("Imperial");
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }

    function formatTemperature(data) {
        const tempInCelcius = data - 273;
        if (unitType === "Metric") return Math.round(tempInCelcius);
        if (unitType === "Imperial") return Math.round(tempInCelcius * (9 / 5) + 32);
    }

    function displayError(message) {
        setHasErrors(true);
        setErrorMessage(message);
    }

    function closeErrorMessage() {
        setHasErrors(false);
        resetPref();
    }

    useEffect(() => {
        getUserLocation();
        getUserCountry();
    }, [unitType]);

    return (
        <UnitContext.Provider value={unitType}>
            <main className="flex flex-col justify-between items-center prose-config h-[calc(100vh_-_8rem)] p-2 py-4 lg:h-[calc(100vh_-_5rem)]">
                {!hasErrors ? (
                    coords && (
                        <>
                            <MainWeatherData
                                coords={coords}
                                apikey={apikey}
                                isCitySearch={isCitySearch}
                                cityCurrentURL={cityCurrentURL}
                                handleTemperature={formatTemperature}
                                handleErrors={displayError}
                            />
                            <ForecastContainer
                                coords={coords}
                                apikey={apikey}
                                isCitySearch={isCitySearch}
                                cityForecastURL={cityForecastURL}
                                handleTemperature={formatTemperature}
                            />
                        </>
                    )
                ) : (
                    <ErrorCard
                        errorMessage={errorMessage}
                        handleCloseError={closeErrorMessage}
                    />
                )}
            </main>
        </UnitContext.Provider>
    );
}

export default Main;
