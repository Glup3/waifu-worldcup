import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { ALL_WAIFUS } from './data';
import { Header } from './Header';
import { ResetButton } from './ResetButton';
import { shuffle } from './util/arrayHelper';
import { WaifuImage } from './WaifuImage';

const WAIFUS_KEY = 'waifus';
const DELIMITER = ';';

const StyledImageWrapper = styled.div`
  height: calc(100vh - 20px);
  max-height: calc(100vh - 20px);
  display: flex;
  justify-content: space-between;
`;

export const MainPage = () => {
  const [waifus, setWaifus] = useState(ALL_WAIFUS);
  const [initialLength, setInitialLength] = useState(ALL_WAIFUS.length);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasShuffled, setHasShuffled] = useState(false);

  useEffect(() => {
    if (hasLoaded) {
      return;
    }

    const storageWaifus = window.localStorage.getItem(WAIFUS_KEY);
    if (storageWaifus != null) {
      setWaifus(storageWaifus.split(DELIMITER));
    }

    setHasLoaded(true);
  });

  useEffect(() => {
    if (hasLoaded && !hasShuffled) {
      if ([16, 8, 4].includes(waifus.length)) {
        shuffle(waifus);
        setWaifus(() => [...waifus]);
      }
      setHasShuffled(true);
    }
  });

  const onWaifuClick = (isFirstWaifu: boolean) => {
    if (isFirstWaifu) {
      const winner = waifus.shift() as string;
      waifus.push(winner);
      waifus.shift();
    } else {
      waifus.shift();
      const winner = waifus.shift() as string;
      waifus.push(winner);
    }
    setWaifus((oldWaifus) => [...oldWaifus]);
    window.localStorage.setItem(WAIFUS_KEY, waifus.join(DELIMITER));
    if (waifus.length == initialLength / 2) {
      setInitialLength(waifus.length);
      setHasShuffled(false);
    }
  };

  const onReset = () => {
    setWaifus(() => [...ALL_WAIFUS]);
    setInitialLength(ALL_WAIFUS.length);
    setHasLoaded(false);
    window.localStorage.removeItem(WAIFUS_KEY);
  };

  const round = initialLength - waifus.length + 1;

  return (
    <div>
      <Header currentRound={round} rounds={initialLength / 2} />
      {waifus.length == 1 ? (
        <img src={waifus[0]} width="600px" height="1000px"></img>
      ) : (
        <StyledImageWrapper>
          <WaifuImage src={waifus[0]} onWaifuClick={onWaifuClick} isFirstWaifu={true} />
          <WaifuImage src={waifus[1]} onWaifuClick={onWaifuClick} isFirstWaifu={false} />
        </StyledImageWrapper>
      )}
      <ResetButton onClick={onReset} />
    </div>
  );
};
