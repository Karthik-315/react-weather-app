import React from "react";
import MaxMinTemp from "./MaxMinTemp";

function TemperatureData({ city, rawDate, country, mainTemperature, handleTemperature }) {
    //prettier-ignore
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function formatForecastDate(rawDate) {
        const formattedDate = new Date(rawDate * 1000);
        const currentDate = `${formattedDate.getDate()}`.padStart(2, 0);
        const currentMonth = `${months[formattedDate.getMonth()]}`;
        const currentYear = `${formattedDate.getFullYear()}`;

        let formattedDateString = `${currentDate} ${currentMonth}, ${currentYear}`;

        return formattedDateString;
    }

    return (
        <article className="main--sub-section">
            <div>
                <h3 className="m-0 uppercase">
                    {city}
                    <span className="font-normal">, {country}</span>
                </h3>

                <p className="m-0 p-0 text-base text-center font-semibold uppercase opacity-70">
                    {formatForecastDate(rawDate)}
                </p>
            </div>

            <div className="flex items-center my-4">
                <h1 className="self-end m-0 p-0 text-8xl  tracking-wide">
                    {handleTemperature(mainTemperature.temp)}
                </h1>
                <div className="flex flex-col justify-between h-full px-1">
                    <h2 className="m-0 p-0 pt-4 font-extrabold">°</h2>
                    <h2 className="m-0 p-0 text-5xl font-light">C</h2>
                </div>
            </div>

            <MaxMinTemp
                minTemp={mainTemperature.temp_min}
                maxTemp={mainTemperature.temp_max}
                handleTemperature={handleTemperature}
            />
        </article>
    );
}

export default TemperatureData;
