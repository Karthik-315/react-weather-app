import React from "react";

function WeatherCondition({ weatherCondition }) {
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherCondition["icon"]}.svg`;

    return (
        <article className="main--sub-section h-full justify-self-start">
            <img
                src={icon}
                alt="Cloudy"
                className="test-border svg-filter-black dark:svg-filter-white m-0 h-32 w-32 md:h-56 md:w-56"
            />

            <h3 className="test-border text-3xl font-medium uppercase tracking-widest md:text-5xl">
                {weatherCondition.main}
            </h3>
        </article>
    );
}

export default WeatherCondition;
