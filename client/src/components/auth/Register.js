import React, { useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import GoogleAuth from "./../GoogleAuth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register }) => {
  // const { setAlert, register } = this.props;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const { email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      console.log("SUCCESS");
      // register({ email, password });
    }
  };

  return (
    <form className="ui form success" onSubmit={() => onSubmit}>
      <div className="field">
        <div className="form label">
          <label>Email:</label>
        </div>
        <div className="ui input">
          <input
            type="text"
            name="email"
            id="name"
            placeholder="Email"
            onChange={() => onChange}
          />
        </div>
      </div>
      <div className="field">
        <div className="form label">
          <label>Password:</label>
        </div>
        <div className="ui input">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={() => onChange}
          />
        </div>
      </div>
      <div className="field">
        <div className="form label">
          <label>Confirm Password:</label>
        </div>
        <div className="ui input">
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm Password"
            onChange={() => onChange}
          />
        </div>
        <div style={{ padding: "20px", display: "in-line" }}>
          <button className="ui button primary">Register</button>
        </div>
        <div style={{ padding: "20px", display: "in-line" }}></div>
      </div>
    </form>
  );
};

// The order of the decoration does not matter.

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  register: state.register
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
