import * as React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
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
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}>
        <TextField
            label="Car Make"
            variant="outlined"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            sx={{width: '100%'}}
        />
        <Button onClick={handleSearch}>Search</Button>

        {
            carsLoading ? <Typography variant={'body1'}>Loading</Typography> : <Box
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