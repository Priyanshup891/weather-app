import axios from "axios";

const URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "9aa7a34d14362daae4f18a37f427d6c8";

export const getData = async (city) => {
    return await axios.get(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
};