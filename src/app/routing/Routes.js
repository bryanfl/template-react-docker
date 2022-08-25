import React from 'react';

import {
    Redirect
} from "react-router-dom";

import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RoutesJSX = () => {

    return (
        <>
            {
                !localStorage.getItem('token') && <Redirect to='/'></Redirect>
            }

            <PublicRoutes></PublicRoutes>
            <PrivateRoutes></PrivateRoutes>
            <ToastContainer></ToastContainer>
        </>
    )
}