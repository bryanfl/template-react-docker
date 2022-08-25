import { toast } from 'react-toastify';

const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
}

export const formatDate = (date, format = 103) => {
    let stringFormat = ''
    switch  (format) {
        case 23:
            stringFormat = [
                date.getFullYear(),
                padTo2Digits(date.getMonth() + 1),
                padTo2Digits(date.getDate())
            ].join('-');
            break;
        case 103:
            stringFormat = [
                padTo2Digits(date.getDate()),
                padTo2Digits(date.getMonth() + 1),
                date.getFullYear()
            ].join('/');
            break;
        default:
            console.error('Ingreso un formato no valido mapeado')
    }

    return stringFormat;
}

export const notify = (title, type, options = {}) => {
    toast[type](title, {
        position: options.position ?? "top-right",
        autoClose: options.autoClose ?? 5000,
        hideProgressBar: options.hideProgressBar ?? false,
        closeOnClick: options.closeOnClick ?? true,
        pauseOnHover: options.pauseOnHover ?? true,
        draggable: true,
        progress: undefined,
    });
}

export const soloDecimal = (e, elemento) => {
    const key = e.keyCode ? e.keyCode : e.which

    if (key === 8) return true

    if (key > 47 && key < 58) {
        if (elemento.value === "") return true
        const regexp = /.[0-9]{9}$/

        if(!(regexp.test(elemento.value))) {
            return true
        }
    }

    if (key === 46) {
        if (elemento.value === "") return false
        const regexp = /^[0-9]+$/
        if (regexp.test(elemento.value)) {
            return true
        }
    }

    e.preventDefault()
}

export const formatState = (codState, nameState) => {
    let className = ''

    if ([2].includes(codState)) className = `cursor-pointer bg-yellow-600 px-2 py-[2px] rounded uppercase text-[11px] font-bold `
    else if ([45].includes(codState)) className = 'cursor-pointer bg-blue-600 px-2 py-[2px] rounded uppercase text-[11px] font-bold'
    else if ([7].includes(codState)) className = 'cursor-pointer bg-green-600 px-2 py-[2px] rounded uppercase text-[11px] font-bold'

    return className;
}

export const capitalizarFirtsLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const todoMayuscula = (string)=> {
    var str = string;
    str = str.toUpperCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
    });
    return str;
}

export const validateValue = (object = {}) => {
    let isValid = true;
    for (var key in object) {
        const type = typeof object[key];

        if (type === 'string' && object[key].trim().length === 0) {
            notify(`El valor ${key} es obligatorio.`, 'error');
            isValid = false;
            break;
        }

        if (type === 'number' && Number(object[key]) === 0) {
            notify(`El valor ${key} es obligatorio.`, 'error');
            isValid = false;
            break;
        }
    }

    return isValid;
}

export const formatDateMessage = (daySentMessage, isMessage) => {
    const dayNow = new Date();
    const daySent = new Date(daySentMessage);

    const getDateAndTime = (dateParam = new Date()) => {
        const dateFormat = `${dateParam.getDate()}/${dateParam.getMonth() + 1 < 10 ? `0${dateParam.getMonth() + 1}` : dateParam.getMonth() + 1}/${dateParam.getFullYear()}`;

        const hour = dateParam.getHours() < 10 ? `0${dateParam.getHours()}` : dateParam.getHours();
        const minute = dateParam.getMinutes() < 10 ? `0${dateParam.getMinutes()}` : dateParam.getMinutes();

        const timeFormat = `${hour}:${minute}`;

        return {
            date: dateFormat,
            time: timeFormat
        }
    }

    if (isMessage) {
        return getDateAndTime(daySent).time;
    }

    if (getDateAndTime(dayNow).date !== getDateAndTime(daySent).date) {
        return getDateAndTime(daySent).date
    } else {
        return getDateAndTime(daySent).time
    }
}