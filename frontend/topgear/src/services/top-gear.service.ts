import axios from "axios";
import {About} from "../types";

const TOP_GEAR_ROUTE = 'http://localhost:8080/top-gear'

export const getAboutService = () : Promise<About> => {
    return axios.get(TOP_GEAR_ROUTE + '/about')
        .then((res) => res.data as About)
        .catch(e => e);
}


