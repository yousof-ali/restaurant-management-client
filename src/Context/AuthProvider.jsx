import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebaseConfig';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [loader,setLoader] = useState(true);
    const [user,setUser] = useState();
    const googleProvider = new GoogleAuthProvider();

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
        return signOut(auth);
    };

    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth,googleProvider);
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

    const forgetPassword =(email) =>{
        return sendPasswordResetEmail(auth,email);
    };

   

    const value = {user,loader,createUser,logInUser,logOutUser,googleLogin,forgetPassword}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;