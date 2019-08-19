import React, { Component } from 'react';
import { Row, DropdownButton, Dropdown } from 'react-bootstrap';
import key from '../../../../shared/key/react-elements.key';
import BadgeIndicatorComponent from '../badge-indicator/badge-indicator.component';
import { UserMenuModel } from '../../../../core/models/user-menu.model';
import './icon-user.css';

interface Props { 
  userImg: string;
  notificationIndicator: number;
  menuData: Array<UserMenuModel>;
  itemSelected: Function;
}

interface State { }

class IconUserComponent extends Component<Props, State> {
  render() {
    const { userImg, notificationIndicator, menuData, itemSelected } = this.props;

    return (
      <Row className="justify-content-end mt-1 mr-1">
        <DropdownButton
          drop="left"
          title={ 
            <>
              <img 
                className="img-user rounded-circle"
                src={ userImg } 
                alt="user data"
              />

              <span className="badge-position">
                <BadgeIndicatorComponent 
                  notificationIndicator={ notificationIndicator }
                />
              </span>
            </>
          }
          id={ `dropdown-button-drop-left` }
        >
          { 
            menuData.map((data: UserMenuModel) => {
              if (data.separator) {
                return (
                  <Dropdown.Divider key={ key() } />
                );
              } 

              if (data.value === 'notify') {
                return (
                  <Dropdown.Item
                    onClick={ () => itemSelected(data.value) }
                    key={ key() }
                  >
                    <span className="mr-2">
                      { data.label }
                    </span>
                    <BadgeIndicatorComponent
                      notificationIndicator={ notificationIndicator }
                    />
                  </Dropdown.Item>
                );
              }
              
              return (
                <Dropdown.Item
                  onClick={ () => itemSelected(data.value) }
                  key={ key() }
                >
                  { data.label }
                </Dropdown.Item>
              );
            })  
          }
        </DropdownButton>
      </Row>
    );
  }
}

export default IconUserComponent;