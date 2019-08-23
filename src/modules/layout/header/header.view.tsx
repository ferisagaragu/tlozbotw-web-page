import React, { Component } from 'react';
import { connect } from '../../../imports/react-redux.import';
import IconUserComponent from './icon-user/icon-user.component';
import { Col, Modal } from 'react-bootstrap';
import ModalNotificationComponent from './modal-notification/modal-notification.component';
import { NotificationModel } from '../../../core/models/notification.model';
import userMenu from '../../../declarations/user-menu.declarations';
import { setUserData } from '../../../core/actions/user-data.actions';
import { UserDataModel } from '../../../core/models/user-data.model';

const notifyData: Array<NotificationModel> = [
  {
    id: '',
    icon: 'info',
    title: 'Soy un titulo',
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: '/datos/nuevos?data=123423'
  },{
    id: '',
    icon: 'error',
    title: 'Soy un titulo',
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: ''
  },{
    id: '',
    icon: 'warning',
    title: 'Soy un titulo',
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: ''
  }
]

interface Props {
  setUserData: Function;
  userData: UserDataModel;
}

interface State {
  notifyData: Array<NotificationModel>;
  showNotify: boolean;
}

class HeaderView extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      notifyData,
      showNotify: false
    };

    const { userData } = this.props;
    userMenu[0].label = userData.name;
  }

  private deleteNotify(index: number): void {
    const out: Array<any> = [];
    this.state.notifyData.forEach((notify, elementIndex) => {
      if (elementIndex !== index) {
        out.push(notify);
      }
    });
    this.setState({ notifyData: out });
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
    const { userData } = this.props;
    const { showNotify, notifyData } = this.state;

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
            notificationIndicator={ notifyData.length }
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
            notifyData={ notifyData }
            onErase={ (index: number) => this.deleteNotify(index) }
          />
        </Modal>
      </header>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  userData: state.userData
});

const mapDispatchToProps = (dispatch: Function) => ({
  setUserData: (userData: UserDataModel) => dispatch(setUserData(userData))
});

export default connect(mapStateToProps,mapDispatchToProps)(HeaderView);