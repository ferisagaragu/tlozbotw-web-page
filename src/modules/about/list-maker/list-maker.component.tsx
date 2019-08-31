import React, { Component } from 'react';
import SectionMakerComponent from '../section-maker/section-maker.component';
import { MakerModel } from '../../../core/models/maker.model';
import { Row } from 'react-bootstrap';
import './list-maker.css';

interface Props { 
  makers: Array<MakerModel>
}

interface State { }

class ListMakerComponent extends Component<Props, State> {
  
  private renderMakers() {
    const { makers } = this.props;

    return makers.map((maker: MakerModel) => (
      <SectionMakerComponent
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
    return (
      <Row>
        { this.renderMakers() }
      </Row>
    );
  }
}

export default ListMakerComponent;