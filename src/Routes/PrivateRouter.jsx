import React from 'react';
import useAuth from '../Hook/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const{user,loader} = useAuth();
    console.log(loader)

    if(loader){
        return <p>Loading........</p>;
    }
    if(user){
        return children
    }
    return <Navigate to={'/sign-in'}></Navigate>;
};

export default PrivateRouter;