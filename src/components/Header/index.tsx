import React from 'react';

import logo from '../../assets/logo-light-theme.svg';

import { Container } from './styles';

interface Props {
  centralized: boolean;
}

const Header: React.FC<Props> = ({ centralized }: Props) => (
  <Container centralized={centralized}>
    <header>
      <img src={logo} alt="Quizapp Logo" />
    </header>
  </Container>
);

export default Header;
