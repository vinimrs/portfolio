import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {  Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies: React.FC = () => {

 
    return (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle >Tecnologias</SectionTitle>
    <SectionText>
      Atualmente, acumulo conhecimentos do Front-End, UI/UX e o básico de Banco de Dados. 
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" id='gs_reveal' />
        </picture>
        <ListContainer id='gs_reveal' >
          <ListTitle id='gs_reveal'>Front-End</ListTitle>
          <ListParagraph id='gs_reveal'>
            Experiência com <br />
            React.js, Next.js, <br/>
            Typescript...
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" id='gs_reveal' />
        </picture>
        <ListContainer id='gs_reveal'>
          <ListTitle id='gs_reveal'>Back-End</ListTitle>
          <ListParagraph id='gs_reveal'>
            Experiência com <br />
            PostgresSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" id='gs_reveal' />
        </picture>
        <ListContainer id='gs_reveal'>
          <ListTitle id='gs_reveal'>UI/UX</ListTitle>
          <ListParagraph id='gs_reveal'>
            Experiência com <br />
            ferramentas como Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);
 }

export default Technologies;
