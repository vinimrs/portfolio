import React from 'react';
import { DiFirebase, DiReact, DiTrello, DiZend } from 'react-icons/di';

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
  if (name === 'DiTrello') {
    return (
      <picture>
        <DiTrello size="3rem" id="gs_reveal" />
      </picture>
    );
  }
};

export default TechnologyIcon;
