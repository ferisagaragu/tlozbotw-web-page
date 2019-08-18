import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '../../../imports/react-sidenav.import';
import { Route } from '../../../imports/react-router-dom.import';
import Routing from '../../../core/routes/routing.routes';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../styles/stylesheet/layout.css';

interface Props { }

interface State { }

class NavbarComponent extends Component<Props, State> {
  
  private onSelect(selected: any, location: any, history: any): void {
    const to = '/' + selected;
    if (location.pathname !== to) {
      history.push(to);
    }
  }
  
  render() {
    return (
      <Route render={({ location, history }: any) => (
        <>
          <SideNav
            className="side-bar"
            onSelect={ (selected: any) => this.onSelect(selected, location, history) }
          >
            <SideNav.Toggle />

            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                <NavIcon className="nav-item">
                  <FontAwesomeIcon className="icon-awesome" icon="home" />
                </NavIcon>

                <NavText>
                  Home
                </NavText>
              </NavItem>

              <NavItem eventKey="example">
                <NavIcon>
                  <FontAwesomeIcon className="icon-awesome" icon="atom" />
                </NavIcon>

                <NavText>
                  Example 
                </NavText>

                <NavItem eventKey="example/data" subnav={ true }>
                  <NavText>
                    Into Example
                  </NavText>
                </NavItem>
              </NavItem>
            </SideNav.Nav>
          </SideNav>

          <main>
            <Container className="app">
              <Routing />
            </Container>
          </main>
        </>
        )}
      />
    );
  }
}

export default NavbarComponent;