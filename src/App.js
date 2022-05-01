import React from "react";
import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import WeatherForecast from "./views/WeatherForecast";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WeatherForecast />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
