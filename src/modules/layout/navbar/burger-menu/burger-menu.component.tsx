import React, { Component, ReactElement } from 'react';
import { Route } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { Container, Accordion, Button, Card } from 'react-bootstrap';
import Routing from '../../../../core/routes/routing.routes';
import burgerMenu from '../../../../declarations/burger-menu.declarations';
import { BurgerMenuModel } from '../../../../core/models/burger-menu.model';
import key from '../../../../shared/key/react-elements.key';
import './burger-menu.css';

interface Props { }

interface State { 
  isOpen: boolean;
}

class BurgerMenuComponent extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  private onSelect(selected: any, location: any, history: any): void {
    const to = '/' + selected;
    if (location.pathname !== to) {
      history.push(to);
      this.setState({ isOpen: false });
    }
  }
  
  private renderElement(
    menu: BurgerMenuModel, 
    locationName: string, 
    location: any, 
    history: any
  ): ReactElement {
    return (
      <label 
        className="menu-element mb-3"
        onClick={ () => this.onSelect(menu.url, location, history) }
      >
        { menu.icon }
        { 
          locationName === menu.url ?
            <b className="ml-2">
              { menu.label }
            </b>
          :
            <span className="ml-2">
              { menu.label }
            </span>
        }
      </label>
    );
  }

  private renderChildren(
    menu: BurgerMenuModel, 
    locationName: string, 
    location: any, 
    history: any
  ): ReactElement | undefined {
    if (menu.children) {
      const event = key();

      return (
        <Accordion key={ key() } className="navbar-children mb-2">
          <Card className="navbar-children">
            <Card.Header className="navbar-children">
              <Accordion.Toggle 
                as={ Button } 
                variant="label" 
                eventKey={ event }
              >
                <label>
                  { menu.icon }
                  <span className="ml-2">
                    { menu.label }
                  </span>
                </label>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={ event }>
              <Card.Body className="navbar-children">
                {
                  menu.children.map((element: BurgerMenuModel) => (
                    <label 
                      className="menu-element ml-4"
                      key={ key() } 
                      onClick={ () => this.onSelect(element.url, location, history) }
                    >
                      { element.icon }
                      { 
                        locationName === element.url ?
                          <b className="ml-2">
                            { element.label }
                          </b>
                        :
                          <span className="ml-2">
                            { element.label }
                          </span>
                      }
                    </label>
                  ))
                }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      );
    }
  }

  private renderMenu(location: any, history: any): Array<ReactElement>  {
    const locationName = location.pathname.split('/')[1];

    return burgerMenu.map((menu: BurgerMenuModel) => (
      <div key={ key() }>
        {
          !menu.children ?
            this.renderElement(menu, locationName, location, history)
          : 
            this.renderChildren(menu, locationName, location, history)
        }
      </div>
    ));
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Route 
        render={ ({ location, history }: any) => (
          <>
            <Menu
              isOpen={ isOpen }
              onStateChange={ (isOpenStatus: any) => { 
                this.setState({ isOpen: isOpenStatus.isOpen });
              }}
            >
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