import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import React, { useEffect } from 'react'
import Layout from '../pages/layout';
import AuthRouter from './AuthRouter';
import Home from '../pages/home';
import { connect, Provider } from 'react-redux'
import { store } from '../utils/store';
import HealthRouter from './HealthRouter';
import AccountRouter from './AccountRouter';
import HelpRouter from './HelpRouter';
import CalendarRouter from './CalendarRouter';
const Router = ({ auth }) => {
    useEffect(() => {
        let user = localStorage.getItem("token") || "";
        if (user) {
            store.dispatch({
                type: "LOG_IN",
                payload: { auth: {} }
            })
        }
    }, [])
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/auth/:path" component={AuthRouter} />
                        <Route exact path="/health/:path" component={HealthRouter} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/calendar" component={CalendarRouter} />
                        <Route exact path="/account/:path" component={AccountRouter} />
                        <Route exact path="/help/:path" component={HelpRouter} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </Provider>
    )
}
export default Router