import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import key from '../../../../shared/key/react-elements.key';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { NotificationModel } from '../../../../core/models/notification.model';
import './notification-layout.css';

interface Props {
  notifyData: Array<NotificationModel>;
  onErase: Function;
}

interface State { }

class NotificationLayoutComponent extends Component<Props, State> {
  
  render() {
    const { notifyData, onErase } = this.props;

    return (
      <>
        { 
          notifyData.length === 0 ?
            <div className="text-center">
              No hay notificaciones para mostrar.
            </div>
          :
            notifyData.map((notify: NotificationModel) => (
              <Row 
                className={ `notify-${notify.icon} ml-3 mr-3 mt-3` }
                key={ key() }
              >
                <Col md={ 1 }>
                  {
                    notify.icon === 'info' && 
                      <FontAwesomeIcon className="icon notify-info-icon" icon="info-circle"/>
                  }
                  
                  {
                    notify.icon === 'error' && 
                      <FontAwesomeIcon className="icon notify-error-icon" icon="bomb" />
                  }

                  {
                    notify.icon === 'warning' && 
                      <FontAwesomeIcon className="icon notify-warning-icon" icon="exclamation-triangle" />
                  }
                </Col>
                
                <Col md={ 8 } className="ml-3 mr-2">
                  <b>
                    { notify.title }
                  </b>

                  <label className="notify-text mt-1">
                    { notify.message }
                  </label>
                </Col>
                
                {
                  notify.link &&
                    <Col md={ 1 } className="notify-text">
                      <Link to={ notify.link }>
                        <Button
                          className="btn-hover color-1"
                        >
                          <FontAwesomeIcon icon="eye"/>
                        </Button>
                      </Link>
                    </Col>
                }

                <Col md={ 1 } className={ `notify-text ${!notify.link ? 'ml-5' : ''}` } >
                  <span>
                    <Button 
                      className="btn-hover color-11"
                      onClick={ () => onErase(notify.id) }
                    >
                      <FontAwesomeIcon icon="times"/>
                    </Button>
                  </span>
                </Col>
              </Row>
            )) 
        }
      </>
    );
  }
}

export default NotificationLayoutComponent;