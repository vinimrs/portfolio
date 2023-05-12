import React from 'react';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

// import { Container } from './styles';

const MyStats: React.FC = () => {
  return (
    <Section id="mystats">
      <SectionTitle>My Stats</SectionTitle>
      <SectionText>Estes são os meus status mais atuais:</SectionText>

      <SectionDivider />
    </Section>
  );
};

export default MyStats;
