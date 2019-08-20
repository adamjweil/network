import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';
import axios from 'axios';
import PropTypes from 'prop-types';

const Login = ({ login , isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ email, password});

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

    return (
      <div>
        <div className="header">
          <h1 className='large text-primary'>Sign Up</h1>
          <p className='load'>
            <i className='fas fa-user' /> Sign Into Your Account
          </p>
          <form className="ui form" onSubmit={e => onSubmit(e)}>
            <div className="field">
              <input
                type='email'
                name='email'
                placeholder='Email Adress'
                value={email}
                onChange={e => onChange(e)}
                label="Email:"
              />
            </div>
            <div className="field">
              <input
                type='password'
                name='password'
                placeholder='password'
                value={password}
                onChange={e => onChange(e)}
                label="Password:"
              />
            </div>
            <button type='submit' className="ui button primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };

  Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  }

  const mapStateToProps = state => {
    return ({ isAuthenticated: state.auth.isAuthenticated }
  )};


export default connect(
  mapStateToProps,
  { login }
)(Login);
