import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { Container, Row, Col, Card } from 'react-bootstrap';
import FormRegistComponent from './form-regist/form-regist.component';
import FormLoginComponent from './form-login/form-login.component';
import StatusIndicatorComponent from './status-indicator/status-indicator.component';
import { UserDataModel } from '../../core/models/user-data.model';

interface Props {
  userData: UserDataModel;
}

interface State { 
  showRegist: boolean;
}

class LoginView extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      showRegist: false
    }
  }

  private showRegistModel() {
    const { showRegist } = this.state;
    this.setState({ showRegist: !showRegist });
  }

  render() {
    const { send, message }: UserDataModel = this.props.userData;
    const { showRegist } = this.state;

    return (
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md={ 4 }>
            <Card className="card-shadow">
              <Card.Body>
                {
                  showRegist ? 
                    <FormRegistComponent 
                      submitActions={ () => {} }
                      cancel={ () => this.showRegistModel() }
                      showButtons={ true }
                    />
                  :
                    <FormLoginComponent 
                      submitActions={ () => {} }
                      cancel={ () => this.showRegistModel() }
                      showButtons={ true }
                    />
                }
            
                <StatusIndicatorComponent
                  message={ message }
                  send={ send } 
                />
              </Card.Body>
            </Card>  
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  userData: state.userData
});

const mapDispatchToProps = (dispatch: Function) => ({
  //getExamepleGlobalAction: (exampleParam: any) => dispatch(getExamepleGlobalAction(exampleParam))
});

export default connect(mapStateToProps,mapDispatchToProps)(LoginView);