import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import Auth from '../../components/auth'
import RestorePasswordContain from '../../components/restorepassword'
import methods from '../../utils/api/methods'
let RestorePassword = () => {
    let [form, setForm] = useState({
        password: '',
        repeatPassword: '',
        error: {}
    })
    let location = useLocation()
    let dispatch = useDispatch()
    let history = useHistory()
    let handleForm = ({ target }) => {
        setForm({ ...form, [target.name]: target.value })
    }
    let restorePassword = () => {
        const query = new URLSearchParams(location.search);
        let token = query.get('token')
        methods.post(`auth/restore?token=${token}`, { password: form.password, repeatPassword: form.repeatPassword }).then(({ data }) => {
            console.log(data)
            if (!data.error) {
                dispatch({ type: "ADD_ALERT", payload: { alerts: "Contraseña actualizada", errors: "" } });
                history.push('/auth/login')
            }
            else {
                setForm({ ...form, error: data.body.error })
            }
        })
    }
    return (
        <Auth>
            <RestorePasswordContain restorePassword={restorePassword} handleForm={handleForm} form={form} />
        </Auth>
    )
}
export default RestorePassword