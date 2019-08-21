import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import axios from 'axios';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import Login from './Login';
import { loadUser } from '../../actions/auth';

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Container
} from 'semantic-ui-react';

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    isAuthenticated: null,
    password: '',
    password2: ''
  });

  const { username, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async dispatch => {
    const res = await register({ formData });
    console.log(res);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ username, email, password, password2 });

    return (
      <Container>
        <Grid centered columns={2}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
            Create an Account
            </Header>
          <Segment>
            <Form size="md">
              <Form.Input
                fluid
                icon="username"
                type="text"
                name="username"
                placeholder="Enter a Username"
                value={username}
                onChange={e => onChange(e)}
                iconPosition="left"
              />
              <Form.Input
                fluid
                icon="email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={e => onChange(e)}
                iconPosition="left"
              />
              <Form.Input
                fluid
                icon="password"
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={e => onChange(e)}
                iconPosition="left"
              />
              <Form.Input
                fluid
                icon="password"
                type="password"
                name="password2"
                placeholder="password"
                value={password2}
                onChange={e => onChange(e)}
                iconPosition="left"
              />
              <Button color="blue" fluid size="large">
                Register
              </Button>
            </Form>
          </Segment>
        <Message>
           Not registered yet?
           <Link to="/register" component={Register}>Sign up here...</Link>
         </Message>
       </Grid.Column>
      </Grid>
    </Container>
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
