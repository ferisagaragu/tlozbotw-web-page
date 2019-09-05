import React from 'react';
import { BurgerMenuModel } from "../core/models/burger-menu.model";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as ArcheryIcon } from '../styles/svg/archery-icon.svg';
import { ReactComponent as BowIcon } from '../styles/svg/bow-icon.svg';
import { ReactComponent as ArrowIcon } from '../styles/svg/arrow-icon.svg';

const burgerMenu: Array<BurgerMenuModel> = [
  {
    icon: <FontAwesomeIcon className="icon-awesome" icon="home" />,
    label: 'Pagína principal',
    url: 'home'
  },{
    icon: <FontAwesomeIcon className="icon-awesome" icon="carrot" />,
    label: 'Materiales',
    url: 'material'
  },{
    icon: <ArcheryIcon />,
    label: 'Armas de tiro',
    children: [
      {
        icon: <BowIcon />,
        label: 'Arcos',
        url: 'bow'
      },{
        icon: <ArrowIcon />,
        label: 'Flechas',
        url: 'arrow'
      }
    ]
  },{
    icon: <FontAwesomeIcon className="icon-awesome" icon="hard-hat" />,
    label: 'Acerca de',
    url: 'about'
  }
];

export default burgerMenu;