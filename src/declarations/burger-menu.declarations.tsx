import React from 'react';
import { BurgerMenuModel } from "../core/models/burger-menu.model";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as BowIcon } from '../styles/svg/bow-icon.svg';

const burgerMenu: Array<BurgerMenuModel> = [
  {
    icon: <FontAwesomeIcon className="icon-awesome" icon="home" />,
    label: 'Pagína principal',
    url: 'home'
  },{
    icon: <FontAwesomeIcon className="icon-awesome" icon="home" />,
    label: 'Materiales',
    url: 'materials'
  },{
    icon: <BowIcon />,
    label: 'Arcos',
    url: 'bow'
  },{
    icon: <FontAwesomeIcon className="icon-awesome" icon="address-card" />,
    label: 'FAQ',
    url: 'faq'
  }
];

export default burgerMenu;