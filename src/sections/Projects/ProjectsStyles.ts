import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  /* padding: 0 12px; */

  @media ${props => props.theme.breakpoints.lg} {
    flex-direction: column;
    align-items: center;
  }

  @media ${props => props.theme.breakpoints.md} {
    padding: 0 12px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 12px;
  }
`;
