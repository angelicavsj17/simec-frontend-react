import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
let LoginForm = ({ form, handleForm, logInSubmit }) => {
    return (
        <div className="login-form-wrapper">
            <h5>INICIAR SESIÓN</h5>
            <form onSubmit={(e) => { e.preventDefault(); logInSubmit(e); }}>
                <div className="form-group">
                    <label>Usuario (CI)*:</label>
                    <input value={form.user} name="user" onChange={handleForm} type="text" />
                </div>
                <br />
                <br />
                <div className="form-group">
                    <label>Contraseña*:</label>
                    <input value={form.password} name="password" onChange={handleForm} type="password" />
                </div>
                <div className="btn-forgot-password">
                    <span><Link to="/auth/recover">¿Olvidaste tu usuario o contraseña?</Link></span>
                </div>
                <div className="btn-not-registred">
                    <span>¿No te has registrado? <strong><Link to="/auth/register">Registrate Aqui</Link></strong></span>
                </div>
                <br />
                <span className="error-login">{form.error}</span>
                <button className="btn-sign-in">Ingresar</button>
            </form>
        </div>
    )
}
export default LoginForm;