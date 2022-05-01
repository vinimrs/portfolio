import React from 'react';
import {CardWrapper} from './ProjectsStyles';
import { projects } from '../../constants';
import {
    Section,
    SectionDivider,
    SectionTitle,
} from '../../styles/GlobalComponents';
import Card from './Card/Card';


const Projects: React.FC = () => {
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
