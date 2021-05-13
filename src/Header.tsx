import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  height: 20px;
  background-color: #1e1e1e;
  color: #fff;
`;

interface HeaderProps {
  currentRound: number;
  rounds: number;
}

export const Header: FunctionComponent<HeaderProps> = ({ currentRound, rounds }) => {
  const content = rounds === 0.5 ? 'Winner' : `${rounds * 2} Contestants (${currentRound} / ${rounds})`;

  return <StyledHeader>Waifu Worldcup 2021 - {content}</StyledHeader>;
};
