import React, { useState } from 'react'
import Auth from '../../components/auth';
import RegisterForm from '../../components/register'
import data from '../../utils/exampledata/data.json'
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import methods from '../../utils/api/methods';
import login from '../../utils/login';

let Register = () => {
    let [form, setform] = useState({
        name: "",
        user: "",
        lastname: "",
        email: "",
        password: "",
        terms: false,
        error: ""
    });
    let dispatch = useDispatch();
    let history = useHistory();
    let handleForm = ({ target }) => {
        setform({ ...form, [target.name]: target.type === "checkbox" ? target.checked : target.value });
    }
    let registerSubmit = () => {
        methods.post("user", {
            name: form.name,
            apellidos: form.lastname,
            cedula: form.user,
            correo: form.email,
            contraseña: form.password,
        }).then((response, error) => {
            if (error) console.log(response.data.body.error.msg, "this is response");
            else {
                if (response.data.error) {
                    setform({ ...form, error: response.data.body.error.msg })
                }
                else {
                    login(form.user, form.password, history, dispatch);
                }
            }
        })
    }
    return (
        <Auth>
            <RegisterForm form={form} handleForm={handleForm} registerSubmit={registerSubmit} />
        </Auth>
    )
}
export default Register;