import React, { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faGaugeHigh,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import UnitContext from "./../unit-context";

function OtherWeatherData({ pressure, humidity, windSpeed }) {
  const animationTime = 2000;
  let currentIndex = 0;
  let animateInterval;
  const unitType = useContext(UnitContext);

  function animateData() {
    const otherDataContainer = document.querySelector(
      ".sub-section--other-data"
    ).children;

    animateInterval = setInterval(() => {
      Array.from(otherDataContainer).forEach((container, index) => {
        if (index === currentIndex) {
          container.classList.add("other-data-container--active");
        } else {
          container.classList.remove("other-data-container--active");
        }
      });
      currentIndex = currentIndex === 2 ? 0 : currentIndex + 1;
    }, animationTime);
  }

  function scrollAnimation() {
    const otherDataContainer = document.querySelector(
      ".sub-section--other-data"
    ).children;

    let currentActiveContainer = 1; // Container numbering starts with 0.

    animateInterval = setInterval(() => {
      console.log(`Current ACTIVE Container: ${currentActiveContainer}`);
      Array.from(otherDataContainer).forEach((container, index) => {
        // const translateFactor = index - currentActiveContainer;
        const translateFactor = currentActiveContainer;

        if (index === currentActiveContainer) {
          container.classList.add("other-data-container--active");
        } else {
          container.classList.remove("other-data-container--active");
        }

        const translatePercent = 100 * translateFactor;

        console.log(`Current Container: ${index} Percent: ${translatePercent}`);
        container.style.transform = `translateY(${translatePercent}%)`;
        // container.style.transform = `translateX(${translatePercent}%)`;
      });
      console.log(`---------`);
      // currentActiveContainer++;
      /* currentActiveContainer =
        currentActiveContainer === 2 ? 0 : currentActiveContainer + 1; */
    }, animationTime);
  }

  useEffect(() => {
    animateData();
    // scrollAnimation();

    return () => clearInterval(animateInterval);
  });

  return (
    <section className="main--sub-section sub-section--other-data">
      <article className="other-data-container container--top group justify-start lg:justify-center">
        <FontAwesomeIcon icon={faGaugeHigh} className="other-data-icon" />
        <p className="other-data-text">
          {pressure}
          <span className="unit-text"> mb</span>
        </p>
      </article>

      <article className="other-data-container container--middle group">
        <FontAwesomeIcon icon={faWind} className="other-data-icon" />
        <p className="other-data-text">
          {unitType === "Metric"
            ? `${windSpeed.toFixed(1)}`
            : `${(windSpeed / 1.609).toFixed(1)}`}
          <span className="unit-text">
            {unitType === "Metric" ? ` kmph` : ` mph`}
          </span>
        </p>
      </article>

      <article className="other-data-container container--bottom group justify-end lg:justify-center">
        <FontAwesomeIcon icon={faDroplet} className="other-data-icon" />
        <p className="other-data-text">
          {humidity}
          <span className="unit-text"> %</span>
        </p>
      </article>
    </section>
  );
}

export default OtherWeatherData;
