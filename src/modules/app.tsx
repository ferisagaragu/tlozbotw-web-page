import React, { Component } from 'react';
import { connect } from '../imports/react-redux.import';
import { UserDataModel } from '../core/models/user-data.model';
import LoginView from './login/login.view';
import LayoutView from './layout/layout.view';

interface Props { 
  userData: UserDataModel
}

interface State { }

class App extends Component<Props, State> {
  render() {
    const { userData } = this.props;

    return (
      <>
        {
          userData ?
            <LayoutView />
          :
            <LoginView />
        }
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  userData: state.userData
});

export default connect(mapStateToProps, null)(App);