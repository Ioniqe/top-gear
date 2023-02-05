import {BodyStyleType} from "./body-style.type";
import {CarSpecsType} from "./car-specs.type";

export type ReviewType = {
    type: string,
    attributes: {
        author: string,
        url: string,
        title: string,
        name: string,
        whatWeSay: string,
        verdict: string,
        image: string,
        make: {
            "id": string,
            "label": string
        },
        "range": {
            "id": string,
            "label": string
        },
        "priceRange": {
            "min": number,
            "max": number
        },
        "rating": number,
        "bodyStyle": {
            "id": BodyStyleType,
            "label": string
        },
        "specs": CarSpecsType[]
    }
}