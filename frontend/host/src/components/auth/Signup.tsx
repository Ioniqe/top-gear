import * as React from 'react';
import useAuth from "../../auth.hook";
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const {signup} = useAuth();

    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={signup}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
            <button onClick={() => navigate('/login')}>Log in</button>
        </div>
    );
}

export default Signup;