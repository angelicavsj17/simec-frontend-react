import React from 'react'
import bubbles from '../../../assets/home/bubbles.png'
import viewers from '../../../assets/home/viewers.png'
import './styles.scss'
let HomeSecondFrame = () => {
    return (
        <div className="secondframe-container">
            <div className="secondframe-half">
                <h2 className="we-are-text-sf">Somos una comunidad en constante crecimiento</h2>
                <p className="we-are-paragraph-sf">Dolor ipsum cillum cupidatat officia ipsum ad ut incididunt
                officia qui consequat sunt. Id esse nulla qui enim non.
                Deserunt mollit adipisicing magna sit excepteur. Dolore consequat
                reprehenderit commodo adipisicing sit cillum velit reprehenderit labore.
                      Quis laborum labore est eiusmod in ut pariatur duis do sit.</p>
            </div>
            <div className="secondframe-half">
                <div className="registered-patients">
                    <img className="bubble-background" src={bubbles} />
                    <h2>1.000.000 </h2><br /><br />
                </div>
                <span className="patients-text">PACIENTES REGISTRADOS</span>
                <img className="viewers-img" src={viewers} />
            </div>
        </div>
    )
}
export default HomeSecondFrame