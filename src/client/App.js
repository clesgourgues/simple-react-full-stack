import React, { Component } from 'react';
import { SpeechBubble } from 'react-kawaii';
import {
  Container, Row, Col, Spinner, Alert, Button
} from 'reactstrap';
import TravelForm from './TravelForm';
import Map from './Map';
import TopNav from './TopNav';

import './app.css';

export default class App extends Component {
  state = { destinations: null, isFormVisible: false };

  componentDidMount() {
    fetch('/api/getDestinations')
      .then(res => res.json())
      .then(destinations => this.setState({ destinations: destinations.destinations }));
  }

  toggleForm = () => {
    const { isFormVisible } = this.state;
    this.setState({ isFormVisible: !isFormVisible });
  };

  render() {
    const { destinations, isFormVisible } = this.state;
    console.log(destinations);
    return (
      <Container fluid>
        <TopNav />
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <Row>
              <Col md={{ size: 4, offset: 8 }}>
                <SpeechBubble size={80} mood="blissful" color="#d1ecf1" />
              </Col>
            </Row>
            <Row>
              <Col md={10} className="mt-2">
                <Alert color="info">
                  <h4 className="alert-heading">Hello!</h4>
                  <p>Please describe your travel</p>
                  <hr />
                  <p className="mb-0">
                    <Button color="info" onClick={this.toggleForm}>
                      C'est parti
                    </Button>
                  </p>
                </Alert>
              </Col>
            </Row>
            {isFormVisible && (
              <Row>
                <Col md={12}>
                  <TravelForm destinations={destinations} />
                </Col>
              </Row>
            )}
          </Col>

          <Col xs={12} md={8}>
            {destinations ? <Map destinations={destinations} /> : <Spinner color="info" />}
          </Col>
        </Row>
      </Container>
    );
  }
}
