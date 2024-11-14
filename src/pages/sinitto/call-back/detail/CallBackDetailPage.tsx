import { useParams, Outlet } from 'react-router-dom';

import { CallbackMenu } from './components';
import { useCallbackDetail } from './hooks';
import { Notice, PageLayout, GuideLineButton } from '@/shared';
import { Divider, Spinner } from '@chakra-ui/react';

export type CallBackDetailParams = {
  callBackId: string;
};

export const CallBackDetailPage = () => {
  const { callBackId = '' } = useParams<CallBackDetailParams>();
  const { callbackData, isCallBackLoading } = useCallbackDetail(callBackId);

  return (
    <>
      <PageLayout>
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
              <GuideLineButton userType='sinitto' />
              <Divider />
              <CallbackMenu
                callBackId={Number(callBackId)}
                accept={callbackData.isAssignedToSelf}
                phoneNumber={callbackData.seniorPhoneNumber}
              />
            </>
          )
        )}
      </PageLayout>
      <Outlet />
    </>
  );
};
