import React from 'react'
import './styles.scss'
let Alert = ({ text, dispatch, type }) => {
    return (
        <div className={type === 'error' ? 'alert-error' : 'alert'}>
            <span>{text}</span>
            <span className="closebtn" onClick={(e) => {
                dispatch({ type: "ADD_ALERT", payload: { alerts: "", errors: "" } });
                dispatch({ type: "ADD_ERROR", payload: { alerts: "", errors: "" } });
            }}>&times;</span>
        </div >
    )
}
export default Alert;