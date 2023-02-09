import * as React from 'react';
import useLoadAbout from "../hooks/about.hook";
import {Typography} from "@mui/material";

const About = () => {
    const {about, aboutIsLoading} = useLoadAbout();

    return <>
        {
            aboutIsLoading ?
                <Typography variant={'h4'} pt={3}>Loading...</Typography> :
                <>
                    <Typography variant={'h4'}>Name: {about.name}</Typography>
                    <Typography variant={'h4'} py={3}>Description: {about.description}</Typography>
                    <Typography variant={'h4'}>Author: {about.author}</Typography>
                </>
        }
    </>
}

export default About;