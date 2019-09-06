import React, { Component } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import './card-material.css';

interface Props { }

interface State { }

class CardMaterialComponent extends Component<Props, State> {
  render() {
    return (
      <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col md={ 9 } className="text-center">
                <h2>
                  titulo
                </h2>
              </Col>

              <Col md={ 3 } className="text-right">
                <button>
                  See
                </button>
              </Col>
            </Row>

            <Row>
              <Col md={ 11 } className="text-center">
                <img
                  className="material-img" 
                  alt="material"
                  src={ '' }
                />
              </Col>
            </Row>

          </Container>
        </Card.Body>
      </Card>
    );
  }
}

export default CardMaterialComponent;