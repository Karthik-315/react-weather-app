import React from "react";

function WeatherCondition({ weatherCondition }) {
    const weatherIcon = `http://openweathermap.org/img/wn/${weatherCondition.icon}@4x.png`;
    // const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherCondition["icon"]}.svg`;
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherCondition["icon"]}.svg`;

    return (
        <article className="main--sub-section">
            <img
                src={icon}
                alt="Cloudy"
                className="h-32 w-32 m-0 test-border svg-filter-black dark:svg-filter-white lg:h-44 lg:w-44"
            />

            <h3 className="m-0  font-bold uppercase test-border tracking-wider lg:mt-5">
                {weatherCondition.main}
            </h3>
        </article>
    );
}

export default WeatherCondition;
