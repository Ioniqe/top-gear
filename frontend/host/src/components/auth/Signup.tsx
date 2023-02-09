import * as React from 'react';
import useAuth from "../../auth.hook";
import {useNavigate} from "react-router-dom";
import {Button, Typography} from "@mui/material";

const Signup = () => {
    const navigate = useNavigate();
    const {signup} = useAuth();

    return (
        <div>
            <Typography variant={'h4'}>Sign up</Typography>
            <form onSubmit={signup}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email"/>
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password"/>
                </label>
                <Button type="submit">Sign Up</Button>
            </form>
            <Button onClick={() => navigate('/login')}>Log in</Button>
        </div>
    );
}

export default Signup;