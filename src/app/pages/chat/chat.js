import React, { useContext } from 'react';
import { UserContext } from '../../../context/provider/UserProvider';
import { useHistory } from 'react-router-dom'

export const Chat = () => {
    const { stateUser, signOutContext } = useContext(UserContext);
    const history = useHistory();

    const cerrarSesion = () => {
        signOutContext();
        history.push('/');
    }

    return (
        <>
            <h1>Hola { stateUser.user }</h1>
            <button onClick={cerrarSesion}>Cerrar Sesión</button>
        </>
    )
}