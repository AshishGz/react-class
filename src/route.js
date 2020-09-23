import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./component/home";
import Profile from "./component/profile";
import ContactForm from "./component/form/contactForm";
import ViewContactList from "./component/form/viewContactList";


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
                            <Route path="/contact" exact>
                                <ContactForm />
                            </Route>
                            <Route path="/contacts" exact>
                                <ViewContactList />
                            </Route>
                        </Switch>

                </Router>
            </div>
        );
    }
}

export default RoutePage;
