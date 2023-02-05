export type CarSpecsType = {
    url: string,
    title: string,
    price: number,
    seats: number,
    doors: number,
    engineSize: number,
    mpg: number,
    co2: number,
    topSpeed: number,
    zeroTo62: number,
    bhp: number,
    torque: number,
    ncap: number,
    fuelType: {
        "label": string
    },
    transmission: {
        "label": string
    },
    driveTrain: {
        "label": string
    }
}