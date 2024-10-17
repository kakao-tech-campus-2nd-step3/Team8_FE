import { useState } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import { useGetCallback } from './api/hooks';
import { GuideLineList } from './components/guide-line-list';
import { PostAcceptMenu } from './components/menu/post-accept';
import { PreAcceptMenu } from './components/menu/pre-accept';
import { Notice } from '@/shared/components';
import { Divider } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';

export type CallBackDetailParams = {
  callBackId: string;
};

export const CallBackDetailPage = () => {
  const { callBackId = '' } = useParams<CallBackDetailParams>();
  const [accept, setAccept] = useState(false);
  const { data, isLoading, isError, error } = useGetCallback(callBackId);
  const navigate = useNavigate();

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

  if (isError) {
    let errorMessage = '';
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case 409:
          errorMessage = '이미 진행 중인 콜백 요청이 있습니다.';
          break;
        default:
          errorMessage = '콜백 요청을 불러오는 중 오류가 발생했습니다.';
      }
    } else {
      errorMessage = '콜백 요청을 불러오는 중 오류가 발생했습니다.';
    }

    alert(errorMessage);
    navigate('/call-back');
  }

  return (
    <>
      <Wrapper>
        {isLoading && <Spinner size='xl' />}
        {data && (
          <>
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
          </>
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
