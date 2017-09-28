// src/app-client.js
import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/home";

window.onload = () => {
    ReactDOM.render(
        <HomePage {...App.initialState} />,
        document.getElementById("main")
    );
};
