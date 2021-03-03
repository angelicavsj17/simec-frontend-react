import React from 'react'
import { NavLink } from 'react-router-dom';
import './styles.scss'
import bmi from '../../assets/bmiwhite.png'
import mas from '../../assets/mas.png'
import ecuador from '../../assets/ecuador_.png'
let Sidebar = ({ children }) => {
    let showHideNav = () => {
        let element = document.getElementById('side-bar-left')
        if (element.classList.contains('side-bar-left-hide')) element.classList.remove('side-bar-left-hide')
        else element.classList.add('side-bar-left-hide')
    }
    return (
        <div id="side-bar-left" className="side-bar-left">
            <div className="side-bar-top-image-container">
                <NavLink to="/">
                    <img src={bmi} />
                    <div >
                        <img src={mas} />
                        <img src={ecuador} />
                    </div>
                </NavLink>
            </div>
            <i onClick={showHideNav} className="fas fa-bars"></i>
            <div className="side-bar-list">
                {children}
            </div>
        </div>
    )
}
export default Sidebar;