import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import HeaderComponent from './header/header.view';
import FooterComponent from './footer/footer.component';
import BurgerMenuComponent from './navbar/burger-menu/burger-menu.component';
import '../../styles/stylesheet/layout.css';

interface Props { }

interface State { }

class LayoutView extends Component<Props, State> {
  render() {
    return (
      <>
        <HeaderComponent />
        <BurgerMenuComponent />
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