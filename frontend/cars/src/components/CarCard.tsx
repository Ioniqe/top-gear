import * as React from 'react';
import {Box, Typography} from "@mui/material";
import {CarType} from "../types";

type CarCardProps = {
    car: CarType
}

const CarCard = ({car}: CarCardProps) => {
    return <Box
        width={'100%'}
        height={'min-content'}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'start'}
        sx={{
            borderRadius: '5px',
            border: '1px solid',
            borderColor: 'black',
            m: 2,
            p: 2
        }}
    >
        <Typography variant={'body1'}>make: {car.make}</Typography>
        <Typography variant={'subtitle1'}>model: {car.model}</Typography>
        <Typography variant={'subtitle1'}>class: {car.class}</Typography>
        <Typography variant={'subtitle1'}>cylinders: {car.cylinders}</Typography>
        <Typography variant={'subtitle1'}>drive: {car.drive}</Typography>
        <Typography variant={'subtitle1'}>transmission: {car.transmission}</Typography>
        <Typography variant={'subtitle1'}>transmission: {car.year}</Typography>
    </Box>
}

export default CarCard;