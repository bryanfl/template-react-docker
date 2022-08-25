import React, {  } from 'react';

export const SelectFiltro = ({ children, rest }) => {
    return (
        <select { ...rest } className='text-white h-[30px] rounded px-4 bg-zinc-800 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500'>
            { children }
        </select>
    )
}



// text-white h-[30px] rounded px-4 w-full bg-zinc-800 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500