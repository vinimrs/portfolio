import { ReactFCWithChildren } from '@types';
import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './LayoutStyles';

const Layout: ReactFCWithChildren = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
