import React from 'react'
import { NavLink } from 'react-router-dom';
let SideBarContent = () => {
    return (
        <>
            <NavLink activeClassName="side-bar-active" exact to="/health/doctors"><i className="fas fa-user-md"></i> &nbsp;<span>Mis médicos</span></NavLink>
            <NavLink exact to="#"><i className="fas fa-book-open"></i>&nbsp;<span>Antecedentes</span></NavLink>
            {/* add activeClassName="side-bar-active" */}
            <NavLink activeClassName="side-bar-active" exact to="/health/consultations"><i className="fas fa-book-medical"></i>&nbsp;<span>Historial de consultas y diagnósticos</span></NavLink>
            <NavLink activeClassName="side-bar-active" exact to="/health/exams"><i className="fas fa-laptop-medical"></i>&nbsp;<span>Exámenes y pedidos</span></NavLink>
            {/* add activeClassName="side-bar-active" */}
            <NavLink activeClassName="side-bar-active" exact to="/health/receipts"><i className="fas fa-medkit"></i>&nbsp;<span>Recetas</span></NavLink>
            {/* add activeClassName="side-bar-active" */}
            <NavLink exact to="#"><i className="fas fa-user-shield"></i>&nbsp;<span>Seguro médico</span></NavLink>
        </>
    )
}
export default SideBarContent;