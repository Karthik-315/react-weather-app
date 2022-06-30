import React from "react";
import lightIcon from "../../../assets/icons/cloud-lighting-xxl.png";
import darkIcon from "../../../assets/icons/clear-sky.png";

function DailyForecastCard({ rawDate, icon, minTemp, maxTemp, handleTemperature }) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weatherIcon = `http://openweathermap.org/img/wn/${icon}@4x.png`;

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
                <p className="m-0 mb-8 text-sm font-semibold text-center opacity-40">
                    {formatForecastDate(rawDate).time}
                </p>
            </div>

            <img src={weatherIcon} alt="icon" className="h-20 w-20 m-0" />

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
