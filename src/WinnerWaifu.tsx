import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledImage = styled(motion.img)`
  height: 100%;
  width: 100%;
`;

interface WinnerWaifuProps {
  src: string;
}

export const WinnerWaifu: FunctionComponent<WinnerWaifuProps> = ({ src }) => {
  return <StyledImage src={src} />;
};
