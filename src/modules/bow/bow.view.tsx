import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import ListBowComponent from './list-bow/list-bow.component';
import { getBows } from '../../core/actions/bow-data.actions';
import { BowModel } from '../../core/models/bow.model';

interface Props { 
  getBows: Function;
  bowData: Array<BowModel>;
}

interface State { }

class BowView extends Component<Props, State> {
  
  componentDidMount() {
    const { getBows } = this.props;
    getBows('zmqixDaO5xQS7lfq4tZUfRFUHDY2');
  }

  render() {
    const { bowData } = this.props;
    return (
      <>
        <ListBowComponent
          bows={ bowData }
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  bowData: state.bowData
});

const mapDispatchToProps = (dispatch: Function) => ({
  getBows: (id: string) => dispatch(getBows(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(BowView);