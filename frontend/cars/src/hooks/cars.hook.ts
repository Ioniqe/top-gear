import {useState} from "react";
import {CarType} from "../types";
import {getCarsByMakeService} from "../services";

const useLoadCars = () => {
    const [carsLoading, setCarsLoading] = useState<boolean>(false);

    const getCarsByMake = async (make: string): Promise<CarType[]> => {
        try {
            setCarsLoading(true);
            const reviews: CarType[] = await getCarsByMakeService(make);

            setCarsLoading(false)
            return reviews;
        } catch (err) {
            setCarsLoading(false)
            throw err;
        }
    }

    return {
        carsLoading,
        getCarsByMake
    }
}

export default useLoadCars;