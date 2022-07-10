import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [isCitySearch, setIsCitySearch] = useState(false);
  const [cityCurrentURL, setCityCurrentURL] = useState();
  const [cityForecastURL, setCityForecastURL] = useState();
  const [useDarkMode, setUseDarkMode] = useState();

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
    // const currentHour = new Date().getHours();
    const currentHour = 7;
    let bgImage;

    if ((currentHour > 5) & (currentHour < 9)) {
      bgImage = "bg-dawn";
      setUseDarkMode(true);
    } else if ((currentHour >= 9) & (currentHour < 13)) {
      bgImage = "bg-morning";
      setUseDarkMode(false);
    } else if ((currentHour >= 13) & (currentHour < 16)) {
      bgImage = "bg-noon";
      setUseDarkMode(false);
    } else if (currentHour >= 16 && currentHour < 19) {
      bgImage = "bg-evening";
      setUseDarkMode(true);
    } else {
      bgImage = "bg-night";
      setUseDarkMode(true);
    }

    // Set relavant theme
    if (useDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    document.body.className = bgImage;
  }

  useEffect(() => {
    setBG();
  }, [useDarkMode]);

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
