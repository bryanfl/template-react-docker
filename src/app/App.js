import React, { Suspense } from "react";
import { BrowserRouter } from 'react-router-dom'
import { RoutesJSX } from './routing/Routes'
import { UserProvider } from '../context/provider/UserProvider'

export const App = () => {
    return (
        <>
            <UserProvider>
                <Suspense fallback={<h1>Cargando...</h1>}>
                    <BrowserRouter basename={process.env.REACT_APP_SUB_DIRECTORY}>
                        <RoutesJSX />
                    </BrowserRouter>
                </Suspense>
            </UserProvider>
        </>
    )
}
