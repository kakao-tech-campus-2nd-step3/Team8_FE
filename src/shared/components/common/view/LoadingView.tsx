import { Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const LoadingView = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
);
const SpinnerWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  padding: 80px 16px;
`;
