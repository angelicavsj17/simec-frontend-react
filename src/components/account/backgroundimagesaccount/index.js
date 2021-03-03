import React from 'react'
import leftImage from '../../../assets/backgrounds/accountbackground.png'
import './styles.scss'
let BackgroundImagesAccount = ({ children }) => {
    return (
        <div className="accounts-background d-flex">
            <img src={leftImage} />
            {children}
        </div>
    )
}
export default BackgroundImagesAccount;