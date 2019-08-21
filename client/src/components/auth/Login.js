import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';
import axios from 'axios';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';

import Register from './Register';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

const Login = ({ login , setAlert }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (email, password) => async dispatch =>
    login(email, password);

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ email, password});

    return (
        <Grid centered columns={2}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              Login
            </Header>
            <Segment>
              <Form size="large">
                <Form.Input
                  fluid
                  icon="email"
                  type="text"
                  name='email'
                  placeholder="Email address"
                  value={email}
                  onChange={e => onChange(e)}
                  iconPosition="left"
                />
                <Form.Input
                  fluid
                  icon="password"
                  type="password"
                  name='password'
                  placeholder="Email a password"
                  value={password}
                  onChange={e => onChange(e)}
                  iconPosition="left"
                />
                <Button color="blue" fluid size="large">
                  Login
                </Button>
              </Form>
            </Segment>
            <Message>
                 Not registered yet?
                 <Link to="/register" component={Register}>
                  Sign up here...
                 </Link>
               </Message>
             </Grid.Column>
           </Grid>
     );
  };

  Login.propTypes = {
    login: PropTypes.func.isRequired
  }

  const mapStateToProps = state => {
    return ({ user: state.auth }
  )};


export default connect(
  mapStateToProps,
  { login, setAlert }
)(Login);
