import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import NavbarComponent from './navbar/navbar.component';
import HeaderComponent from './header/header.view';
import FooterComponent from './footer/footer.component';

interface Props { }

interface State { }

class LayoutView extends Component<Props, State> {
  render() {
    return (
      <>
        <HeaderComponent />
        <NavbarComponent />
        <FooterComponent />
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

export default connect(mapStateToProps,mapDispatchToProps)(LayoutView);