import React from 'react'
import './styles.scss'
let Modal = ({ children }) => {
    return (
        <div className="doctors-box">
            {children}
        </div>
    )
}
export default Modal;