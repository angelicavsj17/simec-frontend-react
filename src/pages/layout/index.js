import React from 'react'
import { connect } from 'react-redux'
import Alert from '../../components/alert';
import Navbar from '../../components/navbar';
let Layout = ({ children, auth, dispatch, alerts, errors }) => {
    return (
        <>
            <Navbar dispatch={dispatch} auth={auth} />
            {
                alerts ? <Alert dispatch={dispatch} text={alerts} /> : null
            }{
                errors ? <Alert type="error" dispatch={dispatch} text={errors} /> : null
            }
            {/* <div className="alerts-navbar">{alerts}</div> */}
            {children}
        </>
    )
}
export default connect((e) => e)(Layout);