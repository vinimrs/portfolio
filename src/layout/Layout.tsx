import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { TemplateConfig } from '../services/withTemplateConfig';
import { Container } from './LayoutStyles';

const Layout: React.FC<{
  children: React.ReactNode;
  templateConfig: TemplateConfig;
}> = ({ children, templateConfig }) => {
  const { personal } = templateConfig;

  return (
    <Container>
      <Header socialNetworks={personal.socialNetworks} />
      <main>{children}</main>
      <Footer
        email={personal.email}
        footerQuote={personal.footerQuote}
        phone={personal.phone}
        socialNetworks={personal.socialNetworks}
      />
    </Container>
  );
};

export default Layout;
