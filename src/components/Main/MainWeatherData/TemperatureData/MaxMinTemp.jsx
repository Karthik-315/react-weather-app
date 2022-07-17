import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpLong,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";
import UnitContext from "./../../unit-context";

function MaxMinTemp({ minTemp, maxTemp, handleTemperature }) {
  const unitType = useContext(UnitContext);

  return (
    <div className="flex w-full justify-between opacity-95 md:mt-8">
      <article className="min-max-container">
        <FontAwesomeIcon icon={faArrowDownLong} className="min-max-icon" />
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
        <FontAwesomeIcon icon={faArrowUpLong} className="min-max-icon" />
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
