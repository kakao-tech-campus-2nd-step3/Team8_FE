import { useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import { GuideLineList } from './components/guide-line-list';
import { PostAcceptMenu } from './components/menu/post-accept';
import { PreAcceptMenu } from './components/menu/pre-accept';
import { Notice } from '@/shared/components';
import { Divider } from '@chakra-ui/react';
import styled from '@emotion/styled';

export type CallBackDetailParams = {
  callBackId: string;
};

export const CallBackDetailPage = () => {
  const { callBackId = '' } = useParams<CallBackDetailParams>();
  const [accept, setAccept] = useState(false);

  console.log(callBackId);

  const handleRequestAccept = () => {
    // 도움 수락
    setAccept(true);
  };

  const handleComplete = () => {
    // 도움 완료
  };

  const handleCancle = () => {
    // 도움 포기
  };

  return (
    <>
      <Wrapper>
        <Notice
          noticeType='요청 거부'
          title='가이드라인을 잘 확인하고 수락해주세요!'
          contents='시니어의 요청이 가이드라인에서 벗어난 요청일 경우 요청을 거부할 수 있습니다!'
        />
        <GuideLineList />
        <Divider />
        {accept ? (
          <PostAcceptMenu
            handleComplete={handleComplete}
            handleCancle={handleCancle}
            phoneNumber='010-1234-5678'
          />
        ) : (
          <PreAcceptMenu handleClick={handleRequestAccept} />
        )}
      </Wrapper>
      <Outlet />
    </>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px;
`;
