import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
let SideBarContent = ({ dispatch }) => {
    let logOut = () => {
        localStorage.removeItem("token")
        dispatch({
            type: "SIGN_OUT",
            payload: { alerts: "Sesión cerrada correctamente" }
        })
    }
    return (
        <>
            <NavLink activeClassName="side-bar-active" exact to="/account/personalinformation"><i className="far fa-user"></i> &nbsp;<span>Datos personales</span></NavLink>
            <NavLink activeClassName="side-bar-active" exact to="/account/paymentmethods"><i className="far fa-credit-card"></i>&nbsp;<span>Métodos de facturación</span></NavLink>
            <NavLink activeClassName="side-bar-active" exact to="/account/insurances"><i className="fas fa-user-lock"></i>&nbsp;<span>Aseguradoras</span></NavLink>
            <NavLink activeClassName="side-bar-active" exact to="/account/changepassword"><i className="fas fa-key"></i>&nbsp;<span>Cambiar contraseñas</span></NavLink>
            {/* <NavLink onClick={logOut} activeClassName="side-bar-active" exact to="/"><i className="fas fa-door-open"></i>&nbsp;<span>Cerrar sesión</span></NavLink> */}
        </>
    )
}
export default connect(e => e)(SideBarContent);