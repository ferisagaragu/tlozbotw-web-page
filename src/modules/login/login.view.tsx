import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { Container, Row, Col, Card } from 'react-bootstrap';
import FormRegistComponent from './form-regist/form-regist.component';
import FormLoginComponent from './form-login/form-login.component';
import { login } from '../../core/actions/user-data.actions';

interface Props {
  login: Function;
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
    const { login } = this.props;
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
                      submitActions={ (data: any) => { } }
                      cancel={ () => this.showRegistModel() }
                      showButtons={ true }
                    />
                  :
                    <FormLoginComponent 
                      submitActions={ (formData: any) => login(formData.email, formData.password) }
                      cancel={ () => this.showRegistModel() }
                      showButtons={ true }
                    />
                }
              </Card.Body>
            </Card>  
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  login: (email: string, password: string) => dispatch(login(email, password))
});

export default connect(null, mapDispatchToProps)(LoginView);