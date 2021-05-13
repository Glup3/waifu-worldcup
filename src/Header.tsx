import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  /* TODO: do this next */
`;

interface HeaderProps {
  currentRound: number;
  rounds: number;
}

export const Header: FunctionComponent<HeaderProps> = ({ currentRound, rounds }) => {
  return (
    <StyledHeader>
      Waifu Worldcup 2021 Round {currentRound} of {rounds}
    </StyledHeader>
  );
};
