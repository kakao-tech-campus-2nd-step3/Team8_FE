import { GuardProfileBox } from './components';
import { PointBox, PointLogBox, Withdrawal } from '@/shared/components';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const GuardMyPage = () => {
  return (
    <MyPageLayout>
      <GuardProfileBox />
      <PointBox isSinitto={false} />
      <PointLogBox />
      <Withdrawal />
    </MyPageLayout>
  );
};

const MyPageLayout = styled(Flex)`
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;
