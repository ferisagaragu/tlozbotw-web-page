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
    return bows.map((bow: BowModel) => (
      <Col md={ 4 } key={ key() }>
        <CardBowComponent
          title= { bow.title }
          srcImage={ bow.srcImage }
          damageBow={ bow.damageBow }
          descriptionBow={ bow.descriptionBow }
        ></CardBowComponent>
      </Col>
    ));
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