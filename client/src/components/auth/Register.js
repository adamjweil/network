import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const { email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async formValues => {
    e.preventDefault();
    this.props.register(formValues);
  };

  // if (user.isAuthenticated) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <div className="ui fluid card">
      <div className="content">
        <div className="form header">
          <h1 className="large text-primary">Register Now!</h1>
          <p className="lead">
            <i className="fa fa-user" /> Create Your Account
          </p>
        </div>
        <form className="ui form" method="POST" onSubmit={e => onSubmit(e)}>
          <div className="field">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onChange(e)}
            />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="col-6-md">
            <div className="button">

              <button
                className="ui primary labeled icon button"
                type="submit"
                onClick={onSubmit}>
                Register
              </button>
            </div>
          </div>
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
      </div>

    );
  };



Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
