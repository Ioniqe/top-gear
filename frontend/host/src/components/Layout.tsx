import * as React from 'react';
import {useNavigate} from "react-router-dom";
import useAuth from "../auth.hook";
import {Box, Button, Typography} from "@mui/material";
import {lightBlue} from '@mui/material/colors';

type LayoutType = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutType) => {
    const {logout} = useAuth();
    const navigate = useNavigate();

    return <Box
        width={'100%'}
        height={'100%'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'start'}>
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            width={'100%'}
            height={'64px'}
            sx={{
                bgcolor: lightBlue[600],
            }}>
            <Typography variant={'h4'} px={2} color={'white'}>Welcome</Typography>
            <Box display={'flex'}
                 alignItems={'center'}
                 justifyContent={'end'}
                 px={2}>
                <Button sx={{color: 'white'}} onClick={() => navigate('/top-gear')}>Top Gear</Button>
                <Button sx={{color: 'white'}} onClick={() => navigate('/cars')}>Cars</Button>
                <Button sx={{color: 'white'}} onClick={logout}>Sign Out</Button>
            </Box>
        </Box>

        <Box
            display={'flex'}
            width={'100%'}>
            {
                children
            }
        </Box>
    </Box>
}

export default Layout;