import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const Login = () => (
  <div className="ui fluid card">
    <div className="content">
      <form className="ui form" method="POST">
        <div className="field">
          <label>User</label>
          <input type="text" name="user" placeholder="User" />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" name="pass" placeholder="Password" />
        </div>
        <button className="ui primary labeled icon button" type="submit">
          <i className="unlock alternate icon"></i>
          Login
        </button>
      </form>
    </div>
  </div>
);

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
