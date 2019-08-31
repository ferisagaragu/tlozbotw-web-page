import React, { Component } from 'react';
import CardBowComponent from '../card-bow/card-bow.component';
import { Row, Col, Button } from 'react-bootstrap';
import { BowModel } from '../../../core/models/bow.model';
import key from '../../../shared/key/react-elements.key';
import { RingLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './list-bow.css';

interface Props { 
  bows: Array<BowModel>;
  onDelete: Function;
  onEdit: Function;
  onCreate: Function;
  className: string;
  userRole: number;
}

interface State { }

class ListBowComponent extends Component<Props, State> {

  private renderBows(): any {
    const { bows, onDelete, onEdit, userRole } = this.props;

    if (bows) {
      return bows.map((bow: BowModel) => (
        <Col md={ 4 } key={ key() } className="mb-5"> 
          <CardBowComponent
            title={ bow.name }
            srcImage={ bow.img }
            damageBow={ bow.damage }
            descriptionBow={ bow.description }
            mode={ userRole }
            onDelete={ () => onDelete(bow.id) }
            onEdit={ () => onEdit(bow) }
          />
        </Col>
      ));
    }
  }

  render() {
    const { className, bows, userRole, onCreate } = this.props;

    return (
      <>
        {
          bows ? 
            <Row className={ className }>
              { 
                userRole === 1 &&
                <Col 
                  md={ 4 } 
                  className="mb-5 button-center"
                > 
                  <div className="text-center div-center">
                    <Button 
                      className="circular btn-hover color-12"
                      onClick={ () => onCreate() }
                    >
                      <FontAwesomeIcon icon="plus" />
                    </Button>
                  </div>
                </Col>
              }
              { this.renderBows() }
            </Row>
          :
            <Row className="justify-content-md-center mb-3 mt-4">
              <Col md={ 1 }>
                <RingLoader 
                  color="#36D7B7"
                />
              </Col>
            </Row>
        }
      </>
    );
  }
}

export default ListBowComponent;