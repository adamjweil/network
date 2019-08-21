import React from "react";
import { Container, Grid, Header, Segment, Button, Image, Modal } from 'semantic-ui-react';

const Dashboard = () => {
  return (
    <Container>
    <Grid>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          Dashboard
        </Header>
        <Segment>
          <Modal trigger={<Button>Show Modal</Button>}>
            <Modal.Header>What is DevConnector?</Modal.Header>
            <Modal.Content image>
              <image
                wrapped
                size="medium"
                src=""
              />
              <Modal.Description>
                <Header> Default </Header>
                  <p>
                  We've found the following gravatar image associated with your e-mail
                  address.
                  </p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Segment>
      </Grid.Column>
    </Grid>
    </Container>
  )
};

export default Dashboard;
