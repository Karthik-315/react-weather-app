import React, { useContext } from "react";
import MaxMinTemp from "./MaxMinTemp";
import UnitContext from "./../../unit-context";

function TemperatureData({ city, rawDate, country, mainTemperature, handleTemperature }) {
    //prettier-ignore
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const unitType = useContext(UnitContext);

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
            <div className="test-border">
                <p className="m-0 uppercase font-semibold">
                    {city}
                    <span className="font-normal">, {country}</span>
                </p>

                <p className="m-0 p-0 text-sm text-center font-semibold uppercase opacity-80">
                    {formatForecastDate(rawDate)}
                </p>
            </div>

            <div className="flex items-center my-4 test-border">
                <h1 className=" m-0 p-0 text-6xl tracking-wide breakpoint:text-8xl breakpoint:self-end test-border">
                    {handleTemperature(mainTemperature.temp)}
                </h1>
                <div className="flex flex-col justify-between h-full px-1 test-border">
                    <h2 className="m-0 p-0 font-extrabold breakpoint:pt-4">°</h2>
                    <h2 className="m-0 p-0 text-3xl font-light breakpoint:text-5xl">
                        {unitType === "Metric" ? "C" : "F"}
                    </h2>
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
