import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebaseConfig';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [loader,setLoader] = useState(true);
    const [user,setUser] = useState(null);

    const createUser = (email,password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const logInUser = (email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    const logOutUser = () => {
        setLoader(true);
        return signOut;
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setLoader(false);
        })
        return () => {
            unsubscribe();
        }
    },[]);

    const value = {user,loader,createUser,logInUser,logOutUser}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;