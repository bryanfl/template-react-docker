import React, { useContext } from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Login } from '../pages/Login'

import { UserContext } from '../../context/provider/UserProvider';


export function PublicRoutes() {
    const { stateUser } = useContext(UserContext)

    return (
        <>
            <Switch>
                <Route exact path='/'>
                    {stateUser.token !== '' ? <Redirect to='/chat'></Redirect> : <Login></Login>}
                </Route>
            </Switch>
        </>
    )
}