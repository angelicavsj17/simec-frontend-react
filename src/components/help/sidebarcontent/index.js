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
            <NavLink activeClassName="side-bar-active" exact to="/help/frequentquestions"><i className="fas fa-question"></i> &nbsp;<span>Preguntas frecuentes</span></NavLink>
            <NavLink exact to="/help/frequentquestions#contact-form"><i className="fas fa-id-card-alt"></i>&nbsp;<span>Contáctenos</span></NavLink>
            {/* <NavLink onClick={logOut} activeClassName="side-bar-active" exact to="/"><i className="fas fa-door-open"></i>&nbsp;<span>Cerrar sesión</span></NavLink> */}
        </>
    )
}
export default connect(e => e)(SideBarContent);