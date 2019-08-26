import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import ListMakerComponent from './list-maker/list-maker.component';
import { makers } from '../../declarations/maker.declarations';

interface Props { }

interface State { }

class FaqView extends Component<Props, State> {
  render() {
    return (
      <>
        <ListMakerComponent 
          makers={ makers }
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  //examepleGlobalState: state.examepleGlobalState
});

const mapDispatchToProps = (dispatch: Function) => ({
  //getExamepleGlobalAction: (exampleParam: any) => dispatch(getExamepleGlobalAction(exampleParam))
});

export default connect(mapStateToProps,mapDispatchToProps)(FaqView);