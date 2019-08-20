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

  const onChange = e =>
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ email, password, password2 });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ email, password });
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.dir(thi.refs.name.value);
  }

    return (
      <div>
        <div className="header">
          <h1 className='large text-primary'>Sign Up</h1>
          <p className='load'>
            <i className='fas fa-useer'> Create Account </i>
          </p>
          <form className="ui form" onSubmit={this.submitFormHandler}>
            <div className="field">
              <input
                type='text'
                placeholder='email'
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
            <div className="field">
              <input
                type='password'
                placeholder='Confirm Password'
                name={password2}
                value={{'password2': password2 ]}}
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
  return { user: state.auth.user }
}

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
