import ProfileBox from './components/profile-box';
import PointBox from '@/shared/components/features/mypage/point-box';
import UseDetailBox from '@/shared/components/features/mypage/use-detail';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const GuardMyPage = () => {
  return (
    <MyPageLayout>
      <ProfileBox />
      <PointBox />
      <UseDetailBox />
    </MyPageLayout>
  );
};

export default GuardMyPage;

const MyPageLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
