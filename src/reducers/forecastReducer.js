import { SUCCESS_FORECASTDATA, FAILED_FORECASTDATA,LOADING } from "../actions/types";
const initialState = {
  error: null,
  dataList: null,
  loading:true
};

function forecastReducer(forecast = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        loading:true
      };
    case SUCCESS_FORECASTDATA:
      return {
        error:null,
        dataList: payload,
        loading:false
      };
    case FAILED_FORECASTDATA:
      return {
        dataList:null,
        error: payload,
        loading:false
      };

    default:
      return forecast;
  }
}
export default forecastReducer;
