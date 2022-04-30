import { SUCCESS_FORECASTDATA, FAILED_FORECASTDATA, LOADING } from "./types";
import { getData, get5DaysData } from "../service/WeatherService";

export const getForecastData = (name) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
      payload: true,
    });
    const res = await getData(name);
    let allWeather = {};
    if (res.status === 200) {
      let data = res.data;
      const resDays = await get5DaysData(data.coord.lat, data.coord.lon);
      Object.assign(allWeather, {
        currentWeather: res,
        fiveDaysWeather: resDays,
      });
      dispatch({
        type: SUCCESS_FORECASTDATA,
        payload: allWeather,
      });
    }
  } catch (err) {
    dispatch({
      type: FAILED_FORECASTDATA,
      payload: "City not found",
    });
  }
};
