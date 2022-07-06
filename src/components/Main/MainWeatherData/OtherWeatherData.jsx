import React, { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faGaugeHigh, faDroplet } from "@fortawesome/free-solid-svg-icons";
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

    useEffect(() => {
        animateData();

        return () => clearInterval(animateInterval);
    });

    return (
        <article className="main--sub-section sub-section--other-data">
            <div className="other-data-container group ">
                <FontAwesomeIcon icon={faGaugeHigh} className="other-data-icon" />
                <p className="other-data-text text-left">{pressure} mb</p>
            </div>

            <div className="other-data-container other-data-container--actives group ">
                <FontAwesomeIcon icon={faWind} className="other-data-icon" />
                <p className="other-data-text">
                    {unitType === "Metric"
                        ? `${windSpeed.toFixed(1)} kmph`
                        : `${(windSpeed / 1.609).toFixed(1)} mph`}
                </p>
            </div>

            <div className="other-data-container group ">
                <FontAwesomeIcon icon={faDroplet} className="other-data-icon" />
                <p className="other-data-text">{humidity} %</p>
            </div>
        </article>
    );
}

export default OtherWeatherData;
