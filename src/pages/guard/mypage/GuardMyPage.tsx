import { GuardProfileBox } from './components';
import { Logout, PointBox, PointLogBox } from '@/shared/components';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const GuardMyPage = () => {
  return (
    <MyPageLayout>
      <GuardProfileBox />
      <PointBox />
      <PointLogBox />
      <Logout />
    </MyPageLayout>
  );
};

const MyPageLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
