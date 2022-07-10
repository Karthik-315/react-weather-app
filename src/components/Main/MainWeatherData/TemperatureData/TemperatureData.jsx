import React, { useContext } from "react";
import MaxMinTemp from "./MaxMinTemp";
import UnitContext from "./../../unit-context";

function TemperatureData({
  city,
  rawDate,
  country,
  mainTemperature,
  handleTemperature,
}) {
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
    <article className="main--sub-section h-full justify-self-end">
      <div>
        <p className="m-0 text-lg font-medium uppercase tracking-wider md:text-2xl">
          {city}
          <span>, {country}</span>
        </p>
      </div>

      <div className="my-4 flex items-center">
        <h2 className="m-0 p-0 text-6xl tracking-wider md:text-9xl">
          {handleTemperature(mainTemperature.temp)}
        </h2>
        <div className="flex h-full flex-col justify-between px-1">
          <h3 className="m-0 text-3xl md:text-6xl">°</h3>
          <h3 className="m-0 text-3xl font-extralight md:text-6xl">
            {unitType === "Metric" ? "C" : "F"}
          </h3>
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
