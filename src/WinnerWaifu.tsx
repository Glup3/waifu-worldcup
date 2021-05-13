import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledImage = styled(motion.img)`
  margin: 0 auto;
  height: 100%;
  object-fit: contain;
`;

interface WinnerWaifuProps {
  src: string;
}

export const WinnerWaifu: FunctionComponent<WinnerWaifuProps> = ({ src }) => {
  return <StyledImage src={src} />;
};
