import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faGaugeHigh, faDroplet } from "@fortawesome/free-solid-svg-icons";

function OtherWeatherData({ pressure, humidity, windSpeed }) {
    const animationTime = 2000;
    let currentIndex = 0;
    let animateInterval;

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
            <div className="other-data-container group">
                <FontAwesomeIcon icon={faGaugeHigh} className="other-data-icon" />
                <p className="other-data-text">{pressure} mb</p>
            </div>

            <div className="other-data-container other-data-container--active group">
                <FontAwesomeIcon icon={faWind} className="other-data-icon" />
                <p className="other-data-text">{windSpeed} km/hr</p>
            </div>

            <div className="other-data-container group">
                <FontAwesomeIcon icon={faDroplet} className="other-data-icon" />
                <p className="other-data-text">{humidity} %</p>
            </div>
        </article>
    );
}

export default OtherWeatherData;
