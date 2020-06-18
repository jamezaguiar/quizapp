import React from 'react';

import Header from '../../components/Header';

import logo from '../../assets/question-logo.svg';

import { Verse, VerseContainer, DashboardContainer } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Header centralized />
    <DashboardContainer>
      <VerseContainer>
        <Verse>
          &quot;Os sábios acumulam
          <br />
          conhecimento...&quot;
          <br />
          <span>- Provérbios 10:14a</span>
        </Verse>
        <div>
          <button type="button">Iniciar Quiz</button>
          <span>Ver resultados anteriores</span>
        </div>
      </VerseContainer>
      <img src={logo} alt="logo" />
    </DashboardContainer>
  </>
);

export default Dashboard;
