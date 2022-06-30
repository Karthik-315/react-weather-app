import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function CitySearchForm(props) {
    return (
        <section className="w-1/2  p-2">
            <form
                onSubmit={props.handleCitySearch}
                className="flex justify-between items-center rounded hover:ring hover:ring-neutral-200 transition-shadow"
            >
                <input
                    type="search"
                    placeholder="Search For A Specific City"
                    className="p-3 grow text-white rounded-l border-0 outline-0 bg-neutral-600/40 placeholder:text-neutral-100 required"
                />
                <button className="p-3 px-5 text-white rounded-r bg-neutral-600/40">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </section>
    );
}

export default CitySearchForm;
