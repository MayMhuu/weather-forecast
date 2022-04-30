import http from "./http-common";

export const getData =(name)=> {
    return http.get(`weather?q=${name}&APPID=${process.env.REACT_APP_API_KEY}`);
}

export const get5DaysData =(lat,lon)=> {
    return http.get(`forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`);
}