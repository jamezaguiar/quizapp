import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 275px;
    margin-top: 25px;
    margin-right: 100px;
  }
`;

export const VerseContainer = styled.div`
  max-width: 600px;

  margin-left: 100px;

  div {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      width: 175px;
      height: 50px;

      justify-content: center;
      align-items: center;

      font-family: 'Josefin Sans', Roboto, sans-serif;
      font-weight: 400;
      font-size: 16pt;
      text-decoration: none;

      border: none;
      border-radius: 4px;
      background: #dd0426;
      color: #f2f5ea;
    }

    span {
      font-family: 'Josefin Sans', Roboto, sans-serif;
      font-weight: 400;
      font-size: 16pt;
      color: #dd0426;
      cursor: pointer;
    }
  }
`;

export const Verse = styled.h1`
  font-family: 'Josefin Sans', Roboto, sans-serif;
  font-size: 60px;
  font-weight: 400;
  font-style: italic;
  color: #050532;

  span {
    font-size: 48px;
    font-weight: 300;
  }
`;
