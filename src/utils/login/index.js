import methods from "../api/methods";

let login = (cedula, contraseña, history, dispatch, handleForm) => {
    return methods.post("auth/login", { username: cedula, password: contraseña })
        .then((response, error) => {
            if (error) {
                handleForm({ target: { name: "error", value: "Información invalida" } })
            }
            else {
                localStorage.setItem("token", response.data.body.token);
                let user = localStorage.getItem("token") || "";
                if (user) {
                    console.log(response.data)
                    dispatch({
                        type: "LOG_IN",
                        payload: { auth: {} }
                    })
                    dispatch({
                        type: 'ADD_ALERT',
                        payload: { alerts: `${user.genero === 'F' ? 'Bienvenida' : 'Bienvenido'} a bmi ${response.data.body.user.nombres}` }
                    })
                }
                history.push("/health/doctors")
            }
        }).catch(() => handleForm({ target: { name: "error", value: "Información invalida" } }))
}
export default login;