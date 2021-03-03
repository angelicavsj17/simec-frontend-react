import { createStore } from "redux";

let storeSetup = (state, action) => {
    switch (action.type) {
        case "LOG_IN":
            return { ...state, auth: action.payload.auth }
        case "SIGN_OUT":
            return { ...state, auth: null }
        case "ADD_ALERT":
            return { ...state, alerts: action.payload.alerts }
        case "ADD_ERROR":
            return { ...state, errors: action.payload.errors }
        default:
            return state;
    }
}
let user = localStorage.getItem("token") || null;

let storeObj = {
    auth: user || null,
    alerts: "",
    errors: "",
}

export const store = createStore(
    storeSetup,
    storeObj
)