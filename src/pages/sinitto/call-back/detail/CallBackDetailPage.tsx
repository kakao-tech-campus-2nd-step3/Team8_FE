import { useParams, Outlet } from 'react-router-dom';

import { useGetAccepted } from './api/hooks';
import { CallbackMenu } from './components';
import { GuideLineList } from './components/guide-line-list';
import { useGetCallback } from '@/shared/api/hooks';
import { Notice } from '@/shared/components';
import { handleCallbackError } from '@/shared/utils';
import { Divider, Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';

export type CallBackDetailParams = {
  callBackId: string;
};

export const CallBackDetailPage = () => {
  const { callBackId = '' } = useParams<CallBackDetailParams>();

  const {
    data: callbackData,
    isLoading: isCallBackLoading,
    isError: isCallBackError,
    error: callBackError,
  } = useGetCallback(callBackId);
  handleCallbackError(isCallBackError, callBackError);

  const {
    data: currentReq,
    isLoading: iscurrentReqLoading,
    isError: iscurrentReqError,
  } = useGetAccepted();
  const accept =
    iscurrentReqError || !currentReq
      ? false
      : currentReq.callbackId == Number(callBackId);

  return (
    <>
      <Wrapper>
        {isCallBackLoading ? (
          <Spinner size='xl' />
        ) : (
          callbackData && (
            <>
              <Notice
                noticeType='요청 거부'
                title='가이드라인을 잘 확인하고 수락해주세요!'
                contents='시니어의 요청이 가이드라인에서 벗어난 요청일 경우 요청을 거부할 수 있습니다!'
              />
              <GuideLineList />
              <Divider />
              {iscurrentReqLoading ? (
                <Spinner size='xl' marginTop='30px' />
              ) : (
                <CallbackMenu callBackId={Number(callBackId)} accept={accept} />
              )}
            </>
          )
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
