import { useState } from 'react'

export const useSpinner = () => {
    const [spinner, setSpinner] = useState(false);

    const mostrarSpinner = () => setSpinner(true)
    const ocultarSpinner = () => setSpinner(false)

    return [
        spinner,
        mostrarSpinner,
        ocultarSpinner
    ]
}