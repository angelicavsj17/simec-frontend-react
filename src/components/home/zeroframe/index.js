import React from 'react'
import './styles.scss'
import icon1 from '../../../assets/home/icons1.png'
import icon2 from '../../../assets/home/icons2.png'
import icon3 from '../../../assets/home/icons3.png'
import icon4 from '../../../assets/home/icons4.png'
import icon5 from '../../../assets/home/icons5.png'
import icon6 from '../../../assets/home/icons6.png'
import doctorisy from '../../../assets/home/doctorisy.png'
import { Link } from 'react-router-dom'

let HomeZeroFrame = () => {
    return (
        <div className="zero-background-container">
            <a href="https://www.doctorisy.com/ecuador/medicos/" target="blank">
                <img src={doctorisy} />
            </a>
        </div >
    )
}
export default HomeZeroFrame