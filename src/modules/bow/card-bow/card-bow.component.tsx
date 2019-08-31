import React, { Component } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import './card-bow.css';

interface Props {
  title: string;
  srcImage: string;
  damageBow: string;
  descriptionBow: string;
  mode: number;
  onDelete: Function;
  onEdit: Function;
 }

interface State { }

class CardBowComponent extends Component<Props, State> {
  render() {
    const { 
      title, 
      srcImage, 
      damageBow, 
      descriptionBow, 
      mode, 
      onDelete, 
      onEdit 
    } = this.props;

    return (
      <Card className="card-bow-size">
        <Card.Body>
          <Container>
            <Row>
              <Col md={ 11 } className="text-center">
                <h2>
                  { title }
                </h2>
              </Col>

              <Col md={ 1 } className="text-right">
                {
                  mode !== 1 && 
                    'Botoncito'
                }
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
                Daño: { damageBow }
              </Col>
            </Row>
            
            <Row>
              <Col>
              { descriptionBow }
              </Col>
            </Row>          
          </Container>
        </Card.Body>

        { 
          mode === 1 && 
            <Card.Footer>
              <div className="text-center">
                <Button 
                  className="mr-3 btn-hover color-9"
                  onClick={ () => onEdit() }
                >
                  Editar
                </Button>

                <Button 
                  className="btn-hover color-11"
                  onClick={ () => onDelete() }
                >
                  Eliminar
                </Button>
              </div>
            </Card.Footer>
        }
      </Card>
    );
  }
}

export default CardBowComponent;