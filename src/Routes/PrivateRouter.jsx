import React from 'react';
import useAuth from '../Hook/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader';

const PrivateRouter = ({children}) => {
    const{user,loader} = useAuth();
    const location = useLocation();

    if(loader){
        return <Loader></Loader>;
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/sign-in'}></Navigate>;
};

export default PrivateRouter;