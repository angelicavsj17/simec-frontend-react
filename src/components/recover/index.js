import React from 'react'
let Recover = ({ recoverSubmit, form, handleForm }) => {
    return (
        <div className="login-form-wrapper">
            <h5>VAMOS A RECUPERAR TU CONTRASEÑA</h5>
            <form onSubmit={(e) => { e.preventDefault(); recoverSubmit(e); }}>
                <div className="form-group">
                    <label>Usuario (CI)*:</label>
                    <input value={form.user} name="user" onChange={handleForm} type="text" />
                </div>
                <br />
                <br />
                <div className="form-group">
                    <label>Correo electrónico*:</label>
                    <input value={form.email} name="email" onChange={handleForm} type="email" />
                </div>
                <br />
                <span className="error-login">{form.error}</span>
                <br />
                <button className="btn-sign-in">Confirmar</button>
            </form>
        </div>
    )
}
export default Recover;