import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PaymentMethods from '../pages/account/paymentmethods';
import PersonalInfo from '../pages/account/personalinfo';
import { connect } from 'react-redux'
import Insurances from '../pages/account/insurances';
import ChangePassword from '../pages/account/changepassword';
let AccountRouter = ({ auth }) => {
    if (auth)
        return (
            <Switch>
                <Route
                    exact
                    path="/account/personalinformation"
                    component={PersonalInfo}
                />
                <Route
                    exact
                    path="/account/paymentmethods"
                    component={PaymentMethods}
                />
                <Route
                    exact
                    path="/account/insurances"
                    component={Insurances}
                />
                <Route
                    exact
                    path="/account/changepassword"
                    component={ChangePassword}
                />
            </Switch>
        )
    else return <Redirect to="/" />
}
export default connect((e) => e)(AccountRouter);