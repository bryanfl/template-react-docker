import React, { useContext } from 'react';
import {
    Route,
    Redirect,
    useLocation
} from "react-router-dom";

import { UserContext } from '../../context/provider/UserProvider';

export const PrivateRoute = ({component: Component, rest}) => {
    const { stateUser } = useContext(UserContext)
    localStorage.setItem('currentLocation', useLocation().pathname)

    return (
        <Route exact {...rest} >
            {stateUser.token === '' ? <Redirect to='/'></Redirect> : <Component></Component>}
        </Route>
    )
}