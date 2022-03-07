import React from 'react';
import {
    Section,
    SectionTitle,
    SectionText,
    ButtonBack,
} from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero: React.FC = () => {
    return (
        <>
            <Section row nopadding>
                <LeftSection>
                    <SectionTitle main>
                        Fala aí! <br/>
                        Bem-Vindo(a) ao
                        meu Portfolio
                    </SectionTitle>
                    <SectionText>
                        Sou Vinícius, e aqui você irá encontrar meus projetos
                        mais relevantes e um pouco sobre minha história!
                    </SectionText>
                    <ButtonBack >Leia Mais</ButtonBack>
                </LeftSection>
            </Section>
        </>
    );
};

export default Hero;
