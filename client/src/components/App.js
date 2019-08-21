import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import Alert from "./layout/Alert";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Dashboard from "./auth/Dashboard";

// Redux
import { connect } from "redux";
import { Provider } from "react-redux";
import store from "./../store";
// import { loadUser } from "./../actions/auth";
import setAuthToken from "./../utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </section>
      </Router>
    </Provider>
  );
};

export default App;
