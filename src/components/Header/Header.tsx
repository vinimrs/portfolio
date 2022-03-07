import Link from 'next/link';
import React from 'react';
import * as S from './HeaderStyles';
import { DiNetbeans } from 'react-icons/di';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';



const Header: React.FC = () => {
    return (
        <S.Container>
            <S.Div1>
                <Link href="/">
                    <a
                        style={{
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <DiNetbeans size="3rem" /> <span>VinPort</span>
                    </a>
                </Link>
            </S.Div1>
            <S.Div2>
                <li>
                    <Link href="#projects">
                        <S.NavLink>Projetos</S.NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#sobre">
                        <S.NavLink>Sobre</S.NavLink>
                    </Link>
                </li>
            </S.Div2>
            <S.Div3>
                <S.SocialIcons href="https://github.com/vinir07">
                    <AiFillGithub size="2.5rem" />
                </S.SocialIcons>
                <S.SocialIcons href="https://instagram.com/vocedeveloper">
                    <AiFillInstagram size="2.5rem" />
                </S.SocialIcons>
                <S.SocialIcons href="https://www.linkedin.com/in/vin%C3%ADcius-romualdo-5a9555219/">
                    <AiFillLinkedin size="2.5rem" />
                </S.SocialIcons>
            </S.Div3>
        </S.Container>
    );
};

export default Header;
