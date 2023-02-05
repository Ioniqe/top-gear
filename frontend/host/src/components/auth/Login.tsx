import * as React from 'react';
import {Navigate, useNavigate} from "react-router-dom";
import useAuth from "../../auth.hook";

const Login = () => {
    const navigate = useNavigate();
    const {currentUser, login} = useAuth();

    if (currentUser) {
        return <Navigate to="/top-gear"/>;
    }

    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={login}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email"/>
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password"/>
                </label>
                <button type="submit">Log in</button>
            </form>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
    );
}

export default Login;