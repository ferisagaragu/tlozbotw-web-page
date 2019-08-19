import React, { Component } from 'react';
import { connect } from '../../../imports/react-redux.import';
import IconUserComponent from './icon-user/icon-user.component';
import { Col, Modal } from 'react-bootstrap';
import ModalNotificationComponent from './modal-notification/modal-notification.component';
import { NotificationModel } from '../../../core/models/notification.model';
import userMenu from '../../../declarations/user-menu.declarations';

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

interface Props { }

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
    switch(selected) {
      case 'notify': 
        this.setState({ showNotify: !this.state.showNotify });
      break;
    }
  }

  render() {
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
            userImg="https://scontent.fgdl4-1.fna.fbcdn.net/v/t1.0-9/65545724_10219719336990748_9045864160952320000_n.jpg?_nc_cat=110&_nc_oc=AQlJEA2-EZmC90VUy8bduunRM5vicpta4ip1qylyPnGqeiFY7H3k_Azra9WszBMyPxo&_nc_ht=scontent.fgdl4-1.fna&oh=54c0fe62ced7746af9c3b068b165b77e&oe=5DE0C961"
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
  //examepleGlobalState: state.examepleGlobalState
});

const mapDispatchToProps = (dispatch: Function) => ({
  //getExamepleGlobalAction: (exampleParam: any) => dispatch(getExamepleGlobalAction(exampleParam))
});

export default connect(mapStateToProps,mapDispatchToProps)(HeaderView);