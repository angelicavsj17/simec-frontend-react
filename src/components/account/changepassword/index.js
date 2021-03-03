import React from 'react'
import BackgroundImagesAccount from '../backgroundimagesaccount'
import profileImage from '../../../assets/profile_image.png'

let ChangePasswordContain = () => {

    return (
        <BackgroundImagesAccount>
            <div className="personal-info-container d-block color-black">
                <img src={profileImage} />
                <h2>CAMBIAR CONTRASEÑA</h2>
                <form className="form-insurances">
                    <div className="form-group-payments">
                        <label>Contraseña actual:</label>
                        <div className="form-group-payments-wrapper">
                            <input type="password" />
                        </div>
                    </div>
                    <br />
                    <div className="form-group-payments">
                        <label>Nueva contraseña:</label>
                        <div className="form-group-payments-wrapper">
                            <input type="password" />
                        </div>
                    </div>
                    <br />
                    <div className="form-group-payments">
                        <label>Repetir nueva contraseña:</label>
                        <div className="form-group-payments-wrapper">
                            <input type="password" />
                        </div>
                    </div>
                    <br />
                    <button type="submit">Confirmar</button>
                </form>
            </div>
        </BackgroundImagesAccount>
    )
}
export default ChangePasswordContain