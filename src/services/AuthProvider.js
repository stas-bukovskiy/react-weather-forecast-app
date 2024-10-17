import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = Cookies.get('isLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);
    }, []);

    const login = () => {
        setIsLoggedIn(true);
        Cookies.set('isLoggedIn', 'true', { expires: 1 });
    };

    const logout = () => {
        setIsLoggedIn(false);
        Cookies.remove('isLoggedIn');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
