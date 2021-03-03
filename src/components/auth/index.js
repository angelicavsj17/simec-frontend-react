import React from 'react'
import bmiWhite from '../../assets/bmiwhite.png'
import mas from '../../assets/mas.png'
import ecuador from '../../assets/ecuador_.png'
import simec from '../../assets/simec_logo2.png'
import './styles.scss'
import IsVisible from '../../utils/isvisible/isvisible'
import BackgroundImages from '../backgroundimages'

let Auth = ({ children }) => {
    let onVisible = () => {
        let authBox = document.getElementById("auth-box");
        authBox.classList.add("appear-isvisible");
    }
    return (
        <IsVisible onVisible={onVisible}>
            <BackgroundImages >
                <div className="auth-box" id="auth-box">
                    <div className="welcome-box">
                        <span className="welcome-title">BIENVENIDO A</span>
                        <div className="auth-logos-wrapper">
                            <img src={bmiWhite} />
                            <div>
                                <img src={mas} />
                                <img src={ecuador} />
                            </div>
                        </div>
                        <span className="powered-by">powered by</span>
                        <img className="welcome-box-logo" src={simec} />
                    </div>
                    <div className="sign-in-box">
                        {children}
                    </div>
                </div>
            </BackgroundImages>
        </IsVisible >
    )
}
export default Auth;