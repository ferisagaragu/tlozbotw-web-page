import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './card-bow.css';

interface Props {
  title: string;
  srcImage: string;
  damageBow: string;
  descriptionBow: string;
 }

interface State { }

class CardBowComponent extends Component<Props, State> {
  render() {
    const { title, srcImage, damageBow, descriptionBow } = this.props;

    return (
      <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col md={ 11 } className="text-center">
                <h3>
                  { title }
                </h3>
              </Col>

              <Col md={ 1 } className="text-right">
                Botoncito
              </Col>
            </Row>

            <Row>
              <Col md={ 11 } className="text-center">
                <img 
                  alt="bow"
                  src={ srcImage }
                />
              </Col>
            </Row>

            <Row>
              <Col>
                { damageBow }
              </Col>
            </Row>
            
            <Row>
              <Col>
              { descriptionBow }
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

export default CardBowComponent;