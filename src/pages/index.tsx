import React from 'react';

import Layout from '../layout/Layout';
import Hero from '../components/Hero/Hero';
import Head from 'next/head';
import { Section } from '../styles/GlobalComponents';
import BackgroundAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Projects from '../components/Projects/Projects';
import TimeLine from '../components/TimeLine/TimeLine';
import Technologies from '../components/Technologies/Technologies';

const Home: React.FC = () => {
    return (
        <Layout>
            <Head>
                <title>Portfolio - Vini</title>
            </Head>
            <Section grid >
                <Hero />
                <BackgroundAnimation />
            </Section>
            <Projects />
            <Technologies />
            <TimeLine />
        </Layout>

    );
};

export default Home;