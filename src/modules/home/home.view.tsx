import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { TitleComponent } from '../../shared/title/title.component';

interface Props { }

interface State { }

class HomeView extends Component<Props, State> {
  render() {
    return (
      <>
        <TitleComponent 
          titleText="Binevenid@"
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

export default connect(mapStateToProps,mapDispatchToProps)(HomeView);