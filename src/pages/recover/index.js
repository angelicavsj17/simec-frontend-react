import React, { useState } from 'react'
import { connect } from 'react-redux';
import Auth from '../../components/auth';
import RecoverForm from '../../components/recover';
import methods from '../../utils/api/methods'
let Recover = ({ dispatch }) => {
    let [form, setform] = useState({
        user: "",
        email: "",
        error: ""
    });
    let handleForm = ({ target }) => {
        setform({ ...form, [target.name]: target.value });
    }
    let recoverSubmit = () => {
        let url = window.location.host;
        methods.post("auth/recover", { username: form.user, email: form.email, url }).then((response) => {
            console.log(response)
            if (!response.data.error) {
                dispatch({
                    type: "ADD_ALERT",
                    payload: { alerts: "Se te enviara un correo para recuperar su contraseña" }
                })
                setform({ ...form, error: "" })
            }
            else if (response.data.error)
                setform({ ...form, error: response.data.body.error.msg })
        }).catch(() => {
            setform({ ...form, error: "Esta cuenta no existe" })
        })
    }
    return (
        <Auth>
            <RecoverForm form={form} recoverSubmit={recoverSubmit} handleForm={handleForm} />
        </Auth>

    )
}
export default connect()(Recover);