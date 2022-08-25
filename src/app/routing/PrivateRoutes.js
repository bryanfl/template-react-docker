import React, { useContext, useEffect } from 'react'
import {
    Switch,
} from "react-router-dom";

import { PrivateRoute } from '../components/PrivateRoute';

import { Chat } from '../pages/chat/chat';

export function PrivateRoutes() {
    return (
        <>
            {
                <Switch>
                    <PrivateRoute path='/chat' component={Chat} />
                </Switch>
            }
        </>
    )
}