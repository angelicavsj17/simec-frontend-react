import React from 'react'
import './styles.scss'
import icon1 from '../../../assets/home/icons1.png'
import icon2 from '../../../assets/home/icons2.png'
import icon3 from '../../../assets/home/icons3.png'
import icon4 from '../../../assets/home/icons4.png'
import icon5 from '../../../assets/home/icons5.png'
import icon6 from '../../../assets/home/icons6.png'

let HomeThirdFrame = () => {
    return (
        <div className="third-background-container">
            <div className="icons-row">
                <img src={icon1} />
                <img src={icon2} />
                <img src={icon3} />
                <img src={icon4} />
                <img src={icon5} />
                <img src={icon6} />
            </div>
            <h2>Acceso a la información de tus médicos, historial<br /> clínico, recetas, antecedentes y a tu seguro médico</h2>
        </div>
    )
}
export default HomeThirdFrame