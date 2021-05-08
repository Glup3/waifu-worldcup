import React, { FunctionComponent } from 'react';

interface HeaderProps {
  currentRound: number;
  rounds: number;
}

export const Header: FunctionComponent<HeaderProps> = ({ currentRound, rounds }) => {
  return (
    <div>
      Waifu Worldcup 2021 Round {currentRound} of {rounds}
    </div>
  );
};
