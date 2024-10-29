import { useState } from 'react';

import { SinittoProfileBox, AccountInfoBox } from './components';
import { BasicButton, PointBox, PointLogBox } from '@/shared/components';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SinittoMypage = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingAccount, setIsEditingAccount] = useState(false);

  return (
    <MyPageLayout>
      <SinittoProfileBox
        isEditing={isEditingProfile}
        setIsEditing={setIsEditingProfile}
      />
      <BasicButton
        themeType='default'
        width='338px'
        onClick={() => setIsEditingProfile(true)}
      >
        내 정보 수정하기
      </BasicButton>
      <AccountInfoBox
        isEditing={isEditingAccount}
        setIsEditing={setIsEditingAccount}
      />
      <BasicButton
        themeType='default'
        width='338px'
        onClick={() => setIsEditingAccount(true)}
      >
        계좌번호 수정하기
      </BasicButton>
      <PointBox />
      <PointLogBox />
    </MyPageLayout>
  );
};

export default SinittoMypage;

const MyPageLayout = styled(Flex)`
  flex-direction: column;
  align-items: center;
`;
