import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import FrequentQuestions from '../pages/help/frequentquestions';
let HelpRouter = ({ auth }) => {
    return (
        <Switch>
            <Route
                exact
                path="/help/frequentquestions"
                component={FrequentQuestions}
            />
        </Switch>
    )
}
export default connect((e) => e)(HelpRouter)