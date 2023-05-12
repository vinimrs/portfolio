import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styled from 'styled-components';

export function loadScrollTrigger() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('#gs_reveal').forEach(function (elem: HTMLElement) {
    hide(elem); // assure that the element is hidden when scrolled into view
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      }, // assure that the element is hidden when scrolled into view
    });
  });
}

export function animateFrom(elem: HTMLElement, direction = 1) {
  let x = 0;
  let y = direction * 100;
  if (elem.classList.contains('gs_reveal_fromLeft')) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains('gs_reveal_fromRight')) {
    x = 100;
    y = 0;
  }
  elem.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  elem.style.opacity = '0';
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
    }
  );
}

export function hide(elem: HTMLElement) {
  gsap.set(elem, { autoAlpha: 0 });
}

interface SectionProps {
  grid?: boolean;
  row?: boolean;
  nopadding?: boolean;
  id?: string;
}

interface DividerProps {
  divider?: boolean;
  colorAlt?: boolean;
}

interface TitleProps {
  main?: boolean;
}

interface ButtonProps {
  alt?: boolean;
}

export const Section = styled.section<SectionProps>`
  display: ${props => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  padding: ${props => (props.nopadding ? '0' : '32px 48px 0')};
  margin: 42px auto;
  max-width: 1240px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${props => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: ${props => (props.nopadding ? '10px 0px' : '16px 16px 0')};
    width: 100vw;
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2<TitleProps>`
  font-weight: 800;
  font-size: ${props => (props.main ? '65px' : '56px')};
  line-height: ${props => (props.main ? '72px' : '56px')};
  width: max-content;
  max-width: 700px;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${props => (props.main ? '58px 0 16px' : '0')};

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${props => (props.main ? '56px' : '48px')};
    line-height: ${props => (props.main ? '56px' : '48px')};
    margin-bottom: 12px;
    padding: ${props => (props.main ? '40px 0 12px' : '0')};
    max-width: 500px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${props => (props.main ? '32px' : '36px')};
    line-height: ${props => (props.main ? '36px' : '44px')};
    margin-bottom: 8px;
    padding: ${props => (props.main ? '16px 0 8px' : '0')};
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: ${props => props.theme.colors.text};

  @media ${props => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const SectionTitle2 = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 50px;
  width: max-content;
  max-width: 700px;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: 36px 0 16px;
`;

export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: ${props => props.theme.colors.subtext};

  @media ${props => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const SectionDivider = styled.div<DividerProps>`
  width: 64px;
  height: 6px;
  /* border-radius: 10px; */
  background-color: #fff;
  background: ${props =>
    props.colorAlt
      ? props.theme.gradients.primary
      : props.theme.gradients.secondary1};

  margin: ${props => (props.divider ? '3rem 0.5rem' : '')};

  @media ${props => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;

export const SecondaryBtn = styled.button`
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${props => props.theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ButtonBack = styled.button<ButtonProps>`
  width: ${({ alt }) => (alt ? '150px' : '262px')};
  height: ${({ alt }) => (alt ? '52px' : '64px')};
  border-radius: 50px;
  border: none;
  font-family: ${props => props.theme.fonts.title};
  font-size: ${({ alt }) => (alt ? '20px' : '24px')};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form ? '0' : '0 0 80px')};
  color: #fff;
  background: ${props =>
    props.alt
      ? props.theme.gradients.primary
      : props.theme.gradients.secondary1};
  cursor: pointer;
  transition: 0.4s all;
  padding: 20px 0;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};

  &:hover {
    filter: hue-rotate(15deg);
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: ${props => props.theme.gradients.secondary1};
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${props => props.theme.breakpoints.md} {
    width: ${({ alt }) => (alt ? '150px' : '184px')};
    height: ${({ alt }) => (alt ? '52px' : '48px')};
    font-size: ${({ alt }) => (alt ? '20px' : '16px')};
    margin-bottom: ${({ alt }) => (alt ? '0' : '64px')};
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => (alt ? '0' : '32px')};
  }
`;
