import * as React from 'react';
import {useState} from "react";
import About from "./About";
import CarList from "./CarList";
import {Box, Button} from "@mui/material";

export const Cars = () => {
    const [showAbout, setShowAbout] = useState<boolean>(true);

    return <Box width={'100%'} sx={{p: 2}}>
        <Button onClick={() => setShowAbout(true)}>About Page</Button>
        <Button onClick={() => setShowAbout(false)}>Car list</Button>

        {
            showAbout ?
                <About/> : <CarList/>
        }
    </Box>
}
