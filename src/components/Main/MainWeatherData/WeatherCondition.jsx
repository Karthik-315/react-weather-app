import React from "react";

function WeatherCondition({ weatherCondition }) {
    const weatherIcon = `http://openweathermap.org/img/wn/${weatherCondition.icon}@4x.png`;

    return (
        <article className="main--sub-section test-border">
            <img src={weatherIcon} alt="Cloudy" className="h-44 w-44 m-0 test-border" />

            <h3 className="m-0 mt-5 font-bold uppercase test-border tracking-wider">
                {weatherCondition.main}
            </h3>
        </article>
    );
}

export default WeatherCondition;
