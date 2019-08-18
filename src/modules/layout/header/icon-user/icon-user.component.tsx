import React, { Component } from 'react';
import { Badge, Row, DropdownButton, Dropdown } from 'react-bootstrap';
import key from '../../../../shared/key/react-elements.key';
import './icon-user.css';

interface Props { 
  userImg: string;
  notificationIndicator: number;
  menuData: any;
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

              <span className="bafge-position">
                {
                  notificationIndicator !== 0 &&
                    <Badge 
                      variant="danger"
                    >
                      { 
                        notificationIndicator >= 100 ?
                          '+99'
                        :
                          notificationIndicator
                      }
                    </Badge>
                }
              </span>
            </>
          }
          id={`dropdown-button-drop-left`}
        >
          { 
            menuData.map((data: any) => {
              if (data.separator) {
                return (
                  <Dropdown.Divider key={ key() } />
                );
              } 
              
              return (
                <Dropdown.Item
                  onClick={ () => itemSelected(data.value) }
                  key={ key() }
                >
                  { data.label }
                </Dropdown.Item>
              )
            })  
          }
        </DropdownButton>
      </Row>
    );
  }
}

export default IconUserComponent;