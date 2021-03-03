import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./styles.scss";
import bmi from '../../assets/bmi.png'
import mas from '../../assets/mas.png'
import ecuador from '../../assets/ecuador_.png'
import simec from '../../assets/simec_logo.png'
import { useDispatch } from 'react-redux';
let Navbar = ({ auth }) => {
    let dispatch = useDispatch();
    let showAndHideNavbar = () => {
        let navBar = document.getElementById("nav-bar");
        if (navBar.classList.contains("translate-nav"))
            navBar.classList.remove("translate-nav")
        else
            navBar.classList.add("translate-nav")
    }
    let showHideNavBar = () => {
        let navBar = document.getElementById("nav-bar-account");
        if (navBar.classList.contains("nav-account-d-show"))
            navBar.classList.remove("nav-account-d-show")
        else
            navBar.classList.add("nav-account-d-show")
    }
    let signOut = () => {
        localStorage.removeItem('token')
        dispatch({
            type: 'SIGN_OUT'
        })
        dispatch({
            type: 'ADD_ALERT',
            payload: { alerts: 'Sesión cerrada correctamente' }
        })
    }
    return (
        <div className="nav-bar-wrapper">
            <nav>
                <div className="nav">
                    {/* Logo */}
                    <div onClick={showAndHideNavbar} className="navbar-icon">
                        <i className="fas fa-bars "></i>
                    </div>
                    <div className="nav-logo">
                        <NavLink to="/">
                            <img src={bmi} />
                            <div>
                                <img src={mas} />
                                <img src={ecuador} />
                            </div>
                        </NavLink>
                    </div>
                    {/*  Navigation bar*/}
                    <div className="nav-right-side">
                        <div id="nav-bar" className="nav-list">
                            <div>
                                <NavLink onClick={showAndHideNavbar} activeClassName="is-active" exact to="/">Inicio</NavLink>
                            </div>
                            {
                                !auth ? (
                                    <div>
                                        <NavLink onClick={showAndHideNavbar} activeClassName="is-active" exact to="/auth/login">Iniciar sesión</NavLink>
                                    </div>
                                ) : (<>
                                    <div>
                                        <NavLink onClick={showAndHideNavbar} activeClassName="is-active" exact to="/calendar">Calendario</NavLink>
                                    </div>
                                    <div>
                                        <NavLink onClick={showAndHideNavbar} activeClassName="is-active" exact to="/health/doctors">Mi salud</NavLink>
                                    </div></>
                                    )
                            }
                            <div>
                                <NavLink onClick={showAndHideNavbar} activeClassName="is-active" exact to="/help/frequentquestions">Ayuda</NavLink>
                            </div>
                            {
                                !auth ? null : <>
                                    {/* <div> */}
                                    {/* <NavLink onClick={() => { showAndHideNavbar(); logout() }} activeClassName="is-active" exact to="/auth/login">Cerrar sesión</NavLink> */}
                                    {/* </div> */}
                                    <div className="nav-account">
                                        <NavLink onClick={(e) => { e.preventDefault(); showHideNavBar() }} to="/account/personalinformation"><i className="far fa-user-circle"></i></NavLink>
                                        <div id="nav-bar-account" className="nav-account-d">
                                            <Link onClick={showHideNavBar} to="/account/personalinformation">Datos personales</Link>
                                            <Link onClick={showHideNavBar} to="/account/paymentmethods">Métodos de facturación</Link>
                                            <Link onClick={showHideNavBar} to="/account/insurances">Aseguradoras</Link>
                                            <Link onClick={showHideNavBar} to="/account/changepassword">Cambiar contraseñas</Link>
                                            <Link onClick={() => { signOut(); showHideNavBar() }} to="#">Cerrar sesión</Link>
                                        </div>
                                        <NavLink onClick={showAndHideNavbar} to="/"><img src={simec} /></NavLink>
                                        <NavLink onClick={showAndHideNavbar} to="/account/personalinformation"><span>Cuenta</span></NavLink>
                                    </div>
                                    <div className="sign-out-mobile">
                                        <NavLink onClick={(e) => { e.preventDefault() }} to="/account/personalinformation"><span>Cerrar sesión</span></NavLink>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;