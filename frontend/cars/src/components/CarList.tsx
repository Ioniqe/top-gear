import * as React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";
import useLoadCars from "../hooks/cars.hook";
import {CarType} from "../types";
import CarCard from "./CarCard";

const CarList = () => {
    const [make, setMake] = useState<string>('');
    const [carList, setCarList] = useState<CarType[]>([]);

    const {carsLoading, getCarsByMake} = useLoadCars();

    const handleSearch = async () => {
        try {
            const data: CarType[] = await getCarsByMake(make);
            setCarList(data);
        } catch (e) {
            console.log(e)
        }
    }

    return <Box
        display={'flex'}
        width={'100%'}
        height={'100%'}
        justifyContent={'space-between'}
        alignItems={'start'}
        flexDirection={'column'}>
        <TextField
            label="Car Make"
            variant="outlined"
            value={make}
            onChange={(e) => setMake(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>

        {
            carsLoading ? <h4>Loading</h4> : <Box
                width={'100%'}
                height={'100%'}
                display={'flex'}
                flexWrap={'wrap'}
            >{
                carList.map((car: CarType, index) => <CarCard key={index} car={car}/>)}
            </Box>
        }
    </Box>
}

export default CarList;