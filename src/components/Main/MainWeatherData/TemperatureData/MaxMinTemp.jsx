import React, { useContext } from "react";
import upArrow from "../../../../assets/icons/up-arrow.svg";
import UnitContext from "./../../unit-context";

function MaxMinTemp({ minTemp, maxTemp, handleTemperature }) {
  const unitType = useContext(UnitContext);

  return (
    <div className="mt-4 flex w-full justify-center opacity-95 md:mt-8 md:justify-between">
      <article className="min-max-container">
        {/* Same SVG as up arrow but rotated 180 degrees */}
        <img
          src={upArrow}
          alt="Down Arrow"
          className="min-max-icon dark:svg-filter-white rotate-180"
        />
        <p className="min-max-temperature">{handleTemperature(minTemp)}</p>
        <div>
          <p>
            °
            <span className="min-max-unit-text">
              {unitType === "Metric" ? "C" : "F"}
            </span>
          </p>
        </div>
      </article>

      <article className="min-max-container">
        <img
          src={upArrow}
          alt="Up Arrow"
          className="min-max-icon dark:svg-filter-white"
        />
        <p className="min-max-temperature">{handleTemperature(maxTemp)}</p>
        <div>
          <p>
            °
            <span className="min-max-unit-text">
              {unitType === "Metric" ? "C" : "F"}
            </span>
          </p>
        </div>
      </article>
    </div>
  );
}

export default MaxMinTemp;
