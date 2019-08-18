import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../../styles/svg/react-icons.svg';
import { Col } from 'react-bootstrap';

interface Props { }

interface State { }

class FooterComponent extends Component<Props, State> {
  render() {
    return (
      <footer>
        <Col>
          <Logo className="react-icon"/>
          Was compiled in React
        </Col>
      </footer>
    );
  }
}

export default FooterComponent;