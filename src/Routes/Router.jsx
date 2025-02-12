import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Root from '../Layout/Root/Root';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';
import Error from '../Pages/ErrorPage/Error';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/sign-up',
                element:<SignUp></SignUp>
            },
            {
                path:'/sign-in',
                element:<SignIn></SignIn>
            }
        ]
    }
])

export default router;