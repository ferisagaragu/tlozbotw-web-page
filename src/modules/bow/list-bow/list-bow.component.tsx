import React, { Component } from 'react';
import CardBowComponent from '../card-bow/card-bow.component';
import { Row, Col } from 'react-bootstrap';
import { BowModel } from '../../../core/models/bow.model';
import key from '../../../shared/key/react-elements.key';
import './list-bow.css';

interface Props { 
  bows: Array<BowModel>;
  onDelete: Function;
  onEdit: Function;
  className: string;
}

interface State { }

class ListBowComponent extends Component<Props, State> {

  private renderBows() {
    const { bows, onDelete, onEdit } = this.props;
    if (bows) {
      return bows.map((bow: BowModel) => (
        <Col md={ 4 } key={ key() } className="mb-5"> 
          <CardBowComponent
            title={ bow.name }
            srcImage={ bow.img }
            damageBow={ bow.damage }
            descriptionBow={ bow.description }
            mode={ 1 }
            onDelete={ () => onDelete(bow.id) }
            onEdit={ () => onEdit(bow) }
          >
          </CardBowComponent>
        </Col>
      ));
    } else {
      return (
        <label>Cargando datos...</label>
      );
    }
    
  }

  render() {
    const { className } = this.props;

    return (
      <Row className={ className }> 
        { this.renderBows() }
      </Row>
    );
  }
}

export default ListBowComponent;