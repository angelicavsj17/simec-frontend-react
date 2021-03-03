import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Auth from '../../components/auth';
import LoginForm from '../../components/login'
import data from '../../utils/exampledata/data.json'
import login from '../../utils/login';
let Login = ({ dispatch }) => {
    let history = useHistory();
    let [form, setform] = useState({
        user: "",
        password: "",
        error: ""
    });
    let handleForm = ({ target }) => {
        setform({ ...form, [target.name]: target.value });
    }
    let logInSubmit = (e) => {
        login(form.user, form.password, history, dispatch, handleForm)
        // let users = localStorage.getItem("users");
        // if (!users) users = []
        // else users = JSON.parse(users)
        // let validation = users.find((e) => form.user === e.user && form.password === e.password);
        // if (validation) {
        //     dispatch({
        //         type: "LOG_IN",
        //         payload: { auth: validation, alerts: "Sesión iniciada" }
        //     })
        //     localStorage.setItem("user", JSON.stringify(validation))
        //     history.push("/health/doctors");
        // }
        // else {
        //     setform({ ...form, error: "Usuario o contraseña incorrecta" })
        // }
    }
    return (
        <Auth >
            <LoginForm form={form} handleForm={handleForm} logInSubmit={logInSubmit} />
        </Auth>
    )
}
export default connect()(Login);