import Link from 'next/link';
import React from 'react';
import * as S from './HeaderStyles';
import { DiNetbeans } from 'react-icons/di';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { TemplateConfig } from '../../services/withTemplateConfig';

const Header: React.FC<{
  socialNetworks: TemplateConfig['personal']['socialNetworks'];
}> = ({ socialNetworks }) => {
  return (
    <S.Container>
      <S.Div1>
        <Link
          href="/"
          style={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <DiNetbeans size="3rem" /> <span>VinPort</span>
        </Link>
      </S.Div1>
      <S.Div2>
        <li>
          <Link href="#projects">
            <S.NavLink>Projetos</S.NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <S.NavLink>Tecnologias</S.NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <S.NavLink>Sobre</S.NavLink>
          </Link>
        </li>
      </S.Div2>
      <S.Div3>
        {socialNetworks?.github ? (
          <S.SocialIcons href={socialNetworks.github} target="_blank">
            <AiFillGithub size="2.5rem" />
          </S.SocialIcons>
        ) : null}
        {socialNetworks?.linkedin ? (
          <S.SocialIcons href={socialNetworks.linkedin} target="_blank">
            <AiFillLinkedin size="2.5rem" />
          </S.SocialIcons>
        ) : null}
        {socialNetworks?.instagram ? (
          <S.SocialIcons href={socialNetworks.instagram} target="_blank">
            <AiFillInstagram size="2.5rem" />
          </S.SocialIcons>
        ) : null}
      </S.Div3>
    </S.Container>
  );
};

export default Header;
