'use client';
import { useState, useEffect, useContext, createContext } from 'react';

const AuthContext = createContext({
    user: null,
    login: (string) => {},
    logout: () => {},
    isLoading: true
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
        
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }   , []);
    
    const login = (username) => {
        const userData = { username };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };  
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }
    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}   