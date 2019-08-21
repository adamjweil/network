import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { Grid, Form, Button, Message } from "semantic-ui-react";
import { login } from "../../actions/auth";

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e, email, password) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          Login
        </Header>
        <Segment>
          <Form size="large" onSubmit={this.onSubmit}>
            <Form.Input
              fluid
              icon="user"
              name="email"
              iconPosition="left"
              placeholder="Email address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              onChange={onChange}
            />

            <Button color="blue" fluid size="large">
              Login
            </Button>
          </Form>
        </Segment>
        <Message>
          Not registered yet?{" "}
          <Link to="/register" component={Register}>
            Sign Up
          </Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return { isAuthenticated: state.auth.isAuthenticated };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
