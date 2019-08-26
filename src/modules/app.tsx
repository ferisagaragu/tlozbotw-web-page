import React, { Component } from 'react';
import { connect } from '../imports/react-redux.import';
import { UserDataModel } from '../core/models/user-data.model';
import LoginView from './login/login.view';
import LayoutView from './layout/layout.view';
import { login } from '../core/actions/user-data.actions';
import Cookies from 'js-cookie';

interface Props { 
  userData: UserDataModel;
  login: Function;
}

interface State { }

class App extends Component<Props, State> {
  
  componentDidMount() {
    const { login } = this.props;
    
    if (Cookies.get('userData')) {
      const userData = Cookies.getJSON('userData');
      login(userData.email, userData.password);
    }
  }
  
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

const mapDispatchToProps = (dispatch: Function) => ({
  login: (email: string, password: string) => dispatch(login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);