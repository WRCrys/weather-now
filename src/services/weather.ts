import { api, API_KEY_ADDRESS, API_KEY_WEATHER } from "./api";

interface responseCurrentWeather {
    data: {
        weather: [{
            main: string;
            description: string;
            icon: string;
        }],
        main: {
            temp: number;
        },
        name: string;
    }
}

interface responseAddress {
    data: [
        {
            name: string;
            country: string;
            state: string;
        }
    ]
}

export async function getCurrentWeather(latitude: number, longitude: number): Promise<responseCurrentWeather> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(api.get(`data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY_WEATHER}be&units=metric`));
        }, 2000)
    });
}

export async function getAddressFromLatLon(latitude: number, longitude: number): Promise<responseAddress> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(api.get(`geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${API_KEY_ADDRESS}`))
        }, 2000);
    });
}