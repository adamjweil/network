import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import axios from 'axios';
import config from 'config';

const Login = ({ setAlert, login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const body = JSON.stringify({ email, password });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login({ email, password });
  
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("http://localhost:5000/api/users", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
   } catch (err) {
     dispatch({
       type: AUTH_ERROR
     });
   }
  }

return (
    <div className="ui fluid card">
      <div className="content">
        <form className="ui form" onSubmit={e => onSubmit(e)}>
          <div className="field">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={onChange} />
          </div>
          <div className="field">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={onChange} />
          </div>
          <button
            className="ui primary labeled icon button"
            type="submit"
            onClick={onSubmit}>
            <i className="unlock alternate icon"></i>
            Login
          </button>
        </form>
      </div>
    </div>
);
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login, setAlerts }
)(Login);
