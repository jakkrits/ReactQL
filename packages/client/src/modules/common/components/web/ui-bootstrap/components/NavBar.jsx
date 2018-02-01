import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, NavItem } from 'reactstrap';

import modules from '../../../../../../modules';
import settings from '../../../../../../../../../settings';

const NavBar = () => (
  <Navbar className="text-white mb-5" color="dark">
    <Container>
      <Nav>
        <NavLink to="/" className="navbar-brand text-white">
          {settings.app.name}
        </NavLink>
        {modules.navItems}
      </Nav>

      <Nav className="justify-content-end">
        {modules.navItemsRight}
        {(!__PERSIST_GQL__ || __DEV__) && (
          <NavItem>
            <a href="/graphiql" className="nav-link text-white">
              GraphiQL
            </a>
          </NavItem>
        )}
      </Nav>
    </Container>
  </Navbar>
);

export default NavBar;
