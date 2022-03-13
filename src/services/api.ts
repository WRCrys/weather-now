import axios from "axios";

export const api = axios.create({
    baseURL: 'http://api.openweathermap.org/',
});

export const API_KEY_WEATHER = 'd272c287402bfa80fa2825bd484084';
export const API_KEY_ADDRESS = 'd272c287402bfa80fa2825bd484084be';