import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1240px;

  p {
    margin-bottom: 0px;
    padding-bottom: 24px;
  }
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  border: 10px solid #4364f7;
  border-radius: 50%;
  width: 160px;
  height: 160px;

  img {
    border-radius: 50%;
  }
`;

export const Username = styled.a`
  font-size: 22px;
  font-weight: 700;
  color: #4364f7;
  margin-bottom: 8px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e0e2e5;
  border-radius: 8px;
  padding: 16px 18px;
  margin: 0 12px;

  @media (max-width: 768px) {
    padding: 12px 14px;
    margin: 0 4px;
  }
`;

export const StatNumber = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #4364f7;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const StatTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #4364f7;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
