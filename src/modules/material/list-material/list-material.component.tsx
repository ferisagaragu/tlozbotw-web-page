import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CardMaterialComponent from '../card-material/card-material.component';
import { MaterialModel } from '../../../core/models/material.model';
import key from '../../../shared/key/react-elements.key';
import { RingLoader } from 'react-spinners';
import './list-material.css';

interface Props { 
  className: string;
  materials: Array<MaterialModel>;
}

interface State { }

class ListMaterialComponent extends Component<Props, State> {

  private renderMaterials(): any {
    const { materials } = this.props;

    if (materials) {
      return materials.map((material: MaterialModel) => (
        <Col md={ 4 } key={ key() } className="mb-5"> 
          <CardMaterialComponent 
            name={ material.name }
            pe={ material.pe }
            power={ material.power }
            location={ material.location }
            description={ material.description }
            img={ material.img }
            check={ material.check }
          />
        </Col>
      ));
    }
  }

  render() {
    const { materials, className } = this.props;

    return (
      <>
      {
        materials ? 
          <Row className={ className }>
            { this.renderMaterials() }
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

export default ListMaterialComponent;