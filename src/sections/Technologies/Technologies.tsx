import React from 'react';
import { TechnologiesI } from '../../services/technologiesServices';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';
import TechnologyIcon from './TechnologyIcon';

const Technologies: React.FC<{ data: TechnologiesI }> = ({ data }) => {
  return (
    <Section id="tech">
      <SectionDivider divider />
      <SectionTitle main>Tecnologias</SectionTitle>
      <SectionText>{data.brief}</SectionText>
      <List>
        {data.tecnologies.map(item => (
          <ListItem key={item.icon}>
            <TechnologyIcon name={item.icon} />
            <ListContainer id="gs_reveal">
              <ListTitle id="gs_reveal">{item.title}</ListTitle>
              <ListParagraph id="gs_reveal">{item.description}</ListParagraph>
            </ListContainer>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

export default Technologies;
