import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import FrequentQuestions from '../pages/help/frequentquestions';
import Calendar from '../pages/calendar';
let HelpRouter = ({ auth }) => {
    if (auth) {
        return (
            <Switch>
                <Route
                    exact
                    path="/calendar"
                    component={Calendar}
                />
            </Switch>
        )
    }
    else {
        return <Redirect to="/" />
    }
}
export default connect((e) => e)(HelpRouter)