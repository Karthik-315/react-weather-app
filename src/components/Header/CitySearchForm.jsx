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
    <section className="w-full md:w-1/2">
      <form
        onSubmit={setInputCity}
        className="flex h-14 items-center justify-between rounded ring-1 ring-neutral-200/60 transition-shadow hover:ring-2 hover:ring-neutral-200"
      >
        <input
          type="search"
          placeholder="Search For A Specific City"
          className="required h-full grow rounded-l border-0 bg-neutral-600/40 p-3 tracking-wider text-light outline-0 placeholder:text-neutral-100/60 md:text-2xl "
          name="city"
          onChange={readInputCity}
          value={cityName}
        />
        <button className="h-full rounded-r bg-neutral-600/40 p-3 px-5 text-light">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </section>
  );
}

export default CitySearchForm;
