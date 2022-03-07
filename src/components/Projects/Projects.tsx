import React from 'react';
import styled from 'styled-components';
import { projects } from '../../constants';
import {
    Section,
    SectionDivider,
    SectionTitle,
} from '../../styles/GlobalComponents';
import Card from './Card/Card';

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    /* padding: 0 12px; */

    @media ${props=> props.theme.breakpoints.lg} {
        flex-direction: column;
        align-items: center;

    }

    @media ${props=> props.theme.breakpoints.md} {
            padding: 0 12px;
    }

    @media ${props=> props.theme.breakpoints.sm} {
        padding: 0 12px;

    }

`;

const Projects: React.FC = () => {
    return (
        <Section nopadding id="projects">
            <SectionDivider />
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
