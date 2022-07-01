import React from "react";

function WeatherCondition({ weatherCondition }) {
    const weatherIcon = `http://openweathermap.org/img/wn/${weatherCondition.icon}@4x.png`;
    // const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherCondition["icon"]}.svg`;
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherCondition["icon"]}.svg`;

    return (
        <article className="main--sub-section test-border">
            <img
                src={icon}
                alt="Cloudy"
                className="h-44 w-44 m-0 test-border svg-filter-black dark:svg-filter-white"
            />

            <h3 className="m-0 mt-5 font-bold uppercase test-border tracking-wider">
                {weatherCondition.main}
            </h3>
        </article>
    );
}

export default WeatherCondition;
