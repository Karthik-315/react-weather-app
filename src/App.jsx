import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Overlay from "./components/Overlay";
import Main from "./components/Main/Main";

function App() {
    /* const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    console.log(key); */
    return (
        <React.Fragment>
            <Overlay />
            <Header />
            <Main />
        </React.Fragment>
    );
}

export default App;
