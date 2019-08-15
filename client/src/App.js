import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from './components/Landing';
import Navbar from './components/Navbar';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
      <Router history={history}>
        <div>
          <Navbar isSignedIn={{ () => this.props.isSignedIn}} />
          <Switch>
            <Route path="/" exact component={Landing} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
