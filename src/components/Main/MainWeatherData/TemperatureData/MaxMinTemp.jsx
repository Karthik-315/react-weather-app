import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong, faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import UnitContext from "./../../unit-context";

function MaxMinTemp({ minTemp, maxTemp, handleTemperature }) {
    const unitType = useContext(UnitContext);

    return (
        <div className="flex justify-center w-full test-border">
            <div className="min-max-container">
                <FontAwesomeIcon
                    icon={faArrowDownLong}
                    className="h-3 w-auto px-1 lg:h-6"
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
            </div>

            <div className="min-max-container">
                <FontAwesomeIcon
                    icon={faArrowUpLong}
                    className="h-3 w-auto px-1 lg:h-6"
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
            </div>
        </div>
    );
}

export default MaxMinTemp;
