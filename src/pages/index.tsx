import React from 'react';

import Layout from '../layout/Layout';
import Hero from '../sections/Hero/Hero';
import Head from 'next/head';
import { Section } from '../styles/GlobalComponents';
import BackgroundAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Projects from '../sections/Projects/Projects';
import Technologies from '../sections/Technologies/Technologies';
import { GetStaticProps } from 'next';
import { Project, projectsServices } from '../services/projectsServices';
import {
  TemplateConfig,
  withTemplateConfig,
} from '../services/withTemplateConfig';
import { Timelines, timelineServices } from '../services/timelineServices';
import {
  TechnologiesI,
  technologiesServices,
} from '../services/technologiesServices';
import About from '../sections/About/About';

const Home: React.FC<{
  projects: Project[];
  technologies: TechnologiesI;
  timelines: Timelines;
  templateConfig: TemplateConfig;
}> = ({ projects, templateConfig, technologies, timelines }) => {
  return (
    <Layout templateConfig={templateConfig}>
      <Head>
        <title>{templateConfig.site.title}</title>
        <meta name="description" content={templateConfig.site.description} />
      </Head>
      <Section grid>
        <Hero
          brief={templateConfig.personal.brief}
          welcome={templateConfig.personal.welcome}
        />
        <BackgroundAnimation />
      </Section>
      <Projects projects={projects} />
      <Technologies data={technologies} />
      <About data={timelines} />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const projects = await projectsServices.getActiveProjects();
  const timelines = await timelineServices.getAll();
  const technologies = await technologiesServices.getAll();

  return {
    props: await withTemplateConfig({
      projects,
      timelines,
      technologies,
    }),
  };
};
