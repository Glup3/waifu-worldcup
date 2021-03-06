import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  color: #fff;
  background-color: #1e1e1e;
  border: 2px solid #000;
  border-radius: 20px;
`;

interface ResetButtonProps {
  onClick: () => void;
}

export const ResetButton: FunctionComponent<ResetButtonProps> = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Restart</StyledButton>;
};
