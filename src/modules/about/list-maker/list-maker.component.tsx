import React, { Component } from 'react';
import SectionMakerComponent from '../section-maker/section-maker.component';
import { MakerModel } from '../../../core/models/maker.model';
import { Row } from 'react-bootstrap';
import key from '../../../shared/key/react-elements.key';
import './list-maker.css';

interface Props { 
  makers: Array<MakerModel>;
  className: string;
}

interface State { }

class ListMakerComponent extends Component<Props, State> {
  
  private renderMakers() {
    const { makers } = this.props;

    return makers.map((maker: MakerModel) => (
      <SectionMakerComponent
        key={ key() }
        img={ maker.img } 
        name={ maker.name }
        jobs={ maker.jobs }
        about={ maker.about }
        facebook={ maker.facebook }
        twitter={ maker.twitter }
        github={ maker.github }
      />
    ));
  }
  
  render() {
    const { className } = this.props;

    return (
      <Row className={ `${className} justify-content-md-center` }>
        { this.renderMakers() }
      </Row>
    );
  }
}

export default ListMakerComponent;