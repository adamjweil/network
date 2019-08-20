import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';
import axios from 'axios';
import PropTypes from 'prop-types';

const Login = ({ setAlert, login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const body = JSON.stringify({ email, password });

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

    return (
      <div>
        <div className="header">
          <h1 className='large text-primary'>Sign Up</h1>
          <p className='load'>
            <i className='fas fa-useer'/> Create Account
          </p>
          <form className="ui form" onSubmit={e => onSubmit(e)}>
            <div className="field">
              <input
                type='text'
                placeholder='email'
                name='email'
                value={email}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="field">
              <input
                type='password'
                placeholder='Enter Password'
                name='password'
                value={password}
                onChange={e => onChange(e)}
              />
            </div>

            <button type='Submit' className="ui button primary">
              Register
            </button>
          </form>
        </div>
      </div>
    );
}

Login.propTypes = {
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state,auth
});

export default connect(
  null,
  { setAlert, login }
)(Login);
