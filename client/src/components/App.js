import React, { Fragment, useEffect } from "react";
import store from "./../store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
import { connect } from "react-redux";
import setAuthToken from "./../utils/setAuthToken";
import Landing from "./layout/Landing";
import Navbar from "./layout/Navbar";
import AsyncValidationForm from "./auth/AsyncValidationForm";
import Login from "./auth/Login";
import history from "./../history";
import { loadUser, register, onFormChange } from "./../actions/auth";
import { Provider } from "react-redux";

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
            <Route path="/register" exact component={AsyncValidationForm} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
