import React, { Component } from 'react';
import './list-bow.css';
import CardBowComponent from '../card-bow/card-bow.component';
import { Row, Col } from 'react-bootstrap';
import { BowModel } from '../../../core/models/bow.model';
import key from '../../../shared/key/react-elements.key';

interface Props { 
  bows: Array<BowModel>;
}

interface State { }

class ListBowComponent extends Component<Props, State> {

  private renderBows() {
    const { bows } = this.props;
    if (bows) {
      return bows.map((bow: BowModel) => (
        <Col md={ 4 } key={ key() }>
          <CardBowComponent
            title={ bow.name }
            srcImage={ bow.img }
            damageBow={ bow.damage }
            descriptionBow={ bow.description }
          ></CardBowComponent>
        </Col>
      ));
    } else {
      return (
        <label>Cargando datos...</label>
      );
    }
    
  }

  render() {
    return (
      <Row>
        { this.renderBows() }
      </Row>
    );
  }
}

export default ListBowComponent;