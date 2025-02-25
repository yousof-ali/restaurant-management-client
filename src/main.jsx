import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from 'react-router-dom';
import './index.css'
import router from './Routes/Router.jsx';
import AuthProvider from './Context/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);
