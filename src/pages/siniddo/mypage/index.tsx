import PointBox from '@/components/features/mypage/PointBox';
import ProfileBox from '@/components/features/mypage/ProfileBox';
import UseDetailBox from '@/components/features/mypage/UseDetail';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MyPage = () => {
  return (
    <MyPageLayout>
      <ProfileBox />
      <PointBox />
      <UseDetailBox />
    </MyPageLayout>
  );
};

export default MyPage;

const MyPageLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
