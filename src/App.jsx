import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
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

    function setBG() {
        console.log(`Setting BG`);
        document.body.style.backgroundImage =
            "url('./assets/images/bg-medium/bg-evening-clear-2.jpg')";
    }

    useEffect(() => {
        setBG();
    }, []);

    return (
        <React.Fragment>
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
