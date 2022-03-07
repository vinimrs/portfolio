import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import * as S from './FooterStyles';

const Footer: React.FC = () => {
    return (
        <S.FooterWrapper>
            <S.LinkList>
                <S.LinkColumn>
                    <S.LinkTitle>Telefone</S.LinkTitle>
                    <S.LinkItem href="tel:(082)99127-8970">(082) 99127-8970</S.LinkItem>
                </S.LinkColumn>
                <S.LinkColumn>
                    <S.LinkTitle>Email</S.LinkTitle>
                    <S.LinkItem href="mailto:viniromualdo082@gmail.com">
                    viniromualdo082@gmail.com
                    </S.LinkItem>
                </S.LinkColumn>
            </S.LinkList>
            <S.SocialIconsContainer>
                <S.CompanyContainer>
                    <S.Slogan>Inovando um projeto de cada vez</S.Slogan>
                </S.CompanyContainer>
                <S.SocialContainer>
                    <SocialIcons href="https://github.com/vinir07">
                        <AiFillGithub size="2.5rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/vin%C3%ADcius-romualdo-5a9555219/">
                        <AiFillLinkedin size="2.5rem" />
                    </SocialIcons>
                    <SocialIcons href="https://instagram.com/vocedeveloper">
                        <AiFillInstagram size="2.5rem" />
                    </SocialIcons>
                </S.SocialContainer>
            </S.SocialIconsContainer>
        </S.FooterWrapper>
    );
};

export default Footer;
