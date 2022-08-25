import React, { forwardRef } from 'react';

import DatePicker, { registerLocale, setDefaultLocale }  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale('es', es)

export const DatePickerABX = ({
    date,
    setDate,
    styles
}) => {

    const DateInput = forwardRef(({ value, onClick }, ref) => (
        <input onClick={onClick} ref={ref} className="text-center text-white h-[30px] rounded px-4 w-[100%] bg-zinc-800 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500" defaultValue={value} style={styles} readOnly/>
    ));

    return (
        <DatePicker
            locale="es" 
            selected={date}
            onChange={(date) => setDate(date)}
            customInput={<DateInput/>} 
            dateFormat="yyyy-MM-dd"
        ></DatePicker>
    )
}