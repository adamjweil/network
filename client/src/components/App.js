import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
import { connect } from "react-redux";
import setAuthToken from "./actions/setAuthToken";
import Landing from "./layout/Landing";
import Navbar from "./layout/Navbar";
import Register from "./auth/Register";
import Login from "./auth/Login";
import history from "./../history";
import { loadUser, register } from "./actions/auth";
import store from "./store";
const oAuth = "developers.google.com/identity/protocols/googlescopes";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Navbar isSignedIn={() => this.props.isSignedIn} />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default connect()(App);
