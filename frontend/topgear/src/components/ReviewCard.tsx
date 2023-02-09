import * as React from 'react';
import {Box, Typography} from "@mui/material";
import {ReviewType} from "../types";
import {TOP_GEAR_URL} from "../constants";

type ReviewCardProps = {
    review: ReviewType
}

const ReviewCard = ({review}: ReviewCardProps) => {
    return <Box
        width={'100%'}
        height={'min-height'}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'start'}
        sx={{
            borderRadius: '5px',
            border: '1px solid',
            borderColor: 'black',
            m: 2,
            p:2
        }}
    >
        <img src={TOP_GEAR_URL + review.attributes.image + '?w=315&h=177'} alt={'car-image'}/>
        <Typography variant={'subtitle1'}>{review.attributes.title}</Typography>
        <Typography variant={'subtitle1'}>{review.attributes.name}</Typography>
        <Typography variant={'subtitle1'}>{review.attributes.whatWeSay}</Typography>
        <Typography variant={'subtitle1'}>rating: {review.attributes.rating}</Typography>
    </Box>
}

export default ReviewCard;