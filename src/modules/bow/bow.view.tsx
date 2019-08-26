import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import ListBowComponent from './list-bow/list-bow.component';
import { getBows } from '../../core/actions/bow-data.actions';
import { BowModel } from '../../core/models/bow.model';
import { UserDataModel } from '../../core/models/user-data.model';

interface Props { 
  getBows: Function;
  bowData: Array<BowModel>;
  userData: UserDataModel;
}

interface State { }

class BowView extends Component<Props, State> {
  
  componentDidMount() {
    const { getBows, userData } = this.props;
    getBows(userData.uid);
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
  bowData: state.bowData,
  userData: state.userData
});

const mapDispatchToProps = (dispatch: Function) => ({
  getBows: (id: string) => dispatch(getBows(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(BowView);