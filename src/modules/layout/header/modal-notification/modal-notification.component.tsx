import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import NotificationLayoutComponent from '../notification-layout/notification-layout.component';
import { NotificationModel } from '../../../../core/models/notification.model';
import './modal-notification.css';

interface Props { 
  notifyData: Array<NotificationModel>;
  onErase: Function;
}

interface State { }

class ModalNotificationComponent extends Component<Props, State> {

  render() {
    const { onErase, notifyData } = this.props;

    return (
      <>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Notificaciones
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="notify-section">
            <NotificationLayoutComponent 
              onErase={ (id: string) => onErase(id) }
              notifyData={ notifyData }
            />
          </div>
        </Modal.Body>
      </>
    );
  }
}

export default ModalNotificationComponent;