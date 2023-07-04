import React, { useState, createContext, useId } from 'react';
import { User } from '../types/index';

type UserContextType = {
    user: User | null
    setUser: (value: User| null) => void;
}
type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextType>({
    user: { email: 'hah', role: 'ddd', userid: '1234' },
    setUser: (user) => {
        alert("init value" + user?.email)
    }
});

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<User | null>(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

  
