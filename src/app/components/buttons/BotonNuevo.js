import React from 'react';
import '../../../assets/css/components/botonnuevo.css'


export const BotonNuevo = (props) => {
    return (
        <button {...props} className=" btn-circle btn-xl botonNuevo">
            <i className="fa fa-plus" style={{color: '#FFFFFF', fontSize:'18px'}}></i> 
            <span style={{fontSize: '14px', color: '#FFFFFF', marginLeft: '3px'}}>{props.children || 'Nuevo'}</span>
        </button>
    )
}

