import React, { Component } from 'react';
import { connect } from '../../../imports/react-redux.import';
import IconUserComponent from './icon-user/icon-user.component';
import { Col, Badge } from 'react-bootstrap';

interface Props { }

interface State { }

class HeaderView extends Component<Props, State> {
  render() {
    return (
      <header className="row">
        <Col md={ 6 }>
          <label className="title ml-4">
            The legend of zelda breath of the wild
          </label>
        </Col>

        <Col md={ 6 }>
          <IconUserComponent 
            userImg="https://scontent.fgdl4-1.fna.fbcdn.net/v/t1.0-9/65545724_10219719336990748_9045864160952320000_n.jpg?_nc_cat=110&_nc_oc=AQlJEA2-EZmC90VUy8bduunRM5vicpta4ip1qylyPnGqeiFY7H3k_Azra9WszBMyPxo&_nc_ht=scontent.fgdl4-1.fna&oh=54c0fe62ced7746af9c3b068b165b77e&oe=5DE0C961"
            notificationIndicator={ 1 }
            itemSelected={ (selected: any) => { console.log(selected) } }
            menuData={[
              {
                label: 'Fernando Isaías García Aguirre',
                value: 'userName'
              },{
                label: 
                <>
                  Notificaciónes 
                  <Badge className="ml-2" variant="danger">
                    1
                  </Badge>
                </>,
                value: 'notify'
              },{
                label: 'Configuraciones',
                value: 'config'
              },{
                separator: true
              },{
                label: 'Cerrar sesión',
                value: 'closedSesion'
              }
            ]}
          />
        </Col>
      </header>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  //examepleGlobalState: state.examepleGlobalState
});

const mapDispatchToProps = (dispatch: Function) => ({
  //getExamepleGlobalAction: (exampleParam: any) => dispatch(getExamepleGlobalAction(exampleParam))
});

export default connect(mapStateToProps,mapDispatchToProps)(HeaderView);