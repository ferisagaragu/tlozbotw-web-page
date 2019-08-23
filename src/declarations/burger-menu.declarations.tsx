import React from 'react';
import { BurgerMenuModel } from "../core/models/burger-menu.model";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const burgerMenu: Array<BurgerMenuModel> = [
  {
    icon: <FontAwesomeIcon className="icon-awesome" icon="home" />,
    label: 'Pagína principal',
    url: 'home'
  },{
    icon: <FontAwesomeIcon className="icon-awesome" icon="home" />,
    label: 'Materiales',
    url: 'materials'
  }
];

export default burgerMenu;