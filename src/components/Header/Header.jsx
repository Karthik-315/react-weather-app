import React, { useEffect } from "react";
import CitySearchForm from "./CitySearchForm";
import ThemeIcon from "./ThemeIcon";

function Header() {
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

    function getCityWeather(event) {
        event.preventDefault();
    }

    useEffect(() => {
        // setTheme();
    }, []);

    return (
        <header className="h-20 p-4">
            <h2 className="m-0">Can You Go Out Today App</h2>
            <CitySearchForm handleCitySearch={getCityWeather} />
            {/* <ThemeIcon handleThemeSwitch={switchTheme} /> */}
        </header>
    );
}

export default Header;
