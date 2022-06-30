import React from "react";

function ThemeIcon({ handleThemeSwitch }) {
    return (
        <section className="w-1/3 flex justify-end">
            <a href="#" className="theme-icon--light mx-2" onClick={handleThemeSwitch}>
                <i className="fa-solid fa-sun text-3xl pointer-events-none"></i>
            </a>
            <a
                href="#"
                className="theme-icon--dark mx-2 hidden"
                onClick={handleThemeSwitch}
            >
                <i className="fa-solid fa-moon text-3xl pointer-events-none"></i>
            </a>
        </section>
    );
}

export default ThemeIcon;
