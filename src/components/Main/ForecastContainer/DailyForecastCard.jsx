import React from "react";

function DailyForecastCard({
    rawDate,
    icon,
    forecastCondition,
    minTemp,
    maxTemp,
    handleTemperature,
}) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // const weatherIcon = `http://openweathermap.org/img/wn/${icon}@4x.png`;
    const weatherIcon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg`;

    function formatForecastDate(inDate) {
        const formattedDate = new Date(inDate * 1000);
        const currentDate = `${formattedDate.getDate()}`.padStart(2, 0);
        const currentDay = `${days[formattedDate.getDay()]}`;
        const currentHrs = `${formattedDate.getHours()}`.padStart(2, 0);
        const currentMins = `${formattedDate.getMinutes()}`.padStart(2, 0);

        let formattedDateString = {};

        formattedDateString.day = `${currentDate} ${currentDay}`;
        formattedDateString.time = `${currentHrs}:${currentMins}`;

        return formattedDateString;
    }

    return (
        <article className="flex flex-col justify-center items-center w-full test-border">
            <div>
                <p className="m-0 mt-2 text-center">{formatForecastDate(rawDate).day}</p>
                <p className="m-0 mb-4 text-sm font-semibold text-center opacity-40">
                    {formatForecastDate(rawDate).time}
                </p>
            </div>

            <div className="relative pt-6">
                <img
                    src={weatherIcon}
                    alt="icon"
                    className="h-20 w-20 m-0 svg-filter-black dark:svg-filter-white peer"
                />
                <p className="absolute top-1/2 right-0 left-0 m-0 p-1 text-center rounded bg-white/30 dark:bg-black/30 opacity-0 peer-hover:top-0 peer-hover:opacity-100 transition-[top_opacity] -z-10">
                    {forecastCondition}
                </p>
            </div>

            <div className="flex items-center mt-4">
                <p className="m-0">
                    {handleTemperature(minTemp)}°
                    <span className="text-xs font-bold">C</span>
                </p>
                <span className="px-1.5 font-thin">/</span>
                <p className="m-0">
                    {handleTemperature(maxTemp)}°
                    <span className="text-xs font-bold">C</span>
                </p>
            </div>
        </article>
    );
}

export default DailyForecastCard;
