import React from 'react'
import './styles.scss'
let Register = ({ form, handleForm, registerSubmit }) => {
    return (
        <div className="login-form-wrapper">
            <h5>REGISTRATE</h5>
            <form onSubmit={(e) => { e.preventDefault(); registerSubmit(e) }}>
                <div className="form-group">
                    <label>Nombres:</label>
                    <input value={form.name} name="name" onChange={handleForm} type="text" />
                </div>
                <div className="form-group">
                    <label>Apellidos:</label>
                    <input value={form.lastname} name="lastname" onChange={handleForm} type="text" />
                </div>
                <div className="form-group">
                    <label>(CI) Usuario:</label>
                    <input value={form.user} name="user" onChange={(e) => /^\d+$/.test(e.target.value) && handleForm(e)} type="text" />
                </div>
                <div className="form-group">
                    <label>Correo electrónico:</label>
                    <input value={form.email} name="email" onChange={handleForm} type="email" />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input value={form.password} name="password" onChange={handleForm} type="password" />
                </div>
                <div className="form-group form-check">
                    <input checked={form.terms} name="terms" onChange={handleForm} id="terms" type="checkbox" required />
                    <label htmlFor="terms">Términos y condiciones, politica de privacidad</label>
                </div>
                <span className="error-login">{form.error}</span>
                <button className="btn-sign-in">Registrate</button>
            </form>
        </div>
    )
}
export default Register;