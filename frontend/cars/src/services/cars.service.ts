import axios from "axios";
import {About} from "../types";

const CARS_ROUTE = 'http://localhost:8081/cars'

export const getAboutService = () : Promise<About> => {
    return axios.get(CARS_ROUTE + '/about')
        .then((res) => res.data as About)
        .catch(e => e);
}


