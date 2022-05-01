import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import WeatherForecast from "./views/WeatherForecast";

function App() {
  return (
    <HashRouter>
      <WeatherForecast />
    </HashRouter>
  );
}

export default App;
