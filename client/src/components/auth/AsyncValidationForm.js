import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alerts";
import { register } from "../../actions/auth";
import { onFormChange, loadUser } from "../../actions/auth";
import validate from "./validate";
import asyncValidate from "./asyncValidate";
import GoogleAuth from "../GoogleAuth";
// import INITIAL_STATE from "../../reducers/authReducer";

const renderField = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? "async-validating" : ""}>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const AsyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div clsssName="field">
        <div className="ui input">
          <Field
            name="email"
            type="text"
            component={renderField}
            label="Email"
          />
        </div>
      </div>
      <div clsssName="field">
        <div className="ui input">
          <Field
            name="password"
            type="password"
            component={renderField}
            label="Password"
          />
        </div>
      </div>
      <div clsssName="field">
        <Field
          name="password2"
          type="password"
          component={renderField}
          label="Confirm Password"
        />
      </div>
      <div>
        <button onClick={register} className="ui button primary" type="submit">
          Register
        </button>
        <GoogleAuth />
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

// export const mapStateToProps = () => {
//   return { props: this.state };
// };
export default reduxForm({
  form: "asyncValidation", // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ["username"]
})(AsyncValidationForm);
