import React from 'react'
import BackgroundImagesAccount from '../backgroundimagesaccount'
import profileImage from '../../../assets/profile_image.png'
import Visa from '../../../assets/paymentmethods/visa.png'
import MasterCard from '../../../assets/paymentmethods/mastercard.png'
import Paypal from '../../../assets/paymentmethods/paypal.png'
import Pse from '../../../assets/paymentmethods/pse.png'

import './styles.scss'
let PaymentMethodsContain = () => {
    return (
        <BackgroundImagesAccount>
            <div className="personal-info-container d-block color-black">
                <img src={profileImage} />
                <h2>MÉTODOS DE FACTURACIÓN</h2>
                <form className="form-payments">
                    <div className="form-group-payments">
                        <label>Número de C.C:</label>
                        <div className="form-group-payments-wrapper">
                            <input />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <div className="form-group-payments">
                        <label>Razón Social:</label>
                        <div className="form-group-payments-wrapper">
                            <input />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <h3>Métodos de pago</h3>
                    <br />
                    <div className="form-group-payments">
                        <div className="form-group-payment-wrapper-checkbox">
                            <input name="paymentMethod" id="card" type="radio" />
                            <div onClick={() => document.getElementById("card").click()} className="checkbox-payments"></div>
                            <label htmlFor="card">Pagar con tarjeta</label>
                            <img src={Visa} />
                            <img src={MasterCard} />
                        </div>
                        <div className="form-group-payment-wrapper-checkbox">
                            <input name="paymentMethod" id="paypal" type="radio" />
                            <div onClick={() => document.getElementById("paypal").click()} className="checkbox-payments"></div>
                            <label htmlFor="paypal">Pagar con Paypal</label>
                            <img src={Paypal} />
                        </div>
                        <div className="form-group-payment-wrapper-checkbox">
                            <input name="paymentMethod" id="pse" type="radio" />
                            <div onClick={() => document.getElementById("pse").click()} className="checkbox-payments"></div>
                            <label htmlFor="pse">Pagar con PSE</label>
                            <img src={Pse} />
                        </div>
                    </div>
                    <br />
                    <div>
                        <h3>Ver más opciones <i className="fas fa-chevron-down"></i></h3>
                    </div>
                    <br />
                    <h2>Pago 100% seguro</h2>
                    <br />
                    <p>Este certificado garantiza la seguridad de todas tus conexiones mediante cifrado</p>
                    <button type="submit">Confirmar</button>
                </form>
            </div>
        </BackgroundImagesAccount >
    )
}
export default PaymentMethodsContain