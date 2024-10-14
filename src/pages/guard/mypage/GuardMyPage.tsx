import { GuardProfileBox } from './components';
import { PointBox, UseDetailBox } from '@/shared/components';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const GuardMyPage = () => {
  return (
    <MyPageLayout>
      <GuardProfileBox />
      <PointBox />
      <UseDetailBox />
    </MyPageLayout>
  );
};

const MyPageLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
