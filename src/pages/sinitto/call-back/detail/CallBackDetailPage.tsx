import { Outlet } from 'react-router-dom';

import { CallbackMenu } from './components';
import { GuideLineList } from './components/guide-line-list';
import { useCallbackDetailParams } from './hooks/useCallbackDetailParams';
import { useCallbackMenuData } from './hooks/useCallbackMenuData';
import { useFetchCallback } from './hooks/useFetchCallback';
import { Notice, PageLayout } from '@/shared';
import { Divider, Spinner } from '@chakra-ui/react';

export const CallBackDetailPage = () => {
  const { callBackId } = useCallbackDetailParams();

  const { callbackData, isCallBackLoading } = useFetchCallback(callBackId);

  const callbackMenuData = useCallbackMenuData(callbackData, callBackId);

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
              <GuideLineList />
              <Divider />
              {callbackMenuData && <CallbackMenu {...callbackMenuData} />}
            </>
          )
        )}
      </PageLayout>
      <Outlet />
    </>
  );
};
