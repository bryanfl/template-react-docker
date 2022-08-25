import React from 'react';
import { Spinner } from '../utils/Spinner'
import { useSpinner } from '../../../hooks/useSpinner'

export const BotonProcesar = (props) => {
    const [ spinner, mostrarSpinner, ocultarSpinner ] = useSpinner();

    return (
        <button 
            {...props}
            className="bg-[#336fbb] px-4 py-1 text-xl rounded hover:bg-[#155bb5]"
            onClick={async () => {
                mostrarSpinner()
                await props.onClick()
                ocultarSpinner()
            }}
        >
            <Spinner spinner={spinner.toString()}></Spinner>
            <i className={`fas fa-angle-right ${props.spinner === 'true' && 'ml-2'}`}></i>
        </button>
    )
}
