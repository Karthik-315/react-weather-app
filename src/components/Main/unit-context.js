import React, { createContext } from "react";

// Keeps track of which unit type to be used(Metric or Imperial), based on users location.
const UnitContext = createContext(null);

export default UnitContext;
