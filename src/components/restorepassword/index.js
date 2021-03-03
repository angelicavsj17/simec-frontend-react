import React from 'react'
let RestorePasswordContain = ({ restorePassword, form, handleForm }) => {
    return (
        <div className="login-form-wrapper">
            <h5>Restaurar contraseña</h5>
            <form onSubmit={(e) => { e.preventDefault(); restorePassword(e) }}>
                <br />
                <br />
                <div className="form-group">
                    <label>Contraseña:</label>
                    <input value={form.password} name="password" onChange={handleForm} type="password" />
                </div>
                <br />
                <div className="form-group">
                    <label>Repetir contraseña:</label>
                    <input value={form.repeatPassword} name="repeatPassword" onChange={handleForm} type="password" />
                </div>
                <br />
                <span className="error-login">{form.error.msg}</span>
                <br />
                <button className="btn-sign-in">Restaurar</button>
            </form>
        </div>
    )
}
export default RestorePasswordContain