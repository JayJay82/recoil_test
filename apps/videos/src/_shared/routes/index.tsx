import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from '../../videos/layout'

const Navigation = () => {
    return(
        <Router>
            <Switch>
            <Route path="/">
                <MainPage />
            </Route>
            </Switch>
        </Router>
    )
}

export default Navigation