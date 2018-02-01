import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'reactstrap';

import NavBar from './NavBar';
import settings from '../../../../../../../../../settings';

const footerHeight = '40px';

const Footer = styled.footer`
  margin-top: 10px;
  line-height: ${footerHeight};
  height: ${footerHeight};
  background: rgba(0, 0, 0, 0.8);
`;

const PageLayout = ({ children, navBar }) => {
  return (
    <section className="d-flex flex-column flex-grow">
      <section className="d-flex flex-column flex-grow">
        {navBar !== false && <NavBar />}
        <Container id="content">{children}</Container>
      </section>
      <Footer>
        <div className="text-center text-white">&copy; 2018. {settings.app.name}.</div>
      </Footer>
    </section>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
  navBar: PropTypes.bool
};

export default PageLayout;
