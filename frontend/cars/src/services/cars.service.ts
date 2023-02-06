import axios from "axios";
import {About, CarType} from "../types";

const CARS_ROUTE = 'http://localhost:8081/cars'

export const getAboutService = () : Promise<About> => {
    return axios.get(CARS_ROUTE + '/about')
        .then((res) => res.data as About)
        .catch(e => e);
}

export const getCarsByMakeService = (make: string) : Promise<CarType[]> => {
    return axios.post(CARS_ROUTE + '/make', {
        make
    })
        .then((res) => res.data.data as CarType[])
        .catch(e => e);
}


