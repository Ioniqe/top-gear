import * as React from 'react';
import {useEffect, useState} from 'react';
import auth from "../firebase";

export const AuthContext = React.createContext(null);

type AuthProviderType = {
    children: React.ReactNode
}

const AuthProvider = ({children}: AuthProviderType) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)
        });
    }, []);

    if (pending) {
        return <>Loading...</>
    }

    return <AuthContext.Provider value={{currentUser}}>{children}</AuthContext.Provider>;
}

export default AuthProvider;