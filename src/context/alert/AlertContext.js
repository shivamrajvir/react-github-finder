import { createContext, useReducer } from "react";
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const initialState = null;
    const removeAlertTime = 3000; // in miliseconds

    const [state, dispatch] = useReducer(alertReducer, initialState)

    // set alert
    const setAlert = (msg, type) => {
        console.log(msg, type)
        dispatch({
            type: 'SET_ALERT',
            payload: { msg, type }
        })

        setTimeout(() => dispatch({
            type: 'REMOVE_ALERT', payload: {}
        }), removeAlertTime)
    }


    return <AlertContext.Provider value={{ alert: state, setAlert }}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext;