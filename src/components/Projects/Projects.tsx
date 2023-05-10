import React from 'react';
import { CardWrapper } from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Card from './Card/Card';
import type { Project } from '../../services/projectsServices';

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <Section id="projects">
      <SectionDivider divider />
      <SectionTitle main>Projetos</SectionTitle>
      <CardWrapper>
        {projects.map(proj => (
          <Card {...proj} key={proj.id} />
        ))}
      </CardWrapper>
    </Section>
  );
};

export default Projects;
