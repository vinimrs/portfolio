import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

// import { Container } from './styles';

const TechnologyIcon: React.FC<{ name: string }> = ({ name }) => {
  if (name === 'DiReact') {
    return (
      <picture>
        <DiReact size="3rem" id="gs_reveal" />
      </picture>
    );
  }
  if (name === 'DiFirebase') {
    return (
      <picture>
        <DiFirebase size="3rem" id="gs_reveal" />
      </picture>
    );
  }
  if (name === 'DiZend') {
    return (
      <picture>
        <DiZend size="3rem" id="gs_reveal" />
      </picture>
    );
  }
};

export default TechnologyIcon;
