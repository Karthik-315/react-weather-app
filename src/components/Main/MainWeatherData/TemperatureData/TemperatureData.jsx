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

  return (
    <article className="main--sub-section h-full justify-self-end">
      <div>
        <p className="m-0 text-center text-lg font-medium uppercase tracking-wider md:text-2xl">
          {city}
          <span>, {country}</span>
        </p>
      </div>

      <article className="my-4 flex items-center">
        <h2 className="m-0 p-0 text-6xl tracking-wider md:text-9xl">
          {handleTemperature(mainTemperature.temp)}
        </h2>
        <div className="flex h-full flex-col justify-between px-1">
          <h3 className="m-0 text-3xl md:text-6xl">°</h3>
          <h3 className="m-0 text-3xl font-extralight md:text-6xl">
            {unitType === "Metric" ? "C" : "F"}
          </h3>
        </div>
      </article>

      <MaxMinTemp
        minTemp={mainTemperature.temp_min}
        maxTemp={mainTemperature.temp_max}
        handleTemperature={handleTemperature}
      />
    </article>
  );
}

export default TemperatureData;
