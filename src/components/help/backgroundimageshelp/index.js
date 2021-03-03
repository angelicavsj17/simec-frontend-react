import React from 'react'
import leftImage from '../../../assets/backgrounds/backgroundhelp.png'
import './styles.scss'
let BackgroundImagesHelp = ({ children }) => {
    return (
        <div className="accounts-background d-flex">
            <img src={leftImage} />
            {children}
        </div>
    )
}
export default BackgroundImagesHelp;