import React, { useState, useReducer, useContext } from 'react';
import { UserContext } from '../../context/provider/UserProvider'
import { notify, validateValue } from '../../utils/utils';
import { useHistory } from "react-router-dom";

const stateDefault = {
    name: '',
    password: '',
    email: '',
    isSignIn: true
}

const loginReducer = (state, action) => {
    switch (action.type) {
        case 'edit-value':
            const { key, value } = action.payload;

            return {
                ...state,
                [key]: value
            };
        case 'restart':
            const restartState = {
                ...stateDefault,
                isSignIn: state.isSignIn
            }

            return restartState;
        default:
            throw new Error('no such action type');
    }
}

const useLogin = () => {
    const [ state, dispatch ] = useReducer(loginReducer, stateDefault);
    const { signInContext } = useContext(UserContext);
    let history = useHistory();

    const signIn = async (e) => {
        e.preventDefault();
        const response = { //Conecta a la bd para logear
            isValid: true,
            content: {
                id: 1,
                email: 'a@n',
                user: 'user',
                token: 'dqwiojiodas123dim21iodj'
            }
        }

        const { isValid, content, exceptions } = response;

        !isValid && notify(content, 'error');

        if (isValid) {
            dispatch({type: 'restart'});
            signInContext(content);
            history.push('/chat')
        }
    }

    return {
        state,
        dispatch,
        signIn
    }
}

export const Login = () => {
    const { state, dispatch, signIn } = useLogin();

    const changeValue = (key, value) => {
        dispatch({type: 'edit-value', payload: { key, value }});
    }

    return (
        <>
            <form onSubmit={signIn}>
                <input value={state.email} onChange={(e) => changeValue('email', e.target.value)} type="email" placeholder="Email" />
                <input value={state.password} onChange={(e) => changeValue('password', e.target.value)} type="password" placeholder="Contraseña" />
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}


