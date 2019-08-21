import React from "react";
import { Link } from "react-router-dom";
import { Container, Icon, Grid, Header, Segment, Button, Image, Modal } from 'semantic-ui-react';

import Register from "./../auth/Register";
import Login from "./../auth/Login";

const Landing = () => {
  return (
    <Container>
        <Header as='h2' image='./assets/files/aboutUs.jpg' />
          <Icon name='aboutUs' />
            <Header.Content>
              About Us
              <Header.Subheader>
              Take a look inside how he operate here at xyz...
              </Header.Subheader>
        </Header.Content>
      </Container>
  );
};

export default Landing;
