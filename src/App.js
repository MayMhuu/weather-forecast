import React from "react";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import WeatherForecast from "./views/WeatherForecast";

function App() {
  return (
    <Router>
      <WeatherForecast />
    </Router>
  );
}

export default App;
