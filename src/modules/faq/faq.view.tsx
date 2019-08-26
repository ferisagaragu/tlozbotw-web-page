import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import SectionMakerComponent from './section-maker/section-maker.component';

interface Props { }

interface State { }

class FaqView extends Component<Props, State> {
  render() {
    return (
      <>
        <SectionMakerComponent />
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