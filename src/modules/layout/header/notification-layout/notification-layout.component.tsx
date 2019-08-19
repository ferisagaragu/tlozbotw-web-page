import React, { Component } from 'react';
import { Row, Button, Col } from 'react-bootstrap';
import key from '../../../../shared/key/react-elements.key';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '../../../../imports/react-router-dom.import';
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
            notifyData.map((notify: NotificationModel, index: number) => (
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
                
                <Col md={ 8 } className="ml-3 mr-4">
                  <b>
                    { notify.title }
                  </b>

                  <label className="notify-text mt-1">
                    { notify.message }
                  </label>
                </Col>
                
                <Col md={ 1 } className="notify-text">
                  <Link to={ notify.link }>
                    <Button 
                      variant="outline-dark"
                    >
                      <FontAwesomeIcon icon="eye"/>
                    </Button>
                  </Link>

                  <Button 
                    className="ml-2"
                    variant="outline-dark"
                    onClick={ () => onErase(index) }
                  >
                    <FontAwesomeIcon icon="times"/>
                  </Button>
                </Col>
              </Row>
            )) 
        }
      </>
    );
  }
}

export default NotificationLayoutComponent;