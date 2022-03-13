import { useEffect, useState } from 'react';
import { getCurrentWeather, getAddressFromLatLon } from '../../services/weather';
import { CardWeather } from '../CardWeather';
import { Container, Title } from './styles'

interface weatherInformation {
    weather: {
        weatherCondition: string,
        icon: string,
        temperature: number,
        location: {
            neighborhood: string,
            city: string,
            state: string,
            country: string
        }
    }

}

export function Painel() {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [weather, setWeather] = useState<weatherInformation>({
        weather: {
            weatherCondition: '',
            icon: '',
            temperature: 0,
            location: {
                neighborhood: '',
                city: '',
                state: '',
                country: ''
            }
        }
    });

    async function getWeather() {
        console.log('getWeather().Painel.tsx')
        try {
            // const responseWeather = await getCurrentWeather(latitude, longitude);
            // console.log(responseWeather.data.name);

            // const responseAddress = await getAddressFromLatLon(latitude, longitude);
            // console.log(responseAddress.data[0])

            // setWeather({
            //     weather: {
            //         weatherCondition: responseWeather.data.weather[0].main,
            //         icon: `http://openweathermap.org/img/wn/${responseWeather.data.weather[0].icon}@2x.png`,
            //         temperature: responseWeather.data.main.temp,
            //         location: {
            //             neighborhood: responseWeather.data.name,
            //             city: responseAddress.data[0].name,
            //             state: responseAddress.data[0].state,
            //             country: responseAddress.data[0].country
            //         }
            //     }
            // });

            return true;
        }
        catch {
            return false;
        }
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        }, error => { console.log(error)})
    }, []);

    return (
        <Container>
            <Title>Weather <span>Now</span></Title>
            <CardWeather latitude={latitude} longitude={longitude}/>
        </Container>
    );
}