import * as React from 'react';
import {Navigate, useNavigate} from "react-router-dom";
import useAuth from "../../auth.hook";
import {Button, Typography} from "@mui/material";

const Login = () => {
    const navigate = useNavigate();
    const {currentUser, login} = useAuth();

    if (currentUser) {
        return <Navigate to="/top-gear"/>;
    }

    return (
        <div>
            <Typography variant={'h4'}>Log in</Typography>
            <form onSubmit={login}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email"/>
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password"/>
                </label>
                <Button type="submit">Log in</Button>
            </form>
            <Button onClick={() => navigate('/signup')}>Sign Up</Button>
        </div>
    );
}

export default Login;