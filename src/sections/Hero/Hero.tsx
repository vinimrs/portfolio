import React, { useEffect } from 'react';
import {
  Section,
  SectionTitle,
  SectionText,
  ButtonBack,
  loadScrollTrigger,
} from '../../styles/GlobalComponents';
import ScrollTo from '../../components/ScrollTo/ScrollTo';
import { LeftSection } from './HeroStyles';

const Hero: React.FC<{ welcome: string; brief: string }> = ({
  welcome,
  brief,
}) => {
  useEffect(() => {
    loadScrollTrigger();
  }, []);

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main>{welcome}</SectionTitle>
          <SectionText>{brief}</SectionText>
          <ScrollTo itemName="projects">
            <ButtonBack>Leia Mais</ButtonBack>
          </ScrollTo>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
