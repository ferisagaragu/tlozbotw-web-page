import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
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
                
                <Col md={ 8 } className="ml-3 mr-2">
                  <b>
                    { notify.title }
                  </b>

                  <label className="notify-text mt-1">
                    { notify.message }
                  </label>
                </Col>
                
                <Col md={ 1 } className="notify-text">
                  <Link to={ notify.link }>
                    <button
                      className="button-notify btn-hover color-1"
                    >
                      <FontAwesomeIcon icon="eye"/>
                    </button>
                  </Link>
                </Col>

                <Col md={ 1 }>
                  <button 
                    className="button-notify-cancel btn-hover color-11"
                    onClick={ () => onErase(index) }
                  >
                    <FontAwesomeIcon icon="times"/>
                  </button>
                </Col>
              </Row>
            )) 
        }
      </>
    );
  }
}

export default NotificationLayoutComponent;