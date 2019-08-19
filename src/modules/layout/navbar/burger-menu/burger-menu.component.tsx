import React, { Component, ReactElement } from 'react';
import { Route } from '../../../../imports/react-router-dom.import';
import { slide as Menu } from 'react-burger-menu';
import { Container } from 'react-bootstrap';
import Routing from '../../../../core/routes/routing.routes';
import burgerMenu from '../../../../declarations/burger-menu.declarations';
import { BurgerMenuModel } from '../../../../core/models/burger-menu.model';
import key from '../../../../shared/key/react-elements.key';
import './burger-menu.css';

interface Props { }

interface State { }

class BurgerMenuComponent extends Component<Props, State> {
  
  private onSelect(selected: any, location: any, history: any): void {
    const to = '/' + selected;
    if (location.pathname !== to) {
      history.push(to);
    }
  }
  
  private renderMenu(location: any, history: any): Array<ReactElement>  {
    const locationName = location.pathname.split('/')[1];

    return burgerMenu.map((menu: BurgerMenuModel) => {
      if (locationName === menu.url) {
        return (
          <label 
            className="menu-element"
            key={ key() } 
            onClick={ () => this.onSelect(menu.url, location, history) }
          >
            { menu.icon }
            <b className="ml-2">
              { menu.label }
            </b>
          </label>
        );
      } else {
        return (
          <label 
            className="menu-element"
            key={ key() } 
            onClick={ () => this.onSelect(menu.url, location, history) }
          >
            { menu.icon }
            <span className="ml-2">
              { menu.label }
            </span>
          </label>
        );
      }
    });
  }

  render() {
    return (
      <Route 
        render={ ({ location, history }: any) => (
          <>
            <Menu>
              { this.renderMenu(location, history) }        
            </Menu>
            
            <main>
              <Container>
                <Routing />
              </Container>
            </main>
          </>
        ) } 
      />
    );
  }
}

export default BurgerMenuComponent;