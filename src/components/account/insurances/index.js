import React from 'react'
import BackgroundImagesAccount from '../backgroundimagesaccount'
import profileImage from '../../../assets/profile_image.png'
import './styles.scss'
let InsurancesContain = () => {
    return (
        <BackgroundImagesAccount>
            <div className="personal-info-container d-block color-black">
                <img src={profileImage} />
                <h2>ASEGURADORAS</h2>
                <form className="form-insurances">
                    <div className="form-group-row">
                        <div className="form-group-insurances">
                            <label>Eligir seguro:</label>
                            <select>
                                <option>Seguro1</option>
                                <option>Seguro2</option>
                                <option>Seguro3</option>
                                <option>Seguro5</option>
                            </select>
                        </div>
                        <div className="form-group-insurances">
                            <label>¿Eres el titular?</label>
                            <div className="checkbox-container-insurances">
                                <label>Si</label>
                                <input id="head" name="head" type="radio" />
                                <div onClick={() => document.getElementById("head").click()} className="checkbox-insurance"></div>
                            </div>
                            <div className="checkbox-container-insurances">
                                <label>No</label>
                                <input id="not-head" name="head" type="radio" />
                                <div onClick={() => document.getElementById("not-head").click()} className="checkbox-insurance"></div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group-payments">
                        <label>Nombre del titular:</label>
                        <div className="form-group-payments-wrapper">
                            <input />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <div className="form-group-payments">
                        <label>CI del titular:</label>
                        <div className="form-group-payments-wrapper">
                            <input />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <div className="form-group-payments">
                        <label>N° de cuenta o póliza:</label>
                        <div className="form-group-payments-wrapper">
                            <input />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <br />
                    <h3>Red Familiar</h3>
                    <div className="form-group-payments">
                        <label>Con el número de cuenta podrás vincular a otros <br /> usuarios (solo si estan registrados a la plataforma)</label>
                        <div className="form-group-payments-wrapper">
                            <input placeholder="N° de cédula" />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </BackgroundImagesAccount>
    )
}
export default InsurancesContain