export interface weatherInformation {
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