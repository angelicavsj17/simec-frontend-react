import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginScreen from '../pages/login'
import Recover from '../pages/recover';
import Register from '../pages/register';
import RestorePassword from '../pages/restorepassword';
let AuthRouter = () => {
    return (
        <Switch>
            <Route
                exact
                path="/auth/login"
                component={LoginScreen}
            />
            <Route
                exact
                path="/auth/register"
                component={Register}
            />
            <Route
                exact
                path="/auth/recover"
                component={Recover}
            />
            <Route
                exact
                path="/auth/restore"
                component={RestorePassword}
            />
        </Switch>
    )
}
export default AuthRouter;