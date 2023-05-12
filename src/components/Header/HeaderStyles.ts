import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  padding-top: 12px;

  @media ${props => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / span 1 / span 1;
  display: flex;
  align-items: center;

  span {
    font-weight: 600;
    font-size: 24px;
    font-family: ${props => props.theme.fonts.title};
  }

  @media ${props => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / span 1 / span 2;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / span 1 / span 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media ${props => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / span 1 / span 3;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / span 1 / span 1;
  display: flex;
  align-items: center;

  @media ${props => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / span 1 / span 2;
  }
`;

export const NavLink = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fonts.size.sm2};
  transition: 0.3s all;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const SocialIcons = styled.a`
  color: white;
  cursor: pointer;
  margin: 0 6px;
  transition: 0.3s all;
  border-radius: 50px;
  padding: 8px;
  transform: scale(0.9);

  &:hover {
    background-color: #212d45;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
