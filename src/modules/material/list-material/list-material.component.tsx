import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CardMaterialComponent from '../card-material/card-material.component';
import './list-material.css';

interface Props { }

interface State { }

class ListMaterialComponent extends Component<Props, State> {
  render() {
    return (
      <Row>
        <Col md={ 4 }>
          <CardMaterialComponent />
        </Col>
      </Row>
    );
  }
}

export default ListMaterialComponent;