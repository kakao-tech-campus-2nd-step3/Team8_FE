import { useState } from 'react';

import { SinittoProfileBox, AccountInfoBox } from './components';
import {
  BasicButton,
  PointBox,
  PointLogBox,
  Withdrawal,
} from '@/shared/components';
import { PageLayout } from '@/shared/components';

const SinittoMypage = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  return (
    <PageLayout>
      <SinittoProfileBox
        isEditing={isEditingProfile}
        setIsEditing={setIsEditingProfile}
      />
      {isEditingProfile ? null : (
        <BasicButton
          themeType='default'
          width='338px'
          height='40px'
          onClick={() => setIsEditingProfile(true)}
        >
          내 정보 수정하기
        </BasicButton>
      )}
      <AccountInfoBox />
      <PointBox isSinitto={true} />
      <PointLogBox />
      <Withdrawal />
    </PageLayout>
  );
};

export default SinittoMypage;
