import React, { useState, useEffect } from "react";
import axios from "axios";
import UnitContext from "./unit-context";
import MainWeatherData from "./MainWeatherData/MainWeatherData";
import ForecastContainer from "./ForecastContainer/ForecastContainer";
import ErrorCard from "./ErrorCard/ErrorCard";

function Main({
  apikey,
  isCitySearch,
  cityCurrentURL,
  cityForecastURL,
  resetPref,
}) {
  const [coords, setCoords] = useState();
  const [unitType, setUnitType] = useState("Metric");
  const [hasErrors, setHasErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords(position);
        },
        (error) => {
          setHasErrors(true);
          setErrorMessage(error.message);
        }
      );
    } else {
      setHasErrors(true);
      setErrorMessage(
        "HAHAHA! LOL! Your browser does not support Geo Location, bro! What a Noob!"
      );
    }
  }

  // To determine using Metric or Imperial Units based on user location
  function getUserCountry() {
    const ipRegAPIKey = import.meta.env.VITE_LOCATION_API_KEY;
    const ipRegURL = `https://api.ipregistry.co/?key=${ipRegAPIKey}`;

    axios
      .get(ipRegURL)
      .then(({ data }) => {
        // After some research, only the US, Myanmar and Liberia use imperial units.
        ["US", "MM", "LR"].includes(data.location.country.code) &&
          setUnitType("Imperial");
      })
      .catch((error) => {
        return;
      });
  }

  function formatTemperature(data) {
    const tempInCelcius = data - 273;
    if (unitType === "Metric") return Math.round(tempInCelcius);
    if (unitType === "Imperial")
      return Math.round(tempInCelcius * (9 / 5) + 32);
  }

  function displayError(message) {
    setHasErrors(true);
    setErrorMessage(message);
  }

  function closeErrorMessage() {
    setHasErrors(false);
    resetPref(); // Clear Error Message data and back to home screen
  }

  useEffect(() => {
    getUserLocation();
    getUserCountry();
  }, [unitType]);

  return (
    <UnitContext.Provider value={unitType}>
      <main className="flex min-h-[calc(100vh_-_8rem)] flex-col items-center justify-between p-2 py-4 md:p-8 md:px-14 lg:min-h-[calc(100vh_-_5rem)] lg:p-0">
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
