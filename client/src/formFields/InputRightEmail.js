import React from "react";
import { Dropdown, Input } from "semantic-ui-react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

const options = [{ key: ".com", text: ".com", value: ".com" }];

const inputRightEmail = () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Header as="h2" textAlign="center">
        Login
      </Header>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            name="name"
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
          />

          <Button color="blue" fluid size="large">
            Login
          </Button>
        </Form>
      </Segment>
      <Message>
        Not registered yet? <a href="#">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default inputRightEmail;
