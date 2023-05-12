import styled from 'styled-components';

export const CardDiv = styled.div`
  max-width: 550px;
  background-image: ${props => props.theme.gradients.secondary1};
  border-radius: 20px;
  transition: all 0.3s;
  /* overflow: hidden; */
  margin: 12px;
  color: inherit;

  &:hover {
    box-shadow: 0px 0px 30px 1px #0753d792;
  }

  @media ${props => props.theme.breakpoints.lg} {
    max-width: 70%;
    margin: 20px 0 40px 0;
  }

  @media ${props => props.theme.breakpoints.md} {
    max-width: 100%;
    box-shadow: 0px 0px 30px 1px #0753d792;
  }
`;

export const Card2 = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: 0px;
  width: inherit;

  transition: all 0.2s;
  &:hover {
    transform: scale(0.99);
    border-radius: 20px;
  }
  @media ${props => props.theme.breakpoints.md} {
    transform: scale(0.99);
    border-radius: 20px;
  }
`;

export const CardImage = styled.div<{ src: string }>`
  width: 100%;
  height: 300px;
  position: relative;
  background-image: linear-gradient(0deg, #0753d714 1%, #00000000 99.33%),
    ${props => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  .video {
    width: 100%;
    height: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: #000;
  }

  span {
    position: absolute;
    bottom: 10px;
    transition: 0.3s all;
    right: 10px;
    font-weight: 700;
    color: #3642e5;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 4px 8px;
  }

  &:hover {
    span {
      opacity: 0;
    }
  }

  @media ${props => props.theme.breakpoints.lg} {
    height: 350px;
  }

  @media ${props => props.theme.breakpoints.md} {
    height: 300px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 250px;
    span {
      z-index: 99999;
    }

    &:hover {
      span {
        opacity: 1;
      }
    }
  }
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fonts.size['1xl']};

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${props => props.theme.fonts.size.lg};
  }
`;

export const CardStatus = styled.span<{ status: string }>`
  font-size: ${props => props.theme.fonts.size.sm};
  font-family: ${props => props.theme.fonts.title};
  padding: 4px 8px;
  color: ${props => (props.status === 'Deprecated' ? 'red' : '#10F2B0')};
  border: 1px solid
    ${props => (props.status === 'Deprecated' ? 'red' : '#10F2B0')};
  border-radius: 5px;
`;

export const Text = styled.p`
  font-size: 24px;
  padding: 12px 0;

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${props => props.theme.fonts.size.sm2};
  }
`;

export const TagLink = styled.a`
  background-color: transparent;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.text};
  border-radius: 40px;
  margin: 6px 12px 6px 0;
  padding: 8px 16px;
  transition: 0.4s all;

  &:hover {
    border-color: #3642e5;
    color: #3642e5;
  }
  @media ${props => props.theme.breakpoints.md} {
    margin: 6px 24px 6px 0;
    padding: 8px 20px;
  }
`;

export const LinksDiv = styled.div`
  display: flex;
  justify-content: flex-start;

  @media ${props => props.theme.breakpoints.md} {
    justify-content: space-between;
  }
`;

export const RepoLink = styled.a`
  color: inherit;
  display: flex;
  align-items: center;
  transition: 0.5s all;
  border-radius: 20px;
  width: 220px;
  margin: 8px 12px 0 0;

  span {
    font-size: 18px;
    font-weight: 600;
    opacity: 0;
    position: absolute;
    transition: 0.5s all;
  }

  &:hover {
    color: #3642e5;
    background-color: #f5f5f5;

    span {
      margin-left: 55px;
      opacity: 1;
      color: #3642e5;
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    color: #3642e5;
    background-color: #f5f5f5;

    span {
      margin-left: 55px;
      opacity: 1;
      color: #3642e5;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    span {
      font-size: 14px;
      width: 80px;
    }
  }
`;
