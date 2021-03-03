import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Doctors from '../pages/health/doctors';
import SearchDoctors from '../pages/health/searchdoctors';
import History from '../pages/health/history';
import Exams from '../pages/health/exams';
import Consultations from '../pages/health/consultations';
import Receipt from '../pages/health/receipt';
import { connect } from 'react-redux'
let HealthRouter = ({ auth }) => {
    console.log(auth)
    if (auth)
        return (
            <Switch>
                <Route
                    exact
                    path="/health/doctors"
                    component={Doctors}
                />
                <Route
                    exact
                    path="/health/searchdoctors"
                    component={SearchDoctors}
                />
                <Route
                    exact
                    path="/health/history"
                    component={History}
                />
                <Route
                    exact
                    path="/health/consultations"
                    component={Consultations}
                />
                <Route
                    exact
                    path="/health/exams"
                    component={Exams}
                />
                <Route
                    exact
                    path="/health/receipts"
                    component={Receipt}
                />
            </Switch>
        )
    else
        return (<Redirect to="/" />)
}
export default connect((e) => e)(HealthRouter);