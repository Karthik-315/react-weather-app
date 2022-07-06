import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function CitySearchForm({ handleCitySearch }) {
    const [cityName, setCityName] = useState("");

    function readInputCity(event) {
        setCityName(event.target.value);
    }

    function setInputCity(event) {
        event.preventDefault();
        handleCitySearch(event, cityName);
        setCityName("");
    }

    return (
        <section className="w-full p-2 breakpoint:w-1/2">
            <form
                onSubmit={setInputCity}
                className="flex justify-between items-center rounded hover:ring hover:ring-neutral-200 transition-shadow"
            >
                <input
                    type="search"
                    placeholder="Search For A Specific City"
                    className="p-3 grow text-white rounded-l border-0 outline-0 bg-neutral-600/40 placeholder:text-neutral-100 required"
                    name="city"
                    onChange={readInputCity}
                    value={cityName}
                />
                <button className="p-3 px-5 text-white rounded-r bg-neutral-600/40">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </section>
    );
}

export default CitySearchForm;
