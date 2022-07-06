import React, { useEffect } from "react";
import CitySearchForm from "./CitySearchForm";

function Header({ apikey, handleCityInput }) {
    //london&appid=d7f68a8e1f6e2fbc6447241343454ffa
    const cityWeatherURLPrefix = "https://api.openweathermap.org/data/2.5/weather?q=";
    const cityForecastURLPrefix = "https://api.openweathermap.org/data/2.5/forecast?q=";

    // Set dark theme if that's the user's preference. If no user pref. is found, default to dark theme. Else, set light theme.
    function setTheme() {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
            document.querySelector(".theme-icon--dark").classList.add("hidden");
            document.querySelector(".theme-icon--light").classList.remove("hidden");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
            document.querySelector(".theme-icon--dark").classList.remove("hidden");
            document.querySelector(".theme-icon--light").classList.add("hidden");
        }
    }

    // Manually switch theme, overriding the OS default.
    function switchTheme() {
        const targetTheme = localStorage.theme === "dark" ? "light" : "dark";

        if (targetTheme === "light") {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
        } else if (targetTheme === "dark") {
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
        }

        document.querySelector(".theme-icon--dark").classList.toggle("hidden");
        document.querySelector(".theme-icon--light").classList.toggle("hidden");
    }

    function getCityWeather(event, city) {
        event.preventDefault();
        const cityWeatherURL = `${cityWeatherURLPrefix}${city}&appid=${apikey}`;
        const cityForecastURL = `${cityForecastURLPrefix}${city}&appid=${apikey}`;

        handleCityInput(cityWeatherURL, cityForecastURL);
    }

    useEffect(() => {
        // setTheme();
    }, []);

    return (
        <header className="prose-config flex flex-col justify-center items-center h-32 p-4 breakpoint:flex-row breakpoint:justify-between breakpoint:h-20">
            <h2 className="m-0">Can You Go Out Today App</h2>
            <CitySearchForm handleCitySearch={getCityWeather} />
        </header>
    );
}

export default Header;
