import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import axios from "axios";
import PropTypes from "prop-types";
import Login from "./Login";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });

  const { username, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const bdy = JSON.stringify({ username, email, password });
    const res = await axios.post("/auth", bdy, config);
    register({ username, email, password });
  };
  const body = JSON.stringify({ username, email, password, password2 });

  const submitFormHandler = e => {
    e.preventDefault();
    console.dir(this.refs.name.value);
  };

  return (
    <Grid centered columns={3}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          Register Here!!
        </Header>
        <Segment>
          <Form size="large" onSubmit={onSubmit}>
            <Form.Input
              fluid
              icon="user"
              name="username"
              type="text"
              iconPosition="left"
              placeholder="Username"
              onChange={onChange}
            />
            <Form.Input
              fluid
              icon="email"
              name="email"
              type="email"
              iconPosition="left"
              placeholder="Email"
              onChange={onChange}
            />
            <Form.Input
              fluid
              icon="password"
              name="password"
              type="password"
              iconPosition="left"
              placeholder="Password"
              onChange={onChange}
            />
            <Form.Input
              fluid
              icon="passwordConfirm"
              name="password2"
              type="password"
              iconPosition="left"
              placeholder="Confirm Password"
              onChange={onChange}
            />
            <Button className="ui button primary">Register</Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { auth: state.auth.isAuthenticated };
};

export default connect(
  mapStateToProps,
  { register }
)(Register);
