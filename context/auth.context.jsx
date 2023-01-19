import { createContext, useEffect, useState } from 'react';
import UserAPI from '../services/user.service';

export const AuthContext = createContext();

const LOCAL_STORAGE_AUTH = 'tokenAuth';

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const storeSetToken = (token) => {
        localStorage.setItem(LOCAL_STORAGE_AUTH, token);
    };

    const destroyToken = () => {
        localStorage.removeItem(LOCAL_STORAGE_AUTH);
    }

    const authentication = () => {
        const token = localStorage.getItem(LOCAL_STORAGE_AUTH);

        if (token) {
            UserAPI
                .me(token)
                .then((user) => {
                    setUser(user);
                    setIsLoggedIn(true);
                })
                .catch((err) => {
                    console.error(err);
                    setIsLoggedIn(false)
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setUser(null);
            setIsLoggedIn(false);
            setIsLoading(false);
        }
    };

    const logOut = () => {
        destroyToken();
        authentication();
    }

    useEffect(() => {
        authentication();
    }, [])

    return (
        <AuthContext.Provider
            value={{ authentication, storeSetToken, isLoading, setIsLoading, isLoggedIn, logOut, user }}>
            {props.children}
        </AuthContext.Provider>
    )
};