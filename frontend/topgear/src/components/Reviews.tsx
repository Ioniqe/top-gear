import * as React from 'react';
import {useState} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {BodyStyleType, ReviewType} from "../types";
import useLoadReviews from "../hooks/reviews.hook";
import ReviewCard from "./ReviewCard";

export const bodyStyles: BodyStyleType[] = [
    '4x4',
    'city-car',
    'convertible',
    'coupe',
    'estate',
    'executive',
    'hatchback',
    'hot-hatch',
    'hybridev',
    'large-suv',
    'luxury',
    'mpv',
    'saloon',
    'small-suv',
    'sports',
    'supermini',
    'van',
    'wagon'
]

const Reviews = () => {
    const [chosenBodyStyle, setChosenBodyStyle] = useState<BodyStyleType>('' as BodyStyleType);
    const [reviews, setReviews] = useState<ReviewType[]>([]);

    const {reviewsLoading, getReviewsByBodyStyle} = useLoadReviews();

    const handleChange = async (event: SelectChangeEvent) => {
        const bodyStyle = event.target.value as BodyStyleType;
        setChosenBodyStyle(bodyStyle)

        try {
            const data: ReviewType[] = await getReviewsByBodyStyle(bodyStyle);
            setReviews(data);
        } catch (e) {
            console.log(e)
        }
    }

    console.log(reviews)

    return <Box
        display={'flex'}
        width={'100%'}
        height={'100%'}
        justifyContent={'space-between'}
        alignItems={'start'}
        flexDirection={'column'}
    >
        <FormControl fullWidth>
            <InputLabel>Body Style</InputLabel>
            <Select
                value={chosenBodyStyle}
                label="Body Style"
                onChange={handleChange}
            >
                {
                    bodyStyles.map((bodyStyle: BodyStyleType, index) => <MenuItem value={bodyStyle}
                                                                                  key={index}>{bodyStyle}</MenuItem>)
                }
            </Select>
        </FormControl>

        {
            reviewsLoading ? <h4>Loading</h4> : <Box
                width={'100%'}
                height={'100%'}
                display={'flex'}
                flexWrap={'wrap'}
            >{
                reviews.map((review: ReviewType, index) => <ReviewCard key={index} review={review}/>)}
            </Box>
        }
    </Box>
}

export default Reviews;