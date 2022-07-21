import React, { useEffect, useContext } from "react";
import pressureIcon from "../../../assets/icons/condition-pressure.svg";
import windIcon from "../../../assets/icons/condition-wind.svg";
import humidityIcon from "../../../assets/icons/condition-humidity.svg";
import UnitContext from "./../unit-context";

function OtherWeatherData({ pressure, humidity, windSpeed }) {
  const unitType = useContext(UnitContext);

  return (
    <section className="main--sub-section sub-section--other-data">
      <article className="other-data-container justify-start lg:justify-center">
        <img
          src={pressureIcon}
          alt="Pressure Icon"
          className="other-data-icon dark:svg-filter-white"
        />
        <p className="other-data-text">
          {pressure}
          <span className="unit-text"> mb</span>
        </p>
      </article>

      <article className="other-data-container">
        <img
          src={windIcon}
          alt="Pressure Icon"
          className="other-data-icon dark:svg-filter-white"
        />
        <p className="other-data-text">
          {unitType === "Metric"
            ? `${windSpeed.toFixed(1)}`
            : `${(windSpeed / 1.609).toFixed(1)}`}
          <span className="unit-text">
            {unitType === "Metric" ? ` kmph` : ` mph`}
          </span>
        </p>
      </article>

      <article className="other-data-container justify-end lg:justify-center">
        <img
          src={humidityIcon}
          alt="Pressure Icon"
          className="other-data-icon dark:svg-filter-white"
        />
        <p className="other-data-text">
          {humidity}
          <span className="unit-text"> %</span>
        </p>
      </article>
    </section>
  );
}

export default OtherWeatherData;
