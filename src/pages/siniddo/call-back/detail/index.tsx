import { useParams } from 'react-router-dom';

import { GuideLineList } from './components/guide-line-list';
import { PreAcceptMenu } from './components/menu/pre-accept';
import { Precaution } from '@/shared/components/features/precaution';
import { Divider } from '@chakra-ui/react';
import styled from '@emotion/styled';

type CallBackDetailParams = {
  callBackId: string;
};

const CallBackDetailPage = () => {
  const { callBackId = '' } = useParams<CallBackDetailParams>();
  console.log(callBackId);

  return (
    <Wrapper>
      <Precaution
        category='요청 거부'
        title='가이드라인을 잘 확인하고 수락해주세요!'
        description='시니어의 요청이 가이드라인에서 벗어난 요청일 경우 요청을 거부할 수 있습니다!'
      />
      <GuideLineList />
      <Divider />
      <PreAcceptMenu />
    </Wrapper>
  );
};

export default CallBackDetailPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px;
`;
