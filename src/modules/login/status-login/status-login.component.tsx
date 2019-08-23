import React, { Component } from 'react';
import { PropagateLoader } from 'react-spinners';
import { Col, Row } from 'react-bootstrap';
import './status-login.css';

interface Props { }

interface State { }

class StatusLoginComponent extends Component<Props, State> {
  render() {
    return (
      <Row className="justify-content-md-center mb-3 mt-4">
        <Col md={ 1 }>
          <PropagateLoader 
            color="#36D7B7"
          />
        </Col>
      </Row>
    );
  }
}

export default StatusLoginComponent;