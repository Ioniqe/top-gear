import * as React from 'react';
import {AuthContext} from "./containers";
import {useCallback} from "react";
import auth from "./firebase";
import {useLocation, useNavigate} from "react-router-dom";

const useAuth = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const {currentUser} = React.useContext(AuthContext);

    let from = location.state?.from?.pathname || "/";

    const login = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await auth
                    .signInWithEmailAndPassword(email.value, password.value);
                navigate(from, { replace: true });
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const signup = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await auth
                .createUserWithEmailAndPassword(email.value, password.value);
            navigate(from, { replace: true });
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const logout = async () => {
      await auth.signOut();
    }

    return {
        currentUser,
        login,
        signup,
        logout
    };
}

export default useAuth;