import React, { useEffect } from "react";
import store from "./../store";
import { Router, Route, Switch } from "react-router-dom";
// import "./App.css";

import setAuthToken from "./../utils/setAuthToken";
import Landing from "./layout/Landing";
import Navbar from "./layout/Navbar";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Alert from "./layout/Alert";
import history from "./../history";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Navbar isSignedIn={() => this.props.isSignedIn} />
        <Route path="/" exact component={Landing} />
        <Alert />
        <section className="container">
          <Switch>
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </section>
      </Router>
    </div>
  );
};

export default App;
