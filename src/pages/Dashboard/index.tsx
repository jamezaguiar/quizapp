import React from 'react';

import { Link } from 'react-router-dom';

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
          <Link to="/themes">Iniciar Quiz</Link>
          <span>Ver resultados anteriores</span>
        </div>
      </VerseContainer>
      <img src={logo} alt="logo" />
    </DashboardContainer>
  </>
);

export default Dashboard;
