import React from 'react'
import FrequenrCard from '../FrequentCard'
import './styles.scss'
let FrequentQuestionsContain = ({ frequent }) => {
    return (
        <div className="personal-info-container d-block color-black">
            <h2>Ayuda</h2>
            <div className="help-frequent-container">
                {
                    frequent.map((item) => {
                        return <FrequenrCard key={item.id} item={item} />
                    })
                }
            </div>
            <form id='contact-form' className="contact-form">
                <h4>¿Tienes alguna pregunta o sugerencia?</h4>
                <div className="form-group-payments">
                    <label>Nombre completo*:</label>
                    <div className="form-group-payments-wrapper">
                        <input required />
                    </div>
                </div>
                <div className="form-group-payments">
                    <label>Correo*:</label>
                    <div className="form-group-payments-wrapper">
                        <input required />
                    </div>
                </div>
                <div className="form-group-payments">
                    <label>Tu mensaje:</label>
                    <div className="form-group-payments-wrapper">
                        <textarea></textarea>
                    </div>
                </div>
                <div className="terms-help">
                    <input id="terms" type="checkbox" />
                    <label htmlFor="terms">Acepto que los datos enviados se recopilen y almacenen</label>
                </div>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default FrequentQuestionsContain