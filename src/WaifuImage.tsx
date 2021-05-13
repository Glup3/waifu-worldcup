import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

interface WaifuImageProps {
  src: string;
  onWaifuClick: (value: boolean) => void;
  isFirstWaifu: boolean;
}

const StyledImage = styled(motion.img)`
  height: 100%;
  width: 49%;
  object-fit: fill;
  cursor: pointer;
`;

export const WaifuImage: FunctionComponent<WaifuImageProps> = ({ src, onWaifuClick, isFirstWaifu }) => {
  const controls = useAnimation();
  return (
    <StyledImage
      src={src}
      animate={controls}
      onTap={async () => {
        await controls.start({ x: isFirstWaifu ? '50%' : '-50%', zIndex: 1 });
        onWaifuClick(isFirstWaifu);
        controls.start({ x: 0, zIndex: 0 });
      }}
      transition={{ duration: 0.4 }}
    />
  );
};
