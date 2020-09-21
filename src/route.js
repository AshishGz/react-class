import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./component/home";
import Profile from "./component/profile";


class RoutePage extends Component {
    render() {
        return (
            <div>
                <Router>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/profile/:id" exact>
                                <Profile />
                            </Route>
                        </Switch>

                </Router>
            </div>
        );
    }
}

export default RoutePage;
