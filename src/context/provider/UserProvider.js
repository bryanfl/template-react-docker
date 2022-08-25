import React, { createContext, useReducer } from "react";
import { UserReducers } from '../reducers/UserReducers'

export const UserContext = createContext()

export function UserProvider(props) {
    const initialUserState = {
        id: localStorage.getItem('id') || 0,
        email: localStorage.getItem('email') || '',
        user: localStorage.getItem('user') || '',
        token: localStorage.getItem('token') || '',
    }

    const [ state, dispatch ] = useReducer(UserReducers, initialUserState)

    const signInContext = (objSession) => {
        localStorage.setItem("id", objSession.id);
        localStorage.setItem("user", objSession.user);
        localStorage.setItem("email", objSession.email);
        localStorage.setItem("token", objSession.token);

        dispatch({type: 'signIn', payload: objSession})
    }
    const signOutContext = () => {
        localStorage.clear();
        dispatch({type: 'signOut'})
    }

    return (
        <UserContext.Provider value={{stateUser: state, signInContext, signOutContext}}>
            {props.children}
        </UserContext.Provider>
    )
}