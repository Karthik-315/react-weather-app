import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong, faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

function MaxMinTemp({ minTemp, maxTemp, handleTemperature }) {
    return (
        <div className="flex justify-between w-full">
            <div className="min-max-container">
                <FontAwesomeIcon icon={faArrowDownLong} className="h-6 w-auto px-1" />
                <p className="min-max-temperature">{handleTemperature(minTemp)}</p>
                <div>
                    <p>
                        °<span className="min-max-unit-text">C</span>
                    </p>
                </div>
            </div>

            <div className="min-max-container">
                <FontAwesomeIcon icon={faArrowUpLong} className="h-6 w-auto px-1" />
                <p className="min-max-temperature">{handleTemperature(maxTemp)}</p>
                <div>
                    <p>
                        °<span className="min-max-unit-text">C</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MaxMinTemp;
