import React from 'react';
import useAuth from '../Hook/useAuth';
import { Navigate } from 'react-router-dom';
import Loader from '../Components/Loader';

const PrivateRouter = ({children}) => {
    const{user,loader} = useAuth();

    if(loader){
        return <Loader></Loader>;
    }
    if(user){
        return children
    }
    return <Navigate to={'/sign-in'}></Navigate>;
};

export default PrivateRouter;