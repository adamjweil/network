import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from './../../actions/alert';
import { login } from './../../actions/auth';
import PropTypes from 'prop-types';

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
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = ({ formData }) => async dispatch =>
    login(formData)

    return (
        <Grid centered columns={2}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              Login
            </Header>
            <Segment>
              <Form size="large" onSubmit={onSubmit} >
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
                 <Link to="/register">
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
