import React from 'react'
import './styles.scss'
import Girl from '../../../assets/home/girl.png'
import { Link } from 'react-router-dom'
let HomeFirstFrame = () => {
    return (
        <div className="first-frame-background">
            <div className="first-frame-half">
                <img src={Girl} />
            </div>
            <div className="first-frame-half">
                <h1>Exámenes y pedidos<br />con médicos de<br /> alta calidad</h1>
                <p>Cupidatat cillum eu irure consectetur
                culpa proident. Id id mollit consectetur sunt. Dolore ea Lorem
                amet officia nisi duis. Cillum consequat ut ea laborum amet.
                Dolore magna cupidatat irure in do. Qui dolor adipisicing incididunt tempor.
                Nulla id sit non ad amet. Officia deserunt aute ullamco est fugiat fugiat.
                Officia officia minim culpa consequat dolor sint consectetur duis veniam
                consequat nostrud.
                    </p>
                <Link to="/auth/register"><button>Registrate</button></Link>
            </div>
        </div>
    )
}
export default HomeFirstFrame;