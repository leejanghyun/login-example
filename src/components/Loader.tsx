import React from 'react';
import styled from '@emotion/styled';
import { MonoColor } from '@/constants/color';

/**
 * Loader Component 정의
 */
const Loader = () => {
  return (
    <Wrapper>
      <Progress></Progress>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Progress = styled.div`
  border: 5px solid ${MonoColor.MONO_WHITE};
  border-top: 5px solid ${MonoColor.MONO_BLACK};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
