import React from 'react'
import backgroundImageAA from '../../assets/clip1_.png'
import backgroundImageAB from '../../assets/clip__ba.png'
import backgroundImageBA from '../../assets/clip__bb.png'
import backgroundImageBB from '../../assets/clip__.png'
import './styles.scss'
let BackgroundImages = ({ children }) => {
    return (
        <div className="background-container">
            <div className="background-section-left">
                <img className="background-left-img" src={backgroundImageAA} />
                <img className="background-right-img" src={backgroundImageAB} />
            </div>
            <div className="background-section-right">
                <img className="background-left-img" src={backgroundImageBA} />
                <img className="background-right-img" src={backgroundImageBB} />
            </div>
            {
                children
            }
        </div>
    )
}
export default BackgroundImages;