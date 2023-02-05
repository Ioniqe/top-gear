import axios from "axios";
import {AboutType, BodyStyleType, ReviewType} from "../types";

const TOP_GEAR_ROUTE = 'http://localhost:8080/top-gear'

export const getAboutService = () : Promise<AboutType> => {
    return axios.get(TOP_GEAR_ROUTE + '/about')
        .then((res) => res.data as AboutType)
        .catch(e => e);
}

export const getCarReviewsByBodyStyleService = (bodyStyle: BodyStyleType) : Promise<ReviewType[]> => {
    return axios.post(TOP_GEAR_ROUTE + '/body-style', {
        bodyStyle
    })
        .then((res) => res.data.data as ReviewType[])
        .catch(e => e);
}
