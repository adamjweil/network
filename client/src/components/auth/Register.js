import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import axios from 'axios';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const { email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ email, password, password2 });

  const onSubmit = async e => {
    await register({ email, password });
  };

  const submitFormHandler = e => {
    e.preventDefault();
    console.dir(this.refs.name.value);
  }

    return (
      <div>
        <div className="header">
          <h1 className='large text-primary'>Register</h1>
          <p className='load'>
            <i className='fas fa-useer'> Create Account </i>
          </p>
          <form className="ui form" onSubmit={e => onSubmit(e)}>
            <div className="field">
              <input
                type='text'
                placeholder='email'
                value={ref => email}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="field">
              <input
                type='password'
                placeholder='Enter Password'
                name='password'
                value={ ref => password }
                onChange={e => onChange(e)}
              />
            </div>
            <div className="field">
              <input
                type='password'
                placeholder='Confirm Password'
                name={password2}
                value={ref => password2}
                onChange={e => onChange(e)}
              />
            </div>
            <button type='submit' className="ui button primary">
              Register
            </button>
          </form>
        </div>
      </div>
    );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return ({ auth: state.auth.isAuthenticated });
}

export default connect(
  mapStateToProps,
  { register }
)(Register);
