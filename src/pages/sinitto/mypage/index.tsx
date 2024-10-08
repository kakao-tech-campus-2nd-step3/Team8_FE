import AccountInfoBox from './components/account-info-box';
import ProfileBox from './components/profile-box';
import { BasicButton } from '@/shared/components/common/button';
import PointBox from '@/shared/components/features/mypage/point-box';
import UseDetailBox from '@/shared/components/features/mypage/use-detail';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SinittoMypage = () => {
  return (
    <MyPageLayout>
      <ProfileBox />
      <BasicButton themeType='default' width='338px'>
        내 정보 수정하기
      </BasicButton>
      <AccountInfoBox />
      <BasicButton themeType='default' width='338px'>
        계좌번호 수정하기
      </BasicButton>
      <PointBox />
      <UseDetailBox />
    </MyPageLayout>
  );
};

export default SinittoMypage;

const MyPageLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
