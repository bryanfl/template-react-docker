import React from "react";
import { Spinner } from '../utils/Spinner';
import { useSpinner } from "../../../hooks/useSpinner";

export const Modal = ({
    isOpen, 
    closeModal, 
    action, 
    width, 
    children, 
    title, 
    cerrarAlGuardar = true,
    textButtons = { confirm: 'Guardar', denied: 'Cancelar' }, 
    validButton = { confirm: true , denied: true}
}) => {
    const [ spinner, mostrarSpinner, ocultarSpinner ] = useSpinner(); 

    return (
    <>  
        {isOpen ? (
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1050] outline-none focus:outline-none"
                >
                    <div className={`relative w-${width ? width : 'auto'} my-6 mx-auto max-w-[90%]`}>
                    {/*content*/}
                        <div className="bg-[#2d2f30] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="bg-[#003478]  flex items-start justify-between p-5 border-b border-solid border-[#4e4e4e] rounded-t">
                                <h3 className="text-xl font-semibold">
                                    {title}
                                </h3>
                                <button
                                    className=""
                                    onClick={closeModal}
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto bg-[#2f3134]">
                                { children }
                            </div>
                            {/*footer*/}
                            <div className="bg-[#2d2f30] flex items-center justify-end p-6 rounded-b">
                            {validButton.confirm ?
                                <button
                                    className="min-w-[100px] bg-blue-500 hover:bg-blue-600 text-white active:bg-blue-600 font-bold capitalize text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-xs"
                                    type="button"
                                    onClick={async () => {
                                        mostrarSpinner();
                                        await action();
                                        ocultarSpinner();
                                        cerrarAlGuardar && closeModal()
                                    }}
                                >
                                    {
                                        spinner 
                                        ? <Spinner spinner={spinner.toString()}></Spinner>
                                        : <span>{textButtons.confirm}</span>
                                    }
                                </button>
                                : ''
                            }
                            {validButton.denied ?
                                <button
                                    className=" text-white-500 hover:bg-stone-600 rounded background-transparent font-bold capitalize px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-xs"
                                    type="button"
                                    onClick={closeModal}
                                >
                                    {textButtons.denied} 
                                </button>
                                : ''
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-[1040] bg-black"></div>
            </>
        ) : null}
        </>
    );
}