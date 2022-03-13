import { Container, LoadingButton } from "./styles";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { CardWeatherProps } from "./CardWeatherProps";
import { weatherInformation } from "./weatherInformation";
import { getAddressFromLatLon, getCurrentWeather } from "../../services/weather";
import Lottie from 'react-lottie';
import * as animationData from '../../assets/loading.json';

export function CardWeather(props: CardWeatherProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [weather, setWeather] = useState<weatherInformation>({
        weather: {
            weatherCondition: 'Clouds',
            icon: 'http://openweathermap.org/img/wn/04d@2x.png',
            temperature: 27.8,
            location: {
                neighborhood: 'Parangaba',
                city: 'Fortaleza',
                state: 'Ceará',
                country: 'BR'
            }
        }
    });

    useEffect(() => {
        setLoading(true);
        getWeather();
    }, []);

    async function getWeather() {
        console.log('getWeather().CardWeather.tsx')
        try {
            const responseWeather = await getCurrentWeather(props.latitude, props.longitude);

            const responseAddress = await getAddressFromLatLon(props.latitude, props.longitude);

            setWeather({
                weather: {
                    weatherCondition: responseWeather.data.weather[0].main,
                    icon: `http://openweathermap.org/img/wn/${responseWeather.data.weather[0].icon}@2x.png`,
                    temperature: responseWeather.data.main.temp,
                    location: {
                        neighborhood: responseWeather.data.name,
                        city: responseAddress.data[0].name,
                        state: responseAddress.data[0].state,
                        country: responseAddress.data[0].country
                    }
                }
            });

            setLoading(false);
            return true;
        }
        catch {
            setLoading(false);
            return false;
        }
    }

    async function handleUpdateWeather() {
        setLoading(!loading);
        await getWeather();

    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Container>
            {!loading ?
                <>
                    <div id='weather-illustrator'>
                        <img src={weather.weather.icon} alt="" />
                        <div>
                            <span>{weather.weather.temperature}</span>
                            <p>oC</p>
                        </div>
                    </div>
                    <div id='weather-information'>
                        <h1>{weather.weather.weatherCondition}</h1>
                        <div>
                            <img src="https://img.icons8.com/office/24/000000/marker.png" />
                            <p>{`${weather.weather.location.city}, ${weather.weather.location.state} - ${weather.weather.location.country}`}</p>
                        </div>
                        <button type='submit' onClick={handleUpdateWeather}>
                            Update
                        </button>
                    </div>
                </>
                :
                <div id='weather-loading'>
                    <Lottie
                        options={defaultOptions}
                        isStopped={false}
                        isPaused={false}
                        height={200}
                        width={200}
                    />
                </div>}

        </Container>
    );
}