import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import WeatherForecast from "./views/WeatherForecast";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" element={<WeatherForecast />} />

    </HashRouter>
  );
}

export default App;
