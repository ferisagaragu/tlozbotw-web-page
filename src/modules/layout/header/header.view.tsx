import React, { Component, ReactElement } from 'react';
import { connect } from '../../../imports/react-redux.import';
import IconUserComponent from './icon-user/icon-user.component';
import { Col, Modal, Badge } from 'react-bootstrap';
import ModalNotificationComponent from './modal-notification/modal-notification.component';
import { NotificationModel } from '../../../core/models/notification.model';
import userMenu from '../../../declarations/user-menu.declarations';
import { setUserData, getNotifications, removeNotification } from '../../../core/actions/user-data.actions';
import { UserDataModel } from '../../../core/models/user-data.model';

interface Props {
  setUserData: Function;
  getNotifications: Function;
  removeNotification: Function;
  userData: UserDataModel;
  notification: Array<NotificationModel>;
}

interface State {
  showNotify: boolean;
}

class HeaderView extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      showNotify: false
    };

    const { userData } = this.props;
    userMenu[0].label = this.isAdmin(userData);
  }

  componentDidMount() {
    const { userData, getNotifications } = this.props;
    getNotifications(userData.uid);
  }

  private isAdmin(userData: UserDataModel): ReactElement {
    return (
      <>
        <label>
          { userData.name }
          &nbsp;&nbsp;
        </label>

        { 
          userData.role === 1 &&
            <Badge variant="info">
              Admin
            </Badge>
        }
      </>
    );
  }

  private deleteNotify(IdNotify: string): void {
    const { userData, removeNotification } = this.props;
    removeNotification(userData.uid, IdNotify);
  }

  private onMenuSelected(selected: string): void {
    const { setUserData } = this.props;
    
    switch(selected) {
      case 'notify': 
        this.setState({ showNotify: !this.state.showNotify });
      break;

      case 'closeSesion':
        setUserData(null);
      break;
    }
  }

  render() {
    const { userData, notification } = this.props;
    const { showNotify } = this.state;

    return (
      <header className="row">
        <Col md={ 6 }>
          <label className="title ml-4">
            The legend of zelda breath of the wild
          </label>
        </Col>

        <Col md={ 6 }>
          <IconUserComponent 
            userImg={ userData.photo }
            notificationIndicator={ notification.length }
            menuData={ userMenu }
            itemSelected={ (selected: any) => this.onMenuSelected(selected) }
          />
        </Col>

        <Modal
          size="lg"
          show={ showNotify }
          onHide={ () => this.setState({ showNotify: !showNotify }) }
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <ModalNotificationComponent 
            notifyData={ notification }
            onErase={ (id: string) => this.deleteNotify(id) }
          />
        </Modal>
      </header>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  userData: state.userData,
  notification: state.notifications
});

const mapDispatchToProps = (dispatch: Function) => ({
  setUserData: (userData: UserDataModel) => dispatch(setUserData(userData)),
  getNotifications: (uid: string) => dispatch(getNotifications(uid)),
  removeNotification: (id: string, idNotify: string) => dispatch(removeNotification(id,idNotify))
});

export default connect(mapStateToProps,mapDispatchToProps)(HeaderView);