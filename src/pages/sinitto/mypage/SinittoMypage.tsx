import { useState } from 'react';

import { SinittoProfileBox, AccountInfoBox } from './components';
import { BasicButton, PointBox, PointLogBox } from '@/shared/components';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SinittoMypage = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  return (
    <MyPageLayout>
      <SinittoProfileBox
        isEditing={isEditingProfile}
        setIsEditing={setIsEditingProfile}
      />
      <BasicButton
        themeType='default'
        width='338px'
        height='40px'
        onClick={() => setIsEditingProfile(true)}
      >
        내 정보 수정하기
      </BasicButton>
      <AccountInfoBox />
      <PointBox />
      <PointLogBox />
    </MyPageLayout>
  );
};

export default SinittoMypage;

const MyPageLayout = styled(Flex)`
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;
