import React, { useState, useEffect, useCallback } from 'react';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  SectionTitle2,
} from '../../styles/GlobalComponents';
import { Timelines } from '../../services/timelineServices';
import { UserGithubData } from '@types';
import UserProfileInfo from './UserProfileInfo/UserProfileInfo';
import TimeLine from './TimeLine/TimeLine';

const About: React.FC<{ data: Timelines }> = ({ data }) => {
  const username = 'vinimrs';
  const API = 'https://api.github.com/users';

  const [userData, setUserData] = useState<UserGithubData>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ active: false, type: 200 });

  const getUserData = useCallback(() => {
    fetch(`${API}/${username}`)
      .then(res => {
        // console.log(res);
        if (res.status === 404) {
          setLoading(false);
          return setError({ active: true, type: 404 });
        }
        if (res.status === 403) {
          setLoading(false);
          return setError({ active: true, type: 403 });
        }
        setLoading(false);
        return res.json();
      })
      .then(json => setUserData(json))
      .catch(error => {
        setError({ active: true, type: 400 });
        console.error(error);
      });
  }, [username]);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle main>Sobre mim</SectionTitle>
      {error.active && (
        <SectionText>
          {error.type === 404
            ? 'Usuário não encontrado'
            : error.type === 403
            ? 'Limite de requisições atingido'
            : 'Erro desconhecido'}
        </SectionText>
      )}
      {loading ? (
        <SectionText>Carregando...</SectionText>
      ) : (
        userData && <UserProfileInfo userData={userData} brief={data.brief} />
      )}
      <SectionTitle2>Minha timeline</SectionTitle2>
      <TimeLine timelines={data.timelines} />
    </Section>
  );
};

export default About;
