import React, { Component } from 'react';
import { Col, Card } from 'react-bootstrap';
import facebookIcon from '../../../styles/img/facebook-icon.png';
import twitterIcon from '../../../styles/img/twitter-icon.png';
import gitHubIcon from '../../../styles/img/github-icon.png';
import key from '../../../shared/key/react-elements.key';
import './section-maker.css';

interface Props {
  img: string;
  name: string;
  jobs: Array<string>;
  about: string;
  facebook: string;
  twitter: string;
  github: string;
}

interface State { }

class SectionMakerComponent extends Component<Props, State> {
  render() {
    const { 
      img,
      name,
      jobs,
      about,
      facebook,
      twitter,
      github
    } = this.props;
    
    return (
      <Col md={ 4 } className="text-center">
        <Card className="card-size">
          <Card.Body>
            <img className="rounded-circle image-maker" alt="maker" src={ img } />
            <br />

            <h4 className="mt-3">
              { name }
            </h4>
            <br />

            {
              jobs.map((job: string) => (
                <div key={ key() }>
                  <label className="job">
                    { job }
                  </label>
                  <br />
                </div>
              ))
            }

            <hr />

            <p>
              { about }
            </p> 

            <a href={ facebook }>
              <img alt="facebook" src={ facebookIcon } />
            </a>

            <a href={ twitter }>
              <img alt="twitter" src={ twitterIcon } />
            </a>

            <a href={ github }>
              <img alt="github" src={ gitHubIcon } />
            </a>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SectionMakerComponent;