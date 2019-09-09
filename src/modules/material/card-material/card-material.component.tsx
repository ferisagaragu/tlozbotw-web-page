import React, { Component } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import './card-material.css';
import { CheckPhoto } from '../../../shared/check-photo/check-photo';

interface Props { 
  name: string;
  pe: string;
  power: string;
  location: string;
  description: string;
  img: string;
  check: boolean;
}

interface State { }

class CardMaterialComponent extends Component<Props, State> {
  render() {
    const { 
      name,
      pe,
      power,
      location,
      description,
      img,
      check 
    } = this.props;
    
    return (
      <Card className="material-size-card">
        <Card.Body>
          <Container>
            <Row>
              <Col md={ 9 } className="text-center">
                <h2>
                  { name }
                </h2>
              </Col>

              <Col md={ 3 } className="text-right">
                <CheckPhoto 
                  checked={ check }
                  onCheck={ () => {} }
                />
              </Col>
            </Row>

            <Row>
              <Col md={ 11 } className="text-center">
                <img
                  className="material-img" 
                  alt="material"
                  src={ img }
                />
              </Col>
            </Row>

            <Row>
              <Col md={ 12 }>
                <b>PE:&nbsp;&nbsp;</b>
                <label>{ pe }</label>
              </Col>
            </Row>

            <Row>
              <Col md={ 12 }>
                <b>Poder:&nbsp;&nbsp;</b>
                <label>{ power }</label>
              </Col>
            </Row>

            <Row>
              <Col md={ 12 }>
                <b>Location:&nbsp;&nbsp;</b>
                <label>{ location }</label>
              </Col>
            </Row>

            <Row>
              <Col md={ 12 }>
                <p>{ description }</p>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

export default CardMaterialComponent;