import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Root from '../Layout/Root/Root';
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default router;