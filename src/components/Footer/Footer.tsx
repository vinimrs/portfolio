import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { TemplateConfig } from '../../services/withTemplateConfig';

import { SocialIcons } from '../Header/HeaderStyles';
import * as S from './FooterStyles';

const Footer: React.FC<{
  socialNetworks: TemplateConfig['personal']['socialNetworks'];
  phone: TemplateConfig['personal']['phone'];
  email: TemplateConfig['personal']['email'];
  footerQuote: TemplateConfig['personal']['footerQuote'];
}> = ({ socialNetworks, email, footerQuote, phone }) => {
  return (
    <S.FooterWrapper>
      <S.LinkList>
        <S.LinkColumn>
          <S.LinkTitle>Telefone</S.LinkTitle>
          <S.LinkItem href={`tel:${phone}`}>{phone}</S.LinkItem>
        </S.LinkColumn>
        <S.LinkColumn>
          <S.LinkTitle>Email</S.LinkTitle>
          <S.LinkItem href={`mailto:${email}`}>{email}</S.LinkItem>
        </S.LinkColumn>
      </S.LinkList>
      <S.SocialIconsContainer>
        <S.CompanyContainer>
          <S.Slogan>{footerQuote}</S.Slogan>
        </S.CompanyContainer>
        <S.SocialContainer>
          {socialNetworks?.github ? (
            <SocialIcons href={socialNetworks.github} target="_blank">
              <AiFillGithub size="3rem" />
            </SocialIcons>
          ) : null}
          {socialNetworks?.linkedin ? (
            <SocialIcons href={socialNetworks.linkedin} target="_blank">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
          ) : null}
          {socialNetworks?.instagram ? (
            <SocialIcons href={socialNetworks.instagram} target="_blank">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          ) : null}
        </S.SocialContainer>
      </S.SocialIconsContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
