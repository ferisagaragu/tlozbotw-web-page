import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import facebookIcon from '../../../styles/img/facebook-icon.png';
import twitterIcon from '../../../styles/img/twitter-icon.png';
import gitHubIcon from '../../../styles/img/github-icon.png';
import enidImg from '../../../styles/img/makers/enid.jpg';
import './section-maker.css';

interface Props { }

interface State { }

class SectionMakerComponent extends Component<Props, State> {
  render() {
    return (
      <Row>
        <Col md={ 4 } className="text-center">
          <Card>
            <Card.Body>
              <img className="rounded-circle" alt="maker" width="250" src={ enidImg } />
              <br />

              <h4 className="mt-3">
                Enid Medina (Miau)
              </h4>
              <br />

              <label>
                Desarrolladora web
              </label>
              <br />

              <label>
                Arte conceptual
              </label>
              <br />

              <hr />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga obcaecati veniam maxime delectus dolores nobis earum! Reprehenderit repellat, asperiores, alias corrupti illum amet officiis quo architecto ut voluptatem voluptas blanditiis?
              </p> 

              <a>
                <img alt="facebook" src={ facebookIcon } />
              </a>

              <a>
                <img alt="twitter" src={ twitterIcon } />
              </a>

              <a>
                <img alt="github" src={ gitHubIcon } />
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SectionMakerComponent;