import React, { createContext } from 'react';
import UseFirebase from '../../Hooks/UseFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const allContexts = UseFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;