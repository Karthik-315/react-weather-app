import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Overlay from "./components/Overlay";
import Main from "./components/Main/Main";

function App() {
    const [isCitySearch, setIsCitySearch] = useState(false);
    const [cityCurrentURL, setCityCurrentURL] = useState();
    const [cityForecastURL, setCityForecastURL] = useState();

    const APIKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

    function getCity(currentURL, forecastURL) {
        setIsCitySearch(true);
        setCityCurrentURL(currentURL);
        setCityForecastURL(forecastURL);
    }

    function resetPreferences() {
        setIsCitySearch(false);
    }

    return (
        <React.Fragment>
            <Overlay />
            <Header apikey={APIKey} handleCityInput={getCity} />
            <Main
                apikey={APIKey}
                isCitySearch={isCitySearch}
                cityCurrentURL={cityCurrentURL}
                cityForecastURL={cityForecastURL}
                resetPref={resetPreferences}
            />
        </React.Fragment>
    );
}

export default App;
