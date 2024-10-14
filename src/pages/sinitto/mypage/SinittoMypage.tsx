import { SinittoProfileBox, AccountInfoBox } from './components';
import { BasicButton, PointBox, UseDetailBox } from '@/shared/components';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SinittoMypage = () => {
  return (
    <MyPageLayout>
      <SinittoProfileBox />
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
