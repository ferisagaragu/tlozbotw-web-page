import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import key from '../../../../shared/key/react-elements.key';
import './dropdown-user-menu.css';

interface Props { 
  menuData: any;
  itemSelected: Function;
}

interface State { }

class DropdownUserMenuComponent extends Component<Props, State> {
  render() {
    const { menuData, itemSelected } = this.props;

    return menuData.map((data: any) => {
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
    });
  }
}

export default DropdownUserMenuComponent;