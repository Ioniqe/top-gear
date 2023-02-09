import * as React from 'react';
import {useState} from 'react';
import About from "./About";
import Reviews from "./Reviews";
import {Box, Button} from "@mui/material";

export const TopGear = () => {
    const [showAbout, setShowAbout] = useState<boolean>(false);

    return <Box width={'100%'} sx={{p: 2}}>
        <Button onClick={() => setShowAbout(true)}>About Page</Button>
        <Button onClick={() => setShowAbout(false)}>Reviews by body style</Button>

        {
            showAbout ?
                <About/> : <Reviews/>
        }
    </Box>
}
