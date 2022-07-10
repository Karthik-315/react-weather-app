import React, { useContext } from "react";
import UnitContext from "./../unit-context";

function DailyForecastCard({
  rawDate,
  icon,
  forecastCondition,
  minTemp,
  maxTemp,
  handleTemperature,
}) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const unitType = useContext(UnitContext);

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
    <article className="flex w-full flex-col items-center justify-center px-5">
      <div>
        <p className="m-0 mt-2 text-center font-medium">
          {formatForecastDate(rawDate).day}
        </p>
        <p className="m-0 mb-4 text-center text-sm font-medium opacity-80">
          {formatForecastDate(rawDate).time}
        </p>
      </div>

      <div>
        <img
          src={weatherIcon}
          alt="icon"
          className="svg-filter-black dark:svg-filter-white peer m-0 h-20 w-20"
        />
      </div>

      <div className="mt-4 flex items-center">
        <p className="m-0 font-medium">
          {handleTemperature(minTemp)}°
          <span className="text-xs font-bold">
            {unitType === "Metric" ? "C" : "F"}
          </span>
        </p>
        <span className="px-0.5 lg:px-1.5">/</span>
        <p className="m-0 font-medium">
          {handleTemperature(maxTemp)}°
          <span className="text-xs font-bold">
            {unitType === "Metric" ? "C" : "F"}
          </span>
        </p>
      </div>
    </article>
  );
}

export default DailyForecastCard;
