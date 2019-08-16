import React, { useState } from "react";
import { Field, Label, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { register, onFormChange, onFormSubmit } from "../../actions";
import { setAlert } from "./../alerts";
// import INITIAL_STATE from "../../reducers/authReducer";

const Register = () => {
  return (
    <div className="container">
      <form className="ui success form" onSubmit={this.props.handleSubmit()}>
        <div className="field">
          <label>Email:</label>
          <div className="ui input">
            <Field
              name="email"
              type="text"
              onChange={this.props.onFormChange}
              component={this.renderInput}
              label="Enter a Email!"
            />
          </div>
        </div>
        <div className="field">
          <label>Password:</label>
          <div className="ui input">
            <Field
              name="password"
              type="password"
              onChange={this.props.onFormChange}
              component={this.renderInput}
              label="Enter a Password"
            />
          </div>
        </div>
        <div className="field">
          <label>Confirm Password:</label>
          <div className="ui input">
            <Field
              name="password2"
              type="password2"
              onChange={this.props.onFormChange}
              component={this.renderInput}
              label="Confirm Password"
            />
          </div>
        </div>
        <button className="ui button">Register</button>
      </form>
    </div>
  );
};

const validate = formValues => {
  const errors = {};

  if (!formValues.email) {
    errors.email = "You must enter your email";
  }
  if (!formValues.password) {
    errors.password = "You must enter a password";
  }
  if (!formValues.password2) {
    errors.password = "You must confirm password";
  }
  if (formValues.password !== formValues.password2) {
    errors.password2 = "Passwords must match!";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "onRegister",
  validate
})(Register);

export default connect(
  null,
  { register, onFormChange, onFormSubmit }
)(Register);
