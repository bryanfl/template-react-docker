import React from 'react';

import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Overview } from './components/Overview'

export const ProfilePage = () => {
    return (
        <>
            <Switch>
                <Route path="/profile/overview" component={Overview}>
                </Route>
                <Redirect exact from='/profile' to='/profile/overview' />
            </Switch>
        </>
    )
}